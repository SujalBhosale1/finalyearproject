import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-slate-200 last:border-0">
            <button
                className="w-full py-4 flex justify-between items-center text-left focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-lg font-medium text-slate-900">{question}</span>
                {isOpen ? <ChevronUp className="h-5 w-5 text-blue-600" /> : <ChevronDown className="h-5 w-5 text-slate-500" />}
            </button>
            {isOpen && (
                <div className="pb-4 text-slate-600">
                    {answer}
                </div>
            )}
        </div>
    );
};

const FAQ = () => {
    const faqs = [
        {
            question: "How does One Stop help me choose a career?",
            answer: "We analyze your academic strengths, personal interests, and current market trends to recommend engineering branches and career paths that align with your profile."
        },
        {
            question: "Is it free to use?",
            answer: "Basic features like career guidance and roadmap creation are free. Premium features like personalized mentorship and advanced skill analysis are available in the paid plan."
        },
        {
            question: "Can I find internships here?",
            answer: "Yes! We aggregate internship opportunities specifically tailored for freshers and engineering students from verified companies."
        },
        {
            question: "How does the 'Flow' work?",
            answer: "The 'Flow' is a visual roadmap that guides you step-by-step from your first year of college to landing your dream job, ensuring you don't miss any critical milestones."
        }
    ];

    return (
        <div className="bg-slate-50 py-16">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-slate-900 mb-8">Frequently Asked Questions</h2>
                <div className="bg-white rounded-lg shadow-sm border border-slate-200 px-6 py-2">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQ;
