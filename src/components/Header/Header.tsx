import { AccountBadge } from "./AccountBadge/AccountBadge";

export const Header = () => {
  return (
    <div className="fixed top-0 flex h-20 w-full items-center justify-between border-b-2 border-secondary bg-background px-4">
      <img className="h-16 w-16" src="qrl-logo.svg" />
      <AccountBadge />
    </div>
  );
};
