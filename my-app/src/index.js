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
    return <input type="text" placeholder="Type here"></input>
}

const Btn = () => {
    return <button/>
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


