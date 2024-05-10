
// import clsx from "clsx";
// import css from "./FriendList.module.css"
const FriendListItem = ({ avatar, name, isOnline}) => {
    return (
      <div>
  <img src={avatar} alt="Avatar" width="48" />
            <p >{name }</p>
            {isOnline ? <p>Online</p> : <p>Offline</p>}
            
</div>

    )
}
const FriendList = ({friends}) => {
  return (
      <div >
          <ul>
	
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