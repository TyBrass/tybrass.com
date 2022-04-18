function App2() {
  return (

    // Header Bar
    <div className="app-stack">
      <header>
        <div>
          <img src="./assets/ty-brass-logo.png" className="logo" alt="logo" />
          <h1>Ty Brass</h1>
        </div>
        <div>
          <a href="#"><p>About</p></a>
          <a href="#"><p>Resume</p></a>
          <a href="#"><p>Contact</p></a>
          <a href="#"><p>GitHub</p></a>
        </div>
      </header>


      {/* About Me */}
      <div className="about-me-div">
        <h2>About Me</h2>
        <p>Rectar Cuddlebug</p>
        <img src="./assets/ty-brass-headshot.png" alt="Headshot of me, Ty"></img>
      </div>

      {/* Resume */}
      <div className="resume-div">
        <h2>My Resume</h2>
        <object data="./assets/ty-brass-2022-resume.pdf" type="application/pdf" width="100%" height="100%"></object>
      </div>

      {/* Contact */}
      <div className="contact-div">
        <h2>Contact Me</h2>
        <p>Lorem Sudo</p>
        <div className="contact-links">
          <a href="https://www.linkedin.com/in/tybrass/"><FontAwesomeIcon icon="fa-brands fa-linkedin-in" /></a>
          <a href="https://github.com/TyBrass/sorting-visualizer"><FontAwesomeIcon icon="fa-brands fa-github" /></a>
          <a href="mailto:tybrass@outlook.com"><FontAwesomeIcon icon="fa-solid fa-envelope" /></a>
        </div>
      </div>

      {/* Footer */}
      <footer>
        <p>Cobbled together, bit-by-bit, by Ty Brass</p>
      </footer>
    </div>
  );
}

export default App2;