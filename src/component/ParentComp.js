import React, { Component } from 'react'
// import RegComp from './RegComp'
// import PureComp from './PureComp'
import MemoComp from './MemoComp'


class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name : 'Pabbi'
        }
    }

    componentDidMount(){
        setInterval(()=>
        this.setState({
            name : 'Pabbi'
        }),2000)
    }
    
    render() {
        console.log(`Parent component render`)
        return (
            <div>
                {/* Parent Component  {this.state.name} */}
                <MemoComp name={this.state.name}/>
                {/* <RegComp name={this.state.name}></RegComp> */}
                {/* <PureComp name={this.state.name}></PureComp>                               */}
            </div>
        )
    }
}

export default ParentComp
