export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full z-50 glass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold gradient-text">THE MARCH</div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="hover:text-purple-400 transition-colors">About</a>
              <a href="#roadmap" className="hover:text-purple-400 transition-colors">Roadmap</a>
              <a href="#faq" className="hover:text-purple-400 transition-colors">FAQ</a>
            </div>
            <button className="bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-2 rounded-full hover:from-purple-700 hover:to-indigo-700 transition-all transform hover:scale-105">
              Connect Wallet
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-indigo-900/20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              THE <span className="gradient-text">MARCH</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              3333 penguins marching toward greatness. A journey of risk-takers, fighters, and those who choose the hard path.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all transform hover:scale-105">
                Mint Coming Soon
              </button>
              <button className="glass px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all">
                Join Discord
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              <div className="glass p-6 rounded-2xl">
                <div className="text-4xl font-bold gradient-text">3333</div>
                <div className="text-gray-400 mt-2">Penguins</div>
              </div>
              <div className="glass p-6 rounded-2xl">
                <div className="text-4xl font-bold gradient-text">Sui</div>
                <div className="text-gray-400 mt-2">Blockchain</div>
              </div>
              <div className="glass p-6 rounded-2xl">
                <div className="text-4xl font-bold gradient-text">100%</div>
                <div className="text-gray-400 mt-2">Decentralized</div>
              </div>
              <div className="glass p-6 rounded-2xl">
                <div className="text-4xl font-bold gradient-text">∞</div>
                <div className="text-gray-400 mt-2">Utility</div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              About <span className="gradient-text">The March</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Inspired by the walking penguin meme, each NFT represents the spirit of those who take risks, fight for truth, and embrace the journey toward greatness.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass p-8 rounded-2xl hover:bg-white/10 transition-all">
              <div className="text-4xl mb-4">🐧</div>
              <h3 className="text-2xl font-bold mb-4">Pixel Art</h3>
              <p className="text-gray-400">
                CryptoPunks-inspired aesthetic with unique traits and variations. Each penguin is a work of art.
              </p>
            </div>
            
            <div className="glass p-8 rounded-2xl hover:bg-white/10 transition-all">
              <div className="text-4xl mb-4">⛓️</div>
              <h3 className="text-2xl font-bold mb-4">Built on Sui</h3>
              <p className="text-gray-400">
                Leveraging Sui's parallel execution and low fees. Storage on Walrus for true decentralization.
              </p>
            </div>
            
            <div className="glass p-8 rounded-2xl hover:bg-white/10 transition-all">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-2xl font-bold mb-4">Community First</h3>
              <p className="text-gray-400">
                NFT holders shape the future. Governance, utilities, and rewards for those who march with us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-24 relative bg-gradient-to-b from-transparent to-purple-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              The <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-xl text-gray-400">Our roadmap to greatness</p>
          </div>

          <div className="space-y-12">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center text-xl font-bold mr-6">
                1
              </div>
              <div className="glass p-6 rounded-2xl flex-grow">
                <h3 className="text-2xl font-bold mb-2">NFT Collection Launch</h3>
                <p className="text-gray-400">3333 unique penguins on Sui Network with decentralized storage on Walrus</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center text-xl font-bold mr-6">
                2
              </div>
              <div className="glass p-6 rounded-2xl flex-grow">
                <h3 className="text-2xl font-bold mb-2">Community Building</h3>
                <p className="text-gray-400">Marketplace launch, holder benefits, and community events</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center text-xl font-bold mr-6">
                3
              </div>
              <div className="glass p-6 rounded-2xl flex-grow">
                <h3 className="text-2xl font-bold mb-2">Merch & Physical Products</h3>
                <p className="text-gray-400">Figurine line, apparel, and IRL events for holders</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center text-xl font-bold mr-6">
                4
              </div>
              <div className="glass p-6 rounded-2xl flex-grow">
                <h3 className="text-2xl font-bold mb-2">Token Launch</h3>
                <p className="text-gray-400">Airdrop to holders, staking, governance, and ecosystem utilities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              <span className="gradient-text">FAQ</span>
            </h2>
          </div>

          <div className="space-y-6">
            <details className="glass p-6 rounded-2xl cursor-pointer hover:bg-white/10 transition-all">
              <summary className="text-xl font-bold cursor-pointer">What is The March?</summary>
              <p className="mt-4 text-gray-400">
                The March is a collection of 3333 unique penguin NFTs on the Sui blockchain. Inspired by the walking penguin meme, it represents the journey of risk-takers and fighters marching toward greatness.
              </p>
            </details>

            <details className="glass p-6 rounded-2xl cursor-pointer hover:bg-white/10 transition-all">
              <summary className="text-xl font-bold cursor-pointer">Why Sui blockchain?</summary>
              <p className="mt-4 text-gray-400">
                Sui offers parallel execution, low transaction fees, and a developer-friendly Move language. We also use Walrus for decentralized storage, making the entire project truly decentralized.
              </p>
            </details>

            <details className="glass p-6 rounded-2xl cursor-pointer hover:bg-white/10 transition-all">
              <summary className="text-xl font-bold cursor-pointer">When is the mint?</summary>
              <p className="mt-4 text-gray-400">
                Mint date will be announced soon. Follow our Discord and Twitter for updates and whitelist opportunities.
              </p>
            </details>

            <details className="glass p-6 rounded-2xl cursor-pointer hover:bg-white/10 transition-all">
              <summary className="text-xl font-bold cursor-pointer">What utilities will holders get?</summary>
              <p className="mt-4 text-gray-400">
                Holders will receive: governance rights, token airdrops, staking rewards, merch discounts, IRL event access, and future product benefits. The NFT is your membership to the ecosystem.
              </p>
            </details>

            <details className="glass p-6 rounded-2xl cursor-pointer hover:bg-white/10 transition-all">
              <summary className="text-xl font-bold cursor-pointer">Will there be a token?</summary>
              <p className="mt-4 text-gray-400">
                Yes, a token launch is planned after the NFT collection is established. NFT holders will receive significant airdrops and have early access to staking and governance.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold gradient-text mb-4 md:mb-0">
              THE MARCH
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Discord</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">OpenSea</a>
            </div>
          </div>
          <div className="text-center mt-8 text-gray-500 text-sm">
            © 2026 The March. All rights reserved. Built on Sui.
          </div>
        </div>
      </footer>
    </main>
  );
}
