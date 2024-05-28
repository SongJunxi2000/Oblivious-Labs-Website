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
                    <Card title="Elaine Shi" text="<div class='text-center'>
    President and CEO <br><br>
  </div>" />
                    </div>
                    <div className="col-md-3 mb-2">
                    <Card title="Tianyao Gu" text="<div class='text-center'>
    Co-Founder<br> Lead Research Engineer  <br><br>
  </div>" />
                    </div>
                    <div className="col-md-3 mb-2">
                    <Card title="Afonso Tinoco" text="<div class='text-center'>
    Co-Founder<br> Lead Research Engineer  <br><br>
  </div>" />
                    </div>
                    <div className="col-md-3 mb-2">
                    <Card title="Andrew Miller" text="<div class='text-center'>
    Advisor  <br><br>
  </div>" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default TeamMember;
