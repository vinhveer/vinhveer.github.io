export default function ProfileHeader({ avatar, name, headline, intro }) {
  return (
    <header className="profile">
      <img className="avatar" src={avatar} alt={`Portrait of ${name}`} />
      <div className="profile-text">
        <div className="profile-name">
          <h1 className="title">{name}</h1>
          <h5 className="headline">{headline}</h5>
        </div>
        <div className="profile-intro">
          {intro.map((paragraph) => (
            <p className="intro" key={paragraph}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </header>
  )
}
