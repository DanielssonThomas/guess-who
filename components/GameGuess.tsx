interface GameGuessProps {
  guessText: string;
  guessDBname: string;
  guessed: boolean;
  setGuess: any;
  key: number;
}

const GameGuess = ({
  guessText,
  guessDBname,
  guessed,
  setGuess,
  key,
}: GameGuessProps) => {
  return guessed ? (
    <button className="w-8 h-4 bg-slate-900 rounded text-white border border-white">
      {guessText}
    </button>
  ) : (
    <button
      className="text-white py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
      onClick={() => setGuess(guessDBname)}
    >
      {guessText}
    </button>
  );
};

export default GameGuess;
