import React, { useEffect, useState } from 'react'
import firebase from '../firebase/firebase';

const Reviews = ({ text }) => {

  const [reviews, setReviews] = useState(null)

  useEffect(() => {
    if (text) {
      const aroundIcelandRoute = firebase.firestore().collection(text)

      aroundIcelandRoute.get().then(async (querySnapshot) => {
        const reviews = []
        querySnapshot.forEach(async (doc) => {
          reviews.push(doc.data())
        })
        await setReviews(reviews)
      })
    }
  }, [])
  return (
    <section className="comments-form-container">
      <form className="comments-form">
        <h4>Add review</h4>
        <input type="text" placeholder="name" />
        <textarea placeholder="type your review here" />
        <input value="Submit" type="button" />
      </form>

      <div className="reviews-container">
        <h4>Reviews</h4>
        {reviews && reviews.map((review, idx) => {
          return <div key={idx} className="review">
            <h6>{review.name}</h6>
            <p>{review.text}</p>
          </div>
        })}
      </div>

    </section>
  )
}

export default Reviews
