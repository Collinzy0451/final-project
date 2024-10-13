import React from 'react';

const RatingStars = ({ rating }) => {
    // Replace <div> with <span> or wrap it in a block element like <div> outside the <p>
    return (
        <span className="rating-stars">
            {[...Array(5)].map((star, index) => (
                <span key={index}>
                    {index < rating ? '★' : '☆'}
                </span>
            ))}
        </span>
    );
};

export default RatingStars;
