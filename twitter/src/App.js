import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      data: null
    }
  }

  componentDidMount(){
    this.callBackendAPI()
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  callBackendAPI = async () =>{
    const response = await fetch('/handle');
    const body = await response.json();
    if(response.status !==200){
      throw Error(body.message)
    }
    return body
  }

  render(){
    return(
      <div className="App">
        <div>{this.state.data}</div>
      </div>
    )
  }
}


export default App;
