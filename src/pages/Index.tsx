
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PromptInput from '@/components/PromptInput';
import Footer from '@/components/Footer';
import FeaturesSection from '@/components/FeaturesSection';
import ExamplesSection from '@/components/ExamplesSection';
import PricingSection from '@/components/PricingSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <FeaturesSection />
        <div id="prompt-input" className="py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Try It Yourself</h2>
              <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
                Enter your website description below and let our AI generate the code for you.
              </p>
            </div>
            <PromptInput />
          </div>
        </div>
        <ExamplesSection />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
