import React from "react"
import { Link } from "gatsby"
import * as headerStyles from "./Header.module.scss"

export default function Header() {
    return (
        <div>
            <h1 className={headerStyles.headerTitle}>I am header</h1>
            <h2 className={headerStyles.headerSubTitle}>I am another header</h2>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/blogs">Blog</Link>
            <Link to="/blogs">Blog</Link>
            <Link to="/doesntexist">Does not exist</Link>
        </div>
    )
}