import './App.css';
import UstravelHeader from './UstravelHeader';
import UstravelFooter from './UstravelFooter';
import MainSlider from './MainSlider';
import MainNews from './MainNews';
import MainBusiness from './MainBusiness';
import MainGallery from './MainGallery';
import MainYoutube from './MainYoutube';
import MainPartner from './MainPartner';

function App() {
  return (
    <div className='App'>
      <UstravelHeader/>
      <MainSlider />
      <MainNews />
      <MainBusiness />
      <MainGallery />
      <MainYoutube />
      <MainPartner />
      <UstravelFooter/>
    </div>
  );
}

export default App;
