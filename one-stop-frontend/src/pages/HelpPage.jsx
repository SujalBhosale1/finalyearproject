import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { HelpCircle } from 'lucide-react';

const HelpPage = () => {
    return (
        <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-900">
            <Navbar />
            <main className="flex-grow flex items-center justify-center">
                <div className="text-center p-8">
                    <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <HelpCircle size={40} />
                    </div>
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Help Center</h1>
                    <p className="text-slate-500 dark:text-slate-400 max-w-md mx-auto">
                        Need assistance? Browse our FAQs or chat with our AI Assistant for instant help.
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default HelpPage;
