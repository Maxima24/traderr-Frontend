"use client";

import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { BackgroundBeams } from '@/components/ui/background-beams';

export default function AuthPage() {
  const router = useRouter();
  const { role } = router.query;

  const isTrader = role === 'trader';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center relative">
      <BackgroundBeams />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-md"
      >
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">
              {isTrader ? 'Trader Sign Up' : 'Sponsor Registration'}
            </h1>
            <p className="text-gray-300">
              {isTrader 
                ? 'Start your trading journey with allocated capital' 
                : 'Provide capital and grow your investments'
              }
            </p>
          </div>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Create a password"
              />
            </div>

            {isTrader && (
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Trading Experience
                </label>
                <select title='Trading Experience' className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500">
                  <option>Select your experience level</option>
                  <option>Beginner (0-1 years)</option>
                  <option>Intermediate (1-3 years)</option>
                  <option>Advanced (3+ years)</option>
                  <option>Professional</option>
                </select>
              </div>
            )}

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/25"
            >
              Create Account
            </motion.button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-400">
              Already have an account?{' '}
              <button className="text-purple-400 hover:text-purple-300 font-medium">
                Sign In
              </button>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}