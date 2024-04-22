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
            <h2 className="main-title about-h2">ABOUT</h2>
            <p className="main-p">
            Oblivious Labs was established in 2023 by Professor Elaine Shi, together with Tianyao Gu and Afonso Tinoco. Leveraging more than a decade of research in Oblivious RAM (ORAM), our company is committed to providing secure private data access for databases across various industries. If you are interested in learning how ORAM can enhance the security of your services, please contact us.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
