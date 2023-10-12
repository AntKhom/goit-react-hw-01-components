export default function Profile ({ avatar, name, tag, location, stats }) {
  return <div className="profile">
    <h2>1 - Профиль социальной сети</h2>
    <div className="description">
      <img
        src={avatar}
        alt="User avatar"
        className="avatar"
      />
      <p className="name">{name}</p>
          <p className="tag">@{tag}</p>
      <p className="location">{location}</p>
    </div>

    <ul className="stats">
      <li>
        <span className="label">Followers</span>
        <span className="quantity">{stats.followers}</span>
      </li>
      <li>
        <span className="label">Views</span>
        <span className="quantity">{stats.views}</span>
      </li>
      <li>
        <span className="label">Likes</span>
              <span className="quantity">{stats.likes}</span>
      </li>
    </ul>
  </div>
}