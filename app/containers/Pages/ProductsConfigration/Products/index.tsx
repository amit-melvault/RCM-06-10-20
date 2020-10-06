import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';

import NotFoundPage from '../../../NotFoundPage/Loadable';

import GlobalStyle from '../../../../global-styles';
import Header from '../../../../components/Header';
import PaginationTop from '../../../../components/Pagination'
import DataTable from '../../../../components/TableList'

function Products() {
  return (
    <div>
      <Header />
      <PaginationTop />
      <DataTable />
      <GlobalStyle />
    </div>
  );
}
export default Products;
