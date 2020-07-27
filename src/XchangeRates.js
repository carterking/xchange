import React, {Component} from "react"
//import { super } from "@babel/types";

class XchangeRates extends Component {
    constructor() {
        super()
        this.state = {
            currentRates: {}
        }
    }

    componentDidMount() {
        fetch("https://api.exchangeratesapi.io/latest?base=USD")
            .then(res => res.json())
            .then(
                (result) => {
                     this.setState({
                         currentRates: result.rates
                     })
                }
            )
    }

    render() {
         console.log(this.state.currentRates)
        return (
            <div>
                Canadian Dollar: {this.state.currentRates.CAD}
            </div>
        )
    }

}

export default XchangeRates