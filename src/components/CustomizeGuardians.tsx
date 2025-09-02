import { ShieldPlus } from "lucide-react";
import { Button } from "@/components/ui/button";

const CustomizeGuardians = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Icon/Illustration */}
          <div className="flex justify-center lg:justify-start">
            <Button variant="outline" size="lg" className="w-auto px-6 py-3">
              Add your prompts
            </Button>
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