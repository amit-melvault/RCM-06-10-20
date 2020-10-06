import React, { Component } from 'react'
import './AddProduct.css'
import Header from '../Header';
import {
    Form,
    FormGroup,
    TextInput,
    Button,
} from '@patternfly/react-core';

const selectedItem = [
    { name: "Select", value: "Select" },
    { name: "Gross Amount", value: "GrossAmount" },
    { name: "Net Amount", value: "NetAmount" },
    { name: "Approx Amount", value: "ApproxAmount" },
]

interface stateComponent {
    code: any,
    displayName: string,
    select: any

}

export default class AddProduct extends Component<{}, stateComponent> {

    constructor(props) {
        super(props)
        this.state = {
            code: "",
            displayName: "",
            select: "",
        }
        this.handleInputCode = (code) => {
            this.setState({code})
        }
        this.handleInputname = (displayName) => {
            this.setState({displayName})
        }
        this.handelSelectItem = (e) => {
            this.setState({ select: e.target.value })
        }
    }
    onSubmit = (e) => {
        e.preventDefault()
        this.setState({
            code: this.state.code,
            displayName: this.state.displayName,
            select: this.state.select

        })
    }
    render() {
        console.log(this.state)
        const {code , displayName, select} = this.state
        return (
            <React.Fragment>
                <Header />
                <div className="Heading">
                    <h2>Add Product</h2>
                </div>
                <div className="form-group">
                    <Form onSubmit={this.onSubmit}>
                        <FormGroup label="Code :" isRequired fieldId="simple-form-Code" >
                            <TextInput
                                type="text"
                                isRequired
                                aria-describedby="simple-form-name-helper"
                                onChange={this.handleInputCode}
                                name="code"
                                value={code}
                            />
                        </FormGroup>
                        <FormGroup label="Display Name :" isRequired fieldId="simple-Display-Name" >
                            <TextInput
                                type="text"
                                isRequired
                                aria-describedby="simple-form-name-helper"
                                onChange={this.handleInputname}
                                name="displayName"
                                value={displayName} />
                        </FormGroup>
                        <FormGroup label="Price-Item :" isRequired fieldId="simple-Price-Item" >
                            <select onChange={this.handelSelectItem}>
                                {
                                    selectedItem.map((item, i) => {
                                        return (
                                            <option key={i} value={item.value}>{item.name}</option>
                                        )
                                    })
                                }
                            </select>
                        </FormGroup>
                        <Button className="btn"
                            onClick={this.onSubmit}
                        >Save</Button>
                    </Form>
                </div>
            </React.Fragment>
        )
    }
}
