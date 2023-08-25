interface GuessPopUpProps {
  answerTrueFalse: boolean;
  isShowing: boolean;
}

const GuessPopUp = ({ answerTrueFalse, isShowing }: GuessPopUpProps) => {
  return (
    <div
      className={`absolute w-full h-full z-20 ${
        isShowing ? "visible" : "invisible"
      }`}
    >
      <div className="absolute w-full h-full z-10 bg-black opacity-25"></div>
      <div className="absolute top-40 left-40 w-60 h-30 bg-slate-200">
        <h2>Answer:</h2>
        <h3
          className={`${answerTrueFalse ? "text-green-600" : "text-red-600"}`}
        >
          {answerTrueFalse ? "Yes!" : "No!"}
        </h3>
      </div>
    </div>
  );
};

export default GuessPopUp;
