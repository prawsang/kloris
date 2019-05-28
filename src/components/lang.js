import React from "react"
import th from "../assets/web/th.png"
import Link from "gatsby-link"

const LanguageSelect = ({ langs, currentLangKey, defaultLangKey }) => {
  const altLangs = langs.filter(e => e !== defaultLangKey)
  return (
    <Link to={currentLangKey !== defaultLangKey ? "/" : `/${altLangs[0]}`}>
      <img src={th} alt="" className="lang" />
    </Link>
  )
}

export default LanguageSelect
