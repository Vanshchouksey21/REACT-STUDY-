import { createRoot } from 'react-dom/client';
import App from './App';
import Logincontext from './Logincontext';

createRoot(document.getElementById('root')).render(
  <Logincontext>
    <App />
  </Logincontext>
);
