import React, {Component} from 'react'
import './index.css'

class Sidebar extends Component {
  render() {
    const {activeCategory, setCategory} = this.props

    return (
      <div className="sidebar">
        <h4>Categories</h4>

        <button
          type="button"
          className={
            activeCategory === 'All'
              ? 'sidebar-item active-pill'
              : 'sidebar-item'
          }
          onClick={() => setCategory('All')}
        >
          All
        </button>

        <button
          type="button"
          className={
            activeCategory === 'Fruits'
              ? 'sidebar-item active-line'
              : 'sidebar-item'
          }
          onClick={() => setCategory('Fruits')}
        >
          Fruits & Vegetables
        </button>

        <button
          type="button"
          className={
            activeCategory === 'Prepared'
              ? 'sidebar-item active-line'
              : 'sidebar-item'
          }
          onClick={() => setCategory('Prepared')}
        >
          Prepared Foods
        </button>

        <button
          type="button"
          className={
            activeCategory === 'Canned'
              ? 'sidebar-item active-line'
              : 'sidebar-item'
          }
          onClick={() => setCategory('Canned')}
        >
          Canned Foods
        </button>
      </div>
    )
  }
}

export default Sidebar
