import React from "react";
import { useHistory } from 'react-router-dom';

function Detail({ location }) {

    const movieDetail = location.state;
    const history = useHistory();

    console.log(location)

    return (
        <div>
            {movieDetail === undefined ? history.push("/") : <span>{location.state.title}</span>}
        </div>
    )


}

export default Detail;