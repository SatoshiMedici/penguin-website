// Generate audio files for the Remotion video
// Ambient arctic music, whoosh transition, and chime sound effect
const fs = require("fs");
const path = require("path");

const SAMPLE_RATE = 44100;

function generateWav(samples, sampleRate) {
  const numChannels = 1;
  const bitsPerSample = 16;
  const byteRate = sampleRate * numChannels * (bitsPerSample / 8);
  const blockAlign = numChannels * (bitsPerSample / 8);
  const dataSize = samples.length * blockAlign;
  const buffer = Buffer.alloc(44 + dataSize);

  buffer.write("RIFF", 0);
  buffer.writeUInt32LE(36 + dataSize, 4);
  buffer.write("WAVE", 8);
  buffer.write("fmt ", 12);
  buffer.writeUInt32LE(16, 16);
  buffer.writeUInt16LE(1, 20);
  buffer.writeUInt16LE(numChannels, 22);
  buffer.writeUInt32LE(sampleRate, 24);
  buffer.writeUInt32LE(byteRate, 28);
  buffer.writeUInt16LE(blockAlign, 32);
  buffer.writeUInt16LE(bitsPerSample, 34);
  buffer.write("data", 36);
  buffer.writeUInt32LE(dataSize, 40);

  for (let i = 0; i < samples.length; i++) {
    const s = Math.max(-1, Math.min(1, samples[i]));
    buffer.writeInt16LE(Math.round(s * 32767), 44 + i * 2);
  }
  return buffer;
}

// Simple pseudo-random for deterministic noise
let seed = 42;
function rand() {
  seed = (seed * 1664525 + 1013904223) & 0xffffffff;
  return (seed >>> 0) / 0xffffffff;
}

// Low-pass filter (simple IIR)
function lowPass(samples, cutoff) {
  const rc = 1.0 / (cutoff * 2 * Math.PI);
  const dt = 1.0 / SAMPLE_RATE;
  const alpha = dt / (rc + dt);
  const out = new Float64Array(samples.length);
  out[0] = samples[0];
  for (let i = 1; i < samples.length; i++) {
    out[i] = out[i - 1] + alpha * (samples[i] - out[i - 1]);
  }
  return out;
}

// ===============================
// 1. AMBIENT ARCTIC SOUNDTRACK (32s)
// ===============================
function generateAmbient(durationSec) {
  const len = SAMPLE_RATE * durationSec;
  const samples = new Float64Array(len);

  // Layer 1: Filtered wind noise
  const windNoise = new Float64Array(len);
  for (let i = 0; i < len; i++) windNoise[i] = (rand() - 0.5) * 2;
  const wind = lowPass(lowPass(windNoise, 400), 200);

  // Modulate wind volume slowly
  for (let i = 0; i < len; i++) {
    const t = i / SAMPLE_RATE;
    const windVol = 0.08 + 0.04 * Math.sin(t * 0.3) + 0.03 * Math.sin(t * 0.17);
    samples[i] += wind[i] * windVol;
  }

  // Layer 2: Deep drone pad (stacked fifths)
  const droneFreqs = [55, 82.5, 110, 165]; // A1, E2, A2, E3
  for (let i = 0; i < len; i++) {
    const t = i / SAMPLE_RATE;
    let drone = 0;
    for (let f = 0; f < droneFreqs.length; f++) {
      const freq = droneFreqs[f];
      const vol = f === 0 ? 0.06 : f === 1 ? 0.04 : f === 2 ? 0.03 : 0.015;
      // Slow vibrato
      const vibrato = 1 + 0.002 * Math.sin(t * (0.5 + f * 0.15));
      drone += Math.sin(2 * Math.PI * freq * vibrato * t) * vol;
    }
    // Slow volume swell
    const swell = 0.6 + 0.4 * Math.sin(t * 0.15);
    samples[i] += drone * swell;
  }

  // Layer 3: Pentatonic shimmer notes (sparse, ethereal)
  const pentatonic = [220, 261.63, 329.63, 392, 440, 523.25, 659.25];
  const noteEvents = [];
  for (let t = 2; t < durationSec - 2; t += 2.5 + (rand() * 2)) {
    noteEvents.push({
      time: t,
      freq: pentatonic[Math.floor(rand() * pentatonic.length)],
      duration: 1.5 + rand() * 2,
      vol: 0.015 + rand() * 0.015,
      pan: rand(),
    });
  }

  for (const note of noteEvents) {
    const start = Math.floor(note.time * SAMPLE_RATE);
    const dur = Math.floor(note.duration * SAMPLE_RATE);
    for (let i = 0; i < dur && start + i < len; i++) {
      const t = i / SAMPLE_RATE;
      // Bell-like envelope: quick attack, slow decay
      const env = Math.exp(-t * 1.5) * (1 - Math.exp(-t * 30));
      const sig =
        Math.sin(2 * Math.PI * note.freq * t) * 0.6 +
        Math.sin(2 * Math.PI * note.freq * 2 * t) * 0.25 +
        Math.sin(2 * Math.PI * note.freq * 3 * t) * 0.1 +
        Math.sin(2 * Math.PI * note.freq * 5.04 * t) * 0.05; // slight detuning for warmth
      samples[start + i] += sig * env * note.vol;
    }
  }

  // Layer 4: Subtle heartbeat/pulse (very low, felt more than heard)
  for (let i = 0; i < len; i++) {
    const t = i / SAMPLE_RATE;
    const beatPhase = (t * 0.8) % 1; // ~48 BPM
    const beat =
      Math.exp(-beatPhase * 8) * Math.sin(2 * Math.PI * 40 * t) * 0.025;
    samples[i] += beat;
  }

  // Global fade in/out
  const fadeIn = SAMPLE_RATE * 2;
  const fadeOut = SAMPLE_RATE * 3;
  for (let i = 0; i < fadeIn; i++) samples[i] *= i / fadeIn;
  for (let i = 0; i < fadeOut; i++)
    samples[len - 1 - i] *= i / fadeOut;

  return samples;
}

