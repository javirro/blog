// components/SolidityBlock.jsx

interface ConsoleCommandProps {
  children: React.ReactNode
  title?: string
}
export const ConsoleCommandBlock = ({ children }: ConsoleCommandProps) => (
  <div
    style={{
      borderLeft: '4px solid #6366f1',
      background: '#1e1b4b',
      borderRadius: '8px',
      padding: '16px',
      marginBlock: '24px',
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
