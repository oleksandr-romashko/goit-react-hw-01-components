import {
  Section,
  Profile,
  Statistics,
  FriendList,
  TransactionHistory
} from "components";

import css from "./App.module.css";

import user from "data/user.json";
import data from "data/data.json";
import friends from "data/friends.json";
import transactions from "data/transactions.json";

export const App = () => {
  return (
    <div className={css.app}>
      <Section name="user" title="Task 1 - Profile">
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section>
      <Section name="statistics" title="Task 2 - Statistics">
        <Statistics title="Upload stats" stats={data} />
        <Statistics stats={data} />
      </Section>
      <Section name="friends" title="Task 3 - FriendList">
        <FriendList friends={friends} />
      </Section>
      <Section name="transactions" title="Task 4 - Transaction History">
        <TransactionHistory items={transactions} />
      </Section>
    </div>
  );
};
