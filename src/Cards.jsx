import React from "react";  

function Cards(props){
    return (
        <div className="card">
          <img src={props.isrc} alt="myPic" className="card_img" />
          <div className="card-info">
            <span className="card_category">{props.info}</span>
            <h3 className="card_title">{props.title}</h3>
            <a href="/" target="_blank">
              <button>Watch Now</button>
            </a>
          </div>
        </div>
    );
  }

  export default Cards;