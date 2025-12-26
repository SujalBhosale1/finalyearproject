import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RecommendationCard from '../components/RecommendationCard';
import InternshipCard from '../components/InternshipCard';
import SkillBadge from '../components/SkillBadge';
import RoadmapTimeline from '../components/RoadmapTimeline';
import { engineeredData } from '../data/dummyData';
import { Lightbulb, Target, Briefcase, TrendingUp } from 'lucide-react';

const DashboardPage = () => {
    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            <Navbar />
            <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 space-y-8">

                {/* Header */}
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
                    <p className="text-slate-500">Welcome back, Student. Here are your personalized insights.</p>
                </div>

                {/* Section 1: Recommended Branches */}
                <section>
                    <div className="flex items-center gap-2 mb-4">
                        <Lightbulb className="text-yellow-500" />
                        <h2 className="text-xl font-bold text-slate-800">Top Branch Recommendations</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Section 2: Skill Gap Analysis */}
                    <section className="lg:col-span-1 bg-white rounded-xl shadow-sm border border-slate-200 p-6 h-fit">
                        <div className="flex items-center gap-2 mb-6">
                            <Target className="text-red-500" />
                            <h2 className="text-lg font-bold text-slate-800">Skill Gap Analysis</h2>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">Required Skills</h3>
                                <div className="flex flex-wrap gap-2">
                                    {engineeredData.skills.required.map(skill => (
                                        <SkillBadge key={skill} skill={skill} />
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">Missing / To Learn</h3>
                                <div className="flex flex-wrap gap-2">
                                    {engineeredData.skills.missing.map(skill => (
                                        <SkillBadge key={skill} skill={skill} missing={true} />
                                    ))}
                                </div>
                            </div>

                            <div className="bg-slate-50 p-4 rounded-lg">
                                <p className="text-sm text-slate-600">
                                    <strong>Recommendation:</strong> Focus on Data Structures and key algorithms to improve your placement chances.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 4: Roadmap */}
                    <section className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                        <div className="flex items-center gap-2 mb-6">
                            <TrendingUp className="text-blue-500" />
                            <h2 className="text-lg font-bold text-slate-800">Your Personalized Roadmap</h2>
                        </div>
                        <RoadmapTimeline steps={engineeredData.roadmap} />
                    </section>
                </div>

                {/* Section 3: Internships */}
                <section>
                    <div className="flex items-center gap-2 mb-4">
                        <Briefcase className="text-purple-500" />
                        <h2 className="text-xl font-bold text-slate-800">Recommended Internships</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {engineeredData.internships.map((internship) => (
                            <InternshipCard key={internship.id} {...internship} />
                        ))}
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
};

export default DashboardPage;
