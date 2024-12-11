/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from 'react'
import Header from '../components/Header'
import EmailList from '../components/EmailList'
import Review from '../components/Review'

const Home = () => {
  const [filter, setFilter] = useState('')
  const [emails, setEmails] = useState([])
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    console.log(page)
    const fetchEmails = async () => {
      if (isLoading) return
      setIsLoading(true)

      const response = await fetch(`https://flipkart-email-mock.now.sh/?page=${page}`)
      const data = await response.json()

      console.log(data)

      setEmails((emails) => [...emails, ...data.list])
      setHasMore(data.list.length > 5)
      setIsLoading(false)
    }

    if (hasMore) fetchEmails()
  }, [page])

  const loadMore = useCallback(() => {
    if (!isLoading && hasMore) {
      setPage((prevPage) => prevPage + 1)
    }
  }, [])

  return (
    <>
      <Header filter={filter} setFilter={setFilter} />
      {emails.length > 0 && (
        <div className='main-container'>
          <EmailList
            hasMore={hasMore}
            isLoading={isLoading}
            setSelected={setSelected}
            loadMore={loadMore}
            emails={emails}
          />
          {selected && <Review email={selected} />}
        </div>
      )}
    </>
  )
}

export default Home
