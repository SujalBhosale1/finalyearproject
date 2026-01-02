import { CheckCircle, ArrowRightCircle, Star } from 'lucide-react';

const ActivityItem = ({ icon: Icon, color, title, time }) => (
    <div className="flex items-start space-x-3 pb-6 last:pb-0 border-l-2 border-slate-100 last:border-0 pl-4 relative">
        <div className={`absolute -left-[9px] top-0 bg-white p-1 rounded-full border-2 border-${color}-100`}>
            <div className={`h-2 w-2 rounded-full bg-${color}-500`}></div>
        </div>
        <div>
            <p className="text-sm font-medium text-slate-900">{title}</p>
            <p className="text-xs text-slate-500 mt-0.5">{time}</p>
        </div>
    </div>
);

const ActivityFeed = () => {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-lg font-bold text-slate-800 mb-6">Recent Activity</h3>
            <div className="space-y-1">
                <ActivityItem
                    icon={CheckCircle}
                    color="green"
                    title="Completed 'Data Structures' Module"
                    time="2 hours ago"
                />
                <ActivityItem
                    icon={Star}
                    color="yellow"
                    title="Earned 'Python Basic' Badge"
                    time="1 day ago"
                />
                <ActivityItem
                    icon={ArrowRightCircle}
                    color="blue"
                    title="Updated Resume"
                    time="3 days ago"
                />
                <ActivityItem
                    icon={ArrowRightCircle}
                    color="purple"
                    title="Applied to Google Internship"
                    time="1 week ago"
                />
            </div>
        </div>
    );
};

export default ActivityFeed;
