
import React from 'react';
import { Button } from '@/components/ui/button';

interface WelcomeScreenProps {
  onNext: () => void;
}

const WelcomeScreen = ({ onNext }: WelcomeScreenProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex flex-col">
      {/* Mobile and Desktop Layout */}
      <div className="flex-1 flex flex-col justify-center items-center px-6 lg:px-8">
        <div className="max-w-md w-full text-center">
          {/* Product Images */}
          <div className="mb-8 flex justify-center space-x-4">
            <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400"
                alt="Business Presentation"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full overflow-hidden shadow-lg mt-2">
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400"
                alt="Corporate Slides"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="mb-6">
            <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden shadow-lg mx-auto mb-4">
              <img 
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400"
                alt="Educational Presentation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Main Content */}
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Melhor serviço de slides do mundo!
          </h1>
          
          <p className="text-gray-300 text-base lg:text-lg mb-8 leading-relaxed">
            Os melhores templates, designs incríveis, 
            avaliações 5 estrelas.
          </p>

          <Button 
            onClick={onNext}
            className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full text-lg font-medium transition-colors duration-200"
          >
            NEXT
          </Button>
        </div>
      </div>

      {/* Bottom Navigation Dots */}
      <div className="flex justify-center pb-8">
        <div className="flex space-x-2">
          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
