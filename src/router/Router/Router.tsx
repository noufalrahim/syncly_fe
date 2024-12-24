/* eslint-disable react/react-in-jsx-scope */

import { Routes, Route } from 'react-router-dom';
import { useRoutePaths } from '@/hooks/useRoutePaths';
import { Scheduler } from '@/components/Scheduler';
import { TaskList } from '@/components/TaskList';
// import { MindMap } from '@/components/MindMap';
import { KanbanBoard } from '@/components/KanbanBoard';
import { MyNetwork } from '@/components/MyNetwork';
import { ChatScreen } from '@/components/ChatScreen';
import { Landing } from '@/components/Landing';
import Login from '../../components/Login/Login';
import Signup from '../../components/Signup/Signup';
import { Layout } from '@/components/Layout';
import { Projects } from '@/components/Projects';

function Router() {
  const { ROOT_PATH, PROJECT_OVERVIEW_PATH, SCHEDULER_PATH, TABLE_PATH, LOGIN_PATH, SIGNUP_PATH, MY_NETWORK_PATH, MESSAGES_PATH, DASHBOARD_PATH, PROJECTS_PATH } = useRoutePaths();

  return (
    <Routes>
      <Route path={ROOT_PATH} element={<Landing />} />
      <Route
        path={DASHBOARD_PATH}
        element={
          <Layout>
            <h1>Dashboard</h1>
          </Layout>
        }
      />
      <Route
        path={PROJECT_OVERVIEW_PATH}
        element={
          <Layout>
            <KanbanBoard />
          </Layout>
        }
      />
      <Route
        path={SCHEDULER_PATH}
        element={
          <Layout>
            <Scheduler />
          </Layout>
        }
      />
      <Route
        path={TABLE_PATH}
        element={
          <Layout>
            <TaskList />
          </Layout>
        }
      />
      {/* <Route path={MIND_MAP_PATH} element={<MindMap />} /> */}
      <Route
        path={MY_NETWORK_PATH}
        element={
          <Layout>
            <MyNetwork />
          </Layout>
        }
      />
      <Route path={LOGIN_PATH} element={<Login />} />
      <Route path={SIGNUP_PATH} element={<Signup />} /> {/* Add this */}
      <Route path={MESSAGES_PATH} element={<ChatScreen />} />
      <Route
        path={PROJECTS_PATH}
        element={
          <Layout>
            <Projects />
          </Layout>
        }
      />
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  );
}

export default Router;
