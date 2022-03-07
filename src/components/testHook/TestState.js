import React from 'react'

export default function TestState() {
  return (
      
    <Name />
  )
}
class Name extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    }
    render() {
      return (
        <div>
            <h2>State React</h2>
          <p>Bạn đã bấm {this.state.count} lần</p>
          <button onClick={() => this.setState({ count: this.state.count + 1 })}>
            Bấm vào tôi
          </button>
        </div>
      );
    }
  } 
  