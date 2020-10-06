import React from 'react';
import { Grid, GridItem } from '@patternfly/react-core';
import { SearchInput, Button } from '@patternfly/react-core';
import { Link } from 'react-router-dom'
import { P, H2, H6, Div } from './styles/HeaderStyle'

import ProductState from './models/product-models';


class Header extends React.Component<{}, ProductState>{
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    }

    handleChange = (value, event) => {
        this.setState({
            value: value
        });
    };

    handleAddProduct = () => {

    }

    handleDeleteProduct = () => {

    }
    render() {
        return (
            <>
                <Grid>
                    <GridItem span={6}>
                        <H2>Product</H2>
                        <H6>Make Changes to Product Here</H6>
                    </GridItem>
                    <GridItem span={3}>
                        <P>
                            <SearchInput
                                placeholder='Search Reseller Groups'
                                value={this.state.value}
                                onChange={this.handleChange}
                                onClear={(evt) => this.handleChange('', evt)}
                            />
                        </P>
                    </GridItem>
                    <GridItem span={3}>
                        <Div>
                            <Button variant="secondary" style={{ borderRadius: '5px' }} >
                                <Link to="/product-configration/add"
                                    style={{ textDecoration: "none" }}
                                >Add Product</Link>
                            </Button>
                            <Button variant="danger" style={{ margin: '10px', borderRadius: '5px' }}
                                onClick={this.handleDeleteProduct}
                            >Delete</Button>
                        </Div>
                    </GridItem>
                </Grid>
            </>
        );
    }
}

export default Header;
