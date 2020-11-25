import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';


// const elem = <h2>Hello world!</h2>
// const elem = React.createElement('h2', null, "Hellp world!!!")
// const elem = (
//   <div>
//     <h2>Hello world!</h2>
//     <input type="text" placeholder="Type here"></input>
//     <button/>
//   </div>
// )

const Header = () => {
    return <h2>Hello world!</h2>
}


const Field = () => {
    const holder = "Enter here";
    const styleField = {
        width: '300px'
    }
    return <input
                style = {styleField}
                type="text"
                placeholder={holder}
                autoComplete=""
                className="first"
                htmlFor="" />
}

const Btn = () => {
    const text = "Log in";
    // const res = () => {
    //    return 'Log in, please!' 
    // }
    // const p = <p>LOG!!!</p>
    const logged = false;
return <button>{logged ? "Enter" : text}</button>
// Если logged =  true, тогда "Enter, если нет text"
}

const App = () => {
    return (
        <div>
            <Header/>
            <Field/>
            <Btn/>
        </div>
    )
}


ReactDOM.render(
    <App/>, document.getElementById('root')
);


