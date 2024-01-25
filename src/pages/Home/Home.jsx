import { Link } from "react-router-dom"

export default Home => (
    <div className="homepage">
        <div className="homepage__wrapper">
            <div className="homepage__content">
                <h1 className="homepage__content-logo" >SORTIFY!</h1>
                <Link to="/Sorter">
                    <button type="button" className="homepage__content-button homepage-button">Sort your list NOW!</button>
                </Link>
            </div>
        </div>
    </div>
)
