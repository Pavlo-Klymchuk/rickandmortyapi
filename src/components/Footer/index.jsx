import React from 'react'
import './styles.scss'
import gitlabIcon from '../../images/gitlab-icon.png'
import githubIcon from '../../images/github-icon.png'
import linkedinIcon from '../../images/linkedin-icon.png'

const Footer = () => {
   return (
      <div className="footer">
         <ul className="footer-list">
            <li>
               <a
                  className='footer-list-item'
                  href="https://github.com/Pavlo-Klymchuk"
                  target="_blank"
                  rel="noreferrer"
               >
                  <img src={githubIcon} alt='githubIcon' className='footer-list-img' />
               </a>
            </li>
            <li>
               <a
                  className='footer-list-item'
                  href="https://gitlab.com/pavlo95klymchuk"
                  target="_blank"
                  rel="noreferrer"
               >
                  <img src={gitlabIcon} alt='gitlabIcon' className='footer-list-img' />
               </a>
            </li>
            <li>
               <a
                  className='footer-list-item'
                  href="https://www.linkedin.com/in/pavlo-klymchuk-3329b1225/"
                  target="_blank"
                  rel="noreferrer"
               >
                  <img src={linkedinIcon} alt='linkedinIcon' className='footer-list-img' />
               </a>
            </li>
         </ul>
         <a
            className='footer-list-item'
            href="https://rickandmortyapi.com/"
            target="_blank"
            rel="noreferrer"
         >
            Rick and Morty API
         </a>
      </div>
   )
}

export default Footer