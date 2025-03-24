import style from "./style";

function Header() {
  return (
    <header className={style.header}>
      <h1 className={style.h1}>Hello World</h1>
    </header>
  );
}

function Nav() {
  return (
    <nav className={style.nav}>
      <ul className={style.ul}>
        <ol className={style.ol}>
          <li className={style.li}><a href="/read/1">HTML</a></li>
          <li className={style.li}><a href="/read/2">CSS</a></li>
          <li className={style.li}><a href="/read/3">JavaScript</a></li>
        </ol>
      </ul>
    </nav>
  );
}

function Article() {
  return (
    <article className={style.article}>
      <h2 className={style.h2}>Welcome</h2>
      Hello, WEB
    </article>
  );
}

export default function Home() {
  return (
    <div className={style.div}>
      <Header />
      <Nav />
      <Article />
    </div>
  );
}

