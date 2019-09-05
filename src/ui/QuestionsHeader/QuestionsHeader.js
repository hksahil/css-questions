import React, { useState } from "react";
import useWindowScroll from "@react-hook/window-scroll";
import "./QuestionsHeader.css";

const QuestionsHeader = ({ items, questions, isFixed, resetItems }) => {
  const scrollY = useWindowScroll(60);
  const scrollPoint = scrollY > 238;
  const fixedClass = isFixed && "question__header__fixed";
  const showFixed = isFixed && scrollPoint && "question__header__fixed--show";
  const hideNoneFixed = !isFixed && scrollPoint && "question__header--hide";

  return (
    <div
      className={`questions__header ${fixedClass} ${showFixed} ${hideNoneFixed}`}
    >
      <span>
        {!items ? 0 : items.length}/{questions.length}
      </span>
      <button className="questions__header__reset" onClick={resetItems}>
        Reset
      </button>
    </div>
  );
};

export default QuestionsHeader;
