// All page content lives here. Edit this file to update the site.

export const profile = {
  name: 'Nguyen Quang Vinh',
  avatar: '/avatar.png',
  headline: 'I turn ideas into working software.',
  intro: [
    'Software Engineer building web applications, mobile apps, AI-powered products, and everything in between.',
    'From an early idea to a working product, I can help design, build, integrate, and ship software that solves real problems.',
  ],

  contacts: [
    { type: 'phone', label: 'Phone', value: '0367 576 135', href: 'tel:+84367576135' },
    {
      type: 'email',
      label: 'Email',
      value: 'nguyenquangvinh300724@gmail.com',
      href: 'mailto:nguyenquangvinh300724@gmail.com',
    },
  ],

  socials: [
    { type: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/vinhveer.9' },
    { type: 'github', label: 'GitHub', href: 'https://github.com/vinhveer' },
    { type: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/vinhveer/' },
  ],

  // color: one of blue | green | purple | orange (Notion palette)
  // tags are optional
  services: {
    title: 'What I can build for you',
    items: [
      {
        title: 'Web Applications',
        icon: 'web',
        color: 'blue',
        text: 'From landing pages and internal tools to full-stack platforms and complex business systems.',
      },
      {
        title: 'Mobile Applications',
        icon: 'device',
        color: 'green',
        text: 'Cross-platform mobile experiences built around real product needs.',
      },
      {
        title: 'AI & Intelligent Systems',
        icon: 'ai',
        color: 'purple',
        text: 'AI agents, automation, LLM integrations, machine learning models, and AI-powered features integrated into existing products.',
      },
      {
        title: 'Custom Software',
        icon: 'custom',
        color: 'orange',
        text: "Have an unusual problem or an idea that doesn't fit into a category? That's usually the interesting part.",
      },
    ],
  },

  experience: {
    title: 'Experience',
    items: [
      {
        role: 'Software Engineer — AI',
        company: 'LASAN MARINE COMPANY LIMITED',
        url: 'https://lasanmarine.com/',
        icon: 'marine',
        text: [
          'Building AI-powered software for the maritime engineering domain — from web applications and AI agents to specialized engineering tools.',
          'My work spans AI application development, agentic systems, web platforms, workflow automation, and domain-specific engineering software.',
        ],
        tags: ['AI Agents', 'LLM', 'Web', 'Automation', 'Engineering Tools'],
      },
      {
        role: 'Software Engineer · Part-time',
        company: 'AAC79 PROTECH COMPANY LIMITED',
        url: 'https://aac79.com.vn/kiem-dinh-cong-trinh/',
        icon: 'construction',
        text: [
          'Developing software and intelligent systems for construction monitoring and digital engineering.',
        ],
        tags: ['Web', 'Data', 'AI/ML', 'Digital Twin'],
      },
    ],
  },

  // Links reference entries in contacts / socials by type.
  cta: {
    title: 'Have something in mind?',
    text: "Whether you have a clear specification, an early-stage idea, or simply a problem that might be solved with software — let's talk.",
    buttonLabel: 'Start a conversation', // scrolls back to the top of the page
    links: ['email', 'linkedin', 'github'],
  },
}
