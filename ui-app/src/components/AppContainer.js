import React from "react"; 
import Header from "./Header";
import BookListPage from "./BookListPage";
import { Route,Switch } from "react-router-dom";
import BookDetailsPage from "./BookDetailsPage";


const AppContainer = () => {
    return <div>
        <Header></Header>
        <Switch>
            <Route exact path={'/'} component={BookListPage}></Route>
            <Route exact path={'/bookdetails/:id'} component={BookDetailsPage}></Route>

        </Switch>
        <BookListPage/>
    </div>
};

export default AppContainer;