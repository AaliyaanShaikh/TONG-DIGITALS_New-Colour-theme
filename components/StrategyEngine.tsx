
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Sparkles, Loader2, BrainCircuit } from 'lucide-react';
import { getMarketingStrategy } from '../services/geminiService';

const StrategyEngine: React.FC = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    setLoading(true);
    const strategy = await getMarketingStrategy(input);
    setResult(strategy);
    setLoading(false);
  };

  return (
    <section id="strategy" className="py-24 px-6 relative">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <h2 className="text-5xl font-bold leading-tight">
                THE <span className="text-[#DB6923]">INSIGHT</span> ENGINE
              </h2>
              <p className="text-[#EFEEEA]/60 text-lg">
                Vantage uses advanced neural models to simulate market reactions before we even design a pixel. Give us your brand vision, and our AI will outline a premium strategy in seconds.
              </p>
              
              <form onSubmit={handleSubmit} className="relative mt-12">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Describe your brand or vision..."
                  className="w-full glass rounded-2xl py-6 px-8 pr-16 focus:outline-none focus:ring-2 focus:ring-[#DB6923] text-lg transition-all"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 orange-gradient rounded-xl flex items-center justify-center hover:scale-110 transition-transform disabled:opacity-50"
                >
                  {loading ? <Loader2 className="animate-spin" /> : <Send size={20} />}
                </button>
              </form>

              <div className="flex flex-wrap gap-4 mt-8">
                {['Luxury Fashion', 'Eco-Tech Startup', 'Artisan Coffee', 'Global Finance'].map((tag) => (
                  <button 
                    key={tag}
                    onClick={() => setInput(tag)}
                    className="px-4 py-2 rounded-full border border-white/10 text-xs hover:border-[#DB6923] hover:text-[#DB6923] transition-all"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2 min-h-[400px]">
            <AnimatePresence mode="wait">
              {loading ? (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full h-full glass rounded-3xl flex flex-col items-center justify-center p-12 text-center"
                >
                  <BrainCircuit size={64} className="text-[#DB6923] animate-pulse mb-6" />
                  <p className="text-xl font-medium">Analyzing brand DNA...</p>
                  <p className="text-[#EFEEEA]/40 mt-2 text-sm italic">Simulating market trends and audience archetypes</p>
                </motion.div>
              ) : result ? (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="w-full h-full glass rounded-3xl p-10 border border-[#DB6923]/30 overflow-y-auto max-h-[500px]"
                >
                  <div className="flex items-center gap-3 mb-6 text-[#DB6923]">
                    <Sparkles size={24} />
                    <span className="font-bold tracking-widest text-sm uppercase">AI Strategy Generated</span>
                  </div>
                  <div className="prose prose-invert max-w-none prose-orange">
                    <div className="whitespace-pre-wrap leading-relaxed text-[#EFEEEA]/80 font-light">
                      {result}
                    </div>
                  </div>
                  <button 
                    onClick={() => setResult(null)}
                    className="mt-8 text-sm text-[#DB6923] hover:underline"
                  >
                    Generate another strategy
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="w-full h-full rounded-3xl border-2 border-dashed border-white/10 flex flex-col items-center justify-center p-12 text-center text-[#EFEEEA]/20"
                >
                  <BrainCircuit size={48} className="mb-4" />
                  <p className="text-xl">Waiting for brand input</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategyEngine;
