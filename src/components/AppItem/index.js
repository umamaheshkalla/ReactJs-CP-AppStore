import {Component} from 'react'

import './index.css'

class AppItem extends Component {
  render() {
    const {appsList} = this.props
    const {imageUrl, appName} = appsList

    return (
      <li className="app-card">
        <img className="app-images" alt="app=img" src={imageUrl} />
        <p className="app-name">{appName}</p>
      </li>
    )
  }
}

export default AppItem
