import React from "react"
import th from "../assets/web/th.png"
import en from "../assets/web/en.png"
import Link from "gatsby-link"

const LanguageSelect = ({ langs, currentLangKey, defaultLangKey }) => {
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

export default LanguageSelect
