import { NavBar }  from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/skills';
import { Projects } from './components/projects';
import { Contact } from './components/contact';
import { Footer } from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export  default App;
