import React from 'react';

// tung hang
class ProductCategoryRow extends React.Component {
    render() {
        const category = this.props.category;
        return (
            <tr colSpan="2">
                <th>
                    {category}
                </th>
            </tr>
        )
    }
}

class ProductRow extends React.Component {
    render() {
        const product = this.props.product; // product duoc truyen tu tren xuong
        const name = product.stocked ? product.name : <span style={{color: 'red'}}> {product.name} </span>
        return (
            <tr>
                <td>{name}</td>
                <td>{product.price}</td>
            </tr>
        )
    }
}

class ProductTable extends React.Component {
    render() {
        const filterText = this.props.filterText;
        const inStockOnly = this.props.inStockOnly;
        const rows = [];
        let lastCategory = null;

        this.props.products.forEach(product => {
            if (product.name.indexOf(filterText)===-1) return;
            if (inStockOnly && !product.stocked) return;
            if (product.category !== lastCategory){
                rows.push(
                    <ProductCategoryRow category={product.category} key={product.category} />
                )
            }
            rows.push(
                <ProductRow product={product} key={product.name} />
            );
            lastCategory = product.category;
        });
        return (
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Price</td>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        )
    }
}

class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.handFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleInStockChange = this.handleInStockChange.bind(this);
    }

    handleFilterTextChange(e){
        this.props.onFilterTextChange(e.target.value);
    }

    handleInStockedChange(e){
        this.props.onInStockChange(e.target.value);
    }

    render(){
        return (
            <form>
                <input
                    type="text"
                    placeholder="Search..."
                    value={this.props.filterText}
                    onchange={this.handleFilterTextChange}
                />
                <p>
                    <input 
                        type="checkbox"
                        checked={this.props.inStockOnly}
                        onchange={this.handleInStockChange}
                    />
                    {' '}
                    Only show products in stock
                </p>
            </form>
        );
    }
}

class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText : '',
            inStockOnly : false
        }
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleInStockChange = this.handleInStockChange.bind(this);
    }

    handleFilterTextChange(filterText){
        this.setState({filterText: filterText});
    }

    handleInStockChange(inStockOnly){
        this.setState({inStockOnly: inStockOnly});
    }

    render (){
        return (
            <div>
                <SearchBar 
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    onFilterTextChange={this.handleFilterTextChange}
                    onInStockChange={this.handleInStock}
                />
                <ProductTable 
                    products={this.prop.products}
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                />
            </div>
        );
    }
}

const PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
  ];

function Example1() {
    return(
        <div>
            <FilterableProductTable products={PRODUCTS} />
        </div>
    );
}

export default Example1;