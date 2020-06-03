import * as React from 'react'
import { Header, Sidebar, HeaderCopy } from './modules'
import { Button } from "@material-ui/core"

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
            <div>
                <Header />
                <HeaderCopy />
            </div>
        )
    }
}


export default App;
