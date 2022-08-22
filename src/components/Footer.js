/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import "bulma/css/bulma.min.css";
import Forecast from './Forecast'
// import TodayWeather from './TodayWeather'
export default function Footer(){
    return(
        <>
        <footer className="footer is-mobile" style={{backgroundColor: "#BB6BD9"}}>
            <div className="content">
                {/* <TodayWeather/> */}
                <Forecast/>
                {/* <Forecast/>
                <Forecast/>
                <Forecast/>  */}
            </div>
        </footer>
        </>
    )
}