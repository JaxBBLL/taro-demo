import React, { Component } from 'react';
import { Provider } from './store/index';
import './app.scss';

class App extends Component {
  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  render() {
    return <Provider>{this.props.children}</Provider>;
  }
}
export default App;
