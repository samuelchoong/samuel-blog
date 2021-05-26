import React from "react"
import ThemeProvider,{useTheme} from "./ThemeProvider"
import "bulma/css/bulma.min.css"
import "../styles/global.scss"
import "react-toggle/style.css"
import "prismjs/themes/prism-solarizedlight.css"
import {library,config} from "@fortawesome/fontawesome-svg-core"
import {faSun,faMoon} from "@fortawesome/free-solid-svg-icons"
import "@fortawesome/fontawesome-svg-core/styles.css"

config.autoAddCss=false
library.add(faSun,faMoon)

const MainWrapper = ({children}) => {
    const {theme} = useTheme()
    return  (
        <>
            <div className={`main-wrapper ${theme.type}`}>
                {children}
            </div>
            <style>
                {`
                    html, body{
                        background: ${theme.background};
                        color: ${theme.fontColor};
                        transition: color 0.2s ease-out 0s, background 0.2s ease-out 0s;
                    }
                `}
            </style>
        </>
    )
}

export default function RootLayout({children}) {
    return (
        <ThemeProvider>
            <MainWrapper>
                {children}
            </MainWrapper>
        </ThemeProvider>
    )
}