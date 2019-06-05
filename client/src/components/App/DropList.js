import React from "react";

function DropList(props) {
    return (
        <div className="listHolder" onClick={props.handleClick}>
            <p>{props.listItem} ({props.count})</p>
        </div>
    )

}

export default DropList;