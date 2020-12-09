import React from 'react'

const withCounter = (WrappedCounter, incrementNumber) =>{
    class WithCounter extends React.Component{
        constructor(props) {
            super(props)
        
            this.state = {
                 count:0
            }
        }
    
        incrementCount=()=>{
            this.setState(prevState=>{
                return {
                    count:prevState.count+incrementNumber
                }
            })
        }
        render(){
            return(
                <WrappedCounter count={this.state.count}
                incrementCount={this.incrementCount}
                {...this.props}/>
            )
        }
        
    }
    return WithCounter
}
export default withCounter