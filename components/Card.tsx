import missingImage from "../app/src/missing-profile-image.png";
import Image from "next/image";

type Player = {
  name: string;
  image: string;
  key: number;
};

const GameCard = (player: Player) => {
  return player?.image !== null ? (
    <div className="w-6 h-6 p-8 text-center">
      <Image src={player.image} alt={player.name} width={500} height={500} />
      <h2 className="text-white">{player.name}</h2>
    </div>
  ) : (
    <div className="w-16 h-8 text-center">
      <Image
        src={missingImage}
        alt="missing profile image"
        width={150}
        height={150}
      />
      <h2 className="text-white">{player.name}</h2>
    </div>
  );
};

export default GameCard;
