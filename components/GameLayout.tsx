import Card from "./Card";

type Player = {
  name: string;
  image: string;
  id: number;
};

interface GameLayoutProps {
  players: Player[];
}

const Layout: React.FC<GameLayoutProps> = ({ players }) => {
  return (
    <div className="flex">
      {players.map((player) => (
        <Card name={player.name} image={player.image} key={player.id} />
      ))}
    </div>
  );
};

export default Layout;
