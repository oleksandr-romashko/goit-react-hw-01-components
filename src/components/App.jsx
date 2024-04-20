import {
  Profile,
  Statistics,
  FriendList
} from "components";

import css from "./App.module.css";

import user from "data/user.json";
import data from "data/data.json";
import friends from "data/friends.json";

export const App = () => {
  return (
    <div className={css.app}>
      Task 1 - Profile
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      Task 2 - Statistics
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      Task 3 - FriendList
      <FriendList friends={friends} />
      Task 4 - Transaction History
    </div>
  );
};
