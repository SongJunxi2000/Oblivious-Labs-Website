import Card from "./Card";
import card1 from  "./img/card1.png";
import card2 from  "./img/card2.png";
import card3 from  "./img/card3.png";
function IntroOram() {
  return (
    <div className="container IntroOram">
        <h2 className="main-title text-center">Intro to ORAM</h2>
        <div className="card-cover">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-3 mb-2">
                    <Card title="What is ORAM?" img={card1} text="Oblivious RAM (ORAM) acts as middleware between your application and the system that obfuscates the memory and disk access patterns. Read more." />
                    </div>
                    <div className="col-md-3 mb-2">
                    <Card title="Do I need an ORAM?" img={card2} text="You should consider using an ORAM whenever your application involves privately querying a database, whether the database is secret or public. Read more." />
                    </div>

                </div>
            </div>
        </div>
    </div>
  );
}
export default IntroOram;
