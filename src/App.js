import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from './assets/ty-brass-logo-inverted.png';
import resume from './assets/Ty-Brass-2022-resume.pdf#zoom=scale';
import headshot from './assets/ty-brass-headshot.png';

function App() {
  return (

    // Header Bar
    <div className="app-stack">
      <header>
        <div className="logo-div">
          <img src={logo} className="logo" alt="logo" />
        </div>
        <div className="header-links-div">
          <a href="#"><p>About</p></a>
          <a href="#"><p>Resume</p></a>
          <a href="#"><p>Contact</p></a>
          <a href="#"><p>GitHub</p></a>
        </div>
      </header>

      <main>

        {/* Intro */}
        <div className="intro-div">
          <h1><span className="hi-im">Hi, I'm</span>Ty Brass</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempus elit sed dictum porttitor. Nulla facilisi. Vivamus tellus velit, pharetra nec massa vel, gravida malesuada justo. Donec commodo porttitor lectus nec consequat. Duis rutrum dolor non tristique porttitor. Ut ac leo purus. Cras purus arcu, rhoncus eget tempor a, pellentesque eget justo. Morbi pellentesque est sit amet varius ullamcorper. Suspendisse potenti.</p>
        </div>

        {/* About Me */}
        <div className="about-me-div">
          <h2>About Me</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempus elit sed dictum porttitor. Nulla facilisi. Vivamus tellus velit, pharetra nec massa vel, gravida malesuada justo. Donec commodo porttitor lectus nec consequat. Duis rutrum dolor non tristique porttitor. Ut ac leo purus. Cras purus arcu, rhoncus eget tempor a, pellentesque eget justo. Morbi pellentesque est sit amet varius ullamcorper. Suspendisse potenti. Donec quis eros vehicula, imperdiet felis sit amet, cursus est.</p>
          <img src={headshot} className="headshot" alt="Headshot of me, Ty"></img>
        </div>

        {/* Resume */}
        <div className="resume-div">
          <h2>My Resume</h2>
          <object data={resume} className="resume" type="application/pdf" width="100%" height="100%"></object>
        </div>

        {/* Contact */}
        <div className="contact-div">
          <h2>Contact Me</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempus elit sed dictum porttitor. Nulla facilisi. Vivamus tellus velit, pharetra nec massa vel, gravida malesuada justo. Donec commodo porttitor lectus nec consequat. Duis rutrum dolor non tristique porttitor. Ut ac leo purus. Cras purus arcu, rhoncus eget tempor a, pellentesque eget justo. Morbi pellentesque est sit amet varius ullamcorper. Suspendisse potenti. Donec quis eros vehicula, imperdiet felis sit amet, cursus est.</p>
          <div className="contact-links">
            <a href="https://www.linkedin.com/in/tybrass/"><FontAwesomeIcon icon="fa-brands fa-linkedin-in" /></a>
            <a href="https://github.com/TyBrass/sorting-visualizer"><FontAwesomeIcon icon="fa-brands fa-github" /></a>
            <a href="mailto:tybrass@outlook.com"><FontAwesomeIcon icon="fa-solid fa-envelope" /></a>
          </div>
        </div>
      </main>
      {/* Footer */}
      <footer>
        <p>Cobbled together, bit-by-bit, by Ty Brass</p>
      </footer>
    </div>
  );
}

export default App;