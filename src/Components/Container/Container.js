import React, { Component } from 'react'
import './style.css'

import img1 from '../../assets/images/1.jpeg'
import img2 from '../../assets/images/2.jpeg'
import img3 from '../../assets/images/3.jpeg'
import img4 from '../../assets/images/4.jpeg'
import img5 from '../../assets/images/5.jpeg'
import img6 from '../../assets/images/6.jpeg'
import img7 from '../../assets/images/7.jpeg'
import img8 from '../../assets/images/8.jpeg'
import img9 from '../../assets/images/9.jpeg'
import img10 from '../../assets/images/10.jpeg'
import img11 from '../../assets/images/11.jpeg'
import img12 from '../../assets/images/12.jpeg'

class Container extends Component {
  state = {
    imgArr: [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12]
  }

  //click event to shuffle and add/substract points
  //standard size image
  randImg() {
    return this.state.imgArr.map((data, i) => {
      return <div className='clickitems'><img
        key={i}
        onClick={() => this.clickEvent()}
        src={data}
        alt='dog'
      /></div>
    })
  }

  clickEvent() {
    console.log('hello')
  }


  render() {
    return (
      <div>
        {this.randImg()}
        {/* <img src={img1} alt='img1' /> */}
        {this.shuffle(this.state.imgArr)}
      </div>
    );
  }
}

export default Container;