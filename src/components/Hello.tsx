import * as React from "react";
import Button from '@material-ui/core/Button';


interface IProps {
    compiler: string;
    framework: string;
    bundler: string;
}

class Hello extends React.Component<IProps, {}> {
    render() {
        return (
            <div>
                <Button> hello</Button>
                <h1>
                    Thi is a {this.props.framework} application using {this.props.compiler}{" "}
                    with {this.props.bundler}
                </h1>
            </div>
        );
    }
}

export { Hello };
