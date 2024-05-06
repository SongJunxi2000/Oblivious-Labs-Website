import video from './video.mp4';


function Header() {
  return (
    
    <header >
      <video src={video} loop autoPlay muted></video>
      <h1>Oblivious Labs</h1>
      <button className="btn" style={{ cursor: "pointer" }}>
          Learn More
        </button>
      <div className="headerbg"></div>
    </header>
  );
}
export default Header;
