import React from "react";

export default function Spinner(props) {
    return (
        <div className="ui active inverted dimmer">
            <div className="massive ui centered inline text loader">
                {props.message}
            </div>
        </div>
    );
}

Spinner.defaultProp = {
    message: "Loading...",
};
