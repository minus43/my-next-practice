'use client'
import style from "./style";
import { useState } from "react";

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

function Create(props: { onCreate: (title: string, body: string) => void }) {
  return (
    <article className={style.article}>
      <h2 className={style.h2}>Create</h2>
      <form onSubmit={(event)=>{
        event.preventDefault();
        const form = event.currentTarget;
        const title = (form.elements.namedItem('title') as HTMLInputElement).value;
        const body = (form.elements.namedItem('body') as HTMLTextAreaElement).value;
        props.onCreate(title, body);
      }}>
        <p className={style.p}><input className={style.input} type="text" name="title" placeholder="title" /></p>
        <p className={style.p}><textarea className={style.textarea} name="body" placeholder="body"></textarea></p>
        <p className={style.p}><input className={style.input} type="submit" value="Create" /></p>
      </form>
    </article>
  );
}


export default function Home() {
  const [_mode, setMode] = useState('WELCOME');
  const [_id, setId] = useState<number | null>(null);
  let content = null;
  console.log('mode', _mode);
  const [topics, setTopics] = useState([
    { id: 1, title: "HTML", body: "HTML is a markup language" },
    { id: 2, title: "CSS", body: "CSS is a style sheet language" },
    { id: 3, title: "JavaScript", body: "JavaScript is a scripting language" },
  ]);
  const [nextId, setNextId] = useState(4);

  if(_mode ==='WELCOME'){
    content = <Article title="Welcome" body="Hello, WEB" />
  } else if(_mode === 'READ'){
    let title: string | null = null;
    let body: string | null = null;
    for(let i = 0; i < topics.length; i++){
      console.log(topics[i].id, _id);
      if(topics[i].id === _id){
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title || ''} body={body || ''} />
  } else if(_mode === 'CREATE'){
    content = <Create onCreate={(title: string, body: string)=>{
      const newTopic = {id: nextId, title: title, body: body};
      topics.push(newTopic);
      setTopics(topics);
      setMode('READ');
      setId(nextId);
      setNextId(nextId + 1);
    }}/>
    }

return (
  <div className={style.div}>
    <Header title="React" onChangeMode={()=>{
      setMode('WELCOME');
    }}/>
    <Nav topics={topics} onChangeMode={(id: number)=>{
      setMode('READ');
      setId(id);
    }}/>
    {content}
    <a href="/create" onClick={(event)=>{
      event.preventDefault();
      setMode('CREATE');
    }}>Create</a>
  </div>
  );
}

