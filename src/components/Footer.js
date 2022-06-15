import React from "react"
import TwitterIcon from "../images/twitter-icon.png"
import FbIcon from "../images/fb-icon.png"
import InstagramIcon from "../images/instagram-icon.png"
import LinkedInIcon from "../images/linkedin-icon.png"
import GithubIcon from "../images/github-icon.png"

export default function Footer() {
    return (
        <footer>
            <ul className="footer-list">
                <li>
                    <img src={TwitterIcon} alt="Twitter Icon" />
                </li>
                <li>
                    <img src={FbIcon} alt="Facebook Icon" />
                </li>
                <li>
                    <img src={InstagramIcon} alt="Instagram Icon" />
                </li>
                <li>
                    <img src={LinkedInIcon} alt="LinkedIn Icon" />
                </li>
                <li>
                    <img src={GithubIcon} alt="Github Icon" />
                </li>
            </ul>
        </footer>
    )
}