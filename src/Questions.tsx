import { FC, useState } from "react";
import { QuestionsType } from "./App";

const Questions: FC<Omit<QuestionsType, "id">> = (props) => {
  const [show, setShow] = useState(false);

  return (
    <article className="question">
      <header>
        <h4>{props.title}</h4>
        <button type="button" className="btn" onClick={() => setShow(!show)}>
          {show ? "-" : "+"}
        </button>
      </header>
      <p>{show ? props.info : ""}</p>
    </article>
  );
};

export default Questions;
