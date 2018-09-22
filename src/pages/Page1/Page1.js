import React, {Component} from 'react';

import style from './Page1.css';

import image from './images/totoro.jpg';

export default class Page1 extends Component {
  render() {
    return (
      <div className={style.box}>
        this is Page1~
        <img src={image}/>
      </div>
    )
  }
}