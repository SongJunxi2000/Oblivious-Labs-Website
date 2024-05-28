import Card from "./Card";
import card1 from  "./img/card1.png";
import card2 from  "./img/card2.png";
import card3 from  "./img/card3.png";
function TeamMember() {
  return (
    <div className="container team-scroll">
        <h2 className="main-title text-center">Team</h2>
        <div className="card-cover">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-3 mb-2">
                    <Card title="Elaine Shi" img={card1} text="President and CEO \n Professor@CMU \n
                    \n Author of Path ORAM, ObliVM, and lots of oblivious algorithms and data structures. 20 yrs+ experience in cryptography and blockchains. 10+ patents.
" />
                    </div>
                    <div className="col-md-3 mb-2">
                    <Card title="Tianyao Gu" img={card2} text="" />
                    </div>
                    <div className="col-md-3 mb-2">
                    <Card title="Afonso Tinoco" img={card1} text="" />
                    </div>
                    <div className="col-md-3 mb-2">
                    <Card title="Andrew Miller" img={card2} text="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default TeamMember;
