import "./Footer.scss";
import MenuIcon from "./MenuIcon";
import images from "../../data/images";
import { useEffect, useState } from "react";

const Footer = () => {
  const [timeOfDay, setTimeOfDay] = useState("night");
  const time = new Date(Date.now()).getHours();
  console.log(time);
  useEffect(() => {
    if (time > 18 || time < 6) {
      setTimeOfDay("night");
    } else {
      setTimeOfDay("day");
    }
  }, [time]);

  return (
    <footer className="footer">
      <div className="widget">sdfsdfsdfsd</div>
      <div className="footer-menu">
        {images.map((image: any) => (
          <MenuIcon key={image.name} icon={image.src} name={image.name} />
        ))}
      </div>
      <div className=" widget time">
        <p>
          {new Date(Date.now()).toLocaleDateString()}
          <br />
          {new Date(Date.now()).toLocaleTimeString("en-us", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
        {timeOfDay == "day" ? <span>☀️</span> : <span>🌙</span>}
      </div>
    </footer>
  );
};

export default Footer;
``;
