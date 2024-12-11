/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect } from 'react'
import useOnScreen from '../hooks/useOnScreen'
import Email from './Email'

const EmailList = ({ emails, hasMore, isLoading, loadMore, setSelected }) => {
  const { measureRef, isIntersecting, observer } = useOnScreen()

  useEffect(() => {
    if (isIntersecting && hasMore) {
      loadMore()
      observer.disconnect()
    }
  }, [isIntersecting, hasMore, loadMore])

  return (
    <ul>
      {emails.map((email, idx) => (
        <Email
          key={email.id + idx}
          setSelected={setSelected}
          measureRef={measureRef}
          email={email}
        />
      ))}
      {isLoading && <li>Loading...</li>}
    </ul>
  )
}

export default EmailList
