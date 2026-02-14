'use client'

import { useState } from 'react'

interface ConsoleCommandProps {
  children: React.ReactNode
}

export const ConsoleCommandBlock = ({ children }: ConsoleCommandProps) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    // Extraer texto de forma más robusta
    const textToCopy = typeof children === 'string' ? children : document.getElementById('command-text')?.innerText
    if (textToCopy) {
      navigator.clipboard.writeText(textToCopy as string)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div
      role="button"
      aria-label="Copy command to clipboard"
      style={{
        borderLeft: '4px solid #6366f1',
        background: '#1b1b3a',
        borderRadius: '8px',
        padding: '16px',
        marginBlock: '24px',
        position: 'relative',
        cursor: 'pointer'
      }}
      className="hover:brightness-125 transition-all"
      onClick={handleCopy}
    >
      {/* This avoid moving the layout when showing the copied indicator */}
      {copied && (
        <span
          style={{
            position: 'absolute',
            top: '8px',
            right: '12px',
            fontSize: '12px',
            color: '#10b981',
            fontWeight: 'bold'
          }}
        >
          ✓ Copied!
        </span>
      )}

      <pre style={{ margin: 0, overflowX: 'auto', padding: '8px' }}>
        <code
          id="command-text"
          style={{
            color: '#c4b5fd',
            display: 'block',
            fontFamily: 'monospace',
            fontSize: '14px'
          }}
        >
          {children}
        </code>
      </pre>
    </div>
  )
}
