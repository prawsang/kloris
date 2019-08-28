import React from "react"
import { FormattedMessage, injectIntl, intlShape } from "react-intl"

import Line from "../support/contact";

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

class Contact extends React.Component {
  state = {
    name: "",
    email: "",
    phone: "",
    message: "",
    error: false,
    bot:""
  }
  handleSubmit = e => {
      e.preventDefault();
      const { name, email, phone, message} = this.state;
      if ( name === "" || email === "" || phone === "" || message === "") {
        this.setState({ error: true })
      } else {
        this.setState({ error: false })
        // Make request
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "contact", ...this.state })
        })
          .then(() => console.log("Success!"))
          .catch(error => console.log(error));
      }
  }
  getPlaceholder = id => {
    const { intl } = this.props;
    return intl.formatMessage({ id })
  }
  render() {
    const {
      name,
      email,
      phone,
      message,
      error,
  } = this.state;
  return (
    <section className="section content narrow container">
      <h2 className="center">
        <FormattedMessage id="contactUs" />
      </h2>
      <div className="center">
        <p className="larger" style={{ marginBottom: 16 }}><FormattedMessage id="lineId"/>: <b>@kloris</b></p>
        <Line />
      </div>
      <div className="text-divider">Or</div>
      <p className="center bold larger">Use our form</p>
      <form 
        name="contact" 
        onSubmit={this.handleSubmit} 
        className="is-relative" 
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        action="/"
      >
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out: <input name="bot-field" onChange={e => this.setState({ bot: e.target.value})} />
            </label>
          </p>
          <InputField 
            value={name} 
            onChange={e => this.setState({ name: e.target.value })} 
            label="name" 
            name="name" 
            placeholder={this.getPlaceholder("name")} 
            danger={error&&name===""}
          />
          <InputField 
            value={email} 
            onChange={e => this.setState({ email: e.target.value })} 
            label="email" 
            name="email" 
            type="email"
            placeholder={this.getPlaceholder("email")} 
            danger={error&&email===""}
          />
          <InputField 
            value={phone} 
            onChange={e => this.setState({ phone: e.target.value })} 
            label="phone" 
            name="phone" 
            placeholder={this.getPlaceholder("phone")} 
            danger={error&&phone===""}
          />
          <Textarea 
            value={message} 
            onChange={e => this.setState({ message: e.target.value })} 
            label="message" 
            name="message" 
            placeholder={this.getPlaceholder("message")} 
            danger={error&&message===""}
          />
          <p className={ `${error ? "" : "is-hidden"} bold danger`}><FormattedMessage id="required" /></p>
          <div className="center">
              <button type="submit"><FormattedMessage id="send"/></button>
          </div>
      </form>
    </section>
  )
  }
}

Contact.propTypes = {
  intl: intlShape.isRequired
}

export default injectIntl(Contact)

const InputField = ({ value, onChange, label, placeholder, type, name, className, danger }) => (
  <div className={`field ${className}`}>
      <label className={`label ${danger ? "danger bold" : ""}`}><FormattedMessage id={label} /></label>
      <input
          className={`input ${danger ? "danger" : ""}`}
          type={type ? type : "text"}
          placeholder={placeholder ? placeholder : label}
          onChange={onChange}
          value={value}
          name={name}
      />
  </div>
)

const Textarea = ({ value, onChange, label, placeholder, type, name, className, danger }) => (
  <div className={`field ${className}`}>
      <label className={`label ${danger ? "danger bold" : ""}`}><FormattedMessage id={label} /></label>
      <textarea
          className={`input textarea ${danger ? "danger" : ""}`}
          type={type}
          placeholder={placeholder ? placeholder : label}
          onChange={onChange}
          value={value}
          name={name}
      />
  </div>
)