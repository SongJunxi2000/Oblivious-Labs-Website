import card1 from  "./img/card1.png";

function Sponsor() {
  return (
    <div className="container Sponsor">
        <h2 className="main-title text-center">Sponsors</h2>
        <div className="card-cover">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-3 mb-2">
                    <img src={card1} alt="ORAM Information" className="img-fluid" />
                    </div>
                    <div className="col-md-3 mb-2">
                    <img src={card1} alt="ORAM Information" className="img-fluid" />
                    </div>

                </div>
            </div>
        </div>
    </div>
  );
}
export default Sponsor;
