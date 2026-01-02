import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Award, Target, Save, Briefcase, MapPin } from 'lucide-react';

const ProfileSetupPage = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        phone: '',
        city: '',
        state: '',
        marks10: '',
        marks12: '',
        board: 'CBSE',
        jeeScore: '',
        cetScore: '',
        targetBranch: '',
        interests: {
            robotics: false,
            coding: false,
            electronics: false,
            mechanics: false,
            ai_ml: false
        }
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setFormData(prev => ({
                ...prev,
                interests: { ...prev.interests, [name]: checked }
            }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Profile Data Submitted:', formData);
        // Here you would send data to backend
        navigate('/dashboard');
    };

    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-slate-900">Complete Your Profile</h1>
                    <p className="mt-2 text-slate-600">Help us personalize your recommendation engine.</p>
                </div>

                <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
                    <form onSubmit={handleSubmit} className="p-8 space-y-8">

                        {/* Section 1: Basic Details */}
                        <div className="space-y-4">
                            <h2 className="text-xl font-semibold text-slate-800 flex items-center gap-2">
                                <MapPin className="text-blue-500 h-5 w-5" /> Location & Contact
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                                    <input
                                        type="tel" name="phone" required
                                        className="w-full rounded-lg border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">City</label>
                                    <input
                                        type="text" name="city" required
                                        className="w-full rounded-lg border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">State</label>
                                    <input
                                        type="text" name="state" required
                                        className="w-full rounded-lg border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>

                        <hr className="border-slate-100" />

                        {/* Section 2: Academic History */}
                        <div className="space-y-4">
                            <h2 className="text-xl font-semibold text-slate-800 flex items-center gap-2">
                                <BookOpen className="text-green-500 h-5 w-5" /> Academic History
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">10th Marks (%)</label>
                                    <input
                                        type="number" name="marks10" min="0" max="100" required
                                        className="w-full rounded-lg border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">12th Marks (%)</label>
                                    <input
                                        type="number" name="marks12" min="0" max="100" required
                                        className="w-full rounded-lg border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Board</label>
                                    <select
                                        name="board"
                                        className="w-full rounded-lg border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                        onChange={handleChange}
                                    >
                                        <option value="CBSE">CBSE</option>
                                        <option value="ICSE">ICSE</option>
                                        <option value="State Board">State Board</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <hr className="border-slate-100" />

                        {/* Section 3: Entrance Exams */}
                        <div className="space-y-4">
                            <h2 className="text-xl font-semibold text-slate-800 flex items-center gap-2">
                                <Award className="text-yellow-500 h-5 w-5" /> Competitive Exams
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">JEE Mains (Percentile)</label>
                                    <input
                                        type="number" name="jeeScore" min="0" max="100" step="0.01"
                                        className="w-full rounded-lg border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">State CET (Percentile)</label>
                                    <input
                                        type="number" name="cetScore" min="0" max="100" step="0.01"
                                        className="w-full rounded-lg border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>

                        <hr className="border-slate-100" />

                        {/* Section 4: Interests */}
                        <div className="space-y-4">
                            <h2 className="text-xl font-semibold text-slate-800 flex items-center gap-2">
                                <Target className="text-red-500 h-5 w-5" /> Areas of Interest
                            </h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {Object.keys(formData.interests).map(interest => (
                                    <label key={interest} className="inline-flex items-center space-x-2 cursor-pointer p-3 rounded-lg border border-slate-100 hover:bg-slate-50 transition-colors">
                                        <input
                                            type="checkbox"
                                            name={interest}
                                            checked={formData.interests[interest]}
                                            onChange={handleChange}
                                            className="rounded text-blue-600 focus:ring-blue-500 h-4 w-4 border-gray-300"
                                        />
                                        <span className="text-slate-700 capitalize">{interest.replace('_', ' ')}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <hr className="border-slate-100" />

                        {/* Section 5: Target Branch */}
                        <div className="space-y-4">
                            <h2 className="text-xl font-semibold text-slate-800 flex items-center gap-2">
                                <Briefcase className="text-purple-500 h-5 w-5" /> Future Goals
                            </h2>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Preferred Engineering Branch</label>
                                <select
                                    name="targetBranch"
                                    className="w-full rounded-lg border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                    onChange={handleChange}
                                >
                                    <option value="">Select a preference...</option>
                                    <option value="CS">Computer Science</option>
                                    <option value="IT">Information Technology</option>
                                    <option value="EXTC">Electronics & Telecom</option>
                                    <option value="Mech">Mechanical</option>
                                    <option value="Civil">Civil</option>
                                    <option value="Undecided">Still Exploring</option>
                                </select>
                            </div>
                        </div>

                        <div className="pt-6">
                            <button
                                type="submit"
                                className="w-full flex justify-center py-4 px-4 border border-transparent rounded-xl shadow-sm text-lg font-bold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all hover:scale-[1.02]"
                            >
                                Complete Profile & Go to Dashboard
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProfileSetupPage;
