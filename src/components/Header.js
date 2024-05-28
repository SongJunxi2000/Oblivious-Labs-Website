import video from './img/video.mp4';
import { Link } from "react-scroll";

function Header() {
  return (
    
    <header >
      <video src={video} loop autoPlay muted></video>
      <h1>Oblivious Labs</h1>
      <h3>We provide open source implementations of Oblivious RAM
and oblivious algorithms. </h3>
<h3> </h3>
      <Link
        className="btn"
        style={{ cursor: "pointer" }}
        to="IntroOram"
        smooth={true}
        duration={1000}
      >
        Learn More
      </Link>
      <div className="headerbg"></div>
    </header>
  );
}
export default Header;
