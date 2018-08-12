import React, { Component } from 'react';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

class RequestsBox extends Component {
    render() {
        const { count, title } = this.props;
        return (
            <div className="requests-box">
                <div className="requests-box__count">{count}</div>
                <div className="requests-box__title">{title}</div>
                <div className="requests-box__point"></div>
            </div>
        )
    }
}

export default RequestsBox;