import React, { Component } from 'react';
import { Modal, Button, ModalVariant, TextInput, Form, FormGroup, Grid, GridItem, SearchInput, Flex, FlexItem } from '@patternfly/react-core';



interface stateComponent {
    isModalOpen: boolean,
}
interface IProps {
    handleModalClose: any,
    showModal: boolean,
}
class ProductModal extends Component<IProps, stateComponent> {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
        };
    }
    handleModalToggle = () => {
        this.props.handleModalClose(false)
    };
    onSubmit = () => {

    }
    handleInputCode = () => { }
    handleInputname = () => { }
    onChange = () => { }
    render() {
        return (
            <React.Fragment>
                <Modal
                    variant={ModalVariant.medium}
                    aria-label="My modal context"
                    title="Edit Product"
                    isOpen={this.props.showModal}
                    onClose={this.handleModalToggle}
                    actions={[
                        <Button key="confirm" variant="danger" onClick={this.handleModalToggle}>
                            Delete Product
                         </Button>,
                        <Button key="confirm" variant="primary" onClick={this.handleModalToggle} style={{ marginLeft: "auto" }}>
                            Add
                         </Button>,
                        <Button key="cancel" variant="link" onClick={this.handleModalToggle} >
                            Cancel
                         </Button>
                    ]}
                >
                    <Form onSubmit={this.onSubmit}>
                        <Grid>
                            <GridItem span={6}>
                                <FormGroup label="Code :" isRequired fieldId="simple-form-Code" >
                                    <TextInput
                                        type="text"
                                        isRequired
                                        placeholder="code"
                                        aria-describedby="simple-form-name-helper"
                                        onChange={this.handleInputCode}
                                        name="code"
                                    />
                                </FormGroup>
                            </GridItem>
                            <GridItem span={6}>
                                <FormGroup label="Display Name :" isRequired fieldId="simple-Display-Name" >
                                    <TextInput
                                        type="text"
                                        isRequired
                                        placeholder="Display Name"
                                        aria-describedby="simple-form-name-helper"
                                        onChange={this.handleInputname}
                                        name="displayName"
                                    />
                                </FormGroup>
                            </GridItem>
                        </Grid>
                        <Grid style={{ marginTop: "40px" }}>
                            <GridItem span={6}>
                                <Button>Add Price Item</Button>
                            </GridItem>
                            <GridItem span={6}>
                                <SearchInput
                                    placeholder='Search Reseller'
                                    onChange={this.onChange}
                                    onClear={() => this.onChange()}
                                />
                            </GridItem>
                            <GridItem span={12} style={{ marginTop: "20px" }}>
                                Reseller1
                                Reseller2
                                Reseller3
                                Reseller4
                            </GridItem>
                        </Grid>
                    </Form>
                </Modal>
            </React.Fragment>
        );
    }
}

export default ProductModal;

