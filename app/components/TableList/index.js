import React from 'react';
import ProductModal from '../Modal/ProductModal';
import './TableStyle.css';

const Product = [
  { id: 1, name: 'product1' },
  { id: 2, name: 'product2' },
  { id: 3, name: 'product3' },
];
class DataTable extends React.Component {
  constructor() {
    super();
    this.state = {
      Products: Product,
      isModalOpen: false,
    };
  }

  handleEdit = () => {
    this.setState({
      isModalOpen: true,
    });
  };
  handleModalClose = isshowModal => {
    this.setState({
      isModalOpen: isshowModal,
    });
  };
  handleDelete = index => {
    let newData = this.state.Products;
    newData = newData.splice(index, 1);
    this.setState({ newData });
  };
  render() {
    return (
      <React.Fragment>
        <ProductModal
          showModal={this.state.isModalOpen}
          handleModalClose={this.handleModalClose}
        />

        <div className="table_style">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>
                  <input type="checkbox" />
                </th>
                <th>Product</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.Products.map((item, i) => {
                return (
                  <tr key={i}>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>{item.name}</td>
                    <td>
                      <button onClick={this.handleEdit}>edit</button>
                      <button onClick={() => this.handleDelete(item)}>
                        delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}
export default DataTable;
