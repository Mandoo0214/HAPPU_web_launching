import Head from 'next/head'
import Image from 'next/image'
import { CookiesProvider,useCookies } from 'react-cookie'
import FixedBottomNavigation from './bottomNavFixed'
import Router, { useRouter } from "next/router";
import Mangnifying from '../components/magnifying.js'
import * as React from "react";
import SimpleDialog from '../components/recomendation'
import TuneIcon from '@mui/icons-material/Tune';
import myP from '../image/myPhoto.png'
import he from '../image/heart.png'
import co from '../image/coupon.png'
import bu from '../image/buy.png'
import re from '../image/review.png'
import arw from '../image/myinfoArrow.png'

export default function Home() {

    const [open, setOpen] = React.useState(false);
    
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = (value) => {
      setOpen(false);
    };

    return (
        <div>
            <div style = {{paddingTop: "9px", paddingBottom: "9px"}}><a className = "categoryName"> 내 정보 </a></div>
            <div style = {{position: "absolute", top: "6px", right: "50px"}}> <Mangnifying /> </div>
            <div style={{position:"absolute", top: "12px", right:"20px"}} onClick={handleClickOpen}><TuneIcon/></div>
            <div style = {{borderStyle: "solid", color: "#CFCFCF", borderWidth: "1px"}}></div>

            <div style = {{
                marginLeft: "30px",
                marginTop: "30px",
                display: "flex",
                alignItems: "center"
                }}>

                <Image
                    src = {myP}
                    width = "25px"
                    height = "25px" />

                    <a className = "myInfoFSize"> &nbsp;&nbsp;
                        <span style = {{
                            fontFamily: 'Pretendard',
                            fontWeight: "800"
                        }}>놀이톤</span>
                        <span style = {{ fontFamily: 'Pretendard', fontWeight: "thin"}}>님 </span>
                    </a>
            </div>

            <div className = "myInfoBtn">
                <button style = {{
                    width: "170px",
                    height: "80px",
                    padding: "7px",
                    marginBottom: "10px",
                    backgroundColor: "rgba(255, 255, 255, 1)",
                    border: "none",
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    aligntContent: "center",
                    fontFamily: "Pretendard",
                    fontSize: "16px",
                    fontWeight: "600",
                    borderRadius: "0.5rem"
                }} onClick={() => Router.push("/demoEnd")} >
                    <Image
                        src = {he}
                        width = "120"
                        height = "35"
                        marginBottom = "5px"/> &nbsp;&nbsp;&nbsp;&nbsp;찜&nbsp;&nbsp;&nbsp;&nbsp;
                </button>

                <button style = {{
                    width: "170px",
                    height: "80px",
                    padding: "7px",
                    marginBottom: "10px",
                    backgroundColor: "rgba(255, 255, 255, 1)",
                    border: "none",
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    aligntContent: "center",
                    fontFamily: "Pretendard",
                    fontSize: "16px",
                    fontWeight: "600",
                    borderRadius: "0.5rem"
                }} onClick={() => Router.push("/demoEnd")} >
                    <Image
                        src = {bu}
                        width = "120"
                        height = "35"
                        marginBottom = "5px"/> 결제내역
                </button>

                <button style = {{
                    width: "170px",
                    height: "80px",
                    padding: "7px",
                    marginBottom: "10px",
                    backgroundColor: "rgba(255, 255, 255, 1)",
                    border: "none",
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    aligntContent: "center",
                    fontFamily: "Pretendard",
                    fontSize: "16px",
                    fontWeight: "600",
                    borderRadius: "0.5rem"
                }} onClick={() => Router.push("/demoEnd")} >
                    <Image
                        src = {co}
                        width = "120"
                        height = "35"
                        marginBottom = "5px"/> 쿠폰함
                </button>

                <button style = {{
                    width: "170px",
                    height: "80px",
                    padding: "7px",
                    marginBottom: "10px",
                    backgroundColor: "rgba(255, 255, 255, 1)",
                    border: "none",
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    aligntContent: "center",
                    fontFamily: "Pretendard",
                    fontSize: "16px",
                    fontWeight: "600",
                    borderRadius: "0.5rem"
                }} onClick={() => Router.push("/demoEnd")} >
                    <Image
                        src = {re}
                        width = "120"
                        height = "35"
                        marginBottom = "5px"/> 내가 쓴 리뷰
                </button>        
            </div>

            <div style = {{borderStyle: "solid", color: "#EBEBEB", borderWidth: "7px", marginTop: "20px"}}></div>

            <div className = "myAlign">
                <a className = "myInfoMenu" href = './demoEnd'>공지사항 <span style = {{position: "absolute", right: "20px"}}><Image src = {arw} /></span> </a>
                <div style = {{borderStyle: "solid", color: "#CFCFCF", borderWidth: "1px"}}></div>

                <a className = "myInfoMenu" href = './demoEnd'>이벤트 <span style = {{position: "absolute", right: "20px"}}><Image src = {arw} /></span> </a>
                <div style = {{borderStyle: "solid", color: "#CFCFCF", borderWidth: "1px"}}></div>

                <a className = "myInfoMenu" href = './demoEnd'>고객센터 <span style = {{position: "absolute", right: "20px"}}><Image src = {arw} /></span> </a>
                <div style = {{borderStyle: "solid", color: "#CFCFCF", borderWidth: "1px"}}></div>

                <a className = "myInfoMenu" href = './demoEnd'>설정 <span style = {{position: "absolute", right: "20px"}}><Image src = {arw} /></span> </a>
                <div style = {{borderStyle: "solid", color: "#CFCFCF", borderWidth: "1px"}}></div>

                <a className = "myInfoMenu" href = './demoEnd'>약관 및 정책 <span style = {{position: "absolute", right: "20px"}}><Image src = {arw} /></span> </a>
                <div style = {{borderStyle: "solid", color: "#CFCFCF", borderWidth: "1px"}}></div>
            </div>

            <div>
                <SimpleDialog
                    open={open}
                    onClose={handleClose} />
                <FixedBottomNavigation v="myInfo"/>
            </div>
        </div>
    )
}


