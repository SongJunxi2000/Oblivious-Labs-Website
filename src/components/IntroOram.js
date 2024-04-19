import Card from "./Card";
function IntroOram() {
  return (
    <div className="container services">
        <h2 className="main-title text-center">Intro to ORAM</h2>
        <div className="card-cover">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-4 mb-2">
                        <Card title="What is ORAM?" img="card1.png" text="Oblivious RAM (ORAM) is a privacy-enhancing technology that hides the memory access pattern of your application, thereby provably resisting most side-channel attacks. Read more." />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="Should I use ORAM?" img="card2.png" text="You should consider deploying an ORAM when your application involves privately querying a large database, whether the database is secret or public. Read more." />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="Who has applied ORAM?" img="card3.png" text="Signal, the encrypted messenger, has deployed ORAM for private contact discovery. We are now working with Flashbots, a leading Web3 orgamization, to develop private block builders for Ethereum. Read more." />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default IntroOram;
