
import React from 'react';
import { motion } from 'framer-motion';
import { Tractor, Smartphone, LineChart, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ModernFarmers = () => {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor" />
        </svg>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-800 text-xs font-bold uppercase tracking-wider mb-4">
              <Tractor className="w-4 h-4" />
              For Landowners & NRIs
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Farmland Management for <span className="text-green-600">Modern Farmers</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Living away from your agricultural property? We provide professional **farmland management for NRIs** and absentee landowners. Transform your idle land into a productive asset with our scientific **poplar plantation investment** and **eucalyptus plantation investment** strategies.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-green-600 shrink-0">
                  <Smartphone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Remote Monitoring</h3>
                  <p className="text-gray-500 text-sm">Track your farm's progress from anywhere in the world via our digital dashboard.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-green-600 shrink-0">
                  <LineChart size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Scientific Yield Optimization</h3>
                  <p className="text-gray-500 text-sm">We use modern farming services to maximize timber output and soil health.</p>
                </div>
              </div>
            </div>

            <Button className="bg-green-700 hover:bg-green-800 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-green-900/20 group w-full sm:w-auto">
              Partner With Us <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"/>
            </Button>
          </motion.div>

          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 relative h-[400px] md:h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1000&auto=format&fit=crop" 
              alt="Modern farming services for NRIs" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="bg-white/90 backdrop-blur rounded-xl p-4 border border-white/20">
                <p className="font-bold text-green-900">Managed Acreage</p>
                <p className="text-xs text-gray-600">Over 500+ acres under scientific management</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ModernFarmers;
