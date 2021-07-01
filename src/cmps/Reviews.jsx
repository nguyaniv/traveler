import React, { useEffect, useState, useRef } from 'react'
import firebase from '../firebase/firebase';

const Reviews = ({ text }) => {

  const [reviews, setReviews] = useState(null)
  const nameRef = useRef(null);
  const textRef = useRef(null)

  useEffect(() => {
    if (text) {
      const inheritReviews = firebase.firestore().collection(text)

      inheritReviews.get().then(async (querySnapshot) => {
        const reviews = []
        querySnapshot.forEach(async (doc) => {
          reviews.push(doc.data())
        })
        await setReviews(reviews)
      })
    }
  }, [])

  const submitComment = () => {
    let Rname = nameRef.current.value
    let Rtext = textRef.current.value
    const docData = {
      name: Rname,
      text: Rtext
    }
    const inheritReviews = firebase.firestore().collection(text)
    inheritReviews.add(docData)
    inheritReviews.get().then(async(querySnapshot)=>{
      const reviews = []
        querySnapshot.forEach(async (doc) => {
          reviews.push(doc.data())
        })
        await setReviews(reviews)
    })
  }

  return (
    <section className="comments-form-container">
      <form className="comments-form">
        <h4>Add review</h4>
        <input ref={nameRef} type="text" placeholder="name" />
        <textarea ref={textRef} placeholder="type your review here" />
        <input onClick={submitComment} value="submit" type="button" />
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
