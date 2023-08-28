import Image from "next/image";
import Link from "next/link";
import missingImage from "../app/src/missing-profile-image.png";

interface GameFinishedProps {
  first_name: string | null;
  last_name: string | null;
  user_imageUrl: string | null;
  guessCount: number;
  victory: boolean;
}

const GameFinished = ({
  first_name,
  last_name,
  user_imageUrl,
  guessCount,
  victory,
}: GameFinishedProps) => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-slate-800 text-white">
      <div className="w-2/5 h-full my-10 bg-slate-700 flex justify-around items-center flex-col rounded">
        <h2 className="w-full flex justify-center text-7xl">
          {victory ? "You guessed it!" : "Defeat"}
        </h2>
        <div className="text-center">
          {user_imageUrl === null ? (
            <Image
              src={missingImage}
              alt={`${first_name + " " + last_name}\'s image`}
              width={300}
              height={300}
            />
          ) : (
            <Image
              src={user_imageUrl}
              alt={`${first_name + " " + last_name}\'s image`}
              width={300}
              height={300}
            />
          )}
          <h3 className="text-4xl">
            {first_name} {last_name}
          </h3>
        </div>
        <h3>You guessed after {guessCount} questions!</h3>
        <a href="/game" className="bg-green-700 rounded px-4 py-2 mb-2">
          Play again
        </a>
      </div>
    </div>
  );
};

export default GameFinished;
