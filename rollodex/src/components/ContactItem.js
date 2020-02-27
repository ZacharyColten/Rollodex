import React, { Component } from 'react'

class ContactItem extends Component {

  state = {
    isHidden: true,
    isClicked: false
  }


  handleClick = () => {
    let isClicked = !this.state.isClicked
    let status = this.state.isHidden == true ? false : true
    this.setState({
      isClicked,
      isHidden: status
    })
  }
  render() {
    if (this.state.isHidden) {
      return (
        <div style={{ border: '1px dashed gray', padding: '50px' }}>
          <p>{this.props.name}</p>
          <img src={this.props.picture} />
          <button onClick={this.handleClick}>Show details</button>

        </div>
      )
    } else {
      return (
        <div style={{ border: '1px dashed gray', padding: '50px' }}>
          <p>{this.props.name}</p>
          <img src={this.props.picture} />
          <button onClick={this.handleClick}>Hide details</button>
          <p>{this.props.details}</p>
        </div>
      )
    }
  }
}



export default ContactItem