/* eslint-disable react/prop-types */
const Header = ({ filter, setFilter }) => {
  return (
    <header>
      <h5>Filter By:</h5>
      <button
        className={`filterBtn ${filter === 'unread' ? 'active' : ''}`}
        onClick={() => setFilter('unread')}
      >
        Unread
      </button>
      <button
        className={`filterBtn ${filter === 'read' ? 'active' : ''}`}
        onClick={() => setFilter('read')}
      >
        Read
      </button>
      <button
        className={`filterBtn ${filter === 'favourites' ? 'active' : ''}`}
        onClick={() => setFilter('favourites')}
      >
        Favourites
      </button>
    </header>
  )
}

export default Header
