import img from "./img/img1.png";

function About() {
  return (
    <>
      <div style={{marginTop:'15rem',width:'100%',height:'10px'}} className="about-scroll"></div>

      <div className="container about">
        <div className="row">
          <div className="col-md-6 text-center">
            <img alt="about" src={img} className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h2 className="main-title about-h2">About Us</h2>
            <p className="main-p">

              Oblivious Labs is a privacy-focused research and development
              organization that protects user data from unauthorized access. Our team is
              composed of experts in cryptography, security, and distributed
              systems from Carnegie Mellon University and University of Illinois Urbana-Champaign. 
              Our flagship product is a cryptographic protocol called Oblivious RAM (ORAM), 
              and we are currently working with leading organizations to deploy it in the Ethereum ecosystem. 
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
