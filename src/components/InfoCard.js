import React from 'react';

const InfoCard = (props) => {
    return (
        <div className="row justify-content-center">
            <div className="col-2 text-center mt-5 border border-dark rounded">
                <img className="border-bottom" style={{width:200, height:200}} src={props.imgPath} alt={props.title}></img>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </div>
        </div>
    )
};
    
export default InfoCard;