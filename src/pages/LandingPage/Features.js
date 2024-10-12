// src/pages/landingPage/Features.jsx
import React from 'react';

const Features = () => {
  const features = [
    { title: 'Manage Accounts', description: 'Easily manage your ATM cards.', icon: '🛠️' },
    { title: 'Transaction History', description: 'Track all your transactions in one place.', icon: '📈' },
    { title: 'Balance Check', description: 'Instantly check your account balance.', icon: '💵' },
    { title: 'Change PIN', description: 'Securely change your ATM PIN.', icon: '🔒' },
  ];

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-bold text-gray-900">Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-gray-100 rounded-lg shadow-md">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h4 className="text-xl font-bold text-gray-800">{feature.title}</h4>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
