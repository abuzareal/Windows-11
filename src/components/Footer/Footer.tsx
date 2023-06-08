import "./Footer.scss";
import MenuIcon from "./MenuIcon";
import images from "../../data/images"


const Footer = () => {

  return (
    <footer className="footer">
      <div className="widget"></div>
      <div className="footer-menu">
        {images.map((image: any) => (
          <MenuIcon key={image.name} icon={image.src} name={image.name} />
        ))}

      </div>
      <div className="widget"></div>
    </footer>
  );
};

export default Footer;
