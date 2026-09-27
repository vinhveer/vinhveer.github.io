import Icon from './Icon.jsx'

// Notion-style gallery view: cards with a coloured cover, title, text and tags.
export default function Gallery({ items }) {
  return (
    <div className="gallery">
      {items.map((item) => (
        <article className={`card card-${item.color}`} key={item.title}>
          <div className="card-cover">
            <Icon name={item.icon} size={56} stroke={1.3} />
          </div>
          <div className="card-body">
            <h3 className="card-title">{item.title}</h3>
            <p className="card-text">{item.text}</p>
            {item.tags?.length > 0 && (
              <ul className="tags">
                {item.tags.map((tag) => (
                  <li className="tag" key={tag}>
                    {tag}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </article>
      ))}
    </div>
  )
}
