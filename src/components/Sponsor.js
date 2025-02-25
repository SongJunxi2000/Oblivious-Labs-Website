import flashbots from "./img/Flashbots-logo.svg";
import NSF from "./img/NSFSBIR.png";
import parc from "./img/0xPARC.png";

function Sponsor() {
  return (
    <div className="container text-center">
      <h2 className="main-title">Sponsors</h2>
      
      {/* Inline style to set a max width */}
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "20px" }}>
      <img 
        src={flashbots} 
        alt="Flashbots logo" 
        style={{ maxWidth: "250px", height: "auto" }} 
      />
      <img 
        src={NSF} 
        alt="NSF SBIR logo" 
        style={{ maxWidth: "250px", height: "auto" }} 
      />
      <img 
        src={parc} 
        alt="0xPARC logo" 
        style={{ maxWidth: "250px", height: "auto" }} 
      />
      </div>
    </div>
  );
}

export default Sponsor;
