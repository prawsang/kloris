import React from "react"
import Question from "./question"
import { FormattedMessage } from "react-intl"

const Shipping = () => {
  const generateQuestions = () => {
    let questions = []
    for (let i = 1; i <= 6; i++) {
      questions.push(
        <Question
          question={"shipping" + i}
          answer={"shipping" + i + "a"}
          key={i}
        />
      )
    }
    return questions
  }

  return (
    <div className="section">
      <h4 style={{ marginBottom: "1em" }}>
        <FormattedMessage id="shipping" />
      </h4>
      {generateQuestions()}
    </div>
  )
}

export default Shipping
