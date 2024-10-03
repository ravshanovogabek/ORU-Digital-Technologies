
import Home from './components/Home/Home';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';
import './App.css';
import Projects from './components/Projects/Projects';
import Services from './components/Services/Services';
import Advantages from './components/Advantages/Advantages';


const App = () => (
  <div>
    
    <Home />
    <Projects/>
    <Services/>
    <Advantages/>
    
    <FAQ />
    <Footer />
  </div>
);

export default App;

