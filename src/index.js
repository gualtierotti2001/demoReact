import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from "axios";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick  = this.handleClick.bind(this);
    this.state = {
      prova: "",
      prova1: ""
  };
  }
  
  
  handleClick () {
    //const baseURL = "http://localhost:8080";
    alert(`${process.env.REACT_APP_MY_BE}/hello`)
    axios.get(process.env.REACT_APP_MY_BE + "/hello", {
      headers: {
        'Access-Control-Allow-Origin': '*'      }
     }).then((response) => {
      console.log(response.data)
    });
    
  }
  render() {
    return (
      <div>
        <h2>{`${process.env.REACT_APP_MY_BE}/hello`}</h2>
        <button onClick={this.handleClick}>
          ciao !
        </button>
        
        
      </div>
        );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main/>);

