import React from 'react';
import ReactDom from 'react-dom';
import NavBar from './Components/navigation.jsx'

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <NavBar />
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('app'));