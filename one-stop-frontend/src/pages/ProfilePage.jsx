import { User, Mail, School, MapPin, Edit2 } from 'lucide-react';
import { engineeredData } from '../data/dummyData';

const ProfilePage = () => {
    const student = engineeredData.student;

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Profile Header Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mb-8">
                <div className="h-32 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
                <div className="px-8 pb-8">
                    <div className="relative flex justify-between items-end -mt-12 mb-6">
                        <div className="p-1 bg-white rounded-full">
                            <div className="h-24 w-24 rounded-full bg-slate-200 flex items-center justify-center text-slate-400 border-4 border-white">
                                <User className="h-12 w-12" />
                            </div>
                        </div>
                        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-300 rounded-lg text-slate-700 font-medium hover:bg-slate-50 transition-colors shadow-sm">
                            <Edit2 className="h-4 w-4" />
                            Edit Profile
                        </button>
                    </div>

                    <div>
                        <h1 className="text-3xl font-bold text-slate-900">{student.name}</h1>
                        <p className="text-slate-500 text-lg">Engineering Student</p>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-6 text-slate-600">
                        <div className="flex items-center gap-2">
                            <School className="h-5 w-5 text-slate-400" />
                            <span>{student.education.board12}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin className="h-5 w-5 text-slate-400" />
                            <span>Mumbai, India</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Mail className="h-5 w-5 text-slate-400" />
                            <span>student@example.com</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Academic Info */}
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                    <h2 className="text-lg font-bold text-slate-900 mb-4">Academic Background</h2>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center py-3 border-b border-slate-100 last:border-0">
                            <span className="text-slate-500">10th Grade Score</span>
                            <span className="font-semibold text-slate-900">{student.education.marks10}</span>
                        </div>
                        <div className="flex justify-between items-center py-3 border-b border-slate-100 last:border-0">
                            <span className="text-slate-500">12th Grade Score</span>
                            <span className="font-semibold text-slate-900">{student.education.marks12}</span>
                        </div>
                        <div className="flex justify-between items-center py-3 border-b border-slate-100 last:border-0">
                            <span className="text-slate-500">CET Score</span>
                            <span className="font-semibold text-slate-900">{student.examScores.cet}</span>
                        </div>
                        <div className="flex justify-between items-center py-3 border-b border-slate-100 last:border-0">
                            <span className="text-slate-500">JEE Mains Score</span>
                            <span className="font-semibold text-slate-900">{student.examScores.jee}</span>
                        </div>
                    </div>
                </div>

                {/* Interests */}
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                    <h2 className="text-lg font-bold text-slate-900 mb-4">Interests</h2>
                    <div className="flex flex-wrap gap-2">
                        {student.interests.map((interest, idx) => (
                            <span key={idx} className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium">
                                {interest}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
