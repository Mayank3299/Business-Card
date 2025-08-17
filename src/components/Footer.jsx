import github from "../assets/github.svg"

export default function Footer () {
  return (
    <div className="footer">
      <a href="https://github.com/Mayank3299"
      target="_blank">
        <img src={github} alt="Github" />
      </a>
    </div>
  )
}