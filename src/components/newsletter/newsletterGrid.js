import React, { Component } from 'react';
import NewsletterBox from "./newsletterBox";
import NewsletterArchive from './newsletterArchive';
import NewsletterLatest from './newsletterLatest';
import Button from '../button';

class NewsletterGrid extends Component {

    handleAddNewsletter = () => {
        this.props.history.push('/newsletter/new');
    }

    render() {

        const latest = {
            _id: '13',
            title: "Happy Holidays!!!",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus mi eu tellus placerat consequat. Sed maximus mi eget imperdiet cursus. Aenean a consequat libero, et ultricies augue. Aliquam rutrum dictum enim et ultricies. Vivamus posuere sem at lectus pellentesque eleifend. Fusce vitae aliquam felis, vel interdum arcu. Sed urna leo, rutrum eu fermentum ut, volutpat a purus. Maecenas elit justo, cursus at felis nec, condimentum porta odio. Donec luctus cursus turpis, eget hendrerit enim lobortis vel. Pellentesque laoreet feugiat odio in pharetra. Sed porttitor ornare velit.",
            date: new Date(),
            imageUrl: "http://via.placeholder.com/960x258"
        }

        return (
            <div className="newsletter-grid">
                <Button className="newsletter-grid__button" icon="fas fa-plus" callback={() => this.handleAddNewsletter()}/>
                <NewsletterBox date={new Date()}/>
                <NewsletterArchive/>
                <NewsletterLatest history={this.props.history} {...latest}/>
            </div>
        )
    }
}

export default NewsletterGrid;