import video from './HeaderImg1.mp4';


function Header() {
  return (
    
    <header >
      <video src={video} loop autoPlay muted></video>
      <h1>Oblivious Labs</h1>
      <h2>Innovative Computer Science Lab</h2>
      <h3 />
      <h3>At Oblivious Labs, we provide private and efficient access to databases using Oblivious RAM (ORAM) technology.</h3>
      <h3>ORAM prevents side-channel leakage of private data, offering extra protection over existing confidential computing platforms.</h3>
      <h3>Learn more about our technology and applications.</h3>
      <div className="headerbg"></div>
    </header>
  );
}
export default Header;
