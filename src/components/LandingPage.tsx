
import React from 'react'

interface LandingPageProps {
  onNext: () => void
}

export default function LandingPage({ onNext }: LandingPageProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-700 p-8">
      <div className="text-center max-w-2xl">
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          <div className="w-30 h-30 rounded-full overflow-hidden border-3 border-white/10 hover:scale-105 transition-transform">
            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=150&h=150&fit=crop&crop=center" 
              alt="Dashboard Analytics"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-30 h-30 rounded-full overflow-hidden border-3 border-white/10 hover:scale-105 transition-transform">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=150&h=150&fit=crop&crop=center" 
              alt="Business Meeting"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-30 h-30 rounded-full overflow-hidden border-3 border-white/10 hover:scale-105 transition-transform">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=center" 
              alt="Presentation Design"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Melhor serviço de slides<br />do mundo!
        </h1>
        <p className="text-xl text-slate-300 mb-8 leading-relaxed">
          Os melhores templates, designs incríveis, avaliações 5 estrelas.
        </p>
        
        <button 
          onClick={onNext}
          className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          NEXT
        </button>
        
        <div className="flex justify-center gap-2 mt-8">
          <span className="w-2 h-2 rounded-full bg-red-600"></span>
          <span className="w-2 h-2 rounded-full bg-white/30"></span>
          <span className="w-2 h-2 rounded-full bg-white/30"></span>
        </div>
      </div>
    </div>
  )
}
