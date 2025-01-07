import { managerService } from "@/app/services/fpl-api";
import { useQuery } from "@tanstack/react-query";
import { StatsGrid } from "./StatsGrid";
import { useState } from "react";


interface ManagerStatsProps {
  managerId: number;
}

export function ManagerStats({ managerId }: ManagerStatsProps) {
  const [ currentManager, setCurrentManager ] = useState<any | null>(null);
  const {
    data: manager,
    error: managerError,
    isLoading: isLoadingManager,
  } = useQuery({
    queryKey: ['manager', managerId],
    queryFn: () => managerService.getInfo(managerId),
  });

  if (!isLoadingManager && manager && !currentManager) {
    setCurrentManager(manager);
  }


  return (
    <div className="space-y-6">
      {/* {classicLeagues.length > 0 && (
        <LeagueSelector
        leagues={classicLeagues}
        selectedLeagueId={selectedLeagueId}
        onLeagueSelect={setSelectedLeagueId}
        />
      )} */}

      {/* <p className="px-4 py-2 text-3xl text-gray-700 font-bold">{manager.name}</p> */}
      {currentManager &&
      <StatsGrid manager={currentManager} />}


      {/* {selectedLeagueId && leagueStandings && (
        <LeagueComparison
          standings={leagueStandings.standings.results}
          currentManagerId={managerId}
        />
      )} */}

      {/* {history && <ChartCarousel history={history.current} overallData={overallData} />} */}

    </div>
  );
}