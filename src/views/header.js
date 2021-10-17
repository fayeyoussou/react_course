import React,{Component} from "react";
// or we can add React.Component directly
class Header extends Component {
    clickheadhandler(name,event){
        console.log(event)
        console.log(`${name} click on ${event.target}`)
    }
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
        return <header className="header-u" onClick={this.clickheadhandler.bind(this,'youssou')}
        
        >
            <div className="logo">logo</div>
            <div>the date is {new Date().getFullYear()}</div>
        </header>
    }
}
export default Header;