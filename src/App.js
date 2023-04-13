import Navbar from '../src/components/Navbar'
import Main from './components/Main';
import Menu from './components/Menu';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Menu />
      <Projects />
    </div>
  );
}

export default App;
