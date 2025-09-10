"use client"

import React from 'react';
import { TrendingUp, TrendingDown, AlertCircle } from 'lucide-react';

const activeContracts = [
  { name: "Adedokun Daniel", funds: "$50,000", stopLoss: "-10%", duration: "30 Days" },
  { name: "Escaladizzy", funds: "$15,000", stopLoss: "-5%", duration: "60 Days" },
  { name: "Sweet Williams", funds: "$10,000", stopLoss: "-15%", duration: "60 Days" },
  { name: "Princess Max", funds: "$12,000", stopLoss: "-10%", duration: "60 Days" },
];

const notifications = [
  { type: 'success', icon: TrendingUp, message: 'LORDS hit +12% today', color: 'text-green-500' },
  { type: 'info', icon: AlertCircle, message: 'Contract with Sweet Williams ends in 3 days', color: 'text-blue-500' },
  { type: 'warning', icon: TrendingDown, message: 'Escaladizzy updated stop-loss to -5%', color: 'text-yellow-500' },
];

export default function DashboardPage() {
  return (
    <div className="w-full max-w-none space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        <div className="lg:col-span-2">
          <h1 className="text-2xl md:text-3xl font-bold text-white">Welcome back, Daniel</h1>
          <p className="text-gray-400 mt-1">Here's what's happening with your investments today.</p>
        </div>
        
        <div className="bg-[#1a1d29] rounded-xl p-4 md:p-6 w-full">
          <div className="space-y-4">
            <div>
              <p className="text-gray-400 text-sm">Available Balance</p>
              <p className="text-2xl md:text-3xl font-bold text-white">$12,500</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Earnings</p>
              <p className="text-lg md:text-xl font-semibold text-green-500">$1,250</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 bg-[#1a1d29] rounded-xl p-4 md:p-6">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
            <h2 className="text-lg md:text-xl font-semibold text-white">Active Contracts</h2>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors whitespace-nowrap">
              + New Contract
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="text-left text-gray-400 text-xs md:text-sm border-b border-gray-700">
                  <th className="pb-3 font-medium">Trader Name</th>
                  <th className="pb-3 font-medium">Funds Allocated</th>
                  <th className="pb-3 font-medium">Stop-Loss</th>
                  <th className="pb-3 font-medium">Duration</th>
                </tr>
              </thead>
              <tbody className="text-white">
                {activeContracts.map((contract, index) => (
                  <tr key={index} className="border-b border-gray-800">
                    <td className="py-3 md:py-4 text-sm md:text-base font-medium">{contract.name}</td>
                    <td className="py-3 md:py-4 text-sm md:text-base">{contract.funds}</td>
                    <td className="py-3 md:py-4">
                      <span className="text-red-400 text-sm md:text-base">{contract.stopLoss}</span>
                    </td>
                    <td className="py-3 md:py-4 text-gray-400 text-sm md:text-base">{contract.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-[#1a1d29] rounded-xl p-4 md:p-6">
          <h2 className="text-lg md:text-xl font-semibold text-white mb-6">Notifications</h2>
          <div className="space-y-3 md:space-y-4">
            {notifications.map((notification, index) => {
              const Icon = notification.icon;
              return (
                <div key={index} className="flex items-start gap-3 p-3 bg-[#252836] rounded-lg">
                  <Icon className={`h-4 w-4 md:h-5 md:w-5 mt-0.5 flex-shrink-0 ${notification.color}`} />
                  <p className="text-xs md:text-sm text-gray-300 leading-relaxed">{notification.message}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="bg-[#1a1d29] rounded-xl p-4 md:p-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
          <h2 className="text-lg md:text-xl font-semibold text-white">Performance Overview</h2>
          <div className="flex gap-2 self-start sm:self-auto">
            <button className="px-3 py-1 text-xs md:text-sm text-gray-400 hover:text-white transition-colors">
              Past
            </button>
            <button className="px-3 py-1 text-xs md:text-sm bg-blue-600 text-white rounded-lg">
              Analysts Forecasts
            </button>
          </div>
        </div>
        
        <div className="h-48 md:h-64 bg-[#252836] rounded-lg flex items-center justify-center mb-6">
          <p className="text-gray-500 text-sm md:text-base">Chart visualization would go here</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-xs md:text-sm">Revenue</p>
            <p className="text-white font-semibold text-sm md:text-base">AUS$35.6K</p>
          </div>
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-xs md:text-sm">Earnings</p>
            <p className="text-white font-semibold text-sm md:text-base">AUS$11.10K</p>
          </div>
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-xs md:text-sm">Free Cash Flow</p>
            <p className="text-white font-semibold text-sm md:text-base">AUS$9.10K</p>
          </div>
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-xs md:text-sm">Cash From Op</p>
            <p className="text-white font-semibell text-sm md:text-base">AUS$7.80K</p>
          </div>
        </div>
      </div>
    </div>
  );
}