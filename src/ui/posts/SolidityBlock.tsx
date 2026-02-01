// components/SolidityBlock.jsx

interface SolidityBlockProps {
  children: React.ReactNode
  title?: string
}
export const SolidityBlock = ({ children }: SolidityBlockProps) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      borderLeft: '4px solid #6366f1',
      background: '#1e1b4b',
      borderRadius: '8px',
      boxSizing: 'border-box',
      padding: '16px',
      position: 'relative',
      maxWidth: '100%',
      overflowX: 'auto',
    }}
  >
    <pre
      style={{
        margin: 0,
        color: '#c4b5fd',
        whiteSpace: 'pre',
        overflowX: 'auto',
      }}
    >
      <code style={{ display: 'block' }}>{children}</code>
    </pre>
  </div>
)
