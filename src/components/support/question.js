import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons"
import { FormattedMessage } from "react-intl"

class Question extends React.Component {
  state = {
    collasped: true,
  }
  render() {
    const { question, answer, children } = this.props
    const { collasped } = this.state
    return (
      <div>
        <div
          className="is-flex is-jc-space-between hoverable"
          onClick={() => this.setState({ collasped: !collasped })}
          style={{ cursor: "pointer" }}
        >
          <p className="no-mb">
            <b>
              <FormattedMessage id={question} />
            </b>
          </p>
          {collasped ? (
            <FontAwesomeIcon icon={faChevronDown} />
          ) : (
            <FontAwesomeIcon icon={faChevronUp} />
          )}
        </div>
        <div
          style={{ marginTop: "1em", marginBottom: "1em" }}
          className={collasped ? "is-hidden" : ""}
        >
          {answer && (
            <p>
              <FormattedMessage id={answer} />
            </p>
          )}
          {children}
        </div>
        <hr style={{ marginTop: 20, marginBottom: 20 }} />
      </div>
    )
  }
}

export default Question
