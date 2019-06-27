import React, { Component } from 'react'
import './style.css'
import Images from '../../images.json'

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
    imageArr: Images,
    score: 0,
    topscore: 0,
    selection: []
  }

  clickEvent = (id) => {
    if (this.state.selection.includes(id)) {
      this.setState({
        score: 0,
        selection: []
      }, () => console.log('Looks like you forgot!'))
    } else {
      this.setState({
        selection: [...this.state.selection, id],
        score: ++this.state.score
      }) 
      if (this.state.topscore <= this.state.score) {
        this.setState({ 
          topScore: ++this.state.score 
        })
      }
      console.log(id)
    }
    shuffle(Images)
  }

  renderImages = _ => {
    return (
      <div>
        {this.state.imageArr.map((data) => (
          <img className="clickitems" key={data.id} src={data.image} onClick={() => this.clickEvent(data.id)} />
        ))}
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.renderImages()}
        {/* <img src={img1} alt='img1' /> */}
      </div>
    );
  }
}

export default Game;