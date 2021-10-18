import React, {useState} from 'react';
import "rsuite/dist/rsuite.min.css";
import './App.css';
import {MyCanvas} from "./Labs/Three/MyCanvas";
import {Dropdown} from "rsuite";
import {OneStore} from "./Labs/States/ZustandStore/ZustandLab";

function App() {

    const [display_i, setDisplay_i] = useState(1);
    const display_items = ([
        {name: "plain THREE canvas", item: <MyCanvas/>},
        {name: "Zustand", item: <OneStore/>},
    ]);

    return (
        <div className="App">
            <Dropdown
                title={display_items[display_i].name}
                activeKey={display_i}
                style={{position: "fixed", top: "5%", left: "5%"}}
                onSelect={eventKey => {
                    setDisplay_i(eventKey);
                }}
            >
                {display_items.map((value, index) =>
                    <Dropdown.Item key={index} eventKey={index}>{value.name} </Dropdown.Item>)}
            </Dropdown>
            {display_items[display_i].item}
        </div>
    );
}

export default App;
