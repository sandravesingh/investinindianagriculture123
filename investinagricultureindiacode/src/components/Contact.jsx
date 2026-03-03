import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({ title: "Sent!", description: "We'll contact you shortly." });
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-green-900 rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row">
          
          {/* Left: Form */}
          <div className="md:w-1/2 p-8 md:p-12 bg-white">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase">Name</label>
                <input 
                  className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200 focus:border-green-500 outline-none transition-all"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase">Phone</label>
                <input 
                  className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200 focus:border-green-500 outline-none transition-all"
                  placeholder="+91 0000000000"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase">Message</label>
                <textarea 
                  rows={3}
                  className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200 focus:border-green-500 outline-none transition-all resize-none"
                  placeholder="How can we help?"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>
              <Button className="w-full bg-green-600 hover:bg-green-700 h-12 rounded-xl text-white font-bold shadow-lg shadow-green-600/20">
                Send Message <Send size={16} className="ml-2" />
              </Button>
            </form>
          </div>

          {/* Right: Info */}
          <div className="md:w-1/2 p-8 md:p-12 bg-green-900 text-white flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl -ml-16 -mb-16"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-6">Contact Info</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center backdrop-blur">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-green-300 uppercase font-bold">Call Us</p>
                    <p className="font-medium">+91 7078473101</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center backdrop-blur">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-green-300 uppercase font-bold">Email</p>
                    <p className="font-medium">investinagricultureindia@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center backdrop-blur">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-green-300 uppercase font-bold">Visit</p>
                    <p className="font-medium">Vijay Park Doon Enclave Dehradun</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;