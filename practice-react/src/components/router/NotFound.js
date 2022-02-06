import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <p>404 Page not found!</p>
            <Link to='/'>Back to homepage.</Link>
        </div>
    );
}

export default NotFound;
