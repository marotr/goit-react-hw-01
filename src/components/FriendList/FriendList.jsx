
import FriendListItem from "./FriendListItem"
 import css from "./FriendList.module.css"

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