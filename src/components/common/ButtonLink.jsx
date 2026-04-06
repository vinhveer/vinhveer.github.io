import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRightIcon } from '@heroicons/react/24/solid'

function ButtonLink({ children, className = '', to, href, variant = 'primary', onClick }) {
  const cls = variant === 'primary' ? 'btn-arrow' : 'btn-arrow-outline'

  const content = (
    <>
      {children}
      <span className="arrow-icon">
        <ArrowUpRightIcon className="w-3.5 h-3.5" />
      </span>
    </>
  )

  if (href) {
    return (
      <a href={href} className={`${cls} ${className}`} onClick={onClick}>
        {content}
      </a>
    )
  }

  return (
    <Link to={to} className={`${cls} ${className}`} onClick={onClick}>
      {content}
    </Link>
  )
}

export default ButtonLink
