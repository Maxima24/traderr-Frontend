"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Button } from "@/shared/ui/Button";
import { Mail, Apple, Chrome } from "lucide-react";

export default function TraderAuth() {
  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add authentication logic here
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1D1C20] via-[#1D1C20] to-[#0C0C0D] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-[#1E293B]/80 backdrop-blur-sm p-8 rounded-xl w-full max-w-md border border-[#334155]"
      >
        <h1 className="text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#6366F1] via-[#9333EA] to-[#EC4899]">
          {isLogin ? "Log in to Traderr" : "Sign Up to Traderr"}
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="email"
              id="email"
              className="block w-full px-4 py-3 bg-[#1E293B] border border-[#334155] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] transition-colors"
              placeholder="Username or Email"
              required
            />
          </div>

          <div>
            <input
              type="password"
              id="password"
              className="block w-full px-4 py-3 bg-[#1E293B] border border-[#334155] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] transition-colors"
              placeholder="Password"
              required
            />
          </div>

          {!isLogin && (
            <div>
              <input
                type="password"
                id="confirmPassword"
                className="block w-full px-4 py-3 bg-[#1E293B] border border-[#334155] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] transition-colors"
                placeholder="Confirm Password"
                required
              />
            </div>
          )}

          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-colors"
          >
            Continue
          </Button>
        </form>

        <div className="mt-6 relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#334155]"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-[#1E293B] text-gray-400">or</span>
          </div>
        </div>

        <div className="mt-6 space-y-4">
          <button
            type="button"
            className="w-full flex items-center justify-center px-4 py-3 border border-[#334155] rounded-lg text-white hover:bg-[#1E293B] transition-colors"
          >
            <Chrome className="w-5 h-5 mr-3" />
            Continue with Google
          </button>

          <button
            type="button"
            className="w-full flex items-center justify-center px-4 py-3 border border-[#334155] rounded-lg text-white hover:bg-[#1E293B] transition-colors"
          >
            <Apple className="w-5 h-5 mr-3" />
            Continue with Apple
          </button>
        </div>

        <p className="mt-6 text-center text-gray-400 text-sm">
          {isLogin
            ? "Don't have a Traderr account? "
            : "Already have an account? "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-[#3B82F6] hover:text-[#60A5FA] focus:outline-none transition-colors"
          >
            {isLogin ? "Sign Up" : "Log in"}
          </button>
        </p>
      </motion.div>
    </div>
  );
}
