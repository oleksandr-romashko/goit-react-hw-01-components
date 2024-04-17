#  goit-react-hw-01-components

Homework for Intro to React, React Components and React Components Styling topics.

## Live page

The live page for this repository can be viewed at [GitHub Pages](https://oleksandr-romashko.github.io/goit-react-hw-01-components/).

## Local build and run

  1. Make sure you have an LTS version of Node.js installed on your computer. [Download and install](https://nodejs.org/en/) if needed.
  1. Install the project's base dependencies with the `npm install` command.
  1. Start development mode by running the `npm start` command.
  2. Go to [localhost:3000](http://localhost:3000/) in your browser. This page will automatically reload after saving changes to the project files.

## Tasks Acceptance Criteria

[React project template](https://github.com/goitacademy/react-homework-template/blob/main/README.en.md) is used as a starting point for your application (more information about how to start-up with such a project may be found at the template repo description or [here in a Readme file](./README.en.md)).

  * The `goit-react-hw-01-components` repository is created.
  * The components of all the tasks are rendered on the same page, inside a common container - the `<App>` root component.
  * When you submit your homework, there should be a link to the repository with the project source code.
  * The repository header has a link to the live page on `GitHub pages`.
  * When visiting the work page (GitHub pages) of the assignment, there are no errors or warnings in the console.
  * Each component has a separate folder with a React component file and a styles file.
  * The `propTypes` are described for all components.
  * Everything that a component expects in the form of props is delivered to it when it is called.
  * The names of the components are clear and descriptive.
  * The JS code is clean and clear, using Prettier.
  * The styling is done by CSS modules or Styled Components, therefore the classes in the resulting DOM will be different from the examples.

## Task 1 - Social network profile

We need to create a `Profile` component with which we could display information about a social network user. The data about the user is in the file [user.json](./src/data/user.json).

<p align="center">
  <img width="480" src="./assets/tasks/social-profile.png" alt="component preview">
</p>

### Description of the Profile component

The component must accept several props with information about the user:

  * `username` — user name
  * `tag` — Social network tag without @
  * `location` — city and country
  * `avatar` — link to image
  * `stats` — object with information about activity

The component must create a DOM element of the following structure:

```html
<div class="profile">
  <div class="description">
    <img
      src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
      alt="User avatar"
      class="avatar"
    />
    <p class="name">Petra Marica</p>
    <p class="tag">@pmarica</p>
    <p class="location">Salvador, Brasil</p>
  </div>

  <ul class="stats">
    <li>
      <span class="label">Followers</span>
      <span class="quantity">1000</span>
    </li>
    <li>
      <span class="label">Views</span>
      <span class="quantity">2000</span>
    </li>
    <li>
      <span class="label">Likes</span>
      <span class="quantity">3000</span>
    </li>
  </ul>
</div>
```

### Example of usage

```jsx
import user from 'path/to/user.json;

<Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
```

## Task 2 - Statistics Section

Create a component `Statistics`, which would display statistics on the transferred props. For example, uploads to the cloud by file type, webpage visits by users from different countries, financial expenses, etc. The data about statistics is stored in the [data.json](./src/data/data.json) file.

<p align="center">
  <img width="480" src="./assets/tasks/statistics.jpg" alt="component preview">
</p>

### Description of the `Statistics` component

The component must accept two props `title` and `stats`, in which the header and the statistics object are specified.

  * `title` - is optional, and if it is not provided, the `<h2>` header markup should not be rendered.
  * `stats` - An array of objects containing information about a statistical item. It can have any number of elements.
  * You can skip the background color of the statistical item in the design, or create a function to generate a random color.

The component must create a DOM element of the following structure:

```html
<section class="statistics">
  <h2 class="title">Upload stats</h2>

  <ul class="stat-list">
    <li class="item">
      <span class="label">.docx</span>
      <span class="percentage">4%</span>
    </li>
    <li class="item">
      <span class="label">.mp3</span>
      <span class="percentage">14%</span>
    </li>
    <li class="item">
      <span class="label">.pdf</span>
      <span class="percentage">41%</span>
    </li>
    <li class="item">
      <span class="label">.mp4</span>
      <span class="percentage">12%</span>
    </li>
  </ul>
</section>
```

### Example of usage

```jsx
import data from '/path/to/data.json';

<Statistics title="Upload stats" stats={data} />
<Statistics stats={data} />
```

## Task 3 - Friends list

We need to create a component `FriendList` with which we could display information about the user's friends. The information about friends is stored in the file [friends.json](./src/data/friends.json).

<p align="center">
  <img width="320" src="./assets/tasks/friend-list.jpg" alt="component preview">
</p>

### Description of the `FriendList` component

The component must accept one prop `friends` (an array of friend objects).

The component must create a DOM of the following structure.

```html
<ul class="friend-list">
  <!-- Any number of FriendListItem -->
</ul>
```

### Description of the `FriendListItem` component

The component must take several props:

  * `avatar` - link to the avatar
  * `name` - friend's name
  * `isOnline` - boolean indicating the status of a friend, online or offline.

Depending on the props `isOnline`, the background color `span.status` should change. This can be done through a different CSS class or Styled Components.

The component must create a DOM of the following structure.

```html
<li class="item">
  <span class="status"></span>
  <img class="avatar" src="" alt="User avatar" width="48" />
  <p class="name"></p>
</li>
```

### Example of usage

```jsx
import friends from 'path/to/friends.json';

<FriendList friends={friends} />;
```

## Task 4 - Transaction History

A component of the transaction history must be created in the personal profile of the Internet Bank.

<p align="center">
  <img src="./assets/tasks/transactions.jpg" alt="component preview">
</p>

Data for the list is available in JSON format in the file [transactions.json](./src/data/transactions.json). This is an array of objects where each object describes a single transaction with the following properties:

  * `id` — unique transaction identifier
  * `type` — transaction type
  * `amount` - transaction amount
  * `currency` - currency type

### Description of the `TransactionHistory` component

We need to create a component `TransactionHistory` that accepts one prop `items` (an array of transaction objects from `transactions.json`). The component creates a table layout. Each transaction is a table row. The example shows the markup of two transactions.

```html
<table class="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Invoice</td>
      <td>125</td>
      <td>USD</td>
    </tr>
    <tr>
      <td>Withdrawal</td>
      <td>85</td>
      <td>USD</td>
    </tr>
  </tbody>
</table>
```

### Example of usage

```jsx
import transactions from 'path/to/transactions.json';

<TransactionHistory items={transactions} />;
```