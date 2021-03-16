import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Newcollections from './components/Newcollections/Newcollections'



function App() {
  return (
    <>
    <Navbar/>
    <Sidebar/>
    <Hero/>
    <Newcollections/>
    </>
  );
}

export default App;
