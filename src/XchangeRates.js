import React, {Component} from "react"
import RateItem from './RateItem'
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
        // const rateItems = this.state.currentRates.map(item => 
        //     <RateItem rate={item} />
        //     )
        return (
            <div>
                hi
            </div>
        )
    }

}

export default XchangeRates