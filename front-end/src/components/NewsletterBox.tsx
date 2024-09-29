import React, { useState } from 'react';

const NewsletterBox: React.FC = () => {
  const [email, setEmail] = useState<string>(''); // Type for the email input

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle the form submission logic (e.g., send the email)
    console.log(`Subscribed with: ${email}`);
    setEmail(''); // Clear the input field after submission
  };

  return (
    <div className='text-center bg-gray-100 p-8 rounded-lg shadow-lg'>
      <p className='text-3xl font-bold text-gray-800 mb-3'>
        Subscribe now & get 20% off
      </p>
      <p className="text-gray-500 mb-5">
        Stay updated with our latest offers and promotions.
      </p>
      <form
        onSubmit={handleSubmit}
        className="w-full sm:w-3/4 mx-auto flex flex-col sm:flex-row items-center gap-4 border border-gray-300 rounded-lg overflow-hidden shadow-md p-2"
      >
        <input
          className="w-full px-4 py-3 text-sm border-none outline-none flex-1"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <button
          type="submit"
          className="bg-black text-white text-sm px-6 py-3 rounded-md hover:bg-gray-800 transition-colors w-full sm:w-auto"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsletterBox;
