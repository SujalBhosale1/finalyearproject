import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RecommendationCard from '../components/RecommendationCard';
import InternshipCard from '../components/InternshipCard';
import SkillBadge from '../components/SkillBadge';
import RoadmapTimeline from '../components/RoadmapTimeline';
import StatsOverview from '../components/StatsOverview';
import ActivityFeed from '../components/ActivityFeed';
import { engineeredData } from '../data/dummyData';
import { Lightbulb, Target, Briefcase, TrendingUp, Calendar, BookOpen, ExternalLink } from 'lucide-react';

const DashboardPage = () => {
    return (
        <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
            <Navbar />
            <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 space-y-8">

                {/* Header */}
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
                    <p className="text-slate-500">Welcome back, Student. Here are your personalized insights.</p>
                </div>

                {/* Stats Overview */}
                <StatsOverview />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Main Content Area - Left 2 Columns */}
                    <div className="lg:col-span-2 space-y-8">

                        {/* Section 1: Recommended Branches */}
                        <section>
                            <div className="flex items-center gap-2 mb-4">
                                <Lightbulb className="text-yellow-500 h-5 w-5" />
                                <h2 className="text-xl font-bold text-slate-800">Top Branch Recommendations</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {engineeredData.branches.map((branch, idx) => (
                                    <RecommendationCard
                                        key={idx}
                                        branch={branch.branch}
                                        percentage={branch.percentage}
                                        reason={branch.reason}
                                    />
                                ))}
                            </div>
                        </section>

                        {/* Section: Roadmap */}
                        <section className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                            <div className="flex items-center gap-2 mb-6">
                                <TrendingUp className="text-blue-500 h-5 w-5" />
                                <h2 className="text-lg font-bold text-slate-800">Your Personalized Roadmap</h2>
                            </div>
                            <RoadmapTimeline steps={engineeredData.roadmap} />
                        </section>

                        {/* Section: Internships */}
                        <section>
                            <div className="flex items-center gap-2 mb-4">
                                <Briefcase className="text-purple-500 h-5 w-5" />
                                <h2 className="text-xl font-bold text-slate-800">Recommended Internships</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {engineeredData.internships.map((internship) => (
                                    <InternshipCard key={internship.id} {...internship} />
                                ))}
                            </div>
                        </section>

                    </div>

                    {/* Sidebar - Right Column */}
                    <div className="space-y-8">

                        {/* Activity Feed */}
                        <ActivityFeed />

                        {/* Skill Gap Analysis - Moved to Sidebar for better layout */}
                        <section className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                            <div className="flex items-center gap-2 mb-6">
                                <Target className="text-red-500 h-5 w-5" />
                                <h2 className="text-lg font-bold text-slate-800">Skill Gap Analysis</h2>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Required Skills</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {engineeredData.skills.required.map(skill => (
                                            <SkillBadge key={skill} skill={skill} />
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Missing / To Learn</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {engineeredData.skills.missing.map(skill => (
                                            <SkillBadge key={skill} skill={skill} missing={true} />
                                        ))}
                                    </div>
                                </div>

                                <div className="bg-slate-50 p-4 rounded-lg">
                                    <p className="text-xs text-slate-600">
                                        <strong>Recommendation:</strong> Focus on Data Structures and key algorithms to improve your placement chances.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Upcoming Events/Deadlines */}
                        <section className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                            <div className="flex items-center gap-2 mb-4">
                                <Calendar className="text-orange-500 h-5 w-5" />
                                <h2 className="text-lg font-bold text-slate-800">Upcoming Deadlines</h2>
                            </div>
                            <div className="space-y-4">
                                <div className="border-b border-slate-100 pb-3 last:border-0 last:pb-0">
                                    <p className="text-sm font-semibold text-slate-900">Infosys Hackathon</p>
                                    <p className="text-xs text-slate-500">Register by Oct 15</p>
                                </div>
                                <div className="border-b border-slate-100 pb-3 last:border-0 last:pb-0">
                                    <p className="text-sm font-semibold text-slate-900">Semester Exam Form</p>
                                    <p className="text-xs text-slate-500">Submit by Oct 20</p>
                                </div>
                            </div>
                        </section>

                        {/* Learning Resources */}
                        <section className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-sm border border-transparent p-6 text-white">
                            <div className="flex items-center gap-2 mb-4">
                                <BookOpen className="text-white h-5 w-5" />
                                <h2 className="text-lg font-bold">Quick Learn</h2>
                            </div>
                            <p className="text-sm text-indigo-100 mb-4">Master Python Basics in 30 mins with our interactive guide.</p>
                            <button className="w-full py-2 bg-white text-indigo-600 font-semibold rounded-lg text-sm hover:bg-indigo-50 transition-colors flex items-center justify-center gap-2">
                                Start Learning <ExternalLink className="h-3 w-3" />
                            </button>
                        </section>

                    </div>
                </div>

            </main>
            <Footer />
        </div>
    );
};

export default DashboardPage;
