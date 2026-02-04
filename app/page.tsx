export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Simple Header */}
      <header className="border-b border-gray-800 sticky top-0 bg-[#0a0a0a]/95 backdrop-blur z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-tight">THE MARCH</h1>
          <nav className="flex gap-8 text-sm">
            <a href="#collection" className="hover:text-gray-400 transition">Collection</a>
            <a href="#details" className="hover:text-gray-400 transition">Details</a>
            <button className="px-4 py-1.5 bg-white text-black text-xs font-medium rounded hover:bg-gray-200 transition">
              CONNECT
            </button>
          </nav>
        </div>
      </header>

      {/* Hero - Minimal */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="max-w-3xl">
          <p className="text-sm text-gray-500 mb-4 tracking-wide">SUI NETWORK / 3333 SUPPLY</p>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            3333 penguins<br />marching toward<br />greatness.
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed mb-8">
            Inspired by the walking penguin meme. A collection of unique pixel art characters 
            representing those who take risks, fight for truth, and embrace the hard path. 
            Built on Sui blockchain with decentralized storage on Walrus.
          </p>
          <div className="flex gap-4">
            <button className="px-6 py-3 bg-white text-black font-medium text-sm hover:bg-gray-200 transition">
              COMING SOON
            </button>
            <button className="px-6 py-3 border border-gray-700 text-sm font-medium hover:border-gray-500 transition">
              JOIN DISCORD
            </button>
          </div>
        </div>
      </section>

      {/* Preview Grid */}
      <section id="collection" className="max-w-6xl mx-auto px-6 py-20 border-t border-gray-800">
        <h3 className="text-2xl font-bold mb-8">Preview</h3>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
          {Array.from({ length: 16 }).map((_, i) => (
            <div 
              key={i} 
              className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded border border-gray-700 hover:border-gray-500 transition cursor-pointer"
            >
              <div className="w-full h-full flex items-center justify-center text-gray-600 text-xs">
                #{i + 1}
              </div>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-500 mt-8">Art preview coming soon. Each penguin is unique with varying traits and rarity.</p>
      </section>

      {/* Collection Details */}
      <section id="details" className="max-w-6xl mx-auto px-6 py-20 border-t border-gray-800">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold mb-6">Collection Details</h3>
            <dl className="space-y-4 text-sm">
              <div className="flex justify-between border-b border-gray-800 pb-2">
                <dt className="text-gray-500">Total Supply</dt>
                <dd className="font-medium">3,333</dd>
              </div>
              <div className="flex justify-between border-b border-gray-800 pb-2">
                <dt className="text-gray-500">Blockchain</dt>
                <dd className="font-medium">Sui Network</dd>
              </div>
              <div className="flex justify-between border-b border-gray-800 pb-2">
                <dt className="text-gray-500">Storage</dt>
                <dd className="font-medium">Walrus (Decentralized)</dd>
              </div>
              <div className="flex justify-between border-b border-gray-800 pb-2">
                <dt className="text-gray-500">Art Style</dt>
                <dd className="font-medium">24×24 Pixel Art</dd>
              </div>
              <div className="flex justify-between border-b border-gray-800 pb-2">
                <dt className="text-gray-500">Smart Contract</dt>
                <dd className="font-medium">Move Language</dd>
              </div>
              <div className="flex justify-between border-b border-gray-800 pb-2">
                <dt className="text-gray-500">Marketplace</dt>
                <dd className="font-medium">Sui Kiosk</dd>
              </div>
            </dl>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">About The March</h3>
            <div className="space-y-4 text-sm text-gray-400 leading-relaxed">
              <p>
                The March is a collection of 3,333 unique penguin characters living on the Sui blockchain. 
                Each penguin is a 24×24 pixel artwork with algorithmically generated traits.
              </p>
              <p>
                Inspired by the walking penguin meme - a symbol of those who march forward despite 
                knowing the challenges ahead. These penguins represent risk-takers, truth-seekers, 
                and individuals who choose the difficult path toward greatness.
              </p>
              <p>
                Built with Sui's Move language for smart contracts and Walrus for truly decentralized 
                storage. All images and metadata are stored on-chain or in decentralized storage - 
                no centralized servers.
              </p>
              <p>
                Holders gain access to future utilities including governance rights, token airdrops, 
                merchandise, and community events.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap - Simple */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-t border-gray-800">
        <h3 className="text-2xl font-bold mb-8">Roadmap</h3>
        <div className="space-y-8">
          <div className="flex gap-6">
            <div className="w-24 flex-shrink-0 text-sm text-gray-500">Phase 1</div>
            <div>
              <h4 className="font-bold mb-2">Collection Launch</h4>
              <p className="text-sm text-gray-400">3,333 penguins on Sui Network. Decentralized storage on Walrus. Community building.</p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="w-24 flex-shrink-0 text-sm text-gray-500">Phase 2</div>
            <div>
              <h4 className="font-bold mb-2">Marketplace & Utilities</h4>
              <p className="text-sm text-gray-400">Kiosk marketplace launch. Holder benefits. Merchandise store.</p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="w-24 flex-shrink-0 text-sm text-gray-500">Phase 3</div>
            <div>
              <h4 className="font-bold mb-2">Physical Products</h4>
              <p className="text-sm text-gray-400">Figurine line production. Apparel. IRL events for community.</p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="w-24 flex-shrink-0 text-sm text-gray-500">Phase 4</div>
            <div>
              <h4 className="font-bold mb-2">Token & Governance</h4>
              <p className="text-sm text-gray-400">Token launch with holder airdrop. Staking rewards. DAO governance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ - Clean */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-t border-gray-800">
        <h3 className="text-2xl font-bold mb-8">FAQ</h3>
        <div className="space-y-6 max-w-3xl">
          <div>
            <h4 className="font-medium mb-2">What is The March?</h4>
            <p className="text-sm text-gray-400">
              A collection of 3,333 unique pixel art penguins on Sui blockchain, inspired by the walking 
              penguin meme representing those who march toward greatness despite challenges.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-2">Why Sui Network?</h4>
            <p className="text-sm text-gray-400">
              Sui offers parallel execution, low fees, and the Move programming language. We use Walrus 
              for decentralized storage - making the entire project truly decentralized.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-2">When is the mint?</h4>
            <p className="text-sm text-gray-400">
              Mint date to be announced. Join Discord for updates and whitelist opportunities.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-2">What do holders get?</h4>
            <p className="text-sm text-gray-400">
              Governance rights, token airdrops, staking rewards, merchandise discounts, IRL event access, 
              and future ecosystem benefits.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-2">Is there a token?</h4>
            <p className="text-sm text-gray-400">
              Yes, planned after NFT launch. Holders receive airdrops and early staking access.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-20">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-500">© 2026 The March. Built on Sui.</div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-white transition">Twitter</a>
              <a href="#" className="text-gray-500 hover:text-white transition">Discord</a>
              <a href="#" className="text-gray-500 hover:text-white transition">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
