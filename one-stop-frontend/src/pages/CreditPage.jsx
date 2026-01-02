import { Award } from 'lucide-react';

const CreditPage = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
            <div className="w-20 h-20 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award size={40} />
            </div>
            <h1 className="text-3xl font-bold text-slate-900 mb-4">Your Credits</h1>
            <p className="text-slate-500 max-w-md mx-auto">
                Earn credits by completing roadmap milestones and redeem them for exclusive rewards.
            </p>
        </div>
    );
};

export default CreditPage;
