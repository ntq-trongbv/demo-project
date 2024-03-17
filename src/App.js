import './App.css';
import {
    BrowserRouter, Route, Switch
} from "react-router-dom";
import Header from "./component/Header";
import TableUsers from "./component/user/TableUsers";
import {Container} from "react-bootstrap";
import React from "react";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {connect} from "react-redux";
import Homepage from "./component/Homepage";

// import './assets/css/Nav.scss';
function App() {
    return (
        <BrowserRouter>
            <Header></Header>
            <Switch>
                <Route path="/" exact component={Homepage}>
                </Route>
                <Route path="/users" component={TableUsers}>
                </Route>
            </Switch>
            {/*<Container>*/}
            {/*    <h1 className={"my-3"}>List users</h1>*/}
            {/*    <TableUsers></TableUsers>*/}
            {/*</Container>*/}
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </BrowserRouter>
    );
}

// export default connect()(App);
export default App;
