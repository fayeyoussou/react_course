import react from "react";//start a react application
import ReactDOM from 'react-dom';// react help connect the dom with react application
const App = () => {
    return  (
        <div>
            <h1>hello</h1>
        </div>
    )//it look like html but its Jsx
}
// if return something its gonna be a react component
// so you always need to return some code
//component should always start with a capital A
ReactDOM.render(<App/>,document.querySelector('#root'))
// <App/> tell react that app function is a component function