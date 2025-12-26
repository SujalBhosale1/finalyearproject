import { Link } from 'react-router-dom';
import FeatureCard from '../components/FeatureCard';
import { Compass, BookOpen, Briefcase, Map } from 'lucide-react';

const LandingPage = () => {
    return (
        <div className="bg-slate-50 min-h-screen flex flex-col">
            {/* Hero Section */}
            <div className="bg-white border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-4">
                        Find Your Path in <span className="text-blue-600">Engineering</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-xl text-slate-500 mb-8">
                        AI-driven guidance to choose the right branch, master the right skills, and land your dream internship.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link to="/login" className="px-8 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-blue-500/30">
                            Get Started
                        </Link>
                        <Link to="/profile" className="px-8 py-3 rounded-lg bg-white text-slate-700 font-semibold border border-slate-300 hover:bg-slate-50 transition-colors">
                            View Profile
                        </Link>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900">Why One Stop?</h2>
                    <p className="mt-2 text-slate-500">Everything you need to kickstart your engineering journey.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <FeatureCard
                        title="Career Guidance"
                        description="Get personalized engineering branch recommendations based on your academic strengths and interests."
                        icon={Compass}
                        color="blue"
                    />
                    <FeatureCard
                        title="Skill Analysis"
                        description="Identify skill gaps and get curated resources to master modern technologies."
                        icon={BookOpen}
                        color="green"
                    />
                    <FeatureCard
                        title="Internships"
                        description="Find beginner-friendly internships and training programs tailored to your profile."
                        icon={Briefcase}
                        color="purple"
                    />
                    <FeatureCard
                        title="Personal Roadmap"
                        description="Follow a month-by-month learning path designed just for you."
                        icon={Map}
                        color="orange"
                    />
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-blue-600 py-16">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">Ready to shape your future?</h2>
                    <p className="text-blue-100 mb-8 text-lg">Join thousands of students making informed career decisions today.</p>
                    <Link to="/register" className="inline-block px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors">
                        Join Now
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
