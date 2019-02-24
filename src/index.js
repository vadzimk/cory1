import React from "react";
import ReactDOM from "react-dom"
import Home from "./components/Home";
import About from "./components/about/AboutPage"
import Header from "./components/common/Header";
import AuthorPage from "./components/authors/AuthorPage";

class App extends React.Component{

    render() {

        let Child;
        switch (this.props.route) {
            case "about": Child=About;
            break;
            case "authors": Child=AuthorPage;
            break;
            default: Child=Home;
        }
        return (
            <div>
                <Header/>
                <Child/>
            </div>
        );
    }
}

function render(){
    let route = window.location.hash.substring(1);
    ReactDOM.render(<App route={route}/>, document.querySelector("#root"));
}
window.addEventListener("hashchange", render);
render();

