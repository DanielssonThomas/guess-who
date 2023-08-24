import missingImage from "../app/src/missing-profile-image.png";
import Image from "next/image";
import clsx from "clsx";

interface GameCardProps {
  name: string;
  image: string;
  key: number;
  twStyle: string;
}
const GameCard = ({ name, image, key, twStyle }: GameCardProps) => {
  return image !== null ? (
    <div className="w-6 h-6 p-8 text-center cursor-pointer" key={key}>
      <Image src={image} alt={name} width={500} height={500} />
      <h2 className="text-white">{name}</h2>
    </div>
  ) : (
    <div
      className={clsx(
        "h-[100px] text-center flex flex-col items-center justify-center cursor-pointer",
        twStyle
      )}
      key={key}
    >
      <Image
        src={missingImage}
        alt="missing profile image"
        width={80}
        height={80}
      />
      <h2 className="text-white">{name}</h2>
    </div>
  );
};

export default GameCard;
