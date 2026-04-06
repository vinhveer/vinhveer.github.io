import React from 'react'
import { GlobeAltIcon, CodeBracketIcon, BoltIcon, ArrowUpRightIcon, CheckCircleIcon } from '@heroicons/react/24/outline'
import Container from '../../components/common/Container.jsx'
import { useI18n } from '../../i18n/useI18n.js'

const categoryIcons = {
  'Corporate website': <GlobeAltIcon className="w-5 h-5" />,
  'Custom software': <CodeBracketIcon className="w-5 h-5" />,
  'Optimization': <BoltIcon className="w-5 h-5" />,
}

function ProjectsGridBlock() {
  const { t } = useI18n()
  const projects = t.projects.items

  return (
    <section className="bg-[var(--page-bg)] py-20 sm:py-28 transition-colors duration-300">
      <Container>
        {/* Header */}
        <p
          data-aos="fade-up"
          className="text-[14px] font-bold uppercase tracking-[0.15em] text-[var(--accent)] mb-5"
        >
          {t.projects.eyebrow}
        </p>
        <h2
          data-aos="fade-up"
          data-aos-delay="60"
          className="max-w-3xl text-[clamp(1.5rem,4vw,2.5rem)] font-bold tracking-[-0.03em] leading-[1.15] text-[var(--text-primary)]"
        >
          {t.projects.title}
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="mt-4 max-w-xl text-[15px] leading-[1.8] text-[var(--text-secondary)]"
        >
          {t.projects.description}
        </p>

        {projects.length > 0 && (
          <>
            <div className="mt-10 mb-2 h-px bg-[var(--border-soft)]" />
            <div className="grid gap-0">
              {projects.map((project, index) => (
                <article
                  key={project.title}
                  data-aos="fade-up"
                  data-aos-delay={index * 80}
                  className="group py-8 border-b border-[var(--border-soft)] last:border-b-0 list-hover-accent"
                >
                  <div className="flex items-start gap-5">
                    <div className="flex items-center justify-center w-10 h-10 bg-[var(--accent-light)] text-[var(--accent)] flex-shrink-0 group-hover:bg-[var(--accent)] group-hover:text-white transition-all duration-200 r-md">
                      {categoryIcons[project.category] || categoryIcons['Corporate website']}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <span className="text-[11px] font-bold text-[var(--accent)] tracking-[0.12em] uppercase opacity-70">
                            {project.category}
                          </span>
                          <h3 className="mt-1.5 text-lg sm:text-xl font-bold tracking-[-0.02em] text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors duration-200">
                            {project.title}
                          </h3>
                        </div>
                        <span className="hidden sm:flex items-center justify-center w-8 h-8 text-[var(--text-muted)] opacity-0 group-hover:opacity-100 group-hover:text-[var(--accent)] transition-all duration-200 flex-shrink-0 mt-3 r-sm">
                          <ArrowUpRightIcon className="w-4 h-4" />
                        </span>
                      </div>
                      <p className="mt-2 max-w-xl text-[15px] leading-[1.8] text-[var(--text-secondary)]">{project.summary}</p>

                      <div className="mt-4 flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                        <CheckCircleIcon className="w-4 h-4 text-[var(--accent)] flex-shrink-0" />
                        <p className="leading-[1.6]">
                          <span className="font-semibold text-[var(--text-primary)]">{t.projects.result}: </span>
                          {project.result}
                        </p>
                      </div>
                    </div>
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

export default ProjectsGridBlock
