import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Lightbulb, CheckCircle } from "lucide-react";

interface FeatureRequestDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const FeatureRequestDialog = ({ open, onOpenChange }: FeatureRequestDialogProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    description: "",
    usefulness: "",
    email: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.description.trim()) {
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitted(true);
    setIsSubmitting(false);

    // Reset form and close dialog after showing success message
    setTimeout(() => {
      setFormData({ description: "", usefulness: "", email: "" });
      setIsSubmitted(false);
      onOpenChange(false);
    }, 2000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-primary" />
            Got an Idea?
          </DialogTitle>
        </DialogHeader>
        
        {isSubmitted ? (
          <div className="flex flex-col items-center justify-center py-8 text-center space-y-4">
            <CheckCircle className="h-12 w-12 text-green-500" />
            <h3 className="text-lg font-semibold">Thank You!</h3>
            <p className="text-muted-foreground">
              Your feature request has been submitted. We appreciate your input and will consider it for future updates!
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <p className="text-sm text-muted-foreground">
              We'd love to hear your ideas! Help us make Vibe Guardian even better by sharing your feature suggestions. Please describe your idea clearly so we can understand how it would improve your experience.
            </p>
            
            <div className="space-y-2">
              <Label htmlFor="description">Feature Description *</Label>
              <Textarea
                id="description"
                placeholder="Describe your feature idea in detail..."
                value={formData.description}
                onChange={(e) => handleInputChange("description", e.target.value)}
                className="min-h-[100px]"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="usefulness">Why would this be useful? (Optional)</Label>
              <Textarea
                id="usefulness"
                placeholder="Explain how this feature would help you or other users..."
                value={formData.usefulness}
                onChange={(e) => handleInputChange("usefulness", e.target.value)}
                className="min-h-[80px]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Contact Email (Optional)</Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
              />
              <p className="text-xs text-muted-foreground">
                We'll only use this to follow up on your suggestion if needed.
              </p>
            </div>

            <Button 
              type="submit" 
              className="w-full" 
              disabled={isSubmitting || !formData.description.trim()}
            >
              {isSubmitting ? "Submitting..." : "Submit Idea"}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default FeatureRequestDialog;