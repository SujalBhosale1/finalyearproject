import { Link } from 'react-router-dom';
import FeatureCard from '../components/FeatureCard';
import FAQ from '../components/FAQ';
import { Compass, BookOpen, Briefcase, Map, Star, Users, TrendingUp, Zap } from 'lucide-react';

const LandingPage = () => {
    return (
        <div className="flex flex-col font-sans">
            {/* Hero Section */}
            <div className="relative bg-white overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute inset-y-0 right-0 w-1/2 bg-slate-50 rounded-bl-[100px] hidden lg:block"></div>
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold mb-6 border border-blue-100">
                            <Star className="h-4 w-4 mr-2" />
                            <span>#1 Career Guidance Platform for Engineers</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
                            Build Your Future with <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Precision</span>
                        </h1>
                        <p className="text-xl text-slate-500 mb-10 leading-relaxed">
                            Discover your perfect engineering path, bridge skill gaps, and land top-tier internships with our AI-powered recommendation engine.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                            <Link to="/register" className="px-8 py-4 rounded-xl bg-blue-600 text-white font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:shadow-blue-500/30 transform hover:-translate-y-1">
                                Get Started Free
                            </Link>
                            <Link to="/flow" className="px-8 py-4 rounded-xl bg-white text-slate-700 font-bold text-lg border border-slate-200 hover:bg-slate-50 transition-colors">
                                Explore the Flow
                            </Link>
                        </div>
                        <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 text-slate-400">
                            <div className="flex items-center gap-2">
                                <Users className="h-5 w-5" />
                                <span className="font-semibold">50k+ Students</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Briefcase className="h-5 w-5" />
                                <span className="font-semibold">1k+ Partners</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center mb-16">
                    <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Features</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                        Everything needed for your success
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
                        A comprehensive toolkit designed to guide you through every stage of your engineering journey.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <FeatureCard
                        title="Smart Guidance"
                        description="AI-driven suggestions for engineering branches based on your unique profile."
                        icon={Compass}
                        color="blue"
                    />
                    <FeatureCard
                        title="Skill Mastery"
                        description="Personalized learning paths to help you master in-demand industry skills."
                        icon={BookOpen}
                        color="green"
                    />
                    <FeatureCard
                        title="Internship Hub"
                        description="Exclusive access to internships and training programs for freshers."
                        icon={Briefcase}
                        color="purple"
                    />
                    <FeatureCard
                        title="Career Roadmap"
                        description="Visual timeline to track your progress and stay ahead of the curve."
                        icon={Map}
                        color="orange"
                    />
                    {/* New Option Cards */}
                    <FeatureCard
                        title="Market Trends"
                        description="Real-time insights into hiring trends and salary benchmarks."
                        icon={TrendingUp}
                        color="red"
                    />
                    <FeatureCard
                        title="Fast Track"
                        description="Accelerated learning modules for high-performers."
                        icon={Zap}
                        color="yellow"
                    />
                    <FeatureCard
                        title="Community"
                        description="Connect with peers and mentors in your field."
                        icon={Users}
                        color="teal"
                    />
                    <FeatureCard
                        title="Certification"
                        description="Earn verified certificates to boost your resume."
                        icon={Star}
                        color="indigo"
                    />
                </div>
            </div>

            {/* FAQ Section */}
            <FAQ />

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white opacity-10 rounded-full blur-3xl"></div>
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <h2 className="text-4xl font-bold text-white mb-6">Ready to shape your future?</h2>
                    <p className="text-blue-100 mb-10 text-xl">Join thousands of students making informed career decisions today.</p>
                    <Link to="/register" className="inline-block px-10 py-4 bg-white text-blue-600 font-bold rounded-full hover:bg-blue-50 transition-colors shadow-2xl">
                        Join Now
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
