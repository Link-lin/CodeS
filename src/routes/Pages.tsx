import * as React from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";

import Home from "../components/pages/Home";

const Pages = () => {
    return (
        <Switch>
            <Route path="/home" component={Home} />
        </Switch>
    )
}
