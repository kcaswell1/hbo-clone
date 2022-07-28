const CastInfo = (props) => {
    return(
        <div className="cast-info">
        <div className="cast-info__group-title">
            Cast & Crew
        </div>
        <div className="cast-info__list">
            <ul className="cast-info__crew">
                <li>
                    Billy
                </li>
                <li>
                    George Lucas
                </li>
            </ul>
            <ul className="cast-info__crew">
                <li>
                    Tod
                </li>
                <li>
                    Doug Weathers
                </li>
            </ul>
            <ul className="cast-info__crew">
                <li>
                   James
                </li>
                <li>
                    Tom Isaac
                </li>
            </ul>
            <ul className="cast-info__crew">
                <li>
                Ted
                </li>
                <li>
                    George Lucas
                </li>
            </ul>
            <ul className="cast-info__crew">
                <li>
                    Jason
                </li>
                <li>
                    George Lucas
                </li>
            </ul>
        </div>
        <div className="cast-info__group-title">
            Director
        </div>
        <div className="cast-info__list">
            <ul className="cast-info__crew">
                <li>
                    Director
                </li>
                <li>
                    George Lucas
                </li>
           </ul>
        </div>
        </div>
    )
}

export default CastInfo;