import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ProgressPage = () => {
    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            <Navbar />
            <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10">
                <h1 className="text-2xl font-bold text-slate-900 mb-6">My Progress</h1>

                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 text-center">
                    <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                        🚀
                    </div>
                    <h2 className="text-xl font-semibold text-slate-800 mb-2">Coming Soon</h2>
                    <p className="text-slate-500 max-w-md mx-auto">
                        Detailed progress tracking, course completion certificates, and application history will appear here.
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ProgressPage;
