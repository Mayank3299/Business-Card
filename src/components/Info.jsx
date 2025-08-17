import email from "../assets/mail.svg"
import linkedin from "../assets/linkedin.svg"

export default function Info () {
  return (
    <div className="info">
      <h1>Mayank Agarwal</h1>
      <h2>FullStack Developer</h2>
      <p>sir-mayank-agarwal.netlify.app</p>
      <div className="btn-container">
        <a 
          href="mailto:mayank.agarwal0903@gmail.com" 
          className="btn btn-email"
        >
          <img src={email} alt="Email" className="icon" />
          Email
        </a>
        <a 
          href="https://www.linkedin.com/in/mayank-agarwal-4a3670180/" 
          className="btn btn-linkedin" 
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin} alt="LinkedIn" className="icon" />
          LinkedIn
        </a>
      </div>
    </div>

  )
}