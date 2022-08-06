import '../styles/App.css';
import Header from '../components/Header';
import Carousel1 from '../components/Carousel';
import Data from '../components/Arrayciudades';

function Home() {
  return (
    <div className="App">
      <Header className='Header1' ></Header>
      <h2 className='h2carousel' >Popular destinations</h2>
       < Carousel1 className='carousel' dataciudades={Data} />
   </div>
  );
}

export default Home;