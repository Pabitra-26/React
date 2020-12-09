import React, { Component } from 'react'

class Welcome extends Component {
    render() {
        const {name, heroName} = this.props
        return (
            <div>
                Welcome {name} a.k.a {heroName}
            </div>
        )
    }
}

export default Welcome
