import React, {Component} from 'react';
import './App.css';
import './fonts/Font-Awesome/font-awesome-css/font-awesome.css'
import {Route, Switch} from "react-router-dom";
import Home from "./containers/Home/Home";
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";
import Add from "./containers/Add/Add";
import News from "./containers/News/News";
import EditPost from "./containers/EditPost/EditPost";
import TopLine from "./components/TopLine/TopLine";
import Footer from "./components/Footer/Footer";
import FullNewsItem from "./containers/FullNewsItem/FullNewsItem";
import "./normalize.css"
import "./default.css";

class App extends Component {
  render() {
    return (
        <div className="container">
            <TopLine/>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/news" exact component={News}/>
                <Route path="/about" exact component={About}/>
                <Route path="/add" exact component={Add}/>
                <Route path="/contacts" exact component={Contacts}/>
                <Route path="/post/:id" exact component={FullNewsItem}/>
                <Route path="/post/:id/edit" component={EditPost}/>
            </Switch>
            <Footer/>
        </div>
    );
  }
}

export default App;
