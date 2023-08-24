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
        <input type="radio" name={dbName} value="yes" required />
        <input type="radio" name={dbName} value="no" />
      </div>
    </div>
  );
};

export default Question;
