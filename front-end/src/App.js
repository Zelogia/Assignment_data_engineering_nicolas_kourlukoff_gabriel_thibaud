import logo from './logo.svg';
import './App.css';
import { Component } from 'react/cjs/react.production.min';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("http://localhost:3001")
        .then(res => res.json())
        .then(res => this.setState({ apiResponse: res.pageCount }))
        .catch(err=>err);
  }

  componentDidMount() {
    this.callAPI();
  }

  render () {
    return <div className="App">
        <p className="App-intro">the count is: {this.state.apiResponse}</p>
    </div>
  }

}
export default App;