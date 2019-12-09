import React from 'react';
import Split from './composition/Split.js'
import './App.css'
import './Split.css'
import Tooltip from './composition/Tooltip.js'

class App extends React.Component {
  render() {
    const firstTooltip = (
      <Tooltip message='tooltip message'>
        Ello
      </Tooltip>
    )
    const secondTooltip = (
      <Tooltip message='another tooltip message'>
        Ello to you too!
      </Tooltip>
    )
    return (
      <main className='App'>
        <Split className='left' flexBasis={2} bigSize={40}>
          I am on the left side
          <Tooltip message="Another tooltip message!">
            Ello where are ya?!
          </Tooltip>
        </Split>
        <Split className='right'>
          I am on the right side.
        </Split>
      </main>
    )
  }
}

export default App;
