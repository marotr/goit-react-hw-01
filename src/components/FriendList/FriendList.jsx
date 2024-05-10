
import clsx from 'clsx';
 import css from "./FriendList.module.css"
const FriendListItem = ({ avatar, isOnline}) => {
    return (
      <li className={css.FriendListItem}>
  <img src={avatar} alt="Avatar" width="48" />
            <p className={clsx(css.status, { [css.online]: isOnline, [css.offline]: !isOnline })}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
            
</li>

    )
}
const FriendList = ({friends}) => {
  return (
      <div >
          <ul className={css.friendsContainer}>
	
              {friends.map(friend => (
                  <FriendListItem
                      key={friend.id}
                      avatar={friend.avatar}
                      name={friend.name}
                      isOnline={friend.isOnline}
                      id = {friend.id}
                      
                />))
    }
		
	
</ul>

    </div>
  )
}

export default FriendList