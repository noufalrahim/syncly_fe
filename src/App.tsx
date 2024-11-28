import 'react-big-calendar/lib/css/react-big-calendar.css';
import './App.css';
import { Layout } from './components/Layout';
import { BrowserRouter } from 'react-router-dom';
import Router from './router/Router/Router';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Router />
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
