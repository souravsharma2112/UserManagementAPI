import { NavLink } from "react-router-dom";
function Card(props) {
    // eslint-disable-next-line react/prop-types
    const { image1, cardcontent , goto } = props
    return (
        <div className="card-container">
            <div className="img-box">
                <img src={image1} alt="" />
            </div>
            <div className="card-content">
                <div className="card-name">
                    <h2>{cardcontent}</h2>
                </div>
                <div className="card-btn">
                    <NavLink to={goto}>
                        <span>view</span>
                        <span className="material-symbols-outlined">
                            arrow_right_alt
                        </span>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Card
