import React, {Component} from 'react'
import Sidebar from '../Sidebar'
import Products from '../Products'

import './index.css'

class Home extends Component {
  constructor() {
    super()
    this.state = {
      activeCategory: 'All',
    }
  }

  setCategory = category => {
    this.setState({activeCategory: category})
  }

  render() {
    const {activeCategory, setCategory} = this.state
    return (
      <div className="page">
        <Sidebar activeCategory={activeCategory} setCategory={setCategory} />
        <Products activeCategory={activeCategory} />
      </div>
    )
  }
}
export default Home
