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
        <Link href='/part0006'><a>ch1</a></Link> |
        <Link href='/part0007'><a>ch2</a></Link> |
        <Link href='/part0008'><a>ch3</a></Link> |
        <Link href='/part0009'><a>ch4</a></Link> |
        <Link href='/part0010'><a>ch5</a></Link> |
        <Link href='/part0011'><a>ch6</a></Link> |
        <Link href='/part0012'><a>ch7</a></Link> |
        <Link href='/part0013'><a>ch8</a></Link> |
        <Link href='/part0014'><a>ch9</a></Link> |
        <Link href='/part0015'><a>Green sock</a></Link> |
        </nav>
    </header>

    { children }

    <footer>
        <Link href='/'><a>Home</a></Link> |
        <Link href='/preface'><a>Preface</a></Link> |
        <Link href='/part0006'><a>ch1</a></Link> |
        <Link href='/part0007'><a>ch2</a></Link> |
        <Link href='/part0008'><a>ch3</a></Link> |
        <Link href='/part0009'><a>ch4</a></Link> |
        <Link href='/part0010'><a>ch5</a></Link> |
        <Link href='/part0011'><a>ch6</a></Link> |
        <Link href='/part0012'><a>ch7</a></Link> |
        <Link href='/part0013'><a>ch8</a></Link> |
        <Link href='/part0014'><a>ch9</a></Link> |
        <Link href='/part0015'><a>Green sock</a></Link> |
    </footer>
  </div>
)
