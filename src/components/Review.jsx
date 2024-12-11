import { useState } from 'react'
import { useToast } from '../hooks/useToast'

/* eslint-disable react/prop-types */
const Review = ({ email }) => {
  const [step, setStep] = useState(1)
  const [rating, setRating] = useState(0)
  const [reviewText, setReviewText] = useState('')
  const showToast = useToast()

  const getRating = () => {
    return (
      <div>
        <input
          onChange={() => setRating(1)}
          checked={rating === 1}
          type='radio'
          name='rating'
          value='1'
        />{' '}
        1
        <input
          onChange={() => setRating(2)}
          checked={rating === 2}
          type='radio'
          name='rating'
          value='2'
        />{' '}
        2
        <input
          onChange={() => setRating(3)}
          checked={rating === 3}
          type='radio'
          name='rating'
          value='3'
        />{' '}
        3
        <input
          onChange={() => setRating(4)}
          checked={rating === 4}
          type='radio'
          name='rating'
          value='4'
        />{' '}
        4
        <input
          onChange={() => setRating(5)}
          checked={rating === 5}
          type='radio'
          name='rating'
          value='5'
        />{' '}
        5
      </div>
    )
  }

  const getReviewText = () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label>Rating {rating}</label>
        <textarea
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          placeholder='Review...'
          maxLength={100}
          rows={5}
          cols={50}
        />
        <span>{reviewText.length}/100</span>
      </div>
    )
  }

  const changeStep = (newStep) => {
    if (newStep === 2 && rating === 0) {
      showToast('Please select a rating first', 'warning')
      return
    }
    setStep(newStep)
  }

  return (
    <div className='review-container'>
      {email.id} {email.subject}
      {step === 1 && getRating()}
      {step === 2 && getReviewText()}
      <div>
        {step === 2 && <button onClick={() => changeStep(1)}>Previous</button>}
        {step === 1 && <button onClick={() => changeStep(2)}>Next</button>}
        {step === 2 && <button onClick={() => console.log('Submit')}>Submit</button>}
      </div>
    </div>
  )
}

export default Review
