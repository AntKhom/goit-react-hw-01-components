export default function FriendList({ friends }) {
    return <div>
    <h2>3 - Список друзей</h2>
    <ul className="friend-list">
        {friends.map(friend => (<li key={friend.id} className="item">
            <span className="status">{(friend.isOnline)? "OK":"NO"}</span>
            <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
            <p className="name">{friend.name}</p>
        </li>))}
    </ul>
</div>
}