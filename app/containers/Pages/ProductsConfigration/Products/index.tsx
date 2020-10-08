import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';

import NotFoundPage from '../../../NotFoundPage/Loadable';

import GlobalStyle from '../../../../global-styles';
import Header from '../../../../components/Header';
import PaginationTop from '../../../../components/Pagination'
import DataTable from '../../../../components/TableList'

const productHead =[
  { id: 1, name: 'Product' },
]
const Product = [
  { id: 1, name: 'product1' },
  { id: 2, name: 'product2' },
  { id: 3, name: 'product3' },
];
interface stateComponent{
  productItem: any,
  tableHead: any,
}
interface IProps {

}
class Products extends React.Component<IProps,stateComponent> {
  constructor(props) {
    super(props)
    this.state = {
      productItem: Product,
      tableHead: productHead,
    }
  }
  render() {
    return (
      <div>
        <Header
          heading="Products"
          subTitle="Make changes to Product here" 
          btnName="Add Product"
          data={this.state.productItem}
          />
        <PaginationTop />
        <DataTable 
        data={this.state.productItem} 
        head={this.state.tableHead}
        />
        <GlobalStyle />
      </div>
    );
  }
}
export default Products;
