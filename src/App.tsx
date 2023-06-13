import "./App.scss";
import Footer from "./components/Footer/Footer";
import News from "./components/News/News";
import Notification from "./components/Notification/Notification";
import Weather from "./components/Weather/Weather";

function App() {
  return (
    <div className="app">
      <News />
      <Notification />
      <Weather />
      <Footer />
    </div>
  );
}

export default App;
