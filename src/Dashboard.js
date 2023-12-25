import React, { useState } from "react";

function Dashboard({ data, onDataButtonClick }){

    const [textData, setTextData] = useState('');

    const handleButtonClick = () => {
        onDataButtonClick(textData);
    }

    return (
        <div>
            <h2>Click on any button </h2>
        {data.map((site) => (
            <div>
                <button onClick={e => setTextData(site)}>{site.name}</button>             
            </div>
        ))}
        {/* <input type="text" value={textData} onChange={(e) => setTextData(e.target.value)} /> */}
        {/* Below statement is like ng-show or ng-if. if textData exists, then display the span */}
        {textData && <span>Current data {textData.name}</span>} 
        {textData && <button onClick={handleButtonClick}>Submit</button>} 
        
    </div>)
}

export default Dashboard;