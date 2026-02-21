import Image from 'next/image'

interface PostImageProps {
  src: string
  alt: string
  caption?: string
  width?: number
  height?: number
}

export function PostImage({ src, alt, caption, width = 800, height = 450 }: PostImageProps) {
  return (
    <figure
      style={{
        margin: '32px 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '12px',
      }}
    >
      <div
        style={{
          borderLeft: '4px solid #6366f1',
          borderRadius: '8px',
          overflow: 'hidden',
          background: '#1e1b4b',
          padding: '12px',
          width: '100%',
          boxSizing: 'border-box',
        }}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading='lazy'
          style={{
            width: '100%',
            height: 'auto',
            borderRadius: '4px',
            display: 'block',
          }}
        />
      </div>
      {caption && (
        <figcaption
          style={{
            color: '#9ca3af',
            fontSize: '0.85rem',
            textAlign: 'center',
            fontStyle: 'italic',
            lineHeight: '1.5',
          }}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
