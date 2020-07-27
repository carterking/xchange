import React, {Component} from "react"
//import { super } from "@babel/types";

class XchangeRates extends Component {
    constructor() {
        super()
        this.state = {
            rates: {},
            selectedCurrency: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        console.log(event.target.options[event.target.selectedIndex].text)
    }

    componentDidMount() {
        fetch("https://api.exchangeratesapi.io/latest?base=USD")
            .then(res => res.json())
            .then(
                (result) => {
                     this.setState({
                         rates: result.rates
                     })
                }
            )
    }

    render() {
         const currencies = Object.keys(this.state.rates).map(key=>({key, value: this.state.rates[key]}))
         const currencyItems = currencies.map(item => <option key={item.key} value={item.value} >{item.key}</option>  )
        return (
              <div className="oooo">
                <select onChange={this.handleChange}>
                    {currencyItems}
                </select>
                <br></br>
                <label for="dollars">Convert</label>
                <input type="number" id="dollars" value="1"></input>
                <p>1 USD = {this.state.rates.CAD}CAD</p>
              </div>
        )
    }

}

export default XchangeRates