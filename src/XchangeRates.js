import React, {Component} from "react"
//import { super } from "@babel/types";

class XchangeRates extends Component {
    constructor() {
        super()
        this.state = {
            rates: {}
        }
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
              <select>
                {currencyItems}
              </select>
                
              </div>
        )
    }

}

export default XchangeRates