import React, { Component } from "react";
import ReactDom from "react-dom";

import "./index.css"

class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <p className="test_css">你是傻逼</p>
            </div>
        )
    }

}

export default Test;