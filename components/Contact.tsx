import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('https://formspree.io/f/xgoknnze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <footer id="contact" className="bg-black pt-24 pb-12 relative overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />

        <motion.div
          className="absolute top-10 left-0 w-full overflow-hidden opacity-5 pointer-events-none select-none"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 0.05 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
            <h1 className="text-[20vw] font-bold text-white whitespace-nowrap leading-none">
                CONNECT
            </h1>
        </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-20">

          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Ready to scale?
            </motion.h2>
            <motion.p
              className="text-gray-400 text-lg max-w-md mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              I am available for new opportunities in full-stack development. Let's build something robust together.
            </motion.p>

            <div className="space-y-4">
              <a
                href="mailto:ricardomacedodev@gmail.com"
                className="flex items-center gap-4 text-gray-300 hover:text-purple-400 hover:translate-x-1 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                    <Mail size={18} />
                </div>
                <span className="text-lg">ricardomacedodev@gmail.com</span>
              </a>
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                    <MapPin size={18} />
                </div>
                <span className="text-lg">Joinville, SC, Brazil · Remote</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="w-full md:w-1/2 max-w-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <motion.div
                className="grid grid-cols-2 gap-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm text-gray-400 uppercase font-bold tracking-wider">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="your name"
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-purple-500 focus:bg-white/10 transition-all duration-300"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm text-gray-400 uppercase font-bold tracking-wider">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your email"
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-purple-500 focus:bg-white/10 transition-all duration-300"
                  />
                </div>
              </motion.div>

              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <label htmlFor="message" className="text-sm text-gray-400 uppercase font-bold tracking-wider">Message</label>
                <textarea
                  rows={4}
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-purple-500 focus:bg-white/10 transition-all duration-300 resize-none"
                ></textarea>
              </motion.div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-4 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700 hover:scale-[1.02] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 shadow-lg shadow-purple-900/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:translate-y-0 flex items-center justify-center gap-2"
              >
                {status === 'loading' && <Loader2 size={20} className="animate-spin" />}
                {status === 'success' && <CheckCircle size={20} />}
                {status === 'error' && <AlertCircle size={20} />}
                {status === 'idle' && 'Send Message'}
                {status === 'loading' && 'Sending...'}
                {status === 'success' && 'Sent!'}
                {status === 'error' && 'Error. Try again.'}
              </button>
            </form>
          </motion.div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Ricardo Macedo. All rights reserved.</p>
          <div className="flex gap-6">
            <a
              href="https://github.com/maccedofilho"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-white hover:-translate-y-0.5 transition-all duration-300"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ricardomacedofilho/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-white hover:-translate-y-0.5 transition-all duration-300"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
