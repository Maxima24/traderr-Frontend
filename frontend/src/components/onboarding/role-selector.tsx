"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { WalletModal } from "@/shared/wallet/WalletModal";

export function RoleSelector() {
  const [selectedRole, setSelectedRole] = useState<"trader" | "sponsor" | null>(
    null
  );
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);
  const router = useRouter();

  const handleRoleSelect = (role: "trader" | "sponsor") => {
    setSelectedRole(role);

    // Navigate based on role selection
    if (role === "trader") {
      router.push("/auth/trader", { scroll: false });
    } else if (role === "sponsor") {
      setIsWalletModalOpen(true);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#00000040]/80 backdrop-blur-sm rounded-2xl p-8 border border-[#2D2B2F] hover:border-[#6366F1]/50 transition-colors duration-300"
      >
        <h3 className="text-2xl font-bold text-center mb-8 bg-clip-text text-white">
          Join as...
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleRoleSelect("trader")}
            className="group relative p-6 bg-[#1E293B] hover:bg-[#1E293B]/80 rounded-xl text-white font-semibold text-lg transition-all duration-300 border border-[#334155] hover:border-[#3B82F6]"
          >
            <div className="text-center">
              <div className="text-2xl mb-2">📈</div>
              <div>Trader</div>
              <div className="text-sm font-normal opacity-90 mt-1">
                I want to trade with provided capital
              </div>
            </div>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleRoleSelect("sponsor")}
            className="group relative p-6 bg-[#1E293B] hover:bg-[#1E293B]/80 rounded-xl text-white font-semibold text-lg transition-all duration-300 border border-[#334155] hover:border-[#3B82F6]"
          >
            <div className="text-center">
              <div className="text-2xl mb-2">💼</div>
              <div>Sponsor</div>
              <div className="text-sm font-normal opacity-90 mt-1">
                I want to provide capital for trading
              </div>
            </div>
          </motion.button>
        </div>

        <AnimatePresence>
          {selectedRole && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-6 p-4 bg-[#2D2B2F]/50 rounded-xl border border-[#6366F1]/20"
            >
              <p className="text-gray-300 text-sm text-center">
                {selectedRole === "trader"
                  ? "Redirecting to trader signup..."
                  : "Please connect your wallet to continue"}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Wallet Modal */}
        <WalletModal
          isOpen={isWalletModalOpen}
          onClose={() => setIsWalletModalOpen(false)}
        />
      </motion.div>
    </div>
  );
}
