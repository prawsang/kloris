import React from "react"
import th from "../assets/web/th.png"
import en from "../assets/web/en.png"
import Link from "gatsby-link"

const LanguageSelect = ({ langs, currentLangKey, defaultLangKey }) => {
  const altLangs = langs.filter(e => e !== defaultLangKey)
  const location = window.location.pathname.split("/")
  const url = location[location.length - 1]
  console.log(url)
  return (
    <Link
      to={
        currentLangKey !== defaultLangKey ? `/${url}` : `/${altLangs[0]}/${url}`
      }
      className="lang"
    >
      <img src={currentLangKey !== defaultLangKey ? en : th} alt="" />
    </Link>
  )
}

export default LanguageSelect
