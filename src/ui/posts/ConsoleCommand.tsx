'use client'

import { useState } from 'react'

interface ConsoleCommandProps {
  children: React.ReactNode
  title?: string
}
export const ConsoleCommandBlock = ({ children }: ConsoleCommandProps) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    const data = (children as { props: { children: string } })?.props?.children
    navigator.clipboard.writeText(data as string)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
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
        cursor: 'pointer',
      }}
      className='hover:brightness-190'
      onClick={handleCopy}
    >
      <pre
        style={{
          margin: 0,
          color: '#c4b5fd',
          whiteSpace: 'pre',
          overflowX: 'auto',
        }}
      >
        <code
          style={{ display: 'block', paddingTop: '12px', paddingLeft: '6px', paddingRight: '6px' }}
        >
          {copied ? 'Copied!' : children}
        </code>
      </pre>
    </div>
  )
}
