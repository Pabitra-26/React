import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export class ParentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             parentName : `Parent`
        }
    }
    greetParent = (childname) =>{
        alert(`Hello ${this.state.parentName} from ${childname}`)
    }
    render() {                
        
        return (
            <div>
                <ChildComponent greetHandler = {this.greetParent}/>
            </div>
        )
    }
}

export default ParentComponent
