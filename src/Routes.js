import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {Post, PostDetail} from "./component/Post/Post";
// import {Home} from "./component/Home/Home";
// import {About} from "./component/About/About";
import {Contact} from "./component/Contact/Contact";
import {Footer} from "./component/Footer/Footer";
import {CategoryDetailPost} from "./component/Categories/Categories";
const Routes = () => {
    return (
        <>
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Post} />
            <Route path="/posts/:id" exact component={PostDetail} />
            <Route path="/categories/:id" exact component={CategoryDetailPost} />
            {/*{<Route path="/" exact component={Home} />}*/}
            {/*<Route path="/about" exact component={About} />*/}
            <Route path="/contact" exact component={Contact} />
        </Switch>

        </BrowserRouter>
        <Footer/>
        </>
    );
};

export default Routes;

