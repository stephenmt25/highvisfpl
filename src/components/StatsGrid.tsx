
import { Manager } from '../app/types/fpl';

interface StatsGridProps {
  manager: Manager;
}

export function StatsGrid({ manager }: StatsGridProps) {
 return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <StatCard title="Gameweek Points" value={manager.summary_event_points ?? 0} />
      <StatCard title="Overall Points" value={manager.summary_overall_points} />
      <StatCard title="Overall Rank" value={manager.summary_overall_rank.toLocaleString()} />
      <StatCard title="Gameweek Rank" value={manager.summary_event_rank ? manager.summary_event_rank.toLocaleString() : 'Live GW'} /> 
    </div>
  );
}

interface StatCardProps {
  title: string;
  value: string | number;
}

function StatCard({ title, value }: StatCardProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-sm text-gray-500">{title}</h3>
      <p className="text-2xl text-gray-500 font-bold">{value}</p>
    </div>
  );
}