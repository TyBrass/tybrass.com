import logo from './assets/ty-brass-logo-inverted.png';
import resume from './assets/Ty-Brass-2022-resume.pdf#zoom=scale';
import headshot from './assets/ty-brass-headshot.png';
import envelope from './assets/envelope.png'
import linkedin from './assets/linkedin.png'

function App() {
  return (

    // Header Bar
    <div className="app-stack">
      <header>
        <div className="logo-div">
          <img src={logo} className="logo" alt="logo" />
        </div>
        <div className="header-links-div">
          <a href="#about-div-target"><p>About</p></a>
          <a href="#resume-div-target"><p>Resume</p></a>
          <a href="#contact-div-target"><p>Contact</p></a>
          <a href="https://github.com/TyBrass"><p>GitHub</p></a>
        </div>
      </header>

      <main>

        {/* Intro */}
        <div className="intro-div">
          <h1><span className="hi-im">Hi, I'm</span>Ty Brass,</h1>
          <h2>a software developer.</h2>
          <p>I'm in my final year of a computer science degree and am looking for a
            position where I can start learning all those things they don't teach you in school.
            <br></br><br></br>I'm especially interested in full-stack web development (that's where my current
            experience lies), but I'd also be extremely open to learning about mobile development. </p>
        </div>

        {/* About Me */}
        <div id="about-div-target"></div>
        <div className="about-me-div">
          <div className="about-text">
            <h2>About Me</h2>
            <p>I want to make things that anybody in the world can use.</p>
            <p>After completing a degree in English literature, I started
              on a computer science degree, and since then I've been developing
              what began as a slight interest in programming into a real passion
              for software development.<br></br><br></br>I'm comfortable working with Python,
              JavaScript, and HTML and CSS, and I've had experience with Java, C/C++,
              and React (used for this site), as well as a few others. You can get a
              more comprehensive run-down in my resume below.<br></br><br></br>Having worked as
              a contracted web developer for my university's newspaper, I have a
              slight bit of professional exerience, and I'm keen to find a professional
              environment working alongside other developers where I can learn from others and
              solve problems that I would never encounter when developing personal projects.</p>
          </div>
          <div className="about-image-div">
            <img src={headshot} className="headshot" alt="Headshot of me, Ty"></img>
          </div>
        </div>

        {/* Resume */}
        <div id="resume-div-target"></div>
        <div id="resume-div" className="resume-div">
          <h2>My Resume</h2>
          <object data={resume} className="resume" type="application/pdf" width="100%" height="100%"></object>
        </div>

        {/* Contact */}
        <div id="contact-div-target"></div>
        <div id="contact-div" className="contact-div">
          <h2>Contact Me</h2>
          <p>Like I said above, I'm looking for a job. Don't hesitate if you'd like to chat.
            <br></br><br></br>Click one of the fancy icons below (or just reach me at tybrass@outlook.com)</p>
          <div className="contact-links">
            <a href="https://www.linkedin.com/in/tybrass/"><img src={linkedin} className="linkedin"></img></a>
            <a href="mailto:tybrass@outlook.com"><img src={envelope} className="envelope"></img></a>
          </div>
        </div>
      </main >
      {/* Footer */}
      < footer >
        <p>Cobbled together, bit-by-bit, by Ty Brass</p>
      </footer >
    </div >
  );
}

export default App;