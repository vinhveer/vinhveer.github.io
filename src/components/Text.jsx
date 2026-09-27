export default function Text({ children, muted = false }) {
  return <p className={muted ? 'text text-muted' : 'text'}>{children}</p>
}
