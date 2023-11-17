import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getProductsByFilter, getUsedCurrency } from "../store/selectors";
import ProductsDisplay from "../components/ProductsDisplay/Index";
import { useParams } from 'react-router-dom';
import withRouter from "../withRouter";

const ProductCategories = (props) => {
  const { category } = useParams();
  return (
    <ProductsDisplay
      products={props.productsProps}
      usedCurrency={props.usedCurrencyProp}
      breadCrumbs={[
        {
          label: category,
          to: "/category/" + category,
        },
      ]}
    />
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    productsProps: getProductsByFilter(state, ownProps.router.params.category),
    usedCurrencyProp: getUsedCurrency(state),
  };
};

ProductCategories.propTypes = {
  productsProps: PropTypes.array.isRequired,
  usedCurrencyProp: PropTypes.object.isRequired,
};

export default withRouter(connect(mapStateToProps)(ProductCategories));
