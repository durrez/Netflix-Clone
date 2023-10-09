import './App.css';
import Body from './components/Body';
import Navbar from './components/Navbar';
import slide1 from './pictures/slide1.jpeg';




function App() {
  return (
    <div>
   <Navbar/>
   <img className='slide1' src={slide1} alt="" />
   <Body/>
    </div>
  );
}

export default App;
