import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, Wallet, Sprout, BarChart3, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    { icon: <UserPlus />, title: '1. Register', desc: 'Create account' },
    { icon: <Wallet />, title: '2. Invest', desc: 'Select trees' },
    { icon: <Sprout />, title: '3. We Plant', desc: 'Expert care' },
    { icon: <BarChart3 />, title: '4. Earn', desc: 'Harvest profit' }
  ];

  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/4">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              A simple, transparent process designed to make agricultural investing effortless for everyone.
            </p>
            <button className="text-green-600 font-bold text-sm flex items-center hover:underline">
              Start Now <ArrowRight className="ml-1 w-4 h-4" />
            </button>
          </div>

          <div className="lg:w-3/4 w-full">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative">
              {/* Connecting Line (Desktop) */}
              <div className="hidden md:block absolute top-8 left-0 w-[80%] h-0.5 bg-green-100 z-0 translate-x-[10%]"></div>
              
              {steps.map((step, index) => (
                <motion.div 
                  key={index}
                  className="relative z-10 flex flex-col items-center text-center bg-white"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-16 h-16 rounded-2xl bg-white border-2 border-green-100 flex items-center justify-center text-green-600 shadow-sm mb-4 group hover:border-green-500 transition-colors">
                    {React.cloneElement(step.icon, { size: 28 })}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">{step.title}</h3>
                  <p className="text-xs text-gray-500">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;