import React from 'react';
import { motion } from 'framer-motion';
import { Quote, ArrowRight } from 'lucide-react';

const Founder = () => {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <motion.div 
            className="relative h-[400px] md:h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl group"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1542601906990-b4d3fd7788a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Shivam Singh - Founder" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
            
            <div className="absolute bottom-8 left-8 text-white">
              <div className="bg-white/20 backdrop-blur-md border border-white/30 px-6 py-4 rounded-xl inline-block">
                <p className="font-bold text-xl">Shivam Singh</p>
                <p className="text-sm text-white/90">Founder & CEO</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div 
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-amber-100 text-amber-700 text-xs font-bold tracking-wide uppercase mb-4">
                Visionary Leadership
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                "Agriculture is not just about crops, it's about <span className="text-green-600">cultivating a legacy</span>."
              </h2>
              
              <div className="relative pl-8 border-l-4 border-green-200 mb-8">
                <Quote className="absolute -top-2 -left-3 text-green-200 bg-white p-1 w-8 h-8 fill-green-100" />
                <p className="text-gray-600 text-lg leading-relaxed italic">
                  "Our goal is simple: to make agricultural investment as accessible as stock market trading, but with the stability of real assets. We are building a bridge where urban investors can directly participate in India's rural growth story, creating wealth that is truly sustainable."
                </p>
              </div>

              <p className="text-gray-600 leading-relaxed mb-8">
                With over a decade of experience in agro-forestry and sustainable land management, Shivam leads a team dedicated to maximizing yield per acre while restoring soil health. His vision drives our commitment to transparency and technological integration in every farm we manage.
              </p>

              <button className="text-green-700 font-bold hover:text-green-800 inline-flex items-center group">
                Read Shivam's Story <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"/>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Founder;