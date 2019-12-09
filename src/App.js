import React from 'react';
import Split from './composition/Split.js'
import './App.css'
import './Split.css'

class App extends React.Component {
  render() {
    return (
      <main className='App'>
        <Split className='left' flexBasis= {2}>
          I am on the left side
        </Split>
        <Split className='right'>
          I am on the right side.
        </Split>
      </main>
    )
  }
}

export default App;
