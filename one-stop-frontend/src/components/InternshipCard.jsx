import { MapPin, Calendar, Clock, ExternalLink } from 'lucide-react';

const InternshipCard = ({ title, company, domain, mode, duration, icon }) => {
    return (
        <div className="bg-white rounded-lg border border-slate-200 p-5 hover:border-blue-300 transition-colors group">
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

            <button className="mt-4 w-full py-2 bg-slate-900 text-white rounded-md text-sm font-medium hover:bg-slate-800 transition-colors flex items-center justify-center gap-2">
                Apply Now <ExternalLink size={14} />
            </button>
        </div>
    );
};

export default InternshipCard;
