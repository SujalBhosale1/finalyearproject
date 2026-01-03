
import { useState } from 'react';
import { Lightbulb, Code, RefreshCw, CheckCircle, Sparkles } from 'lucide-react';

const ProjectIdeaGenerator = ({ userSkills = [] }) => {
    const [interests, setInterests] = useState(userSkills.join(', ') || "React, Node.js");
    const [generatedIdeas, setGeneratedIdeas] = useState([]);
    const [isGenerating, setIsGenerating] = useState(false);

    // Mock AI generation logic
    const generateIdeas = () => {
        setIsGenerating(true);
        // Simulate API delay
        setTimeout(() => {
            const techs = interests.split(',').map(s => s.trim());
            const mainTech = techs[0] || "General";

            const ideas = [
                {
                    title: `Decentralized Voting System using ${mainTech}`,
                    difficulty: "Advanced",
                    description: `Build a secure, transparent voting platform using Blockchain and ${mainTech}. Ensure voter anonymity and real-time tallying.`,
                    techStack: ["Blockchain", mainTech, "Solidity", "TailwindCSS"]
                },
                {
                    title: `AI-Powered Career Counselor with ${mainTech}`,
                    difficulty: "Intermediate",
                    description: `Create a chatbot that analyzes student resumes and suggests career paths. Integrate OpenAI API with a ${mainTech} backend.`,
                    techStack: ["OpenAI API", mainTech, "Python", "Redis"]
                },
                {
                    title: `Real-time Collaboration Tool`,
                    difficulty: "Advanced",
                    description: `A whiteboard or code editor allowing multiple users to work together in real-time using WebSockets and ${mainTech}.`,
                    techStack: ["WebSockets", mainTech, "Socket.io", "MongoDB"]
                }
            ];

            setGeneratedIdeas(ideas);
            setIsGenerating(false);
        }, 1500);
    };

    return (
        <section className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center gap-2 mb-4">
                <Sparkles className="text-indigo-500 h-5 w-5" />
                <h2 className="text-xl font-bold text-slate-800">AI Project Idea Generator</h2>
            </div>

            <p className="text-slate-500 mb-4 text-sm">
                Stuck on what to build for your final year? Enter your favorite technologies, and our AI will suggest unique, impressive project ideas.
            </p>

            <div className="flex gap-4 mb-6">
                <div className="flex-1 relative">
                    <Code className="absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
                    <input
                        type="text"
                        value={interests}
                        onChange={(e) => setInterests(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                        placeholder="e.g. React, Python, Machine Learning"
                    />
                </div>
                <button
                    onClick={generateIdeas}
                    disabled={isGenerating}
                    className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2"
                >
                    {isGenerating ? (
                        <>
                            <RefreshCw className="h-4 w-4 animate-spin" /> Generating...
                        </>
                    ) : (
                        <>
                            <Lightbulb className="h-4 w-4" /> Generate Ideas
                        </>
                    )}
                </button>
            </div>

            {generatedIdeas.length > 0 && (
                <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    {generatedIdeas.map((idea, idx) => (
                        <div key={idx} className="p-4 rounded-lg bg-slate-50 border border-slate-200 hover:border-indigo-300 transition-all cursor-default">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="font-bold text-slate-800">{idea.title}</h3>
                                <span className={`px-2 py-0.5 rounded text-xs font-medium border ${idea.difficulty === 'Advanced' ? 'bg-red-50 text-red-600 border-red-100' :
                                        idea.difficulty === 'Intermediate' ? 'bg-yellow-50 text-yellow-600 border-yellow-100' : 'bg-green-50 text-green-600 border-green-100'
                                    }`}>
                                    {idea.difficulty}
                                </span>
                            </div>
                            <p className="text-sm text-slate-600 mb-3">{idea.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {idea.techStack.map(stack => (
                                    <span key={stack} className="text-xs px-2 py-1 bg-white border border-slate-200 rounded text-slate-500">
                                        {stack}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default ProjectIdeaGenerator;
