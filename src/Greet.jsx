import React from "react";


let currentDate = new Date().getHours();
let greeting = '';

let greet = {
    color: "black"
}
if(currentDate>=1 && currentDate<12){
    greeting = 'Good Morning';
    greet.color = "pink";
}else if(currentDate<20){
    greeting = 'Good Afternoon';
    greet.color = "orange";
}else{
    greeting = 'Good Night';
}

function Greet(){
    return (
        <span style={greet}>{greeting}</span>
    );
}

export default Greet;