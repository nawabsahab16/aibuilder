
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FeaturesSection from '@/components/FeaturesSection';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem 
} from '@/components/ui/carousel';

const Features = () => {
  const featureImages = [
    'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=800&q=80'
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <div className="bg-gradient-to-b from-background to-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Powerful Features to Build Your Website
                </h1>
                <p className="text-xl text-foreground/70 max-w-2xl">
                  Everything you need to create amazing websites without writing a single line of code.
                </p>
              </div>
              
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <Carousel className="w-full" opts={{ loop: true }}>
                  <CarouselContent>
                    {featureImages.map((image, index) => (
                      <CarouselItem key={index}>
                        <div className="aspect-video">
                          <img 
                            src={image} 
                            alt={`Feature preview ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Features;
