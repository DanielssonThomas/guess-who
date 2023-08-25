interface GameGuessProps {
  guessText: string;
  guessDBname: string;
  guessed: boolean;
  answeredResult: boolean | null;
  setGuess: any;
  guessKey: number;
}

const GameGuess = ({
  guessText,
  guessDBname,
  guessed,
  answeredResult,
  setGuess,
  guessKey,
}: GameGuessProps) => {
  return guessed === true ? (
    <button
      className={`text-slate-400 py-2 px-4 rounded-md no-underline bg-btn-background border ${
        answeredResult ? "border-green-400" : "border-red-400"
      } `}
      key={guessKey}
    >
      {guessText}
    </button>
  ) : (
    <button
      className="text-white py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
      onClick={() => setGuess(guessDBname)}
      key={guessKey}
    >
      {guessText}
    </button>
  );
};

export default GameGuess;
