import BackgroundHero from "./components/BackgroundHero/BackgroundHero";
import ContentLayout from "./components/ContentLayout/ContentLayout";
import Navbar from "./components/Navbar/Navbar";
import './App.css'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <BackgroundHero />
      <ContentLayout />
    </div>
  );
}

export default App;
