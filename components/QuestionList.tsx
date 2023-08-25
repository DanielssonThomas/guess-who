"use client";
import Question from "./Question";
import AllQuestions from "@/lib/AllQuestions";

const Questions = () => {
  return (
    <div className="bg-btn-background px-8">
      <div className="w-full h-8 flex justify-between items-center">
        <div></div>
        <div className="w-12 flex justify-center">
          <div>yes</div>
          <div className="pl-2">no</div>
        </div>
      </div>
      {AllQuestions.map((SingleQuestion) => (
        <Question
          dbName={SingleQuestion.dbName}
          questionText={SingleQuestion.questionText}
          key={SingleQuestion.key}
        />
      ))}
    </div>
  );
};

export default Questions;
