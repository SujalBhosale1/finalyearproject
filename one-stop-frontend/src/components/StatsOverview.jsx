import { TrendingUp, Award, Calendar, Users } from 'lucide-react';

const StatCard = ({ icon: Icon, label, value, color }) => (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex items-center space-x-4">
        <div className={`p-3 rounded-full bg-${color}-50 text-${color}-600`}>
            <Icon className="h-6 w-6" />
        </div>
        <div>
            <p className="text-sm font-medium text-slate-500">{label}</p>
            <p className="text-2xl font-bold text-slate-900">{value}</p>
        </div>
    </div>
);

const StatsOverview = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard icon={TrendingUp} label="Profile Strength" value="85%" color="blue" />
            <StatCard icon={Award} label="Skills Verified" value="12" color="green" />
            <StatCard icon={Calendar} label="Days Streak" value="7" color="orange" />
            <StatCard icon={Users} label="Profile Views" value="42" color="purple" />
        </div>
    );
};

export default StatsOverview;
