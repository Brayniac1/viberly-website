import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Creators = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                For Creators
              </h1>
              <p className="text-xl text-muted-foreground">
                Empower your creative process with AI-driven tools designed specifically for content creators.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-card rounded-lg p-8 border border-border">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  AI-Powered Content Generation
                </h2>
                <p className="text-muted-foreground mb-6">
                  Generate high-quality content ideas, scripts, and outlines with our advanced AI technology tailored for creators.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Script writing assistance</li>
                  <li>• Content idea generation</li>
                  <li>• SEO optimization suggestions</li>
                  <li>• Multi-format content creation</li>
                </ul>
              </div>

              <div className="bg-card rounded-lg p-8 border border-border">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Creator Tools & Analytics
                </h2>
                <p className="text-muted-foreground mb-6">
                  Track your content performance and optimize your creative strategy with detailed analytics and insights.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Performance tracking</li>
                  <li>• Audience insights</li>
                  <li>• Content optimization</li>
                  <li>• Growth recommendations</li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Join Our Creator Community
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Connect with fellow creators, share insights, and grow together with Viberly's creator-focused features.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-vibe-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-vibe-primary-light transition-colors">
                  Get Started
                </button>
                <button className="border border-border text-foreground px-8 py-3 rounded-lg font-semibold hover:bg-secondary transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Creators;