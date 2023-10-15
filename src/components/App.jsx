import Profile from "./user/Profile";
import user from "./user/user.json";

import { Statistics } from "./statistics/Statistics";
import data from './statistics/data.json';

import FriendList from "./friends/FriendList";
import friends from './friends/friends.json';

import TransactionHistory from "./transaction/TransactionHistory";
import transactions from './transaction/transactions.json';

export const App = () => {
  return (
    <div>
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
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      {/* task-3 */}
      <FriendList friends={friends} />;
      {/* task-4 */}
      <TransactionHistory items={transactions} />;
    </div>
  );
};
