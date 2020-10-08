import React, { FormEvent } from 'react';
import { Nav, NavExpandable, NavItem, NavItemSeparator, NavList, NavGroup, PageHeader, Button } from '@patternfly/react-core';
import { Link } from 'react-router-dom';
import Logo from '../../images/melody.svg';
import Mask from '../../images/mask.svg';
import Mask1 from '../../images/mask1.svg';
import Shape1 from '../../images/shape1.svg';
import Shape2 from '../../images/shape2.svg';
import Shape3 from '../../images/shape3.svg';
import Shape4 from '../../images/shape4.svg';
import Auth from '../../images/auth.svg';
import { Avatar } from '@patternfly/react-core';
import Select from 'react-select';
import { NavbarStyle, Span, P, LinkStyle } from './NavbarStyle'
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';


const options = [
    { value: 'English', label: 'English' },
    { value: 'Hindi', label: 'Hindi' },
    { value: 'Telgu', label: 'Telgu' },
]

interface ComponentState {
    activeItem: number
}

class Navbar extends React.Component<{}, ComponentState>{
    constructor(props) {
        super(props);
        this.state = {
            activeItem: 0
        };
    }

    onSelect = (result) => {
        console.log("item", result)
        this.setState({
            activeItem: result
        });
    };
    render() {


        const SalesMenu = (
            <Menu>
                <Menu.Item>
                    <Link to="/earned-comission">
                        Earned Comission
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/sales-transection">
                        Sales transection
                    </Link>
                </Menu.Item>
            </Menu>
        );
        const ResellerMenu = (
            <Menu>
                <Menu.Item>
                    <Link to="/reseller-group">
                        Reseller Group
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/reseller">
                        Reseller
                    </Link>
                </Menu.Item>
            </Menu>
        );
        const ProductConfigrationMenu = (
            <Menu>
                <Menu.Item>
                    <Link to="/product-configration/price-item">
                        Price Item types
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/product-configration/product">
                        Products
                    </Link>
                </Menu.Item>
            </Menu>
        );
        const AthenticationMenu = (
            <Menu>
                <Menu.Item>
                    <Link to="/athentication">
                        Groups
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/user">
                        User
                    </Link>
                </Menu.Item>
            </Menu>
        );

        return (
            <React.Fragment>
                <NavbarStyle>
                    <img src={Logo} alt="logo" style={{ width: '200px', padding: '15px' }} />

                    <LinkStyle>
                        <Link to="/" >Dashboard</Link>
                    </LinkStyle>
                    <LinkStyle >
                        <Dropdown overlay={SalesMenu}>
                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                Sales<DownOutlined />
                            </a>
                        </Dropdown>
                    </LinkStyle>
                    <LinkStyle>
                        <Dropdown overlay={ResellerMenu}>
                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                Reseller<DownOutlined />
                            </a>
                        </Dropdown>
                    </LinkStyle>
                    <LinkStyle>
                        <Dropdown overlay={ProductConfigrationMenu}>
                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                Product configration<DownOutlined />
                            </a>
                        </Dropdown>
                    </LinkStyle>
                    <LinkStyle>
                        <Link to="/comission">Comission</Link>
                    </LinkStyle>
                    <LinkStyle>
                        <Dropdown overlay={AthenticationMenu}>
                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                Athentication and Authorization<DownOutlined />
                            </a>
                        </Dropdown>
                    </LinkStyle>
                </NavbarStyle>
                <Span>
                    <Select options={options} onChange={this.onSelect} />
                </Span>
                <P>
                    <Avatar src={Shape4} alt="avatar"></Avatar>
                </P>

            </React.Fragment>
        );
    }
}

export default Navbar;