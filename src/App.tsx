import React, { useState } from "react";
import Questions from "./Questions";
import data from "./data";

export type QuestionsType = {
  id: number;
  title: string;
  info: string;
};

export default function App() {
  const [questions, setQuestions] = useState<QuestionsType[]>(data);

  return (
    <main>
      <div className="container">
        <h3>Questions And Answers About Login</h3>
        <div className="info">
          {questions.map((question) => (
            <Questions
              key={question.id}
              title={question.title}
              info={question.info}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
