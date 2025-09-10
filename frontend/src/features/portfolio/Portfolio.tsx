// import React, { useState } from 'react';
// import { 
//   Search, 
//   Bell, 
//   Settings, 
// //   Home, 
// //   Users, 
// //   TrendingUp, 
// //   MessageCircle, 
// //   FileText, 
// //   PieChart, 
// //   DollarSign, 
// //   BarChart3, 
// //   Trophy, 
// //   Activity, 
// //   HelpCircle, 
// //   LogOut 
// } from 'lucide-react';

const PortfolioPage = () => {
//   const [activeNav, setActiveNav] = useState('Portfolio');

//   const navItems = [
//     { icon: Home, label: 'Dashboard' },
//     { icon: Users, label: 'Traders' },
//     { icon: TrendingUp, label: 'Market' },
//     { icon: MessageCircle, label: 'Message' },
//     { icon: FileText, label: 'Contracts' },
//     { icon: PieChart, label: 'Portfolio' },
//     { icon: DollarSign, label: 'Earnings' },
//     { icon: BarChart3, label: 'Transactions' },
//     { icon: Trophy, label: 'Leaderboard' },
//     { icon: Activity, label: 'Analytics' },
//     { icon: Users, label: 'Community' },
//     { icon: Settings, label: 'Settings' },
//     { icon: HelpCircle, label: 'Support' },
//     { icon: LogOut, label: 'Logout' }
//   ];

  const portfolioStats = [
    { label: 'Total Balance', value: '$250,000' },
    { label: 'Funds Allocated', value: '$185,000' },
    { label: 'Available to Withdraw', value: '$65,000' }
  ];

  const activeContracts = [
    {
      id: 1,
      traderName: 'Lords Daniel',
      traderImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
      amount: '$50,000',
      details: [
        { label: 'Allocated Funds', value: '$50,000' },
        { label: 'Duration', value: '3 months' }
      ]
    },
    {
      id: 2,
      traderName: 'Princess Max',
      traderImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b577?w=40&h=40&fit=crop&crop=face',
      amount: '$85,000',
      details: [
        { label: 'Current ROI', value: '+8.6%', positive: true },
        { label: 'Duration', value: '10%' }
      ]
    },
    {
      id: 3,
      traderName: 'Escaladizzy',
      traderImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
      amount: '$50,000',
      details: [
        { label: 'Current ROI', value: '+8.1%', positive: true },
        { label: 'Stoploss', value: '10%' }
      ]
    }
  ];

  const ChartPlaceholder = () => (
    <div className="relative w-full h-16 bg-transparent opacity-30 rounded mb-4 overflow-hidden">
      <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-green-500 transform -translate-y-1/2 rounded-full"></div>
    </div>
  );

  return (
    <div className="flex min-h-screen bg-transparent text-white">
      {/* Sidebar */}
   

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
      

        {/* Content Area */}
        <main className="flex-1 p-8">
          <h1 className="text-3xl font-semibold mb-8">Portfolio</h1>

          {/* Portfolio Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {portfolioStats.map((stat, index) => (
              <div key={index} className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                <div className="text-slate-400 text-sm mb-2">{stat.label}</div>
                <div className="text-3xl font-bold text-white">{stat.value}</div>
              </div>
            ))}
          </div>

          {/* Active Contracts */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-6">Active Contracts</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {activeContracts.map((contract) => (
                <div 
                  key={contract.id} 
                  className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:transform hover:-translate-y-1 transition-all duration-200 hover:shadow-xl"
                >
                  {/* Trader Info */}
                  <div className="flex items-center gap-3 mb-5">
                    <img
                      src={contract.traderImage}
                      alt={contract.traderName}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="font-semibold">{contract.traderName}</div>
                  </div>

                  {/* Contract Amount */}
                  <div className="text-2xl font-bold mb-4">{contract.amount}</div>

                  {/* Contract Details */}
                  <div className="grid grid-cols-2 gap-4 mb-5">
                    {contract.details.map((detail, index) => (
                      <div key={index}>
                        <div className="text-slate-400 text-xs mb-1">{detail.label}</div>
                        <div className={`font-semibold ${detail.positive ? 'text-green-400' : 'text-white'}`}>
                          {detail.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Chart Placeholder */}
                  <ChartPlaceholder />
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PortfolioPage;