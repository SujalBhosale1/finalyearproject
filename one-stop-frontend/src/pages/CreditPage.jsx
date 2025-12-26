import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Award } from 'lucide-react';

const CreditPage = () => {
    return (
        <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-900">
            <Navbar />
            <main className="flex-grow flex items-center justify-center">
                <div className="text-center p-8">
                    <div className="w-20 h-20 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Award size={40} />
                    </div>
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Your Credits</h1>
                    <p className="text-slate-500 dark:text-slate-400 max-w-md mx-auto">
                        Earn credits by completing roadmap milestones and redeem them for exclusive rewards.
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default CreditPage;
