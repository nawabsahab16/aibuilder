
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PricingSection from '@/components/PricingSection';
import { motion } from 'framer-motion';

const Pricing = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <PricingSection />
      
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <motion.h2 
              className="text-3xl font-bold text-center mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.div 
              className="max-w-3xl mx-auto grid gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                {
                  question: "Can I upgrade or downgrade my plan at any time?",
                  answer: "Yes, you can upgrade, downgrade, or cancel your subscription at any time. When you upgrade, you'll be prorated for the remainder of the billing cycle."
                },
                {
                  question: "What happens when I reach my generation limit?",
                  answer: "You can always upgrade to a higher plan to get more generations. We'll notify you when you're approaching your limit so you can plan accordingly."
                },
                {
                  question: "Do you offer a free trial?",
                  answer: "Yes, we offer a 14-day free trial for our Pro plan. No credit card required."
                },
                {
                  question: "Can I use my own domain?",
                  answer: "Yes, Pro and Business plans allow you to connect your custom domain to your generated websites."
                },
                {
                  question: "Do you offer refunds?",
                  answer: "We offer a 30-day money-back guarantee for all paid plans."
                }
              ].map((faq, index) => (
                <motion.div 
                  key={index} 
                  className="border border-border rounded-lg p-6 bg-card/50 backdrop-blur-sm hover:shadow-md transition-all"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                  <p className="text-foreground/70">{faq.answer}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
