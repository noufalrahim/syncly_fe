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
import { Layout } from '@/components/Layout';

function Router() {
  const { ROOT_PATH, PROJECT_OVERVIEW_PATH, SCHEDULER_PATH, TABLE_PATH, LOGIN_PATH, MY_NETWORK_PATH, MESSAGES_PATH, DASHBOARD_PATH } = useRoutePaths();
  return (
    <Routes>
      <Route path={ROOT_PATH} element={<Landing />} />
      <Route path={DASHBOARD_PATH} element={<Layout><h1>Dashboard</h1></Layout>} />
      <Route path={PROJECT_OVERVIEW_PATH} element={
        <Layout>
          <KanbanBoard />
        </Layout>
      } />
      <Route path={SCHEDULER_PATH} element={
        <Layout>
          <Scheduler />
        </Layout>} />
      <Route path={TABLE_PATH} element={
        <Layout>
        <TaskList />
        </Layout>} />
      {/* <Route path={MIND_MAP_PATH} element={<MindMap />} /> */}
      <Route path={MY_NETWORK_PATH} element={<Layout><MyNetwork /></Layout>} />
      <Route path={LOGIN_PATH} element={<Login />} />
      <Route path={MESSAGES_PATH} element={<Layout><ChatScreen /></Layout>} />
      {/* <Route path="*" element={<Navigate to={LOGIN_PATH} />} /> */}
    </Routes>
  );
}

export default Router;
