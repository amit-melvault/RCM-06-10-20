import React from 'react';
import ProductModal from '../Modals/EditModal/ProductModal';
import ResellerModal from '../Modals/EditModal/ResellerModal';
import './TableStyle.css';

interface statecomponent {
  isModalOpen: boolean,
  newData: any
}
interface IProps {
  data: any,
  head: any,
}
class DataTable extends React.Component<IProps, statecomponent> {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      newData: ""
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
    let newData = this.props.data;
    newData = newData.splice(index, 1);
    this.setState({ newData });
    // newData = newData.filter(i=>i.id !== index.id)
  };
  render() {
    return (
      <React.Fragment>

        <ProductModal
          showModal={this.state.isModalOpen}
          handleModalClose={this.handleModalClose}
        />

        <ResellerModal
          showModal={this.state.isModalOpen}
          handleModalClose={this.handleModalClose}
        />

        <div className="table_style">
          <table className="table table-striped">
            <thead >
              {
                this.props.head.map((header, i) => {
                  return (
                    <tr key={i}>
                      <th>
                        <input type="checkbox" />
                      </th>
                      <th>{header.refNo}</th>
                      <th>{header.name}</th>
                      <th>{header.Reseller}</th>
                      <th></th>
                    </tr>
                  )
                })
              }
            </thead>
            <tbody>
              {this.props.data.map((item, i) => {
                return (
                  <tr key={i}>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>{item.refNo}</td>
                    <td>{item.name}</td>
                    <td>{item.Reseller}</td>
                    <td style={{ float: "right" }}>
                      <button onClick={this.handleEdit} style={ButtonStyel}>
                        <span className="fas fa-edit"></span>
                      </button>
                      <button onClick={() => this.handleDelete(item)} style={ButtonStyel}>
                        <span className="far fa-trash-alt"></span>
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
const ButtonStyel ={
  border:"none",
  background:"none",
  marginTop:"auto"
}
export default DataTable;
