import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import { Home } from './routes/Home/Home';
import { Welcome } from './routes/Welcome/Welcome';
import './style.css';

interface AppProps { }
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <Fragment>
        <Welcome name={this.state.name} />
        
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('root'));
