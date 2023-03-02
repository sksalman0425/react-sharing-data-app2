import React from "react";

function ButtonTest(props){

    return(
        <React.Fragment>
            <button onClick={props.handleOnClick}>+1</button>
        </React.Fragment>
    )
}
export default ButtonTest;