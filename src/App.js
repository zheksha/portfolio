import NavBar from "./components/NavBar";
import ProfileCard from "./sections/ProfileCard";
import AboutMe from "./sections/AboutMe";
import MyWorks from "./sections/MyWorks";
import ContactMe from "./sections/ContactMe";
import "./styles/style.scss";
import Education from "./sections/Education";
import Footer from "./sections/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-3">
            <ProfileCard />
          </div>
          <div className="col-md-9 m-0 p-0">
            <AboutMe />
            <Education />
            <MyWorks />
            <ContactMe />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
