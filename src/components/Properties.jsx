import Icon from './Icon.jsx'

// Notion-style page properties: icon + label on the left, value on the right.
export default function Properties({ items }) {
  return (
    <dl className="properties">
      {items.map((item) => (
        <div className="property" key={item.type}>
          <dt className="property-label">
            <Icon name={item.type} size={22} />
            <span className="property-label-text">{item.label}</span>
          </dt>
          <dd className="property-value">
            <a href={item.href}>{item.value}</a>
          </dd>
        </div>
      ))}
    </dl>
  )
}
