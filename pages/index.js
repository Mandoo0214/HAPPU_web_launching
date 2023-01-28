import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import * as React from "react";
import { CookiesProvider,useCookies } from 'react-cookie';

export default function Home() {
  const [cookies, setCookies] = useCookies(['id']);

  React.useEffect(function () {
    console.log(cookies.id)
    console.log(cookies.pw)
    if(cookies.id!=undefined&&cookies.pw!=undefined){
      location.href = "./home"
    }
      else{
        alert("로그인이 필요합니다");
        location.href = "./signin";
      }
  }, []);



  return (
    <div className={styles.container}>
      hello
    </div>
  )
}
