export default function Profile ({ avatar, name, tag, location, stats }) {
  return <div class="profile">
    <h2>1 - Профиль социальной сети</h2>
    <div class="description">
      <img
        src={avatar}
        alt="User avatar"
        class="avatar"
      />
      <p class="name">{name}</p>
          <p class="tag">@{tag}</p>
      <p class="location">{location}</p>
    </div>

    <ul class="stats">
      <li>
        <span class="label">Followers</span>
        <span class="quantity">{stats.followers}</span>
      </li>
      <li>
        <span class="label">Views</span>
        <span class="quantity">{stats.views}</span>
      </li>
      <li>
        <span class="label">Likes</span>
              <span class="quantity">{stats.likes}</span>
      </li>
    </ul>
  </div>
}