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
                    <Card title="What is ORAM?" img={card1} text="Oblivious RAM (ORAM) provides a secret database that \"encrypts\" not only the data contents,
but also the accesses to data." />
                    </div>
                    <div className="col-md-3 mb-2">
                    <Card title="Our Mission" img={card2} text="We provide open source implementations of Oblivious RAM and oblivious algorithms. Check out our
open source releases on <a href=\"https://github.com/obliviouslabs/oram\">Github </a>." />
                    </div>

                </div>
            </div>
        </div>
    </div>
  );
}
export default IntroOram;
