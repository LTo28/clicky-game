import React, { Component } from 'react'
import './style.css'
import Images from '../../images.json'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'


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
    begin: 'Click an image to test your memory!',
    wrongchoice: '',
    gameover: '',
    selection: []
  }

  clickEvent = (id) => {
    if (this.state.selection.includes(id)) {
      this.setState({
        score: 0,
        wrongchoice: 'Woops, you already chose that! Click an image to start again.',
        selection: []
      }, () => console.log('Looks like you forgot!'))
    } else {
      this.setState({
        wrongchoice: '',
        begin: '',
        selection: [...this.state.selection, id],
        score: ++this.state.score
      })
      if (this.state.score > this.state.topscore) {
        this.setState({
          topscore: +this.state.score
        })
      }
      if (this.state.score === 12) {
        console.log('You have good memory!')
        this.setState({
          gameover: 'You have good memory!'
        })
      }
      console.log(id)
    }
    shuffle(Images)
  }

  renderImages = _ => {
    return (
      <div className="images">
        {this.state.imageArr.map((data) => (
          <img className="clickitems" key={data.id} src={data.image} onClick={() => this.clickEvent(data.id)} />
        ))}
      </div>
    )
  }

  render() {
    return (
      <div>
          <Header score={this.state.score} topscore={this.state.topscore} begin={this.state.begin} wrongchoice={this.state.wrongchoice} gameover={this.state.gameover}/>
          {this.renderImages()}
          <Footer />
      </div>
    );
  }
}

export default Game;