import Head from 'next/head'
import Image from 'next/image'
import Router, { useRouter } from "next/router";
import mag from '../image/search.png'


export default function Mangnifying() {
    return (
        <div style = {{display: "flex"}}>
            <button style = {{
                border: "none",
                backgroundColor: "rgba(255, 255, 255, 1)",
                padding: "10px",
                display: "flex",
                marginLeft: "auto"
            }} onClick={() => Router.push("/pages/search")}>
                <Image src = {mag}/>
            </button>
        </div>
    );
}
