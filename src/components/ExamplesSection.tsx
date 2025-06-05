
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

const ExamplesSection = () => {
  const examples = [
    {
      title: 'E-commerce Store',
      description: 'A complete online store with product listings, cart, and checkout.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d',
      tags: ['E-commerce', 'Store', 'Shopping']
    },
    {
      title: 'Portfolio Website',
      description: 'Showcase your work with this elegant portfolio template.',
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8',
      tags: ['Portfolio', 'Creative', 'Showcase']
    },
    {
      title: 'Blog Platform',
      description: 'Start your blog with this feature-rich blog template.',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643',
      tags: ['Blog', 'Content', 'Writing']
    },
    {
      title: 'SaaS Landing Page',
      description: 'Convert visitors to customers with this optimized SaaS landing page.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
      tags: ['SaaS', 'Landing', 'Conversion']
    },
    {
      title: 'Restaurant Website',
      description: 'Showcase your menu and accept reservations with this restaurant template.',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5',
      tags: ['Restaurant', 'Food', 'Menu']
    },
    {
      title: 'Real Estate Listings',
      description: 'Display property listings with this real estate website template.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa',
      tags: ['Real Estate', 'Properties', 'Listings']
    }
  ];

  return (
    <section id="examples" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Example Websites</h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Check out these examples of websites created with our AI-powered platform.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {examples.map((example, index) => (
            <Card key={index} className="overflow-hidden border border-border hover:shadow-lg transition-all duration-300 flex flex-col">
              <div className="h-48 overflow-hidden">
                <img 
                  src={`${example.image}?auto=format&fit=crop&w=500&q=80`}
                  alt={example.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardContent className="pt-6 flex-grow">
                <h3 className="text-xl font-semibold mb-2">{example.title}</h3>
                <p className="text-foreground/70 mb-4">{example.description}</p>
                <div className="flex flex-wrap gap-2">
                  {example.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="text-xs px-2 py-1 bg-secondary rounded-full text-foreground/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="pt-0">
                <a 
                  href="#" 
                  className="text-primary flex items-center text-sm font-medium hover:underline"
                >
                  View Example
                  <ArrowRight size={14} className="ml-1" />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExamplesSection;
