import * as React from 'react';
import { useEffect } from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ShareIcon from '@mui/icons-material/Share';
import FixedBottomNavigation from './bottomNavFixed'
import EmblaCarousel2 from '../components/carousel2'

const OPTIONS = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default function Home() {
  const [value, setValue] = React.useState(false);
  const ref = React.useRef(null);
  const handleLikes = () => {
    setValue(!value);
  };
  return (
    <div>
    <div className='head2'></div>
    <div className='head'>
        <div style={{position:"fixed",left:"20px"}}><ArrowBackIcon/></div>
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
        <div className='travel-name'><b>오키나와 힐링 여행 4일</b></div>
        <div className='travel-price'>999,000원</div>
        <div className='travel-description'>일본인들의 워너비 국내여행지 1순위 일본 속의 또다른 남쪽 섬 (12~2월 평균기온 16~20도)</div>
      </div>
      <div className='line'></div>
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
