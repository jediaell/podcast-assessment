import React from "react"
import { BsGithub, BsLinkedin } from "react-icons/bs"
import {
  FooterContainer,
  FooterTextContainer,
  FooterSocialContainer,
} from "./Footer.styles"

const Footer = () => {
  return (
    <FooterContainer>
      <FooterTextContainer>
        <p>All rights reserved &copy; {new Date().getFullYear()}</p>
        <p>
          Created by <strong>Jediael Fonseca</strong>
        </p>
      </FooterTextContainer>

      <FooterSocialContainer>
        <li>
          <a href="https://github.com/jediaell">
            <BsGithub size={30} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/jediaelfonseca/">
            <BsLinkedin size={30} />
          </a>
        </li>
      </FooterSocialContainer>
    </FooterContainer>
  )
}

export default Footer
