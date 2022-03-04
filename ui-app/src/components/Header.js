import React from "react";
import { useHistory } from "react-router-dom";


const Header = () => {
    const history = useHistory();

    return <div className="header-panal">
        <a onClick={() => history.push('/')}>This is Header</a></div>
}

export default Header;