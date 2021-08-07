import React, { Component } from 'react';
import './Footer.css'
export class Footer extends React.Component {
	render(){
		return(
			<>
			<div className="footer-container" id="footer">
			<ul className="footer-social">
				<li>
				 <a href="https://stackoverflow.com/users/14457833/ankit-tiwari?tab=profile" className="footer-link" target="_blank" title="Stack Overflow">
				   <i className="fab fa-stack-overflow"></i>
				 </a>
				</li>

				<li>
				  <a href="https://github.com/ankit25821" className="footer-link" target="_blank" title="GitHub">
				    <i className="fab fa-github"></i>
				  </a>
				</li>

				<li>
				  <a href="https://www.reddit.com/user/ankit25821" className="footer-link" target="_blank" title="Reddit">
				   <i className="fab fa-reddit-alien"></i>
				  </a>
				</li>

				<li>
				  <a href="https://www.instagram.com/ankit_2582001/" className="footer-link" target="_blank" title="Instagram">
				   <i className="fab fa-instagram"></i>
				  </a>
				</li>

				<li>
				  <a href="https://www.linkedin.com/in/ankit-tiwari-5429b61b1/" className="footer-link" target="_blank" title="LinkedIn">
				    <i className="fab fa-linkedin-in"></i>
				  </a>
				</li>
				
				<li>
				  <a href="https://twitter.com/AnkitTi84236418" className="footer-link" target="_blank" title="Twitter">
				    <i className="fab fa-twitter"></i>
				  </a>
				</li>

			</ul>
			</div>
			</>
			)
	}
}