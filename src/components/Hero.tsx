
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        duration: 0.5,
      } 
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-background to-secondary/30 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px] -top-[250px] -left-[100px]"></div>
        <div className="absolute w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-[80px] top-[30%] -right-[200px]"></div>
        <div className="absolute w-[600px] h-[600px] rounded-full bg-purple-500/5 blur-[120px] -bottom-[300px] left-[20%]"></div>
        
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      </div>
      
      <div className="container mx-auto px-6 pt-32 pb-24 relative z-10">
        <motion.div 
          className="max-w-5xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
      
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center px-3 py-1.5 mb-8 border border-border bg-background/50 backdrop-blur rounded-full text-xs font-medium"
          >
            <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2"></span>
            <span>AI-Powered Website Generation</span>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8"
          >
            Turn your ideas into <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-400 to-violet-500">
              stunning websites
            </span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-foreground/70 max-w-2xl mx-auto mb-12"
          >
            Describe your vision and our AI will craft a beautiful, responsive website in seconds.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              className="rounded-full px-8 py-6 text-base font-medium bg-primary text-white hover:bg-primary/90"
              asChild
            >
              <a href="#prompt-input">
                Create your website
                <ArrowRight size={16} className="ml-2" />
              </a>
            </Button>
            
            <Button
              size="lg" 
              variant="outline" 
              className="rounded-full px-8 py-6 text-base border-primary/30 text-primary hover:bg-primary/5"
              asChild
            >
              <a href="#examples">
                View examples
              </a>
            </Button>
          </motion.div>
         
          <motion.div 
            variants={itemVariants}
            className="mt-20 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent h-[20%] bottom-0 z-10"></div>
            
            <div className="grid grid-cols-5 gap-6 items-center perspective-[1000px]">
              {[
                { scale: 0.8, rotate: -5, z: -10, opacity: 0.7, delay: 0.1 },
                { scale: 0.9, rotate: -2, z: -5, opacity: 0.85, delay: 0.2 },
                { scale: 1, rotate: 0, z: 0, opacity: 1, delay: 0.3 },
                { scale: 0.9, rotate: 2, z: -5, opacity: 0.85, delay: 0.2 },
                { scale: 0.8, rotate: 5, z: -10, opacity: 0.7, delay: 0.1 },
              ].map((style, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ 
                    y: 0, 
                    opacity: style.opacity,
                    transition: { 
                      delay: style.delay + 0.5, 
                      duration: 0.8, 
                      ease: "easeOut" 
                    }
                  }}
                  className={`${index === 0 || index === 4 ? 'hidden lg:block' : index === 1 || index === 3 ? 'hidden md:block' : ''}`}
                  style={{ 
                    transform: `scale(${style.scale}) rotateY(${style.rotate}deg)`,
                    zIndex: 5 + style.z
                  }}
                >
                  <div className="rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-card">
                    <img 
                      src={`https://images.unsplash.com/photo-${1550000000 + index * 100}?auto=format&fit=crop&w=800&q=80`} 
                      alt={`Website example ${index + 1}`}
                      className="w-full aspect-[16/9] object-cover"
                    />
                    <div className="p-4 bg-gradient-to-b from-background/80 to-background backdrop-blur-sm">
                      <div className="h-2 w-24 bg-primary/20 rounded-full mb-2"></div>
                      <div className="h-3 w-32 bg-foreground/10 rounded-full"></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-24 pt-8 border-t border-border/50"
          >
            {[
              { number: '10K+', label: 'Websites Created' },
              { number: '350+', label: 'Templates' },
              { number: '99%', label: 'Satisfaction' },
              { number: '24/7', label: 'Support' }
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                className="flex flex-col"
                variants={itemVariants}
              >
                <motion.p 
                  className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400 mb-1"
                >
                  {stat.number}
                </motion.p>
                <motion.p className="text-sm text-foreground/60">{stat.label}</motion.p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
