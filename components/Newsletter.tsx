// components/Newsletter.tsx
import React from 'react';

const Newsletter = () => {
  return (
    <section className="py-16 bg-[#101829] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Subscribe to our Newsletter</h2>
          <p className="text-lg mb-8">
            Get paper advice for your journey to university delivered to your inbox each month. 
            It's smart, and worthwhile - We promise!
          </p>
          
          <div className="max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <input
                type="email"
                placeholder="Email address"
                className="flex-grow px-4 py-3 rounded-lg text-white border-2 border-gray-100 hover:border-blue-600"
              />
              
            </div>
            
            <div className="flex items-center justify-center">
              <input
                type="checkbox"
                id="terms"
                className="h-4 w-4 text-blue-600 rounded"
              />
              <label htmlFor="terms" className="ml-2 text-sm">
                I confirm I am over 18 and I agree to the Terms and Conditions and Privacy Notice.
              </label>
            </div>
            <button className="px-6 py-3 mt-10 bg-yellow-400 text-blue-600 font-semibold rounded-md hover:bg-yellow-500 transition-colors whitespace-nowrap">
                Subscribe Now
              </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;