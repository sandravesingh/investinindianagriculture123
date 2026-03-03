
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const FAQ = () => {
  const faqs = [
    { q: 'What is the minimum investment amount?', a: 'You can start your journey in agriculture India investment with just ₹500 for a single tree unit. There is no maximum limit.' },
    { q: 'Are the returns guaranteed?', a: 'No, returns are market-linked. The final profit depends on the market price of timber (Poplar/Eucalyptus) at the time of harvest. We work to maximize yield, but do not offer fixed interest rates.' },
    { q: 'How do I track my investment?', a: 'Investors receive access to a digital dashboard featuring monthly growth photos, health reports, and GPS coordinates of their specific tree clusters.' },
    { q: 'What happens in case of natural disasters?', a: 'We provide comprehensive insurance coverage against fire, flood, and storm damage to protect your asset base.' },
    { q: 'When can I withdraw my profits?', a: 'Profits are realized upon harvest, which typically ranges from 2-5 years for fast-growing species like Poplar and Eucalyptus.' },
    { q: 'Can I visit the farm?', a: 'Absolutely. We encourage transparency. Farm visits can be scheduled with 7 days prior notice so our team can host you.' }
  ];

  const half = Math.ceil(faqs.length / 2);
  const col1 = faqs.slice(0, half);
  const col2 = faqs.slice(half);

  return (
    <section className="py-16 bg-green-50/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Common Questions</h2>
        
        <div className="grid md:grid-cols-2 gap-6 md:gap-12 max-w-5xl mx-auto">
          <div className="space-y-4">
            {col1.map((item, i) => (
              <FAQItem key={i} item={item} value={`item-1-${i}`} />
            ))}
          </div>
          <div className="space-y-4">
             {col2.map((item, i) => (
              <FAQItem key={i} item={item} value={`item-2-${i}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQItem = ({ item, value }) => (
  <Accordion type="single" collapsible className="bg-white rounded-xl border border-green-100 px-4 shadow-sm">
    <AccordionItem value={value} className="border-none">
      <AccordionTrigger className="text-left font-semibold text-gray-800 hover:text-green-600 hover:no-underline py-4 leading-snug">
        {item.q}
      </AccordionTrigger>
      <AccordionContent className="text-gray-600 pb-4 leading-relaxed">
        {item.a}
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);

export default FAQ;
