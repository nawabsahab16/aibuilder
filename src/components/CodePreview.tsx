
import React, { useState, useEffect } from 'react';
import { Copy, Check, Code, Paintbrush, Layout, Eye } from 'lucide-react';

const sampleCode = `// Example React component with Tailwind CSS
import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl font-bold mb-6">
          Your Stunning Website
        </h1>
        <p className="text-xl mb-8 max-w-2xl">
          A beautiful, responsive website built just for you.
          Customize it to match your brand and vision.
        </p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-medium hover:bg-opacity-90 transition">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HeroSection;`;

const CodePreview = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('code');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(sampleCode);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <section className="py-24 px-6 relative overflow-hidden animate-fade-in">
      <div className="absolute inset-0 bg-gradient-radial from-purple-50/30 to-transparent dark:from-purple-900/10 dark:to-transparent"></div>
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Your Website is Ready</h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            We've generated a custom website based on your prompt. Preview the result, view the code, or edit it to your liking.
          </p>
        </div>
        
        <div className="glass rounded-2xl shadow-sm border border-white/20 dark:border-white/10 overflow-hidden">
         
          <div className="flex border-b border-border">
            <button
              onClick={() => setActiveTab('code')}
              className={`flex items-center px-6 py-3 text-sm font-medium transition-colors ${
                activeTab === 'code' ? 'border-b-2 border-primary text-primary' : 'text-foreground/60 hover:text-foreground'
              }`}
            >
              <Code size={16} className="mr-2" />
              Code
            </button>
            <button
              onClick={() => setActiveTab('design')}
              className={`flex items-center px-6 py-3 text-sm font-medium transition-colors ${
                activeTab === 'design' ? 'border-b-2 border-primary text-primary' : 'text-foreground/60 hover:text-foreground'
              }`}
            >
              <Paintbrush size={16} className="mr-2" />
              Design
            </button>
            <button
              onClick={() => setActiveTab('layout')}
              className={`flex items-center px-6 py-3 text-sm font-medium transition-colors ${
                activeTab === 'layout' ? 'border-b-2 border-primary text-primary' : 'text-foreground/60 hover:text-foreground'
              }`}
            >
              <Layout size={16} className="mr-2" />
              Layout
            </button>
            <button
              onClick={() => setActiveTab('preview')}
              className={`flex items-center px-6 py-3 text-sm font-medium transition-colors ${
                activeTab === 'preview' ? 'border-b-2 border-primary text-primary' : 'text-foreground/60 hover:text-foreground'
              }`}
            >
              <Eye size={16} className="mr-2" />
              Preview
            </button>
          </div>
          
          <div className="relative">
            <div className="absolute top-4 right-4 z-10">
              <button
                onClick={handleCopy}
                className="p-2 rounded-md bg-background/50 backdrop-blur-sm border border-border hover:bg-background transition-colors"
                title="Copy to clipboard"
              >
                {isCopied ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
              </button>
            </div>
            
            <div className="p-6 overflow-auto bg-code text-code-foreground rounded-b-xl font-mono text-sm">
              <pre>
                <code>{sampleCode}</code>
              </pre>
            </div>
          </div>
        </div>
        
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto bg-primary text-white font-medium py-3 px-8 rounded-full hover:bg-primary/90 transition-all duration-300 flex items-center justify-center">
            Edit & Customize
          </button>
          <button className="w-full sm:w-auto bg-secondary text-foreground font-medium py-3 px-8 rounded-full hover:bg-secondary/80 transition-all duration-300 flex items-center justify-center">
            Download Code
          </button>
          <button className="w-full sm:w-auto border border-border text-foreground font-medium py-3 px-8 rounded-full hover:bg-secondary/50 transition-all duration-300 flex items-center justify-center">
            Deploy Website
          </button>
        </div>
      </div>
    </section>
  );
};

export default CodePreview;
