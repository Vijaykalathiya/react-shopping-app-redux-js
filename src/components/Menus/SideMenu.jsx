import React from 'react';
import PropTypes from 'prop-types';
import Menu from '../UI/Menu/Menu';
import MenuComponent from './MenuComponent';
// import mainMenu from "./MainMenu";

const SideMenu = (props) => {
    return (
        <React.Fragment>
            <Menu menuClasses="nav flex-column">
                <MenuComponent cartCount={props.cartItemNumber}/>
            </Menu>
            {/*<Backdrop showBackDrop={props.showBackDrop}/>*/}
        </React.Fragment>
    )
};

SideMenu.propTypes = {
    cartItemNumber: PropTypes.number.isRequired
};

export default SideMenu;