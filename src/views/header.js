import React,{Component} from "react";
// or we can add React.Component directly
class Header extends Component {
    /* style = {
        header : {
            background:"#a15599",

        },
        logo : {
            fontFamily :'Festive',
            color: '#fff',
            textAlign : 'Center',
            fontSize : '70px',
            textTransform : 'capitalize'
        }
    }; */
    // not a good way to do styling
    render()
    {
        //using classname is the best way of style
        return <header className="logo">
            <div>logo</div>
            <div>the date is {new Date().getFullYear()}</div>
        </header>
    }
}
export default Header;