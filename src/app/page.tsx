import style from "./style";
const topics = [
  { id: 1, title: "HTML", body: "HTML is a markup language" },
  { id: 2, title: "CSS", body: "CSS is a style sheet language" },
  { id: 3, title: "JavaScript", body: "JavaScript is a scripting language" },
];


function Header(props: { title: string }) {
  return (
    <header className={style.header}>
      <h1 className={style.h1}>{props.title}</h1>
    </header>
  );
}

function Nav(props: { topics: { id: number, title: string, body: string }[] }) {
  const list = []
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i]
    list.push(<li key={t.id}>
      <a href={`/read/${t.id}`}>{t.title}</a>
    </li>)
  }
  return (
    <nav className={style.nav}>
      <ul className={style.ul}>
        <ol className={style.ol}>
          {list}
        </ol>
      </ul>
    </nav>
  );
}

function Article(props: { title: string, body: string }) {
  return (
    <article className={style.article}>
      <h2 className={style.h2}>{props.title}</h2>
      {props.body}
    </article>
  );
}

export default function Home() {
  return (
    <div className={style.div}>
      <Header title="React" />
      <Nav topics={topics} />
      <Article title="Welcome" body="Hello, WEB" />
      <Article title="Hi" body="Hello, React" />
    </div>
  );
}

