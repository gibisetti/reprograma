import React, { Component, Fragment } from 'react';
import Cabecalho from './components/Cabecalho'
import NavMenu from './components/NavMenu'
import Dashboard from './components/Dashboard'
import Widget from './components/Widget'
import TrendsArea from './components/TrendsArea'
import Tweet from './components/Tweet'

class App extends Component {
  constructor() {
    super();
    this.state = {
      novoTweet: '',
      tweets: []

    }
  }

  adicionaTweet = (event) => {
    event.preventDefault();
    this.setState({
      tweets: [this.state.novoTweet]
    })
  }

  render() {
    return (
      <Fragment>
        <Cabecalho>
          <NavMenu usuario="@juliaValerio" />
        </Cabecalho>
        <div className="container">
          <Dashboard>
            <Widget>
              <form className="novoTweet">
                <div className="novoTweet__editorArea">
                  <span className={`${this.state.novoTweet.length > 140 ? '.novoTweet__status--invalido' : '.novoTweet__status'}
                            `}>
                    {this.state.novoTweet.length}/140</span>
                  <textarea onInput={(event) => this.setState({ novoTweet: event.target.value })} className="novoTweet__editor" placeholder="O que está acontecendo?"></textarea>
                </div>
                <button type="submit" className="novoTweet__envia" disabled={this.state.novoTweet.length > 140 ? 'true' : 'false'}>Tweetar</button>
              </form>
            </Widget>
            <Widget>
              <TrendsArea />
            </Widget>
          </Dashboard>
          <Dashboard posicao="centro">
            <Widget>
              <div className="tweetsArea">
                <Tweet tweets={this.state.tweets} />
              </div>
            </Widget>
          </Dashboard>
        </div>
      </Fragment>
    );
  }
}

export default App;
