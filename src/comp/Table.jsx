import React, { useState } from "react";
import "../App.css";
import Set from './Set'
import SetList from '../assets/SetsList.json'




function Table() {
    let nodes = []
    for (let i = 0; i < SetList.length;) {
        let row = []
        // eslint-disable-next-line
        for (let j = 0; j < 3 && i < SetList.length; j++) {
            row.push(
                <div className="setContainer center ">
                    <Set key={i} setInfo={SetList[i]} />
                </div >
            )
            i++
        }
        nodes.push(
            <div className="setsRow ">
                {row}
            </div>
        )

    }
    return (
        <div className="setsTable ">
            {nodes}
        </div>
    )
}

export default Table;