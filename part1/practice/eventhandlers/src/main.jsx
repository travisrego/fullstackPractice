import ReactDOM from 'react-dom/client'
import App from './App.jsx'

let counter = 0;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App counter={counter} />); 