"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FloatingNavbar } from "@/components/ui/floating-navbar";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { NewTradingScene } from "@/components/three/new-trading-scene";
import { RoleSelector } from "@/components/onboarding/role-selector";
import { Card, CardContent } from "@/components/ui/card";
import { WalletModal } from "@/shared/wallet/WalletModal";
import { Button } from "@/shared/ui/Button";
import { DollarSign, LineChart, Shield, Wallet } from "lucide-react";

export default function LandingPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);

  useEffect(() => {
    // Simulate loading time for assets
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const navItems = [
    { name: "Home", link: "#home" },
    { name: "Features", link: "#features" },
    { name: "How It Works", link: "#how-it-works" },
    { name: "Get Started", link: "#get-started" },
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#020817] via-[#0F1629] to-[#0F1629] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="w-16 h-16 mb-8 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#1E3A8A]"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#0EA5E9] via-[#2563EB] to-[#1E3A8A]"
          >
            TradeConnect
          </motion.div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#020617] relative">
      <FloatingNavbar navItems={navItems} />
      <BackgroundBeams />

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1D1C20]/80 to-[#0F172A] z-10" />
          <NewTradingScene />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center lg:text-left lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div className="lg:pr-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-[#0EA5E9]/20 to-[#1E3A8A]/20 rounded-lg blur-xl" />
                <motion.h1
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="relative text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200"
                >
                  Grow your capital by connecting with trusted traders
                </motion.h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl mb-8 text-gray-300 relative"
              >
                <span className="relative inline-block">
                  <span className="absolute inset-0 bg-gradient-to-r from-[#0EA5E9]/10 to-[#1E3A8A]/10 blur-lg" />
                  <span className="relative">
                    Secure • Audited • Non-Custodial
                  </span>
                </span>
              </motion.p>
            </div>

            {/* Right Column - Role Selector */}
            <div className="lg:pl-8 mt-12 lg:mt-0">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <RoleSelector />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Wallet Modal */}
      <WalletModal
        isOpen={isWalletModalOpen}
        onClose={() => setIsWalletModalOpen(false)}
      />

      {/* Features Section */}
      <section id="features" className="py-32 px-4 relative z-10 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center text-white relative">
              Powerful Features for Modern Trading
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#0EA5E9] to-[#1E3A8A] rounded-lg blur opacity-10 group-hover:opacity-20 transition duration-500" />
                  <Card className="relative bg-[#1E293B] border-[#1E3A8A]/20 group-hover:border-transparent transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="p-3 bg-[#0F172A] rounded-xl w-fit mb-4">
                        <feature.icon className="w-8 h-8 text-[#38BDF8]" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300">{feature.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        id="how-it-works"
        className="py-32 px-4 relative z-10 bg-[#0F172A]"
      >
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center text-white relative">
              How It Works
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#0EA5E9] to-[#1E3A8A] rounded-lg blur opacity-10 group-hover:opacity-20 transition duration-500" />
                <div className="relative bg-[#1E293B] border border-[#334155]/20 rounded-lg p-6 group-hover:border-transparent transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#0EA5E9] to-[#1E3A8A] rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 shadow-sm shadow-[#0EA5E9]/10 group-hover:shadow-[#1E3A8A]/20 transition-all duration-300">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section
        id="get-started"
        className="py-32 px-4 relative z-10 bg-[#0F172A]"
      >
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative mb-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white relative">
              Ready to Start Your Journey?
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 mb-12 relative"
          >
            Join thousands of traders and sponsors already growing together on
            our platform.
          </motion.p>{" "}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <RoleSelector />
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Sample data for features and steps
const features = [
  {
    title: "Capital Allocation",
    description:
      "Get access to trading capital based on your proven track record and strategy.",
    icon: DollarSign,
  },
  {
    title: "Performance Tracking",
    description:
      "Real-time monitoring and transparent reporting for both traders and sponsors.",
    icon: LineChart,
  },
  {
    title: "Risk Management",
    description:
      "Advanced risk controls and drawdown protection for secure trading.",
    icon: Shield,
  },
];

const steps = [
  {
    title: "Choose Your Role",
    description:
      "Select whether you are a Trader or Sponsor based on your goals.",
  },
  {
    title: "Create Profile",
    description:
      "Set up your profile with your trading strategy or investment preferences.",
  },
  {
    title: "Get Verified",
    description:
      "Complete our verification process to ensure platform security.",
  },
  {
    title: "Start Trading",
    description:
      "Begin your journey with matched capital or trading opportunities.",
  },
];
