import meImage from "../assets/me.jpeg";

export default function Picture () {
  return (
    <div className="profile-picture">
      <img src={meImage} alt="Handsome Mayank" />
    </div>
  )
}