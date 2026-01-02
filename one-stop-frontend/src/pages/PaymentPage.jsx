import { CreditCard } from 'lucide-react';

const PaymentPage = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
            <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CreditCard size={40} />
            </div>
            <h1 className="text-3xl font-bold text-slate-900 mb-4">Payment Gateway</h1>
            <p className="text-slate-500 max-w-md mx-auto">
                Secure payment integration for premium courses and consultancy is coming soon.
            </p>
        </div>
    );
};

export default PaymentPage;
