import React from 'react';

const EarningsPage = () => {
  const earningsStats = [
    { label: 'Total Earnings', value: '$125,000' },
    { label: 'Pending Payouts', value: '$23,000' },
    { label: 'Withdrawable Balance', value: '$23,000' }
  ];

  const earningsBreakdown = [
    {
      contractId: '#CT-1023',
      liquidityHolder: 'Lords Daniel',
      profitEarned: '$1,000',
      status: 'Pending payout',
      statusColor: 'text-yellow-400'
    },
    {
      contractId: '#CT-1047',
      liquidityHolder: 'Princess Max',
      profitEarned: '$240',
      status: 'Withdrawn',
      statusColor: 'text-green-400'
    },
    {
      contractId: '#CT-1018',
      liquidityHolder: 'Sweet Williams',
      profitEarned: '$500',
      status: 'Completed',
      statusColor: 'text-blue-400'
    },
    {
      contractId: '#CT-1056',
      liquidityHolder: 'Escaladizzy',
      profitEarned: '$1,250',
      status: 'Completed',
      statusColor: 'text-blue-400'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white p-8">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-semibold mb-8">Earnings</h1>

        {/* Earnings Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {earningsStats.map((stat, index) => (
            <div key={index} className="bg-slate-800 border border-slate-700 rounded-xl p-6">
              <div className="text-slate-400 text-sm mb-2">{stat.label}</div>
              <div className="text-3xl font-bold text-white">{stat.value}</div>
            </div>
          ))}
        </div>

        {/* Earning Breakdown Section */}
        <div>
          <h2 className="text-xl font-semibold mb-6">Earning Breakdown</h2>
          
          <div className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-4 gap-6 p-4 bg-slate-750 border-b border-slate-700 text-sm font-medium text-slate-400">
              <div>Contract ID</div>
              <div>Liquidity Holder</div>
              <div>Profit Earned</div>
              <div>Status</div>
            </div>

            {/* Breakdown Rows */}
            {earningsBreakdown.map((item, index) => (
              <div 
                key={index} 
                className="grid grid-cols-4 gap-6 p-4 border-b border-slate-700 last:border-b-0 hover:bg-slate-750 transition-colors"
              >
                <div className="text-white font-medium">{item.contractId}</div>
                <div className="text-white">{item.liquidityHolder}</div>
                <div className="text-white font-semibold">{item.profitEarned}</div>
                <div className={`font-medium ${item.statusColor}`}>{item.status}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Withdraw to Wallet Button */}
        <div className="mt-8 flex justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200">
            Withdraw to Wallet
          </button>
        </div>
      </div>
    </div>
  );
};

export default EarningsPage;