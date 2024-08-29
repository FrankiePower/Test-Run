import { ConnectButton } from '@rainbow-me/rainbowkit';

const Header = () => {
  return (
    <div className="h-20 px-6 flex items-center border-b justify-end">
      <ConnectButton />
    </div>
  );
};

export default Header;
