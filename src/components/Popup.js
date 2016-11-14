import React from 'react'
import './_popup.scss'

class Popup extends React.Component {
  constructor (props) {
    super(props)
    this.handleEscKeyDown = ::this.handleEscKeyDown
    this.handleClick = ::this.handleClick
    this.state = {
      opened: false
    }
  }

  componentDidMount () {
    document.addEventListener('keydown', this.handleEscKeyDown)
  }

  handleEscKeyDown (e) {
    const ESC = 27

    if (e.keyCode === ESC) {
      this.setState({
        opened: false
      })
    }
  }

  handleClick () {
    this.setState({ opened: !this.state.opened })
  }

  render () {
    const popUpClass = this.state.opened ? 'popup popup__opened' : 'popup'

    return (
      <div className='edit'>
        <button type='button' className='btn btn-default'
          onClick={this.handleClick} >Edit
        </button>
        <div className={popUpClass} >
          <div className='popup__container' >
            <p className='popup__caption' >
             edit
            </p>
            <button
              className='button popup__close'
              onClick={this.handleClick} >&times;</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Popup