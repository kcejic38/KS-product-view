import React from 'react';
import ReactDom from 'react-dom';
import NavBar from './Components/navigation.jsx';
import Main from './Components/main.jsx';
import $ from 'jquery';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    // this.getProduct();
    // this.getImages();
  }

  getImages() {
    $.ajax({
      type: 'GET',
      url: '/images',
      data: { imageID: '1'},
      contentType: 'application/json',
      success: (data)=> {console.log(data)},
      error: (err) => {console.log('error')}
    })
  }

  render() {
    return (
      <div>
        <NavBar />
        <Main />
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('app'));