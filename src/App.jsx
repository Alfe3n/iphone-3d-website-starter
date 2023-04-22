import Nav from "./components/navbar";
import Jumpotron from "./components/Jumpotron";
import Sound from "./components/SoundSection";
import DisplaySection from "./components/DisplaySection";
import WebgiViewer from "./components/WebgiViewer";
function App() {
  return (
    <div className="App">
      <Nav />
      <Jumpotron />
      <Sound />
      <DisplaySection />
      <WebgiViewer />
    </div>
  );
}

export default App;
