import React, { useState } from 'react';

const TechnicalSupport = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '',
    description: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send email or API call)
    console.log(formData);
    alert('Your request has been submitted!');
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-2xl text-blue-600 font-bold mb-4">Technical Support</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2 text-blue-500">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="border rounded w-full p-2"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>

        <div>
          <label className="block mb-2 text-blue-500">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="border rounded w-full p-2"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>

        <div>
          <label className="block mb-2 text-blue-500">Category</label>
          <select
            className="border rounded w-full p-2"
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            required
          >
            <option value="">Select an issue type</option>
            <option value="technical">Technical Issue</option>
            <option value="billing">Billing Issue</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 text-blue-500">Description</label>
          <textarea
            placeholder="Describe the issue"
            className="border rounded w-full p-2"
            rows="5"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded w-full"
        >
          Submit Request
        </button>
      </form>


      <footer className="mt-8 text-center text-sm text-gray-500">
        <p>Contact us: support@example.com</p>
        <p>Phone: (123) 456-7890</p>
      </footer>
    </div>
  );
};

export default TechnicalSupport;
