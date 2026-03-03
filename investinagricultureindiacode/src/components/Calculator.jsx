
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Slider } from '@/components/ui/slider';
import { Sprout, IndianRupee, Info, TrendingUp, Leaf, Map, HeartHandshake, AlertTriangle } from 'lucide-react';

const Calculator = () => {
  const [numberOfTrees, setNumberOfTrees] = useState(50);
  
  // Unit Economics Constants
  const costBreakdown = {
    landRent: 250,
    sapling: 50,
    care: 200,
    totalCost: 500
  };

  const sellingPrice = {
    min: 1200,
    max: 1500
  };

  // Calculations
  const totalInvestment = numberOfTrees * costBreakdown.totalCost;
  
  const revenueMin = numberOfTrees * sellingPrice.min;
  const revenueMax = numberOfTrees * sellingPrice.max;
  
  const profitMin = revenueMin - totalInvestment;
  const profitMax = revenueMax - totalInvestment;

  return (
    <section id="calculator" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Profit Calculator</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Plan your <strong>tree investment</strong> with transparent unit economics. Whether it's <strong>poplar plantation investment</strong> or eucalyptus, see the potential returns based on current market rates.
          </p>
        </div>

        <div className="space-y-8">
          
          {/* 1. Unit Economics Breakdown (Top) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl border border-gray-200 p-6 md:p-8 shadow-sm"
          >
            <div className="flex items-center gap-2 mb-6 border-b border-gray-100 pb-4">
              <div className="bg-green-100 p-2 rounded-lg text-green-700"><Info size={20} /></div>
              <h3 className="text-xl font-bold text-gray-900">Unit Economics (Cost Per Tree)</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-amber-50 p-4 rounded-xl border border-amber-100 flex flex-col items-center text-center">
                <div className="bg-amber-100 p-3 rounded-full text-amber-700 mb-3"><Map size={20} /></div>
                <span className="text-sm text-gray-600 font-medium mb-1">Land Rent</span>
                <span className="text-xl font-bold text-amber-900">₹{costBreakdown.landRent}</span>
              </div>
              <div className="bg-green-50 p-4 rounded-xl border border-green-100 flex flex-col items-center text-center">
                <div className="bg-green-100 p-3 rounded-full text-green-700 mb-3"><Leaf size={20} /></div>
                <span className="text-sm text-gray-600 font-medium mb-1">Sapling Cost</span>
                <span className="text-xl font-bold text-green-900">₹{costBreakdown.sapling}</span>
              </div>
              <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 flex flex-col items-center text-center">
                <div className="bg-blue-100 p-3 rounded-full text-blue-700 mb-3"><HeartHandshake size={20} /></div>
                <span className="text-sm text-gray-600 font-medium mb-1">Care & Maintenance</span>
                <span className="text-xl font-bold text-blue-900">₹{costBreakdown.care}</span>
              </div>
            </div>
            <div className="mt-6 flex justify-between items-center bg-gray-50 p-4 rounded-xl">
               <span className="font-bold text-gray-600">Total Cost Per Unit</span>
               <span className="font-bold text-2xl text-gray-900">₹{costBreakdown.totalCost}</span>
            </div>
          </motion.div>

          {/* 2. Input Section (Middle) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl border border-gray-200 p-6 md:p-8 shadow-sm"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
              <label className="flex items-center gap-3 text-xl font-bold text-gray-900">
                <div className="bg-green-100 p-2 rounded-lg text-green-700"><Sprout size={20} /></div>
                Select Number of Trees
              </label>
              <div className="bg-green-50 border border-green-200 px-6 py-2 rounded-xl text-2xl font-bold text-green-700 shadow-sm">
                {numberOfTrees.toLocaleString()} <span className="text-sm font-medium text-green-600">Trees</span>
              </div>
            </div>
            
            <div className="px-2 mb-6">
              <Slider
                value={[numberOfTrees]}
                onValueChange={(val) => setNumberOfTrees(val[0])}
                min={1}
                max={10000}
                step={1}
                className="py-4 cursor-pointer"
              />
            </div>
            <div className="flex justify-between text-xs text-gray-400 font-medium uppercase tracking-wide">
              <span>1 Tree</span>
              <span>10,000 Trees</span>
            </div>
          </motion.div>

          {/* 3. Results Section (Bottom) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-emerald-900 to-green-900 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
            
            <div className="grid md:grid-cols-3 gap-8 relative z-10">
              <div className="space-y-1">
                <p className="text-green-200 text-sm font-medium uppercase tracking-wider">Total Investment</p>
                <p className="text-3xl lg:text-4xl font-bold text-white">₹{totalInvestment.toLocaleString('en-IN')}</p>
                <p className="text-xs text-green-200/60">@ ₹500 per tree</p>
              </div>

              <div className="space-y-1 md:border-l md:border-white/10 md:pl-8">
                <p className="text-green-200 text-sm font-medium uppercase tracking-wider">Projected Revenue</p>
                <p className="text-3xl lg:text-4xl font-bold text-white">
                  ₹{revenueMin.toLocaleString('en-IN')} <span className="text-lg text-green-200/60 font-normal">-</span> <br className="hidden md:block lg:hidden"/>
                  ₹{revenueMax.toLocaleString('en-IN')}
                </p>
                <p className="text-xs text-green-200/60">Based on market rates</p>
              </div>

              <div className="space-y-1 md:border-l md:border-white/10 md:pl-8">
                <p className="text-green-200 text-sm font-medium uppercase tracking-wider flex items-center gap-2">
                  <TrendingUp size={14} /> Est. Net Profit
                </p>
                <p className="text-3xl lg:text-4xl font-bold text-emerald-300">
                  ₹{profitMin.toLocaleString('en-IN')} <span className="text-lg text-emerald-200/60 font-normal">-</span> <br className="hidden md:block lg:hidden"/>
                  ₹{profitMax.toLocaleString('en-IN')}
                </p>
                <p className="text-xs text-emerald-200/60">After deducting initial costs</p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
              <div className="flex items-start gap-3 bg-white/10 rounded-xl p-3 max-w-xl">
                <AlertTriangle className="text-amber-300 w-5 h-5 shrink-0 mt-0.5" />
                <p className="text-xs text-green-100 leading-relaxed">
                  <strong>Important Disclaimer:</strong> Returns are market-linked and depend on timber prices at harvest. Past performance does not guarantee future results. We strive for maximum yield through scientific farming, but actual returns may vary due to biological and market factors.
                </p>
              </div>
              <button className="w-full md:w-auto bg-white text-green-900 px-8 py-3 rounded-xl font-bold shadow-lg hover:bg-green-50 transition-all whitespace-nowrap">
                Start Investing
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Calculator;
