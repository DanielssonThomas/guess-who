import missingImage from "../app/src/missing-profile-image.png";
import Image from "next/image";
import clsx from "clsx";

interface GameCardProps {
  name: string | null;
  image: string | null;
  key: string;
  twStyle: string;
}
const GameCard = ({ name, image, key, twStyle }: GameCardProps) => {
  return image !== null ? (
    <div
      className={clsx(
        "h-[100px] text-center flex flex-col items-center justify-center cursor-pointer",
        twStyle
      )}
      key={key}
    >
      <Image src={image} alt="missing profile image" width={90} height={90} />
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
        width={90}
        height={90}
      />
      <h2 className="text-white">{name}</h2>
    </div>
  );
};

export default GameCard;
