import flashbots from "./img/Flashbots-logo.svg";
import NSF from "./img/NSFSBIR.png";
import parc from "./img/0xPARC.png";

function Sponsor() {
  return (
    <div className="container text-center">
      <h2 className="main-title">Sponsors</h2>

      <div className="col-md-12">
        <div className="row">
          <div className="col-md-4">
            <img
              src={flashbots}
              alt="Flashbots logo"
              style={{ maxWidth: "250px", height: "auto" }}
            />
          </div>
          <div className="col-md-4">
            <img
              src={NSF}
              alt="NSF SBIR logo"
              style={{ maxWidth: "250px", height: "auto" }}
            />
          </div>
          <div className="col-md-4">
            <img
              src={parc}
              alt="0xPARC logo"
              style={{ maxWidth: "250px", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sponsor;
