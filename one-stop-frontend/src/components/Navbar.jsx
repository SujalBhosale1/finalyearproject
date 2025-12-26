import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    // Link Helper to reduce repetition
    const NavLink = ({ to, label, mobile = false }) => {
        const isActive = location.pathname === to;
        const baseClasses = mobile
            ? `block pl-3 pr-4 py-2 border-l-4 text-base font-medium`
            : `inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors`;

        const activeClasses = mobile
            ? (isActive ? 'bg-blue-50 border-blue-500 text-blue-700 dark:bg-slate-800 dark:text-blue-400' : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 dark:text-gray-300 dark:hover:bg-slate-700')
            : (isActive ? 'border-blue-500 text-gray-900 dark:text-white dark:border-blue-400' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200');

        return (
            <Link to={to} className={`${baseClasses} ${activeClasses} whitespace-nowrap`}>
                {label}
            </Link>
        );
    };

    return (
        <nav className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50 transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <Link to="/" className="flex-shrink-0 flex items-center gap-2">
                            <img src="/logo.svg" alt="OneStop Logo" className="h-8 w-8" />
                            <span className="text-2xl font-bold text-blue-600 dark:text-blue-400 hidden lg:block">One Stop</span>
                        </Link>
                        {/* Desktop Menu */}
                        <div className="hidden md:ml-6 md:flex md:space-x-6">
                            <NavLink to="/" label="Home" />
                            <NavLink to="/register" label="Register" />
                            <NavLink to="/login" label="Login" />
                            <NavLink to="/dashboard" label="Dashboard" />
                            <NavLink to="/payment" label="Payment" />
                            <NavLink to="/credit" label="Credit" />
                            <NavLink to="/help" label="Help" />
                        </div>
                    </div>

                    <div className="hidden md:ml-6 md:flex md:items-center gap-3">
                        <ThemeToggle />
                        <Link to="/profile" className="p-2 rounded-full text-gray-400 hover:text-gray-500 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                            <User className="h-6 w-6" />
                        </Link>
                    </div>

                    <div className="-mr-2 flex items-center md:hidden gap-4">
                        <ThemeToggle />
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
                    <div className="pt-2 pb-3 space-y-1">
                        <NavLink to="/" label="Home" mobile />
                        <NavLink to="/register" label="Register" mobile />
                        <NavLink to="/login" label="Login" mobile />
                        <NavLink to="/dashboard" label="Dashboard" mobile />
                        <NavLink to="/payment" label="Payment" mobile />
                        <NavLink to="/credit" label="Credit" mobile />
                        <NavLink to="/help" label="Help" mobile />
                        <NavLink to="/profile" label="Profile" mobile />
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
