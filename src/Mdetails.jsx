import React from 'react'

const  Mdetails=(props)=> {
    return (
        <>  
        <div className='container'>
            <div className="content">
                <img src={props.netimage} alt="Netf_D_Series" className='net_image' />
            </div>
            <div className="info">
                <p className="com_name">{props.comname}</p>
                <h1 className="series_name">{props.seriesname}</h1>
                <a href={props.serieslink} target="_blan" className="series_link">
                    <button>watch now</button>
                </a>
            </div> 
        </div>
        </>
    )
}


export default Mdetails;