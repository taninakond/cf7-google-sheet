import { createRoot } from '@wordpress/element';
import App from './App';
import '../assets/sass/dashboard.scss';


window.addEventListener('DOMContentLoaded', () => {
  const root = createRoot(document.getElementById('bdpcgs-dashboard'));
  root.render(<App />);
});