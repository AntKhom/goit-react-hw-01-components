import css from './friends.module.css'

export default function FriendList({ friends }) {
    return <div>
    <h2>3 - Список друзей</h2>
        <ul className={css.friendList}>
            {friends.map(friend => (<li key={friend.id} className={css.item}>
                <span className = {css.status}>{friend.isOnline}</span>
            <img className={css.avatar} src={friend.avatar} alt="User avatar" width="48" />
            <p className={css.name}>{friend.name}</p>
        </li>))}
    </ul>
</div>
}