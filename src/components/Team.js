import Card from "./Card";
function TeamMember() {
  return (
    <div className="container team-scroll">
      <h2 className="main-title text-center">Team</h2>
      <div className="card-cover">
        <div className="row col-md-12">
          <div className="col-md-6 mb-2 ms-1">
            <Card
              title="Elaine Shi"
              text="President<br> Chief Scientist <br>" />
          </div>
          <div className="col-md-6 mb-2 ms-1">
            <Card
              title="Andrew Miller"
              text="<br> Advisor <br>" />
          </div>
        </div>
        <div className="row col-md-12">
          <div className="col-md-4 mb-2">
            <Card
              title="Afonso Tinoco"
              text="Co-Founder<br> Lead Research Engineer  <br>" />
          </div>
          <div className="col-md-4 mb-2">
            <Card
              title="Tianyao Gu"
              text="Co-Founder<br>   <br>" />
          </div>
          <div className="col-md-4 mb-2">
            <Card
              title="Junxi Song"
              text="Co-Founder<br> Research Engineer  <br>" />
          </div>
        </div>
      </div>

    </div>
  );
}
export default TeamMember;
