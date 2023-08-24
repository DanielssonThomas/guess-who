interface QuestionProps {
  dbName: string;
  questionText: string;
  key: number;
}

const Question = ({ dbName, questionText, key }: QuestionProps) => {
  return (
    <div className="w-full h-16 flex justify-between items-center">
      <label htmlFor={dbName}>{questionText}</label>
      <div className="w-10 flex justify-between">
        <input
          type="radio"
          name={dbName}
          value="yes"
          className="cursor-pointer"
          required
        />
        <input
          type="radio"
          name={dbName}
          value="no"
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Question;
