import 'react-big-calendar/lib/css/react-big-calendar.css';
import './App.css';
import { Layout } from './components/Layout';
import { BrowserRouter } from 'react-router-dom';
import Router from './router/Router/Router';
import { Provider } from 'react-redux';
import store from './redux/store';
import { ClerkProvider } from '@clerk/clerk-react'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

function App() {
  return (
    <Provider store={store}>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
        <BrowserRouter>
          <Layout>
            <Router />
          </Layout>
        </BrowserRouter>
      </ClerkProvider>
    </Provider>
  );
}

export default App;
