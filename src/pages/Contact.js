import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, phone, message);
  };

  return (
    <div className="flex flex-col items-center py-20">
      <ScrollToTop />
      <div className="w-full h-44">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12 iSpA-dU4">
          <h1 className="text-3xl font-bold mb-4">Get in touch with us today!</h1>
          <p className="">At Deep Data Detectives (D3), we're always here to help.</p>
        </div>
      </div>

      <div className="flex flex-wrap w-full justify-center">
        <div className=" md:w-1/2 p-10" style={{maxWidth:'850px'}}>
          <iframe
            className="my-element2 w-full h-full"
            src="https://drive.google.com/file/d/1Y9TF0immtBzNQFfpGWVYatbnhpPnOuS9/preview"
            style={{ border: 'none', minHeight: '50vh' }}
            title="Your Title"
            allowFullScreen
          />
        </div>  
        <div className="w-full md:w-1/2 p-10" style={{maxWidth:'550px'}}>
          <div className="bg-white my-element2 shadow-md rounded-md p-8 w-full h-full border-2 border-black">
            <div className="" style={{ border: 'none', maxHeight: '' }}>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
          <h1 style={{textAlign:'center'}} className="text-2xl font-bold mb-6">Contact Us</h1>

            <label htmlFor="name" className="block text-sm font-medium text-black">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="mt-1 block w-full border-2 border-gray-300 rounded-md shadow-sm hover:shadow-lg hover:bg-gray-100 focus:border-indigo-300 focus:ring focus:ring-gray-700 focus:ring-opacity-100 transition-shadow duration-300"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-black">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="mt-1 block w-full border-2 border-gray-300 rounded-md shadow-sm hover:shadow-lg hover:bg-gray-100 focus:border-indigo-300 focus:ring focus:ring-gray-700 focus:ring-opacity-100 transition-shadow duration-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-black">
              Phone
            </label>
            <input
              id="phone"
              type="phone"
              className="mt-1 block w-full border-2 border-gray-300 rounded-md shadow-sm hover:shadow-lg hover:bg-gray-100 focus:border-indigo-300 focus:ring focus:ring-gray-700 focus:ring-opacity-100 transition-shadow duration-300"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-black">
              Message
            </label>
            <textarea
              id="message"
              className="mt-1 block w-full border-2 border-gray-300 rounded-md shadow-sm hover:shadow-lg hover:bg-gray-100 focus:border-indigo-300 focus:ring focus:ring-gray-700 focus:ring-opacity-100 transition-shadow duration-300"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
          </div>
        </div>
      </div>

      <div className="my-8 space-y-4 w-4/5">
        <p className="flex justify-left">
          Whether you have a question, need assistance, or want to learn more about our products and services, our friendly and knowledgeable team is ready to assist you.
        </p>
        <p className="flex justify-left">
          Please fill out the form above with your contact information and a brief message, and we'll get back to you as soon as possible.
        </p>
        <p className="flex justify-left">We look forward to connecting with you soon!</p>
      </div>
    </div>
  );
};

export default Contact;
