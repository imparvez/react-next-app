import React, { Component } from 'react'

class Error extends Component {
    static getInitialProps({ res, err }) {
        const statusCode = res ? res.statusCode : err ? err.statusCode : null
        return { statusCode }
    }

    render() {
        return (
            <p>
                {this.props.statusCode
                    ? `An error ${this.props.statusCode} occured on server`
                    : 'An error occured on Client'
                }
            </p>
        )
    }
}

export default Error