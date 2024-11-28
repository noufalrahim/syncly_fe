import { Routes, Route, Navigate } from 'react-router-dom';
import { useRoutePaths } from '@/hooks/useRoutePaths';
import { Scheduler } from '@/components/Scheduler';
import { TaskList } from '@/components/TaskList';
// import { MindMap } from '@/components/MindMap';
import { KanbanBoard } from '@/components/KanbanBoard';

function Router() {
  const { ROOT_PATH, PROJECT_OVERVIEW_PATH, SCHEDULER_PATH, TABLE_PATH, MIND_MAP_PATH } = useRoutePaths();

  console.log(MIND_MAP_PATH);
  return (
    <Routes>
      <Route path={PROJECT_OVERVIEW_PATH} element={<KanbanBoard />} />
      <Route path={SCHEDULER_PATH} element={<Scheduler />} />
      <Route path={TABLE_PATH} element={<TaskList />} />
      {/* <Route path={MIND_MAP_PATH} element={<MindMap />} /> */}
      <Route path="*" element={<Navigate to={ROOT_PATH} />} />
    </Routes>
  );
}

export default Router;
