import clsx from 'clsx';
 import css from "./FriendList.module.css"
const FriendListItem = ({ avatar, isOnline }) => {
    return (
      <li className={css.FriendListItem}>
  <img src={avatar} alt="Avatar" width="48" />
            <p className={clsx(css.status, { [css.online]: isOnline, [css.offline]: !isOnline })}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
            
</li>

    )
}
export default FriendListItem