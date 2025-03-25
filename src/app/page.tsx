'use client'
import style from './style'

function Home(){
  return (
    <div >
      <h2 className={style.h2}>Home</h2>
      Home... 
    </div>
  )
}

function Topic(){
  return (
    <div>
      <h2 className={style.h2}>Topic</h2>
      Topic...
    </div>
  )
}

function Contact(){
  return (
    <div>
      <h2 className={style.h2}>Contact</h2>
      Contact...
    </div>
  )
}
export default function App() {
  return (
  <div>
    <h1 className={style.h1}>Hello React Router DOM</h1>
    <Home />
    <Topic />
    <Contact />

  </div>
  );
}

