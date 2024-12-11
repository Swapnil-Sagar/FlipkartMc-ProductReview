/* eslint-disable react/prop-types */
const Email = ({ measureRef, email, setSelected }) => {
  return (
    <li onClick={() => setSelected(email)} ref={measureRef} className='email-item'>
      <h3>
        {email.id} {email.subject}
      </h3>
      <p>{email.short_description}</p>
    </li>
  )
}

export default Email
