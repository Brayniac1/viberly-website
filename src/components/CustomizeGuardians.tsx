import { ShieldPlus, Sparkles, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const CustomizeGuardians = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Enhanced CTA Button */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative group">
              {/* Glow background effect */}
              <div className="absolute -inset-1 rounded-full opacity-75 group-hover:opacity-100 transition-all duration-300 animate-glow-pulse"
                   style={{ background: 'var(--gradient-primary)' }}></div>
              
              {/* Main button */}
              <Button 
                size="lg" 
                className="relative bg-white/90 backdrop-blur-sm border-2 border-transparent rounded-full px-8 py-4 font-semibold text-lg
                           shadow-lg transition-all duration-300 ease-out
                           hover:scale-105 hover:shadow-2xl hover:bg-white
                           group-hover:animate-float
                           text-vibe-primary hover:text-vibe-primary-dark"
                style={{
                  background: 'linear-gradient(white, white) padding-box, var(--gradient-primary) border-box',
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Sparkles className="w-5 h-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                    <Plus className="w-3 h-3 absolute -top-1 -right-1 transition-all duration-300 group-hover:scale-125" />
                  </div>
                  <span className="relative">Add Your Prompts</span>
                </div>
              </Button>
            </div>
          </div>
          
          {/* Right column - Content */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Customize Your Prompts
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Go beyond the built-in library: create your own custom prompt guardians tailored to your workflow. Save them once, and they'll always be at your fingertips in the quick menu—no digging, no retyping.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#5847eb' }}></div>
                <p className="text-gray-700">Add your own custom prompts & rules</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#5847eb' }}></div>
                <p className="text-gray-700">Save favorites for one-click access</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#5847eb' }}></div>
                <p className="text-gray-700">Mix personal guardians with our ready-made library</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomizeGuardians;