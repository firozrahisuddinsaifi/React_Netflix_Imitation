import React, { useState } from 'react'




const App =()=> {

    let currHours = new Date(2021,12,24,15);
    currHours = currHours.getHours();
    let greetings = "";
    let estiloColor = {};

    if(currHours >0 && currHours < 12){
        greetings = "Good Morning";
        estiloColor.color = "#008000";
    }
    else if(currHours >=12  && currHours < 17){
        greetings = "Good AfterNoon";
        estiloColor.color = "#F4C430";
    }
    else if(currHours >=17 && currHours <=24){
        greetings = "Good Night";
        estiloColor.color = "#000";
    }

    const time = new Date().toLocaleTimeString();
    const [currtime, setcurrTIme] = useState(time);

    const UpdateTime= ()=>{
       const  newtime = new Date().toLocaleTimeString();
       setcurrTIme(newtime);
    }

    setInterval(UpdateTime, 1000);


    return (
        <div className='digiTal_clock'>
            <h1  className='digiTal_clock_content'>{currtime} <span style={estiloColor}> {greetings} </span></h1>
        </div>
    )
};

export default App;