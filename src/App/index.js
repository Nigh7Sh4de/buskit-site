import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div id="App">
        <div className="page">
          <div className="container">
            <h1>Welcome to your new jam space</h1>
            <h2>Where am I?</h2>
            <p>
              <span className="brand-title">Buskit.tv</span> is the new way to connect 
              with your audiance and grow it in a whole new way.
            </p>
            <h2>Why am I here?</h2>
            <p>
              That depends on whether you are a <em>creator</em> or a <em>viewer</em>...
            </p>
            <h4><em>Creators</em> have the ability to:</h4>
            <ul>
              <li>Livestream their music/content to the world</li>
              <li>Interact with their audience with the chat function</li>
              <li>View analytics</li>
              <li>Receive donations from viewers</li>
              <li>Customize their profile</li>
              <li>Become a “Featured Artist” on the front page</li>
            </ul>
            <h4><em>Viewers</em> will be able to:</h4>
            <ul>
              <li>Watch their favourite musicians perform live</li>
              <li>Interact with creators using the chat function</li>
              <li>Follow musicians for free</li>
              <li>Donate to and support musicians</li>
              <li>Customize their profile</li>
              <li>Find new channels with the “Recommended Artists” section</li>
            </ul>
            <h2>Why are you doing this?</h2>
            <p>
              At Buskit, every one of us is a musician. We've all walked the path of a 
              struggling musician trying to make it. That is why our mission is to provide 
              a platform where musicians can livestream their music to the world and create 
              a new way to connect musicians with music lovers from all over.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
