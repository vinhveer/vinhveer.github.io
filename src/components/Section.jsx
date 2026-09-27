// Groups blocks in a flex column; spacing comes from gap only.
export default function Section({ gap = 8, children }) {
  return (
    <section className="section" style={{ gap }}>
      {children}
    </section>
  )
}
