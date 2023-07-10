import { useState } from "react"
import Badge from '../assets/badge.png'
import './FollowCard.scss'
import '../App.scss'

const FollowCard = ({ userName, name, bio, initialIsFollowing }) => {

  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
  const [isHoveredBg, setIsHoveredBg] = useState(false)



  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

  const changeBg = () => {
      setIsHoveredBg(!isHoveredBg)
  }


  return (
    <article className={`FollowCard ${isHoveredBg && 'addHoverBg'}`}
              onMouseEnter={changeBg}
              onMouseLeave={changeBg}
    >
      <header className='cardHeader'>
        <img
          className='avatar'
          alt='avatar'
          src={`https://unavatar.io/twitter/${userName}`} />
        <div className="cardInfo">
          <strong>{name}<img className='verifiedBadge' src={Badge} alt='badge' /></strong>
          <span className="userName">@{userName}</span>
          {bio && <span>{bio}</span>}
        </div>
      </header>

      <aside>
        {isFollowing ?
          (<button className={`followBtn ${isFollowing && 'unfollow'} ${isFollowing ? 'stopFollowing' : ''} `}
            onClick={handleClick}
          >
            Unfollow
          </button>) :    
        
            (<button className={`followBtn ${isFollowing && 'unfollow'} ${isFollowing ? 'stopFollowing' : ''} `}
              onClick={handleClick}
            >
              {isFollowing ? 'Following' : 'Follow'}
            </button>)
        }
      </aside>
    </article>
  )
}

export default FollowCard