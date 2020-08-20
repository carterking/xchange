import React, {Component} from "react"
//import { super } from "@babel/types";

class XchangeRates extends Component {
    constructor() {
        super()
        this.state = {
            rates: {},
            convertTo: 'CAD',
            convertFrom: 'CAD',
            convertNumber: 1,
            fetchUrl: "https://api.exchangeratesapi.io/latest?base="
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const {type, options, selectedIndex, value, id} = event.target
        type === "select-one" ? 
            this.setState({
                [id]: options[selectedIndex].text
            })
        :
        this.setState({
            convertNumber: event.target.value
        })
        
    }

    componentDidMount() {
        fetch(this.state.fetchUrl + this.state.convertFrom)
            .then(res => res.json())
            .then(
                (result) => {
                     this.setState({
                         rates: result.rates
                     })
                }
            )

    }

    componentDidUpdate(prevState) {
        if (this.state.convertFrom !== prevState.convertFrom) {
            fetch(this.state.fetchUrl + this.state.convertFrom)
            .then(res => res.json())
            .then(
                (result) => {
                     this.setState({
                         rates: result.rates
                     })
                }
            )
        }
    }

    render() {
         const currencies = Object.keys(this.state.rates).map(key=>({key, value: this.state.rates[key]}))
         const currencyItems = currencies.map(item => <option key={item.key} value={item.value} >{item.key}</option>  )
         const convertedNumber = this.state.convertNumber * this.state.rates[this.state.convertTo]
        return (
            <div>
                <label>
                    Convert From
                    <select id="convertFrom" onChange={this.handleChange}>{currencyItems}</select>
                </label>
                <br></br>
                <label>
                    Convert to
                    <select id="convertTo" onChange={this.handleChange}>{currencyItems}</select>
                </label>
                <br></br>
                <label htmlFor="dollars">Convert</label>
                <input type="number" id="dollars" value={this.state.convertNumber} onChange={this.handleChange}></input>
                <p>{this.state.convertNumber} {this.state.convertFrom} = {convertedNumber} {this.state.convertTo}</p>
            </div>
        )
    }

}

export default XchangeRates