import Link from 'next/link'


const RedirectOwnPost: React.FC<{text: string, route: string}> = ({  text, route }) => {
  return (
    <Link href={route} className="text-indigo-400 hover:underline">
      {text}
    </Link>
  )
}

export default RedirectOwnPost
