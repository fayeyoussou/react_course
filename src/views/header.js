import React from "react";
const Header = () => {
    const calcdate = ()=> (new Date()).getFullYear()
    
    return <div>
        the date is {calcdate()}
    </div>
}
export default Header;