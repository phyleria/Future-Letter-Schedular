import React, { useState } from 'react';

const WriteLetter = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [date, setDate] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const today = new Date().toISOString().split('T')[0];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const res = await fetch('http://localhost:5000/schedule', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, message, date })
    });

    const data = await res.json();
    if (data.success) {
      alert('Letter scheduled successfully!');
      setEmail('');
      setMessage('');
      setDate('');
    } else {
      alert(data.error || 'Something went wrong');
    }
    setIsSubmitting(false);
  };

  return (
    <div className="max-w-2xl mx-auto py-12 px-6">
      <div className="mb-8">
        <h2 className="text-3xl font-light text-gray-900 mb-4">Write your letter</h2>
        <p className="text-gray-600">This will be sent to you on the date you choose.</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email address</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded"
            placeholder="your@email.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Your message</label>
          <textarea
            required
            rows="10"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded resize-none"
            placeholder="Dear future me..."
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Send on</label>
          <input
            type="date"
            required
            min={today}
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded"
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full text-white py-3 rounded hover:opacity-90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          style={{ backgroundColor: '#EB8214' }}
        >
          {isSubmitting ? 'Scheduling...' : 'Schedule letter'}
        </button>
      </form>
    </div>
  );
};

export default WriteLetter;
