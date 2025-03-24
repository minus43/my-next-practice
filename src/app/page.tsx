'use client'
import style from "./style";
const topics = [
  { id: 1, title: "HTML", body: "HTML is a markup language" },
  { id: 2, title: "CSS", body: "CSS is a style sheet language" },
  { id: 3, title: "JavaScript", body: "JavaScript is a scripting language" },
];


function Header(props: { title: string, onChangeMode: () => void }) {
  return (
    <header className={style.header}>
      <h1 className={style.h1} onClick={(event)=>{
        event.preventDefault();
        props.onChangeMode();
      }}>{props.title}</h1>
    </header>
  );
}

function Nav(props: { topics: { id: number, title: string, body: string }[], onChangeMode: (id: number) => void }) {
  const list = []
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i]
    list.push(<li key={t.id}>
      <a id={t.id.toString()} href={`/read/${t.id}`} onClick={(event)=>{
        event.preventDefault();
        props.onChangeMode(Number((event.target as HTMLAnchorElement).id));
      }}>{t.title}</a>
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
      <Header title="React" onChangeMode={()=>{
        alert('Header');
      }}/>
      <Nav topics={topics} onChangeMode={(id: number)=>{
        alert(id);
      }}/>
      <Article title="Welcome" body="Hello, WEB" />
      <Article title="Hi" body="Hello, React" />
    </div>
  );
}

