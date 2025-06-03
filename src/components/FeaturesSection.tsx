import { Code, Zap, Layout, MousePointer, PenTool, Globe } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const FeaturesSection = () => {
  const features = [
    {
      title: 'AI-Powered Code Generation',
      description: 'Generate clean, responsive code from simple text prompts using state-of-the-art AI models.',
      icon: <Code className="h-10 w-10 text-primary" />
    },
    {
      title: 'Lightning Fast',
      description: 'Get a complete website in seconds, not hours or days. Instant preview and deployment.',
      icon: <Zap className="h-10 w-10 text-primary" />
    },
    {
      title: 'Responsive Design',
      description: 'All generated websites are fully responsive and look great on any device, from mobile to desktop.',
      icon: <Layout className="h-10 w-10 text-primary" />
    },
    {
      title: 'Drag-and-Drop Editor',
      description: 'Fine-tune your generated website with our intuitive drag-and-drop editor. No coding required.',
      icon: <MousePointer className="h-10 w-10 text-primary" />
    },
    {
      title: 'Customization Options',
      description: 'Adjust colors, fonts, layouts, and more to match your brand and preferences.',
      icon: <PenTool className="h-10 w-10 text-primary" />
    },
    {
      title: 'One-Click Deployment',
      description: 'Deploy your website to a global CDN with a single click. Get a custom domain or use our free subdomain.',
      icon: <Globe className="h-10 w-10 text-primary" />
    }
  ];

  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Everything you need to create amazing websites without writing a single line of code.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="border border-border bg-card hover:shadow-md transition-all duration-300">
              <CardHeader>
                <div className="mb-4">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground/70 text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
