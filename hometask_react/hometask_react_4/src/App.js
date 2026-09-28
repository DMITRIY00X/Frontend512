import React from 'react';
import './App.css';
import User from './User';

class App extends React.Component {
  state = {
    show: true
  }

      componentDidMount() {
        // console.log("component Did Mount");
                setTimeout(() => {
            this.setState({show: false});
        }, 5000);

    }

  render() {
    return (
      <div className="App">
        {/* <button className='btn' onClick={()=> this.setState({show: !this.state.show})}>User</button> */}
        {this.state.show ? <User/> : null}
      </div>
    );
  }
}

export default App;
