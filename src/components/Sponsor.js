import flashbots from "./img/Flashbots-logo.svg";

function Sponsor() {
  return (
    <div className="container text-center">
      <h2 className="main-title">Sponsors</h2>
      
      {/* Inline style to set a max width */}
      <img 
        src={flashbots} 
        alt="Flashbots logo" 
        style={{ maxWidth: "200px", height: "auto" }} 
      />
    </div>
  );
}

export default Sponsor;
