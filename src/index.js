import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import Mdetails from "./Mdetails";
import Mdata from "./Mdata";
import "./index.css";
import Pagination from "./Pagination";


const newCard = (val) =>{
  return(
  <Mdetails  
  key={val.id}
  netimage ={val.imgScr}
  comname={val.bname}
    seriesname ={val.sname}
      serieslink={val.links}
     
/>

  )

}

ReactDom.render(
  <>
  <App />

  <div className="header">
  <h1 className='heading'>
  Top 20 <span style={{color:'#e6422e'}}>Netflix </span>Original Series</h1>
 {Mdata.map(newCard)}
 </div>
 <Pagination />

   </>, document.getElementById("root")
);  