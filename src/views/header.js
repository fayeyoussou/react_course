import React,{Component} from "react";
// or we can add React.Component directly
class Header extends Component {
    render()
    {
        return <>
            the date is {new Date().getFullYear()}
        </>
    }
}
export default Header;