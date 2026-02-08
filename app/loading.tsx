export default function Loading() {
  return (
    <div className="min-h-screen bg-[#87CEEB] flex items-center justify-center">
      <div className="text-center space-y-4">
        <div className="text-4xl animate-bounce">🐧</div>
        <p className="text-lg text-[#2C5F75] font-bold tracking-wide">LOADING...</p>
      </div>
    </div>
  );
}
