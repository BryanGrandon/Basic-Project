import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

const users = [
  {
    userName: "midudev",
    name: "Miguel Angel",
    isFollowing: true,
  },
  {
    userName: "mouredev",
    name: "Brais Moure",
    isFollowing: false,
  },
  {
    userName: "TMChein",
    name: "Tomas",
    isFollowing: false,
  },
];

export function App() {
  return (
    <>
      {users.map((user) => {
        const { userName, name, isFollowing } = user;
        return (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        );
      })}
    </>
  );
}
