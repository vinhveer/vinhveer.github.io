import { IconArrowUpRight } from '@tabler/icons-react'
import Icon from './Icon.jsx'

// List of roles, all rendered with the same layout.
export default function Experience({ items }) {
  return (
    <div className="experience">
      {items.map((job) => (
        <article className="job" key={`${job.company}-${job.role}`}>
          <div className="job-icon">
            <Icon name={job.icon} size={24} />
          </div>
          <div className="job-body">
            <div className="job-head">
              <h3 className="job-role">{job.role}</h3>
              {job.url ? (
                <a className="job-company" href={job.url} target="_blank" rel="noreferrer">
                  {job.company}
                  <IconArrowUpRight className="icon" size={14} stroke={1.8} aria-hidden="true" />
                </a>
              ) : (
                <p className="job-company">{job.company}</p>
              )}
            </div>
            <div className="job-text">
              {job.text.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <ul className="tags">
              {job.tags.map((tag) => (
                <li className="tag" key={tag}>
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  )
}
