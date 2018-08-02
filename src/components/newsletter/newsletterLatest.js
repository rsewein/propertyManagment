import React, { Component } from 'react';

class NewsletterLatest extends Component {
    render() {
        return (
            <div className="newsletter-latest">
                <h1 className="newsletter-latest__title">Title Goes Here</h1>
                <img className="newsletter-latest__image" src="http://via.placeholder.com/960x258"/>
                <div className="newsletter-latest__body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus mi eu tellus placerat consequat. Sed maximus mi eget imperdiet cursus. Aenean a consequat libero, et ultricies augue. Aliquam rutrum dictum enim et ultricies. Vivamus posuere sem at lectus pellentesque eleifend. Fusce vitae aliquam felis, vel interdum arcu. Sed urna leo, rutrum eu fermentum ut, volutpat a purus. Maecenas elit justo, cursus at felis nec, condimentum porta odio. Donec luctus cursus turpis, eget hendrerit enim lobortis vel. Pellentesque laoreet feugiat odio in pharetra. Sed porttitor ornare velit.</p>
                </div>
            </div>
        )
    }
}

export default NewsletterLatest;