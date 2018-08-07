import React, { Component } from 'react';

import NewNewsletterForm from './newsletterNewForm';

class NewNewsletter extends Component {

    onSubmit = (fields) => {
        console.log('trying to submit')
        // if(button == 'submit') {
        //     // save new newsletter to packend. Perform a post request here.
        //     console.log('trying to submit to backend.');
        // }
        // this.props.history.push('/dashboard')
    }

    onCancel = (fields) => {
        console.log('trying to cancel')

        // this.props.history.push('/dashboard')
    }

    render() {
        return (
            <div className="new-newsletter">
                <NewNewsletterForm onCancel={() => this.onCancel()} onSubmit={(event) => this.onSubmit(event)}/>
            </div>
        )
    }
}

export default NewNewsletter;