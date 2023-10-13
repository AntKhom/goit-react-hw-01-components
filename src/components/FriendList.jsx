export default function FriendList({ friends }) {
    return <div>
    <h2>3 - Список друзей</h2>
    <ul class="friend-list">
        {friends.map(friend => (<li key={friend.id} class="item">
            <span class="status">{(friend.isOnline)? "OK":"NO"}</span>
            <img class="avatar" src={friend.avatar} alt="User avatar" width="48" />
            <p class="name">{friend.name}</p>
        </li>))}
    </ul>
</div>
}