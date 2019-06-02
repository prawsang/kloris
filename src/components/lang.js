import React from "react"
import th from "../assets/web/th.png"
import en from "../assets/web/en.png"
import Link from "gatsby-link"

class LanguageSelect extends React.Component {
  // state = {
  //   url: "",
  // }
  // componentDidMount() {
  //   const location = window.location.pathname.split("/")
  //   this.setState({ url: location[location.length - 1] })
  // }
  render() {
    const { defaultLangKey, currentLangKey, langs } = this.props
    // const { url } = this.state
    const altLangs = langs.filter(e => e !== defaultLangKey)
    return (
      <Link
        to={currentLangKey !== defaultLangKey ? "/" : `/${altLangs[0]}`}
        className="lang"
      >
        <img src={currentLangKey !== defaultLangKey ? en : th} alt="" />
      </Link>
    )
  }
}

export default LanguageSelect
