import Head from 'next/head'
import FixedBottomNavigation from './bottomNavFixed'

export default function Home() {
    return (
        <div>
            <div style = {{
                display: "grid",
                placeItems: "center",
                flexDirction: "column",
                flexWrap: "wrap"}}>

                    <a style = {{
                        fontFamily: "Pretendard",
                        fontSize: "30px",
                        fontWeight: "800",
                        display: "flex",
                        justifyContent: "center",
                        alignContent: "center",
                        marginBottom: "20px",
                        marginTop: "350px",
                        textAlign: "center" }}> 데모 버전은 여기까지입니다. </a>

                    <a style = {{
                        fontFamily: "Pretendard",
                        fontSize: "25px",
                        fontWeight: "400",
                        display: "flex",
                        justifyContent: "center",
                        alignContent: "center",
                        marginLeft: "40px",
                        marginRight: "40px",
                        marginTop: "5px",
                        marginBottom: "10px",
                        textAlign: "center"}}> 자세한 설명을 원하신다면 옆쪽의 ppt를 참고해 주세요! </a>

                    <a style = {{
                        fontFamily: "Pretendard",
                        fontSize: "25px",
                        fontWeight: "550",
                        display: "flex",
                        justifyContent: "center",
                        alignContent: "center",
                        marginLeft: "40px",
                        marginRight: "40px",
                        marginBottom: "70px"}}> 감사합니다. </a>
            </div>

            <div>
                <FixedBottomNavigation/>
            </div>
        </div>
    )
}