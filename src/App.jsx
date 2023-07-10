import Header from './components/Header'
import FollowCard from './components/FollowCard'


const users = [
  {
    id: '6e432e18-0ec8-11ee-be56-0242ac120002',
    userName: 'freeCodeCamp',
    name: 'freeCodeCamp.org',
    isFollowing: false,
  },
  {
    id: '6e433110-0ec8-11ee-be56-0242ac120002',
    userName: 'reactjs',
    name: 'React',
    bio: 'The library of web and native user interfaces',
    isFollowing: true
  },
  {
    id: '6e433692-0ec8-11ee-be56-0242ac120002',
    userName: 'elonmusk',
    name: 'Elon Musk',
    isFollowing: false
  },
  {
    id: 'b5282b44-0ec8-11ee-be56-0242ac120002',
    userName: 'dci_education',
    name: 'DCI Digital Career Institute',
    bio: 'LEARN FOR A NEW LIFE 💙',
    isFollowing: true
  }
]



function App() {


  return (
    <div className="App">
    <Header />
      {
        users.map(({id, userName, name, isFollowing, bio }) => (
          <FollowCard
            key={id}
            userName={userName}
            name={name}
            initialIsFollowing={isFollowing}
            bio={bio}
          />
        ))
      }
  </div>
  )
}

export default App
