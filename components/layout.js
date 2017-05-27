import Link from 'next/link'
import Head from 'next/head'

export default ({ children, title = 'This is the default title' }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <header>
      <nav>
        <Link href='/'><a>Home</a></Link> |
        <Link href='/preface'><a>Preface</a></Link> |
        <Link href='/part0006'><a>ch0006</a></Link> |
        <Link href='/part0007'><a>ch0007</a></Link> |
        <Link href='/part0008'><a>ch0008</a></Link> |
        </nav>
    </header>

    { children }

    <footer>
        <Link href='/'><a>Home</a></Link> |
        <Link href='/preface'><a>Preface</a></Link> |
        <Link href='/part0006'><a>ch0006</a></Link> |
        <Link href='/part0007'><a>ch0007</a></Link> |
        <Link href='/part0008'><a>ch0008</a></Link> |
    </footer>
  </div>
)
