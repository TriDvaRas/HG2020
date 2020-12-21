import React from "react";
import "../App.css";
import Set from './Set'




function Table(props) {
    let nodes = []
    let SetList = props.setList;
    for (let i = 0; i < SetList.length; i++) {
        // eslint-disable-next-line
        nodes.push(
            <div className="setContainer  ">
                <Set key={i} setInfo={SetList[i]} />
            </div >
        ) 

    }
    return (
        <div className="setsTable ">
            {nodes}
        </div>
    )
}

export default Table;