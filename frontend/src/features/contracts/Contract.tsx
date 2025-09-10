// import React, { useState } from 'react';
import { 
//   Search, 
//   Bell, 
//   Settings, 
//   Home, 
//   Users, 
//   TrendingUp, 
//   MessageCircle, 
//   FileText, 
//   PieChart, 
//   DollarSign, 
//   BarChart3, 
//   Trophy, 
//   Activity, 
//   HelpCircle, 
//   LogOut,
  Plus 
} from 'lucide-react';

const ContractsPage = () => {
//   const [activeNav, setActiveNav] = useState('Contracts');

 

  const activeContracts = [
    {
      id: 1,
      traderName: 'Lords Daniel',
      traderImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face',
      amount: '$50,000',
      profitShare: '20%',
      duration: '3 months',
      stopLoss: '10%',
      status: 'Active',
      action: 'Message'
    },
    {
      id: 2,
      traderName: 'Escaladizzy',
      traderImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face',
      amount: '$25,000',
      profitShare: '15%',
      duration: '1 months',
      stopLoss: '8%',
      status: 'Active',
      action: 'End Contract'
    }
  ];

  const pastContracts = [
    {
      id: 3,
      traderName: 'Sweet Williams',
      traderImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop&crop=face',
      amount: '$30,000',
      duration: '3 months',
      prevRoi: '+12%',
      referend: 'Completed',
      action: 'Message'
    },
    {
      id: 4,
      traderName: 'Princess Max',
      traderImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b577?w=50&h=50&fit=crop&crop=face',
      amount: '$18,000',
      duration: '1 months',
      finalRoi: '+8%',
      referend: '$50',
      action: 'End Contract'
    }
  ];

  const StatusBadge = ({ status }) => (
    <div className="flex items-center gap-2">
      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
      <span className="text-sm font-medium text-white">{status}</span>
    </div>
  );

  const ActionButton = ({ action, variant = 'primary' }) => {
    const isMessage = action === 'Message';
    return (
      <button 
        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
          isMessage 
            ? 'bg-blue-600 hover:bg-blue-700 text-white'
            : 'bg-transparent border border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white'
        }`}
      >
        {action}
      </button>
    );
  };

  return (
    <div className="flex min-h-screen bg-slate-900 text-white">
      {/* Sidebar */}
      
        

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
    

        {/* Content Area */}
        <main className="flex-1 p-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-semibold">Contracts</h1>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors">
              <Plus size={16} />
              Create New Contract
            </button>
          </div>

          {/* Active Contracts Section */}
          <div className="mb-12">
            <h2 className="text-xl font-semibold mb-6">Active Contracts</h2>
            
            <div className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden">
              {/* Table Header */}
              <div className="grid grid-cols-7 gap-4 p-4 bg-slate-750 border-b border-slate-700 text-sm font-medium text-slate-400">
                <div className="col-span-2">Trader</div>
                <div>Profit Share</div>
                <div>Duration</div>
                <div>Stop-loss</div>
                <div>Status</div>
                <div>Action</div>
              </div>

              {/* Active Contract Rows */}
              {activeContracts.map((contract) => (
                <div key={contract.id} className="grid grid-cols-7 gap-4 p-4 border-b border-slate-700 last:border-b-0 hover:bg-slate-750 transition-colors">
                  <div className="col-span-2 flex items-center gap-3">
                    <img
                      src={contract.traderImage}
                      alt={contract.traderName}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-white">{contract.traderName}</div>
                      <div className="text-sm text-slate-400">{contract.amount}</div>
                    </div>
                  </div>
                  <div className="flex items-center text-white">{contract.profitShare}</div>
                  <div className="flex items-center text-white">{contract.duration}</div>
                  <div className="flex items-center text-white">{contract.stopLoss}</div>
                  <div className="flex items-center">
                    <StatusBadge status={contract.status} />
                  </div>
                  <div className="flex items-center">
                    <ActionButton action={contract.action} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Past Contracts Section */}
          <div>
            <h2 className="text-xl font-semibold mb-6">Past Contracts (History)</h2>
            
            <div className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden">
              {/* Table Header */}
              <div className="grid grid-cols-6 gap-4 p-4 bg-slate-750 border-b border-slate-700 text-sm font-medium text-slate-400">
                <div className="col-span-2">Trader</div>
                <div>Duration</div>
                <div>Prev/RU</div>
                <div>Referend</div>
                <div>Action</div>
              </div>

              {/* Past Contract Rows */}
              {pastContracts.map((contract, index) => (
                <div key={contract.id} className="grid grid-cols-6 gap-4 p-4 border-b border-slate-700 last:border-b-0 hover:bg-slate-750 transition-colors">
                  <div className="col-span-2 flex items-center gap-3">
                    <img
                      src={contract.traderImage}
                      alt={contract.traderName}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-white">{contract.traderName}</div>
                      <div className="text-sm text-slate-400">{contract.amount}</div>
                    </div>
                  </div>
                  <div className="flex items-center text-white">{contract.duration}</div>
                  <div className="flex items-center text-green-400 font-semibold">
                    {index === 0 ? contract.prevRoi : contract.finalRoi}
                  </div>
                  <div className="flex items-center text-white">{contract.referend}</div>
                  <div className="flex items-center">
                    <ActionButton action={contract.action} variant={index === 0 ? 'primary' : 'secondary'} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ContractsPage;