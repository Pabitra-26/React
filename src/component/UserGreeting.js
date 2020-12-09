import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn : false
        }
    }
    
    render() {
        // if(this.state.isLoggedIn){
        //     return <h1>Welcome Pabbi!</h1>
        // }
        // else{
        //     return <h1>Welcome Guest!</h1>
        // }


        // let message
        // if(this.state.isLoggedIn){
        //     message = <h1>Welcome Pabbi!</h1>
        // }
        // else{
        //     message = <h1>Welcome Guest</h1>
        // }
        // return (
        // <div>{message}</div>
        // )

        // return (
        //     this.state.isLoggedIn ? (<div>Welcome Pabbi!</div>) : (<div>Welcome Guest!</div>)
        // )

        return (this.state.isLoggedIn && <h1>Welcome Pabbi!</h1>)
        
    }
}

export default UserGreeting
