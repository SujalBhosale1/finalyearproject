import { useState } from 'react';
import { MapPin, Calendar, Clock, ExternalLink, FileText, X, Wand2 } from 'lucide-react';

const InternshipCard = ({ title, company, domain, mode, duration, icon, userProfile }) => {
    const [showCoverLetter, setShowCoverLetter] = useState(false);
    const [generatedLetter, setGeneratedLetter] = useState("");

    const handleGenerateCoverLetter = (e) => {
        e.preventDefault(); // Prevent default link behavior if wrapped in one

        // Mock Generation Logic
        const today = new Date().toLocaleDateString();
        const letter = `
Date: ${today}

To the Hiring Manager,
${company}

Subject: Application for ${title} Role

Dear Hiring Team,

I am writing to express my strong interest in the ${title} position at ${company}. As a ${userProfile?.role || 'passionate student'} based in ${userProfile?.location || 'your area'}, I have followed ${company}'s work in ${domain} with great admiration.

My background in ${userProfile?.skills?.[0] || 'relevant technologies'} and my experience as a ${userProfile?.experience?.[0]?.role || 'student'} have prepared me well for this opportunity. I am particularly excited about the chance to apply my skills in...

[AI generated content would continue here based on job description: ${title} - ${domain}]

Thank you for considering my application. I look forward to the possibility of discussing how I can contribute to your team.

Sincerely,
${userProfile?.name || 'Candidate Name'}
${userProfile?.email || 'email@example.com'}
        `;
        setGeneratedLetter(letter.trim());
        setShowCoverLetter(true);
    };

    return (
        <>
            <div className="bg-white rounded-lg border border-slate-200 p-5 hover:border-blue-300 transition-colors group relative">
                <div className="flex justify-between items-start">
                    <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded bg-slate-100 flex items-center justify-center text-xl">
                            {icon || "🏢"}
                        </div>
                        <div>
                            <h4 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">{title}</h4>
                            <p className="text-sm text-slate-500">{company}</p>
                        </div>
                    </div>
                    <span className="px-2 py-0.5 rounded border border-slate-200 text-xs font-medium text-slate-600 bg-slate-50 uppercase">
                        {mode}
                    </span>
                </div>

                <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-600">
                    <div className="flex items-center gap-1.5">
                        <Calendar size={14} className="text-slate-400" />
                        <span>{duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <MapPin size={14} className="text-slate-400" />
                        <span>{domain}</span>
                    </div>
                </div>

                <div className="mt-4 flex gap-2">
                    <button className="flex-1 py-2 bg-slate-900 text-white rounded-md text-sm font-medium hover:bg-slate-800 transition-colors flex items-center justify-center gap-2">
                        Apply Now <ExternalLink size={14} />
                    </button>
                    <button
                        onClick={handleGenerateCoverLetter}
                        className="px-3 py-2 bg-blue-50 text-blue-600 border border-blue-200 rounded-md text-sm font-medium hover:bg-blue-100 transition-colors flex items-center justify-center"
                        title="Generate AI Cover Letter"
                    >
                        <Wand2 size={16} />
                    </button>
                </div>
            </div>

            {/* Cover Letter Modal */}
            {showCoverLetter && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
                    <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto flex flex-col animate-in zoom-in-95 duration-200">
                        <div className="p-6 border-b border-slate-100 flex justify-between items-center sticky top-0 bg-white z-10">
                            <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                                <FileText className="text-blue-600" size={20} />
                                AI Generated Cover Letter
                            </h3>
                            <button
                                onClick={() => setShowCoverLetter(false)}
                                className="p-1 hover:bg-slate-100 rounded-full text-slate-500"
                            >
                                <X size={20} />
                            </button>
                        </div>
                        <div className="p-6">
                            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 font-mono text-sm text-slate-700 whitespace-pre-wrap">
                                {generatedLetter}
                            </div>
                            <div className="mt-4 flex justify-end gap-3">
                                <button
                                    onClick={() => navigator.clipboard.writeText(generatedLetter)}
                                    className="px-4 py-2 text-slate-600 font-medium hover:bg-slate-100 rounded-lg text-sm"
                                >
                                    Copy to Clipboard
                                </button>
                                <button
                                    onClick={() => {
                                        // Trigger download or just close for now
                                        setShowCoverLetter(false);
                                    }}
                                    className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg text-sm hover:bg-blue-700"
                                >
                                    Use This Letter
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default InternshipCard;
