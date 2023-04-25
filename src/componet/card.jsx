import React from 'react';
import style from './card.module.css'

class Card extends React.Component {

    render() {
        let imgUrl = "https://image.tmdb.org/t/p/w300_and_h450_bestv2";
        return(
            <div className={style.cardBox}>
                <img src={imgUrl + this.props.src} alt="Movie Card" />
                <figcaption>
                <h2>{this.props.titleText}</h2>
                </figcaption>
            </div>
          )
    }
}

export default Card;