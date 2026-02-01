import React, {Component} from 'react'
import './index.css'

class Products extends Component {
  render() {
    const {activeCategory} = this.props

    return (
      <div className="products-container">
        {activeCategory === 'All' && <h2>All Products</h2>}
        {activeCategory === 'Fruits' && <h2>Fruits & Vegetables</h2>}
        {activeCategory === 'Prepared' && <h2>Prepared Foods</h2>}
        {activeCategory === 'Canned' && <h2>Canned Foods</h2>}
      </div>
    )
  }
}

export default Products
