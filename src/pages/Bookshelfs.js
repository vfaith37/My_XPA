/* eslint-disable jsx-a11y/alt-text */
import "bulma/css/bulma.min.css";
import FloatingBtn from "../components/floatingbtn";
import Bookicon from "../components/bookicon";
import './bookshelf.css'
// import BookMenu from "../components/BookMenu";
export default function Bookshelfs() {
return (
    <>
    {/* <BookMenu/> */}
    <section className="section bookshelf">
        <div className="container">
        <div className="columns is-mobile">
            <div className="column">
                <Bookicon />
                <Bookicon />
                <Bookicon />
            </div>
            <div className="column">
                <Bookicon />
                <Bookicon />
                <Bookicon />
            </div>
            <div className="column">
                <Bookicon />
                <Bookicon />
                <Bookicon />
            </div>
            <div className="column">
                <Bookicon />
                <Bookicon />
                <Bookicon />
            </div>
        </div>
        </div>
    </section>
    <FloatingBtn />
    </>
);
}
