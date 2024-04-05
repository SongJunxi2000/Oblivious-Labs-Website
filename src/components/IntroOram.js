import Card from "./Card";
function IntroOram() {
  return (
    <div className="container services">
        <h2 className="main-title text-center">Intro to ORAM</h2>
        <div className="card-cover">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-4 mb-2">
                        <Card title="What is ORAM?" img="card1.png" text="Oblivious RAM (ORAM) acts as middleware between your application and the system that obfuscates the memory and disk access patterns. Read more." />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="Do I need an ORAM?" img="card2.png" text="You should consider using an ORAM whenever your application involves privately querying a database, whether the database is secret or public. Read more." />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="Current ORAM Apps" img="card3.png" text="We helped Signal deploy ORAM in their private contact discovery service. We are now working with Flashbots, a leading Web3 orgamization, to develop a private block builder for Ethereum. Read more." />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default IntroOram;
