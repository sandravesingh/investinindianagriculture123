
import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Calculator from '@/components/Calculator';
import Certificate from '@/components/Certificate';
import FarmlandServices from '@/components/FarmlandServices';
import ModernFarmers from '@/components/ModernFarmers';
import HowItWorks from '@/components/HowItWorks';
import Blog from '@/components/Blog';
import FAQ from '@/components/FAQ';
import Founder from '@/components/Founder';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

function App() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "name": "Invest In Agriculture India",
        "image": "https://horizons-cdn.hostinger.com/1c27a786-8538-4b6c-bb65-44a25d79a652/0ee58050feb64c01090be2dcfb4560a5.png",
        "telephone": "+91 7078473101",
        "email": "investinagricultureindia@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Vijay Park Doon Enclave",
          "addressLocality": "Dehradun",
          "addressRegion": "Uttrakhand",
          "addressCountry": "IN"
        },
        "description": "India's trusted platform for tree-based micro investments and farmland management services."
      },
      {
        "@type": "Product",
        "name": "Tree Investment Unit (Eucalyptus/Poplar)",
        "description": "Invest in high-value timber trees like Eucalyptus and Poplar with complete farmland management services.",
        "brand": {
          "@type": "Brand",
          "name": "Invest In Agriculture India"
        },
        "offers": {
          "@type": "Offer",
          "priceCurrency": "INR",
          "price": "500",
          "availability": "https://schema.org/InStock"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the minimum investment amount?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can start investing in agriculture India with just ₹500 for a single tree unit."
            }
          },
          {
            "@type": "Question",
            "name": "Are returns guaranteed?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Returns are market-linked and depend on timber prices at the time of harvest. We focus on high-demand species like Eucalyptus and Poplar to maximize potential value."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Invest in Agriculture India – ₹500 Tree Investment | Market-Linked Timber Returns</title>
        <meta name="description" content="India's trusted platform for tree-based micro investments and farmland management. Invest in eucalyptus or poplar trees from ₹500. Market-linked returns, transparent reporting, verified farmers." />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-amber-50 font-sans">
        <Header />
        <main className="w-full overflow-x-hidden">
          <Hero />
          <About />
          <Calculator />
          <ModernFarmers />
          <Certificate />
          <FarmlandServices />
          <HowItWorks />
          <Blog />
          <FAQ />
          <Contact />
          <Founder />
        </main>
        <Footer />
        <WhatsAppButton />
        <Toaster />
      </div>
    </>
  );
}

export default App;
