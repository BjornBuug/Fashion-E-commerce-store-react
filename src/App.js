import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Newcollections from './components/Newcollections/Newcollections';
import NewcollectionsTwo from './components/NewcollectionsTwo/NewcollectionsTwo';
import NewcollectionsTree from './components/NewcollectionsTree/NewcollectionsTree';


function App() {
  return (
    <>
    <Navbar/>
    <Sidebar/>
    <Hero/>
    <Newcollections/>
    <NewcollectionsTwo/>
    <NewcollectionsTree/>
    </>
  );
}

export default App;
