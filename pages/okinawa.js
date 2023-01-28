import * as React from 'react';
import { useEffect } from "react";
import Image from 'next/image'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ShareIcon from '@mui/icons-material/Share';
import FixedBottomNavigation from './bottomNavFixed'
import EmblaCarousel2 from '../components/carousel2'
import { CookiesProvider,useCookies } from 'react-cookie'
import mov from '../image/dummy movie.png'

const OPTIONS = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default function Home() {
  const [cookie, setCookie] = useCookies(['id']);

  const [open, setOpen] = React.useState(false);
    
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = (value) => {
      setOpen(false);
    };

  const [value, setValue] = React.useState(false);
  const ref = React.useRef(null);
  const handleLikes = () => {
    setValue(!value);
  };
  return (
    <div>
    <div className='head2'></div>
    <div className='head'>
        <div style={{position:"fixed",left:"20px"}} onClick={()=>{location.href="./home"}}><ArrowBackIcon/></div>
        <div style={{position:"fixed",right:"20px",display: "flex", flexWrap: "wrap"}}>
        <div onClick={handleLikes}>{value?<FavoriteIcon/>:<FavoriteBorderIcon/>}</div>
        <div style={{width:"15px"}}></div>
        <div><ShareIcon/></div></div>
        </div>
        <div className = "sandbox">
        <section className = "sandbox__carousel">
        <EmblaCarousel2 slides = {SLIDES} options = {OPTIONS} />
        </section>
      </div>
      <div className='high-container'>
        <div className='travel-agency'>롯데관광</div>
        <div className='travel-name'><a>오키나와 힐링 여행 4일</a></div>
        <div className='travel-price'>999,000원</div>
        <div className='travel-description'>일본인들의 워너비 국내여행지 1순위 일본 속의 또다른 남쪽 섬 (12~2월 평균기온 16~20도)</div>
      </div>
      <div className='line'></div>

      <div style = {{borderStyle: "solid", color: "#CFCFCF", borderWidth: "1px"}}></div>

      <div className = 'high-container'>
        <div style = {{marginTop: "7px", marginBottom: "35px"}}>
            <span style = {{fontFamily: "Pretendard", fontWeight: "700", fontSize: "20px"}}>놀이톤</span>
            <span style = {{fontFamily: "Pretendard", fontWeight: "500", fontSize: "20px"}}>님께 추천해요</span>
        </div>

        <div style = {{display: "flex", verticalAlign: "middle", marginBottom: "30px"}}>
          <span style = {{padding: "8px 16px 8px 16px", color: "#C85400", border: "solid 1px", fontSize: "18px", fontFamily: "Pretendard", marginRight: "15px", fontweight: "900", borderRadius: "0.3rem", alignContent: "center", justifyContent: "center"}}>1</span>
          <div style = {{display: "inline-block", flexDirection: "column", verticalAlign: "middle", lineHeight: "120%"}}>
            <span style = {{width: "100vx", fontFamily: "Pretendard", fontSize: "18px", fontWeight: "800"}}>최대 도보 1시간</span><br/><span style = {{fontFamily: "Pretendard", fontSize: "12px", fontweight: "thin"}}>동굴 코스는 가파른 계단을 내려가야 해요 (선택)</span>
          </div>
        </div>

        <div style = {{display: "flex", verticalAlign: "middle", marginBottom: "30px"}}>
          <span style = {{padding: "8px 16px 8px 16px", color: "#C85400", border: "solid 1px", fontSize: "18px", fontFamily: "Pretendard", marginRight: "15px", fontweight: "900", borderRadius: "0.3rem", alignContent: "center", justifyContent: "center"}}>2</span>
          <div style = {{display: "inline-block", flexDirection: "column", verticalAlign: "middle", lineHeight: "120%"}}>
            <span style = {{width: "100vx", fontFamily: "Pretendard", fontSize: "18px", fontWeight: "800"}}>숙박 시설 내 엘레베이터</span><br/><span style = {{fontFamily: "Pretendard", fontSize: "12px", fontweight: "thin"}}>계단을 오르내리지 않아요</span>
          </div>
        </div>

        <div style = {{display: "flex", verticalAlign: "middle", marginBottom: "20px"}}>
          <span style = {{padding: "8px 16px 8px 16px", color: "#C85400", border: "solid 1px", fontSize: "18px", fontFamily: "Pretendard", marginRight: "15px", fontweight: "900", borderRadius: "0.3rem", alignContent: "center", justifyContent: "center"}}>3</span>
          <div style = {{display: "inline-block", flexDirection: "column", verticalAlign: "middle", lineHeight: "120%"}}>
            <span style = {{width: "100vx", fontFamily: "Pretendard", fontSize: "18px", fontWeight: "800"}}>식사 변경 가능</span><br/><span style = {{fontFamily: "Pretendard", fontSize: "12px", fontweight: "thin"}}>돼지고기 요리 대신 다른 식사로 변경 가능해요</span>
          </div>
        </div>
      </div>

      <div style = {{borderStyle: "solid", color: "#CFCFCF", borderWidth: "1px"}}></div>
      
      <div style = {{fontFamily: "Pretendard", fontWeight: "600", fontSize: "20px", marginLeft: "24px", marginTop: "30px", marginBottom: "30px"}}>생생한 영상 정보</div>
      
      <div style = {{marginBottom: "40px"}}><Image src = {mov} height = "80vh" /></div>

      <div className='foot2'>
    </div>

    <div className='foot'>
      <div className='kakao'><b>공유</b></div>
      <div style={{width:"20px"}}></div>
      <div className='reserve'><b>신청하기</b></div>
    </div>
    </div>
  );
}
