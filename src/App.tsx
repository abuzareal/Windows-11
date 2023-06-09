import "./App.scss";
import Footer from "./components/Footer/Footer";
import News from "./components/News/News";
import Notification from "./components/Notification/Notification";


function App() {
  return <div className="app">
    <News/> 
    <Notification/>
    <Footer/>
  </div>;

}

export default App;
