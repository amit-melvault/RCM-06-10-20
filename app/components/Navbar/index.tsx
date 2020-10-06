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
import { NavbarStyle, Span, P, ButtonStyle } from './NavbarStyle'


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
        console.log('state', this.state.activeItem)
        return (
            <div>
                <NavbarStyle>
                    <img src={Logo} alt="logo" style={{ width: '200px', padding: '15px' }} />
                    <div>
                        <Button variant='link'>
                            <Link to="/dashboard" >
                                Dashboard
                            {/* <Avatar src={Mask} alt="avatar"></Avatar> */}
                            </Link>
                        </Button>
                        <Button variant='link'>
                            <Link to="/sales">
                                Sales
                                {/* <Avatar src={Mask1} alt="avatar"></Avatar> */}
                            </Link>
                        </Button>
                        <Button variant='link'>
                            <Link to="/reseller">
                                Reseller
                                {/* <Avatar src={Shape1} alt="avatar"></Avatar> */}
                            </Link>
                        </Button>
                        <Button variant='link'>
                            <Link to="/product-configration">
                                Product Configration
                                {/* <Avatar src={Shape2} alt="avatar"></Avatar> */}
                            </Link>
                        </Button>
                        <Button variant='link'>
                            <Link to="/comission">
                                Comission
                                {/* <Avatar src={Shape3} alt="avatar"></Avatar> */}
                            </Link>
                        </Button>
                        <Button variant='link'>
                            <Link to="/athentication">
                                Athentication
                                {/* <Avatar src={Auth} alt="avatar"></Avatar> */}
                            </Link>
                        </Button>
                    </div>
                </NavbarStyle>
                <Span>
                    <Select options={options} onChange ={this.onSelect} />
                </Span>
                <P>
                    <Avatar src={Shape4} alt="avatar"></Avatar>
                </P>

            </div>
        );
    }
}

export default Navbar;