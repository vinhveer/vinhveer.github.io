import React from 'react'
import { CalendarDaysIcon, ArrowUpRightIcon } from '@heroicons/react/24/outline'
import Container from '../../components/common/Container.jsx'
import { useI18n } from '../../i18n/useI18n.js'

function BlogListBlock() {
  const { t } = useI18n()
  const posts = t.blog.items

  return (
    <section className="bg-[var(--page-bg)] py-20 sm:py-28 transition-colors duration-300">
      <Container>
        {/* Header */}
        <p
          data-aos="fade-up"
          className="text-[14px] font-bold uppercase tracking-[0.15em] text-[var(--accent)] mb-5"
        >
          {t.blog.eyebrow}
        </p>
        <h2
          data-aos="fade-up"
          data-aos-delay="60"
          className="max-w-3xl text-[clamp(1.5rem,4vw,2.5rem)] font-bold tracking-[-0.03em] leading-[1.15] text-[var(--text-primary)]"
        >
          {t.blog.title}
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="mt-4 max-w-xl text-[15px] leading-[1.8] text-[var(--text-secondary)]"
        >
          {t.blog.description}
        </p>

        {posts.length > 0 && (
          <>
            <div className="mt-10 mb-2 h-px bg-[var(--border-soft)]" />
            <div className="grid gap-0">
              {posts.map((post, index) => (
                <article
                  key={post.title}
                  data-aos="fade-up"
                  data-aos-delay={index * 60}
                  className="group py-7 border-b border-[var(--border-soft)] last:border-b-0 cursor-pointer list-hover-accent"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <CalendarDaysIcon className="w-3.5 h-3.5 text-[var(--text-muted)]" />
                        <p className="text-[11px] font-bold text-[var(--text-muted)] tracking-[0.12em] uppercase">{post.date}</p>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold tracking-[-0.02em] text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors duration-200">
                        {post.title}
                      </h3>
                      <p className="mt-2 max-w-xl text-[15px] leading-[1.8] text-[var(--text-secondary)]">{post.excerpt}</p>
                    </div>
                    <span className="hidden sm:flex items-center justify-center w-8 h-8 text-[var(--text-muted)] opacity-0 group-hover:opacity-100 group-hover:text-[var(--accent)] transition-all duration-200 flex-shrink-0 mt-3 r-sm">
                      <ArrowUpRightIcon className="w-4 h-4" />
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </>
        )}
      </Container>
    </section>
  )
}

export default BlogListBlock
