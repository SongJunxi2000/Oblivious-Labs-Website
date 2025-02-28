import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";
import BalanceChecker from "./components/BalanceChecker";
import Footer from "./components/Footer";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    }
  }, []);

  if (isMobile) {
    return (
      <div style={{ textAlign: "center", marginTop: "20%" }}>
        <h2>This website is not supported on mobile. Please use a laptop or desktop.</h2>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <Header />
      <Main />
      <BalanceChecker />
      <Footer />
    </>
  );
}

export default App;
