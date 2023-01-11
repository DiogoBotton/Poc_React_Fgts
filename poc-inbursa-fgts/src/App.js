import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import './assets/styles/global.css';
import './assets/styles/button.css';
import './assets/styles/input.css';
import './assets/styles/typografy.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import 'swiper/css/lazy';
import 'swiper/css/zoom';

function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
