const RecommendationCard = ({ branch, percentage, reason }) => {
    // Determine color based on match percentage
    let barColor = 'bg-red-500';
    let textColor = 'text-red-700';
    let bgColor = 'bg-red-50';

    if (percentage >= 80) {
        barColor = 'bg-green-500';
        textColor = 'text-green-700';
        bgColor = 'bg-green-50';
    } else if (percentage >= 60) {
        barColor = 'bg-yellow-500';
        textColor = 'text-yellow-700';
        bgColor = 'bg-yellow-50';
    }

    return (
        <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm hover:shadow-md transition-all">
            <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-bold text-slate-800">{branch}</h3>
                <span className={`px-2 py-1 rounded text-sm font-bold ${bgColor} ${textColor}`}>
                    {percentage}% Match
                </span>
            </div>

            <div className="mb-4">
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div
                        className={`h-full ${barColor}`}
                        style={{ width: `${percentage}%` }}
                    ></div>
                </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
                <span className="font-semibold text-slate-700">Why:</span> {reason}
            </p>
        </div>
    );
};

export default RecommendationCard;
