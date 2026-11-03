import { useState } from 'react';
import { Mail, MapPin } from 'lucide-react';

export const Contact = () => {
  // 1. State untuk melacak status pengiriman
  const [status, setStatus] = useState<'IDLE' | 'LOADING' | 'SUCCESS' | 'ERROR'>('IDLE');

  // 2. Fungsi pengiriman data ke Backend
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('LOADING');

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus('SUCCESS');
        form.reset(); // Kosongkan form setelah berhasil
      } else {
        setStatus('ERROR');
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus('ERROR');
    }
  };

  return (
    <section id="contact" className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-sm font-bold tracking-wider text-[#007ACC] uppercase mb-2">
              Let's Connect
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to collaborate on your next project?
            </h3>
            <p className="text-gray-600 mb-10 text-lg">
              Whether you have a role available, a project in mind, or just want to say hi, feel free
              to drop a message.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-[#007ACC] mr-4 shrink-0 border border-gray-100">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Email</p>
                  <a
                    href="mailto:galihwitra261@gmail.com"
                    className="text-lg font-bold text-gray-900 hover:text-[#007ACC] transition-colors"
                  >
                    galihwitra261@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-[#007ACC] mr-4 shrink-0 border border-gray-100">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Location</p>
                  <p className="text-lg font-bold text-gray-900">Indonesia</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Galih Witradika"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#007ACC] focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="galihwitra261@gmail.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#007ACC] focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Hello, I would like to talk about..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#007ACC] focus:border-transparent transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'LOADING'}
                className="w-full bg-[#007ACC] hover:bg-[#005f9e] disabled:bg-gray-400 text-white py-4 rounded-xl font-bold transition-colors shadow-md cursor-pointer"
              >
                {status === 'LOADING' ? 'Sending Message...' : 'Send Message'}
              </button>

              {/* Umpan Balik Status Pengiriman */}
              {status === 'SUCCESS' && (
                <p className="text-sm text-green-600 text-center font-medium mt-4">
                  ✅ Message sent successfully! Saved to database.
                </p>
              )}
              {status === 'ERROR' && (
                <p className="text-sm text-red-600 text-center font-medium mt-4">
                  ❌ Failed to send message. Make sure the backend server is running.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};