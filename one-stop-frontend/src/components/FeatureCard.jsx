import { ArrowRight } from 'lucide-react';

const FeatureCard = ({ title, description, icon: Icon, color = "blue" }) => {
    return (
        <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-slate-100">
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-${color}-100 text-${color}-600`}>
                <Icon size={24} />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">{title}</h3>
            <p className="text-slate-600 mb-4 line-clamp-3">
                {description}
            </p>
            <div className={`text-${color}-600 font-medium flex items-center text-sm group cursor-pointer`}>
                Learn more <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
        </div>
    );
};

export default FeatureCard;
