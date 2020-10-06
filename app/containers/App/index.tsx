import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';

import GlobalStyle from '../../global-styles';
import NotFoundPage from '../NotFoundPage/Loadable';
import Navbar from '../../components/Navbar';
import Dashboard from '../Pages/Dashboard/index';
import Sales from '../Pages/Sales/index';
import Reseller from '../Pages/Reseller/index';
import ProductConfigration from '../Pages/ProductsConfigration/index';
import Comission from '../Pages/Comission/index';
import Athentication from '../Pages/Athentication/index';

import AddProduct from '../../containers/Pages/ProductsConfigration/AddProduct'

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/sales" component={Sales} />
          <Route exact path="/reseller" component={Reseller} />
          <Route exact path="/product-configration" component={ProductConfigration} />
          <Route exact path="/comission" component={Comission} />
          <Route exact path="/athentication" component={Athentication} />
          <Route exact path="/product-configration/add" component={AddProduct} />
          <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </React.Fragment>
  );
}
export default hot(App);
