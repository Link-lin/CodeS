import * as React from 'react'
import { Header, Sidebar, HeaderCopy } from './modules'
import { Button } from "@material-ui/core"
import { store } from "./store/Store";
import { Provider } from "react-redux"
import { BrowserRouter as Router } from "react-router-dom";

class App extends React.Component {
    render() {
        /*
        return (
            <>
                <Button variant="contained" color="primary">
                    Primary</Button>
                <h1>
                    Thi is a {this.props.framework} application using {this.props.compiler}{" "}
                    with {this.props.bundler}
                </h1>
            </>
        );
        */
        return (
            <Provider store={store}>
                <Router>
                    <Header />
                    <HeaderCopy />
                </Router>
            </Provider>
        )
    }
}


export default App;
