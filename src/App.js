import React from 'react';
import { Route, Routes} from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import { closeMaxProductModal, toogleSideBar } from "./store/actions";
import { connect } from "react-redux";
import './App.css';
import Home from './views/Home/Home';
import All from './views/All';
import Sale from './views/Sale';
import Cart from './views/Cart';
import Checkout from './views/Checkout';
import ProductCategories from './views/ProductCategories';
import withRouter from './withRouter';
import ProductDetails from './views/ProductDetails/ProductDetails'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MainLayout
          storeCartCount={this.props.storeCartItemsCount}
          showModal={this.props.showModalProp}
          closeModalProp={this.props.closeModalProp}
          modalMessage={this.props.modalMessageProp}
          showSideBar={this.props.showSideNavigationProp}
          toggleSideBar={this.props.toggleSideBarProp}
        >
          <Routes>
            <Route path="/" element={<Home /> }></Route>
            <Route path="/all" element={<All /> }></Route>
            <Route path="/category/:category" element={<ProductCategories /> }></Route>
            <Route path="/sale" element={<Sale /> }></Route>
            <Route path="/cart" element={<Cart /> }></Route>
            <Route path="/checkout" element={<Checkout /> }></Route>
            <Route path="/product/:productSlug" element={<ProductDetails />} />
          </Routes>
        </MainLayout>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    storeCartItemsCount: state.cartTotal,
    showModalProp: state.productMaxShowModal,
    modalMessageProp: state.modalMessage,
    showSideNavigationProp: state.showSideNavigation,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModalProp: () => dispatch(closeMaxProductModal()),
    toggleSideBarProp: () => dispatch(toogleSideBar()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
