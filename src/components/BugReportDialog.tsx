import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle, Upload, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface BugReportDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const BugReportDialog = ({ open, onOpenChange }: BugReportDialogProps) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    description: "",
    steps: "",
    email: "",
    screenshot: null as File | null
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.description.trim()) {
      toast({
        title: "Description required",
        description: "Please describe the bug you encountered.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      // Reset form after 3 seconds and close dialog
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          description: "",
          steps: "",
          email: "",
          screenshot: null
        });
        onOpenChange(false);
      }, 3000);
    }, 500);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        toast({
          title: "File too large",
          description: "Please select a file smaller than 5MB.",
          variant: "destructive"
        });
        return;
      }
      setFormData(prev => ({ ...prev, screenshot: file }));
    }
  };

  const removeScreenshot = () => {
    setFormData(prev => ({ ...prev, screenshot: null }));
  };

  if (submitted) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-md">
          <div className="text-center py-8 space-y-4">
            <CheckCircle className="w-16 h-16 text-vibe-primary mx-auto" />
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-foreground">Thank You!</h3>
              <p className="text-foreground-muted">
                Your bug report has been received. We'll investigate the issue and get back to you if needed.
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground flex items-center gap-2">
            <span className="text-gradient">Help Us Improve!</span>
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <p className="text-foreground-muted">
            Found a bug? We'd love to hear about it! Please describe the issue as clearly as possible so we can fix it quickly.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Bug Description */}
            <div className="space-y-2">
              <Label htmlFor="description" className="text-foreground font-medium">
                Bug Description *
              </Label>
              <Textarea
                id="description"
                placeholder="Describe what went wrong and what you expected to happen..."
                value={formData.description}
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                className="min-h-[100px] resize-none border-border focus:border-vibe-primary"
                required
              />
            </div>

            {/* Steps to Reproduce */}
            <div className="space-y-2">
              <Label htmlFor="steps" className="text-foreground font-medium">
                Steps to Reproduce (Optional)
              </Label>
              <Textarea
                id="steps"
                placeholder="1. First, I clicked on...&#10;2. Then I tried to...&#10;3. The error appeared when..."
                value={formData.steps}
                onChange={(e) => setFormData(prev => ({ ...prev, steps: e.target.value }))}
                className="min-h-[80px] resize-none border-border focus:border-vibe-primary"
              />
            </div>

            {/* Screenshot Upload */}
            <div className="space-y-2">
              <Label className="text-foreground font-medium">
                Screenshot (Optional)
              </Label>
              {formData.screenshot ? (
                <div className="flex items-center gap-3 p-3 bg-background-soft rounded-lg border border-border">
                  <Upload className="w-5 h-5 text-vibe-primary" />
                  <span className="text-sm text-foreground flex-1">{formData.screenshot.name}</span>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={removeScreenshot}
                    className="h-8 w-8 p-0 hover:bg-destructive/10"
                  >
                    <X className="w-4 h-4 text-destructive" />
                  </Button>
                </div>
              ) : (
                <div className="relative">
                  <input
                    type="file"
                    id="screenshot"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <div className="flex items-center gap-3 p-4 border-2 border-dashed border-border rounded-lg hover:border-vibe-primary/50 transition-colors cursor-pointer">
                    <Upload className="w-5 h-5 text-foreground-muted" />
                    <div className="text-sm">
                      <span className="text-foreground">Click to upload</span>
                      <span className="text-foreground-muted"> or drag and drop</span>
                    </div>
                  </div>
                </div>
              )}
              <p className="text-xs text-foreground-muted">
                PNG, JPG up to 5MB. Screenshots help us understand the issue better.
              </p>
            </div>

            {/* Contact Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground font-medium">
                Contact Email (Optional)
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                className="border-border focus:border-vibe-primary"
              />
              <p className="text-xs text-foreground-muted">
                We'll only use this to follow up if we need more details.
              </p>
            </div>

            {/* Submit Button */}
            <div className="flex gap-3 pt-4">
              <Button
                type="submit"
                className="bg-vibe-primary text-primary-foreground hover:bg-vibe-primary-light font-semibold glow-effect flex-1"
              >
                Send Report
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => onOpenChange(false)}
                className="border-border hover:bg-secondary"
              >
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BugReportDialog;