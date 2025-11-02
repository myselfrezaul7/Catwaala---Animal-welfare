import React from 'react';

const FAQItem: React.FC<{ question: string, children: React.ReactNode }> = ({ question, children }) => (
  <div className="py-6 border-b border-slate-200 dark:border-slate-700">
    <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">{question}</h3>
    <div className="text-slate-600 dark:text-slate-400 mt-2 text-base leading-relaxed space-y-4">
      {children}
    </div>
  </div>
);

const FAQPage: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-100">Frequently Asked Questions</h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mt-4">
          Have questions? We've got answers. If you can't find what you're looking for, feel free to contact us.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <FAQItem question="How does the adoption process work?">
          <p>
            Our adoption process is designed to ensure our animals find the perfect forever home. It starts with you browsing our available animals online. Once you find a potential match, you can fill out an adoption application. Our team will review your application, and if it's a good fit, we'll schedule a meet-and-greet.
          </p>
        </FAQItem>
        <FAQItem question="What are the adoption fees?">
          <p>
            Adoption fees help cover the cost of care, including vaccinations, spaying/neutering, microchipping, and any other medical treatment an animal may have needed. Fees vary depending on the animal's age and species. Please see the individual animal's profile for specific fee information.
          </p>
        </FAQItem>
        <FAQItem question="I found a stray or injured animal. What should I do?">
          <p>
            If you find a stray or injured animal, your safety and the animal's safety are the top priorities. Please approach with caution. You can use our "Report Rescue" feature on the website to alert our team. Provide as much detail as possible, including the location and the animal's condition. If the animal is severely injured and needs immediate medical attention, please contact the nearest emergency vet clinic.
          </p>
        </FAQItem>
        <FAQItem question="How can I volunteer?">
          <p>
            We're so glad you're interested in volunteering! We rely on our passionate volunteers to help with everything from animal care and socialization to events and administrative tasks. You can fill out the volunteer application form on our homepage to get started.
          </p>
        </FAQItem>
        <FAQItem question="What kind of donations do you accept?">
          <p>
            We gratefully accept both monetary and in-kind donations. Financial contributions help us cover major expenses like vet bills and shelter operations. We also have a wishlist of items we regularly need, such as pet food, litter, blankets, and toys. Thank you for your support!
          </p>
        </FAQItem>
      </div>
    </div>
  );
};

export default FAQPage;
