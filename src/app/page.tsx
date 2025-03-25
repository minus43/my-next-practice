'use client'
import style from './style'
import Link from 'next/link'

export default function Home() {
  return (
        <div>
          <h1 className={style.h1}>Hello React Router DOM</h1>
          <ul className={style.ul}>
            <li className={style.li}>
              <Link className={style.a} href="/">Root</Link>  
            </li>
            <li className={style.li}>
              <Link className={style.a} href="/home">Home</Link>  
            </li>
            <li className={style.li}>
              <Link className={style.a} href="/topics">Topics</Link>
            </li>
            <li className={style.li}>
              <Link className={style.a} href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
  );
}

