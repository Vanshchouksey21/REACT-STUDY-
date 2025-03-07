import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store'; // Import the store
import App from './App'; // Import the App component

// Rendering the app inside the root element with Redux store provided
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
