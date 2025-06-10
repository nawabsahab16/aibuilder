
import React, { useState } from 'react';
import { Sparkles, ArrowRight, Loader2 } from 'lucide-react';

const PromptInput = () => {
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isGenerated, setIsGenerated] = useState(false);

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt) return;
    
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      setIsGenerated(true);
    }, 2500);
  };

  const handleTryAgain = () => {
    setPrompt('');
    setIsGenerated(false);
  };

  return (
    <section id="prompt-input" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-blue-50/30 to-transparent dark:from-blue-900/10 dark:to-transparent"></div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Generate Your Website</h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Describe your website and we'll generate it for you. Try to be specific about the design, features, and content you want.
          </p>
        </div>
        
        <div className="glass p-8 rounded-2xl shadow-sm border border-white/20 dark:border-white/10">
          <form onSubmit={handleGenerate}>
            <div className="relative mb-6">
              <Sparkles 
                size={18} 
                className="absolute left-4 top-4 text-primary" 
              />
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Describe your website in detail... (e.g., 'A portfolio website for a photographer with a dark theme, image gallery, about me section, and contact form')"
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-background/50 border border-border focus:ring-2 focus:ring-primary/30 focus:outline-none min-h-[120px] transition-all duration-200"
                disabled={isLoading || isGenerated}
              />
            </div>
            
            <div className="flex justify-end">
              {!isGenerated ? (
                <button
                  type="submit"
                  disabled={!prompt || isLoading}
                  className="bg-primary text-white font-medium py-3 px-6 rounded-full hover:bg-primary/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                >
                  {isLoading ? (
                    <>
                      <Loader2 size={18} className="mr-2 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      Generate Website
                      <ArrowRight size={18} className="ml-2" />
                    </>
                  )}
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleTryAgain}
                  className="bg-secondary text-foreground font-medium py-3 px-6 rounded-full hover:bg-secondary/80 transition-all duration-300"
                >
                  Try Again
                </button>
              )}
            </div>
          </form>
          
          {isLoading && (
            <div className="mt-8 p-4 rounded-xl bg-background/50 border border-border animate-pulse">
              <div className="flex items-center space-x-3">
                <div className="h-4 w-4 rounded-full bg-primary/40 animate-pulse"></div>
                <div className="h-4 w-full rounded bg-primary/20 animate-pulse animate-delay-200"></div>
              </div>
              <div className="mt-3 space-y-2">
                <div className="h-3 w-3/4 rounded bg-primary/10 animate-pulse animate-delay-400"></div>
                <div className="h-3 w-5/6 rounded bg-primary/10 animate-pulse animate-delay-600"></div>
                <div className="h-3 w-2/3 rounded bg-primary/10 animate-pulse"></div>
              </div>
            </div>
          )}
        </div>
        
        {!isGenerated && !isLoading && (
          <div className="mt-8">
            <p className="text-sm text-foreground/60 mb-3">Try these example prompts:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                "A minimalist portfolio for a graphic designer with light theme",
                "An e-commerce site for handmade jewelry with product listings and cart",
                "A blog site with a clean layout for a food blogger",
                "A landing page for a fitness app with testimonials and features"
              ].map((example, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setPrompt(example)}
                  className="text-left text-xs p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-200"
                >
                  {example}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PromptInput;
