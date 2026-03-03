import React from 'react';
import { motion } from 'framer-motion';
import { Award, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Certificate = () => {
  const handleDownload = () => {
    toast({
      title: "Feature Coming Soon",
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      duration: 4000,
    });
  };

  return (
    <section className="py-16 md:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-10 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Award className="text-green-700 w-8 h-8 md:w-10 md:h-10" />
            <h2 className="text-3xl md:text-5xl font-bold text-green-900">
              Investment Certificate
            </h2>
          </div>
          <p className="text-lg md:text-xl text-green-700">
            Receive official documentation for your tree investments
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto w-full max-w-md lg:max-w-none"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-200 to-amber-200 rounded-2xl transform rotate-3"></div>
              <div className="relative bg-white p-4 md:p-8 rounded-2xl shadow-2xl border-4 border-green-700">
                <div className="border-4 border-double border-green-600 p-4 md:p-6">
                  <div className="text-center mb-6">
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-green-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Award className="text-white w-7 h-7 md:w-8 md:h-8" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-green-900 mb-2">Investment Certificate</h3>
                    <div className="h-1 w-24 bg-green-700 mx-auto mb-4"></div>
                  </div>
                  <div className="space-y-3 text-xs md:text-sm">
                    <div className="flex justify-between border-b border-green-200 pb-2">
                      <span className="text-green-700">Certificate No:</span>
                      <span className="font-semibold text-green-900">AI-2024-XXXXX</span>
                    </div>
                    <div className="flex justify-between border-b border-green-200 pb-2">
                      <span className="text-green-700">Investor Name:</span>
                      <span className="font-semibold text-green-900">Your Name</span>
                    </div>
                    <div className="flex justify-between border-b border-green-200 pb-2">
                      <span className="text-green-700">Number of Trees:</span>
                      <span className="font-semibold text-green-900">XX Trees</span>
                    </div>
                    <div className="flex justify-between border-b border-green-200 pb-2">
                      <span className="text-green-700">Tree Species:</span>
                      <span className="font-semibold text-green-900">Teak/Mahogany</span>
                    </div>
                    <div className="flex justify-between border-b border-green-200 pb-2">
                      <span className="text-green-700">Location:</span>
                      <span className="font-semibold text-green-900">Uttrakhand, India</span>
                    </div>
                    <div className="flex justify-between pb-2">
                      <span className="text-green-700">Investment Date:</span>
                      <span className="font-semibold text-green-900">DD/MM/YYYY</span>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t-2 border-green-600 text-center">
                    <p className="text-[10px] md:text-xs text-green-600 italic">
                      This certificate verifies your ownership of the specified trees
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-center lg:text-left"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-green-900">
              Official Investment Documentation
            </h3>
            <p className="text-base md:text-lg text-green-700">
              Every investment comes with a verified certificate that includes:
            </p>
            <ul className="space-y-4 text-left inline-block">
              {[
                'Unique certificate number for tracking',
                'GPS coordinates of your tree plantation',
                'Tree species and planting date details',
                'Maturity timeline and expected returns',
                'Legal ownership documentation',
                'Digital and physical certificate copies'
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-700 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-green-800 text-sm md:text-base">{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col items-center lg:items-start gap-3">
              <Button 
                onClick={handleDownload}
                className="bg-green-700 hover:bg-green-800 text-white group w-full sm:w-auto"
                size="lg"
              >
                <Download className="mr-2 group-hover:animate-bounce" />
                Download Sample Certificate
              </Button>
              <p className="text-xs md:text-sm text-green-600 italic">
                Certificates are issued within 48 hours of investment confirmation
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Certificate;