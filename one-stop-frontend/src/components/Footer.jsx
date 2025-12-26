const Footer = () => {
    return (
        <footer className="bg-white border-t border-slate-200 mt-auto">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <h3 className="text-lg font-bold text-slate-800">One Stop Recommendation System</h3>
                        <p className="text-sm text-slate-500">Helping students find their path.</p>
                    </div>
                    <div className="text-center md:text-right">
                        <p className="text-sm text-slate-500">© 2024 One Stop Project</p>
                        <p className="text-xs text-slate-400 mt-1">Final Year Engineering Project</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
