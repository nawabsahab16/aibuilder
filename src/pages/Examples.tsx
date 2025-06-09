
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ExamplesSection from '@/components/ExamplesSection';
import { 
  HoverCard,
  HoverCardContent,
  HoverCardTrigger
} from '@/components/ui/hover-card';
import { Image, Code, PanelRight, LucideProps } from 'lucide-react';

const Examples = () => {
  const categories = [
    { 
      title: "E-commerce", 
      icon: (props: LucideProps) => <Image {...props} />, 
      description: "Full-featured online stores with product galleries, cart and checkout" 
    },
    { 
      title: "Portfolios", 
      icon: (props: LucideProps) => <PanelRight {...props} />, 
      description: "Showcase your work with elegant layouts and smooth transitions" 
    },
    { 
      title: "Web Apps", 
      icon: (props: LucideProps) => <Code {...props} />, 
      description: "Interactive applications with complex functionality" 
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <div className="bg-gradient-to-b from-background to-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Example Websites
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto mb-8">
              Browse through our collection of AI-generated websites
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
              {categories.map((category, index) => (
                <HoverCard key={index}>
                  <HoverCardTrigger asChild>
                    <button className="flex items-center space-x-2 bg-card border border-border hover:bg-card/80 rounded-full px-6 py-3 transition-colors">
                      <category.icon className="h-5 w-5 text-primary" />
                      <span>{category.title}</span>
                    </button>
                  </HoverCardTrigger>
                  <HoverCardContent side="bottom" align="center" className="text-center">
                    <p>{category.description}</p>
                  </HoverCardContent>
                </HoverCard>
              ))}
            </div>
          </div>
        </div>
        <ExamplesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Examples;
