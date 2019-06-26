import React, { Component } from 'react'
import './style.css'
//import shuffle from 'shuffle-array'

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


let imgArr = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12]

//Fisher-Yates Shuffle Function
const shuffle = (array) => {
  let currentIndex = array.length, temporaryValue, randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}


class Game extends Component {
  state = {
    imgArr: imgArr,
    score: 0,
    topscore: 0,
    correct: true,
    selection: []
  }

  clickEvent = (id) => {
    //reset game
    //console.log(id)
    if (this.state.selection.includes(this.state.selection)) {
      this.setState({
        score: 0,
        selection: []
      }, () => console.log('wrong choice'))
    } else {
      this.setState({
        selection: this.state.selection.push(id),
        score: +1
      }, () => console.log(`Score: ${this.state.score} and ID: ${this.state.selection}`))

    }
    shuffle(imgArr)
  }



  renderImage = _ => {
    return (
      <div className="clickitems">
        {this.state.imgArr.map((data, id) => (
            <img key={id} src={data} onClick={() => this.clickEvent(id)} />
        ))}
      </div>
    )
  }


  render() {
    return (
      <div>
        {this.renderImage()}
        {/* <img src={img1} alt='img1' /> */}
      </div>
    );
  }
}

export default Game;