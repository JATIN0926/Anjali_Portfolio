import { useEffect, useState } from "react";
import "./App.css";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import ProjectSection from "./components/ProjectSection";
function App() {
  const scrollDown = () => {
    window.scrollTo({
      top: 750,
      behavior: "smooth",
    });
  };
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <div className="main">
        {loading ? (
          <Loader />
        ) : (
          <>
            <div className="static-img">
              <img src="/Random static 3.png" alt="" />
            </div>
            <Navbar />
            <div className="portfolio_container">
              <div className="heading">
                <h1 className="portfolio">PORTFOLIO</h1>
                <p className="bordered-portfolio">PORTFOLIO</p>
                <button className="cool_btn text-white" onClick={scrollDown}>
                  Cool Projects 😍
                </button>
                <img src="/PROFILE.svg" alt="" className="profile_img" />
              </div>
            </div>
            <div className="projects-container">
              <ProjectSection
                img1="/Financier.svg"
                img2="/fintrack.svg"
                title1="Financier - A money manager"
                desc1="App & Research"
                title2="Fintrack - Money transfer app"
                desc2="App animation (Using After effects)"
                link1="https://www.behance.net/gallery/174519889/Financier-A-Money-management-app"
                link2="https://dribbble.com/shots/21685074--Fintrack-Catch-the-Groove-of-Seamless-Money-Transfers"
              />
              <ProjectSection
                img1="focus_matrix.svg"
                img2="/coalporter.svg"
                title1="Focus Matrix - A Productivity management"
                desc1="Dashboard"
                title2="Coalporter - Coal Import Business"
                desc2="Website"
                link1="https://www.figma.com/proto/3BFllrcoZuu9iiOeBSG11X/Great-designer-instagram-post?type=design&node-id=398-893&t=4v92TbGllYZ8pPhE-0&scaling=min-zoom&page-id=0%3A1"
                link2="https://www.figma.com/proto/3BFllrcoZuu9iiOeBSG11X/Great-designer-instagram-post?type=design&node-id=398-1607&t=4v92TbGllYZ8pPhE-0&scaling=min-zoom&page-id=0%3A1"
              />
              <ProjectSection
                img1="/Vama.svg"
                img2="/masterCollection.svg"
                title1="VAMA - An astrologer"
                desc1="App & Research"
                title2="Figma master collection - Featuring All Designs"
                desc2="Website/App/ Dashboard"
                link1="https://www.figma.com/proto/3BFllrcoZuu9iiOeBSG11X/Great-designer-instagram-post?type=design&node-id=398-1823&t=4v92TbGllYZ8pPhE-0&scaling=min-zoom&page-id=0%3A1"
                link2="https://www.figma.com/file/7kZ8VZ3YACt1Zw6Qszodvw/Anjali's-portfolio?type=design&node-id=0-1&mode=design&t=ziYhUiECRGAAnuwg-0"
              />
            </div>
            <div className="contact-section">
              <div className="contact-details">
                <h3 className="text-white conclu_phone">
                  Call -{" "}
                  <a href="tel:+919690180323">
                    <span className="text-yellow">+919690180323</span>
                  </a>
                </h3>
                <p className="text-white">or</p>
                <h3 className="text-white conclu_mail">
                  Email -{" "}
                  <a href="mailto:anjalikum116@gmail.com">
                    <span className="text-yellow mail_link">
                      anjalikum116@gmail.com
                    </span>
                  </a>{" "}
                </h3>
              </div>
              <div className="concluding-gif">
                <p className="text-white">
                  Catch your breath for a speedy response!
                </p>
                <video
                  src="/kitty.mp4"
                  autoPlay
                  loop
                  muted
                  className="kitty_gif"
                ></video>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
