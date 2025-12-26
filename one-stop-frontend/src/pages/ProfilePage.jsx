import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Save } from 'lucide-react';

const ProfilePage = () => {
    const [formData, setFormData] = useState({
        percent10: '',
        percent12: '',
        percentPCM: '',
        strongSubject: 'Maths',
        interests: {
            coding: false,
            robotics: false,
            electronics: false,
            mechanics: false,
            design: false,
            management: false,
        },
        careerPreference: 'Software'
    });

    const handleInterestChange = (interest) => {
        setFormData(prev => ({
            ...prev,
            interests: {
                ...prev.interests,
                [interest]: !prev.interests[interest]
            }
        }));
    };

    const handleSave = (e) => {
        e.preventDefault();
        alert("Profile Saved!");
        // Logic to save profile would go here
    };

    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            <Navbar />
            <main className="flex-grow max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10">
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                    <div className="px-6 py-4 border-b border-slate-200 bg-slate-50">
                        <h2 className="text-xl font-bold text-slate-900">Student Profile</h2>
                        <p className="text-sm text-slate-500">Update your academic details to get better recommendations.</p>
                    </div>

                    <form onSubmit={handleSave} className="p-6 space-y-8">
                        {/* Basic Academic Info */}
                        <div>
                            <h3 className="text-lg font-medium text-slate-900 mb-4 border-b pb-2">Academic Performance</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">10th Percentage</label>
                                    <input
                                        type="number"
                                        min="0" max="100"
                                        className="w-full rounded-lg border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                                        value={formData.percent10}
                                        onChange={(e) => setFormData({ ...formData, percent10: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">12th Percentage</label>
                                    <input
                                        type="number"
                                        min="0" max="100"
                                        className="w-full rounded-lg border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                                        value={formData.percent12}
                                        onChange={(e) => setFormData({ ...formData, percent12: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">PCM Percentage</label>
                                    <input
                                        type="number"
                                        min="0" max="100"
                                        className="w-full rounded-lg border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                                        value={formData.percentPCM}
                                        onChange={(e) => setFormData({ ...formData, percentPCM: e.target.value })}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Preferences */}
                        <div>
                            <h3 className="text-lg font-medium text-slate-900 mb-4 border-b pb-2">Preferences & Skills</h3>

                            <div className="mb-6">
                                <label className="block text-sm font-medium text-slate-700 mb-2">Strongest Subject</label>
                                <select
                                    className="w-full md:w-1/3 rounded-lg border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                                    value={formData.strongSubject}
                                    onChange={(e) => setFormData({ ...formData, strongSubject: e.target.value })}
                                >
                                    <option>Maths</option>
                                    <option>Physics</option>
                                    <option>Chemistry</option>
                                </select>
                            </div>

                            <div className="mb-6">
                                <label className="block text-sm font-medium text-slate-700 mb-3">Areas of Interest</label>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {Object.keys(formData.interests).map((interest) => (
                                        <label key={interest} className="inline-flex items-center space-x-2 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                className="rounded text-blue-600 focus:ring-blue-500 h-4 w-4 border-gray-300"
                                                checked={formData.interests[interest]}
                                                onChange={() => handleInterestChange(interest)}
                                            />
                                            <span className="text-slate-700 capitalize">{interest}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Primary Career Preference</label>
                                <select
                                    className="w-full md:w-1/3 rounded-lg border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                                    value={formData.careerPreference}
                                    onChange={(e) => setFormData({ ...formData, careerPreference: e.target.value })}
                                >
                                    <option>Software Development</option>
                                    <option>Core Engineering (Mech/Elec)</option>
                                    <option>Research & R&D</option>
                                    <option>Management / MBA focus</option>
                                </select>
                            </div>
                        </div>

                        <div className="pt-4 flex justify-end">
                            <button
                                type="submit"
                                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                <Save className="mr-2 -ml-1 h-5 w-5" />
                                Save Profile
                            </button>
                        </div>
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ProfilePage;