// ===============================
// 2. WHOOSH TRANSITION SOUND (0.6s)
// ===============================
function generateWhoosh() {
  const len = Math.floor(SAMPLE_RATE * 0.6);
  const samples = new Float64Array(len);
  const noise = new Float64Array(len);
  for (let i = 0; i < len; i++) noise[i] = (rand() - 0.5) * 2;

  // Sweeping filter: low -> high -> low
  for (let i = 0; i < len; i++) {
    const t = i / len;
    const cutoff = 200 + 3000 * Math.sin(t * Math.PI);
    // Simple one-pole approximation
    const rc = 1.0 / (cutoff * 2 * Math.PI);
    const dt = 1.0 / SAMPLE_RATE;
    const alpha = dt / (rc + dt);
    if (i > 0) {
      samples[i] = samples[i - 1] + alpha * (noise[i] - samples[i - 1]);
    } else {
      samples[i] = noise[i] * alpha;
    }
    // Envelope: swell then fade
    const env = Math.sin(t * Math.PI) * (1 - t * 0.3);
    samples[i] *= env * 0.4;
  }
  return samples;
}

// ===============================
// 3. ICE CHIME SOUND (1.2s)
// ===============================
function generateChime() {
  const len = Math.floor(SAMPLE_RATE * 1.2);
  const samples = new Float64Array(len);

  // Bell harmonics - icy/crystalline
  const harmonics = [
    { freq: 1318.5, vol: 0.3, decay: 3 },   // E6
    { freq: 1975.5, vol: 0.2, decay: 4 },    // B6
    { freq: 2637, vol: 0.15, decay: 5 },      // E7
    { freq: 3520, vol: 0.08, decay: 6 },      // A7
    { freq: 4186, vol: 0.05, decay: 7 },      // C8
    { freq: 5274, vol: 0.03, decay: 8 },      // E8
  ];

  for (let i = 0; i < len; i++) {
    const t = i / SAMPLE_RATE;
    let sig = 0;
    for (const h of harmonics) {
      sig +=
        Math.sin(2 * Math.PI * h.freq * t) *
        h.vol *
        Math.exp(-t * h.decay);
    }
    // Sharp attack
    const attack = 1 - Math.exp(-t * 200);
    samples[i] = sig * attack * 0.5;
  }
  return samples;
}

// ===============================
// WRITE FILES
// ===============================
const outDir = path.join(__dirname, "public", "audio");

console.log("Generating ambient soundtrack (32s)...");
const ambient = generateAmbient(32);
fs.writeFileSync(path.join(outDir, "ambient.wav"), generateWav(ambient, SAMPLE_RATE));
console.log("  -> ambient.wav");

console.log("Generating whoosh transition...");
const whoosh = generateWhoosh();
fs.writeFileSync(path.join(outDir, "whoosh.wav"), generateWav(whoosh, SAMPLE_RATE));
console.log("  -> whoosh.wav");

console.log("Generating ice chime...");
const chime = generateChime();
fs.writeFileSync(path.join(outDir, "chime.wav"), generateWav(chime, SAMPLE_RATE));
console.log("  -> chime.wav");

console.log("Done! Audio files written to public/audio/");
