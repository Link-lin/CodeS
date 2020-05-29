import * as React from "react";
import {Button} from "@material-ui/core"


interface IProps {
    compiler: string;
    framework: string;
    bundler: string;
}

class Hello extends React.Component<IProps, {}> {
    render() {
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
    }
}

export { Hello };
