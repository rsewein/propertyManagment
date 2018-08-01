import React, { Component } from 'react';
import { connect } from 'react-redux';

import history from '../history';

export default function(ComposedComponent) {
    class Authentication extends Component {
        componentWillMount() {
            if(!this.props.authenticated) {
                history.push('/')
            }
        }

        componentWillUpdate() {
            if(!nextProps.authenticated) {
                history.push('/');
            }
        }

        render() {
            return <ComposedComponent/>
        }
    }

    function mapStatetoProps(state) {
        const { authenticated } = state.auth;
        return{authenticated}
    }

    return connect(mapStatetoProps)(Authentication)
}