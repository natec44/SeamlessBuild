import React from 'react';
import ProjectSelector from './ProjectSelector';
import TaskTracking from './TaskTracking';
import MaterialsVendorPanel from './MaterialsVendorPanel';
import NotificationsPanel from './NotificationsPanel';
import AnalyticsPanel from './AnalyticsPanel';
import GanttChart from './GanttChart';

const Dashboard = () => {
  return (
    <div className="p-4 grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
      <ProjectSelector />
      <TaskTracking />
      <MaterialsVendorPanel />
      <NotificationsPanel />
      <AnalyticsPanel data={[]} />
      <GanttChart />
    </div>
  );
};

export default Dashboard;
