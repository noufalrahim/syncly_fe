import { Routes, Route, Navigate } from 'react-router-dom';
import { useRoutePaths } from '@/hooks/useRoutePaths';
import { Scheduler } from '@/components/Scheduler';
import { TaskList } from '@/components/TaskList';
// import { MindMap } from '@/components/MindMap';
import { KanbanBoard } from '@/components/KanbanBoard';
import { Login } from '@/components/Login';
import { MyNetwork } from '@/components/MyNetwork';
import { ChatScreen } from '@/components/ChatScreen';
import { Landing } from '@/components/Landing';

function Router() {
  const { ROOT_PATH, PROJECT_OVERVIEW_PATH, SCHEDULER_PATH, TABLE_PATH, LOGIN_PATH, MY_NETWORK_PATH, MESSAGES_PATH, DASHBOARD_PATH } = useRoutePaths();
  return (
    <Routes>
      <Route path={ROOT_PATH} element={<Landing />} />
      <Route path={PROJECT_OVERVIEW_PATH} element={<KanbanBoard />} />
      <Route path={SCHEDULER_PATH} element={<Scheduler />} />
      <Route path={TABLE_PATH} element={<TaskList />} />
      {/* <Route path={MIND_MAP_PATH} element={<MindMap />} /> */}
      <Route path={MY_NETWORK_PATH} element={<MyNetwork />} />
      <Route path={LOGIN_PATH} element={<Login />} />
      <Route path={MESSAGES_PATH} element={<ChatScreen />} />
      {/* <Route path="*" element={<Navigate to={LOGIN_PATH} />} /> */}
    </Routes>
  );
}

export default Router;
