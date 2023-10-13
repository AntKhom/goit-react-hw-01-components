import Profile from "./Profile";
import user from "./user.json";

// import { Statistics } from "./Statistics";
// import data from './data.json';

import FriendList from "./FriendList";
import friends from './friends.json';

export const App = () => {
  return (
    <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}
    >
      {/* React homework template */}
      {/* task-1 */}
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}  
      />
      {/* task-2 */}
      {/* <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} /> */}
      {/* task-3 */}
      <FriendList friends={friends} />;
      {/* task-4 */}
    </div>
  );
};
