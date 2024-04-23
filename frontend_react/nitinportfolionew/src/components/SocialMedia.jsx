import React from "react";
import { BsTwitter, BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
const SocialMedia = () => {
	return (
		<div className="app__social">
			<div>
				{" "}
				<a href="https://twitter.com/nitinraina_?t=2owGD3HhRJUgvVjAvAvN7w&s=09">
					<FaXTwitter />
				</a>
			</div>
			<div>
				<a href="https://www.instagram.com/nitinraina_/">
					<BsInstagram />
				</a>
			</div>
			<div>
				<a href="https://www.linkedin.com/in/nitin-raina/">
					<BsLinkedin />
				</a>
			</div>
			<div>
				<a href="https://www.github.com/nitin3000ny">
					
					<BsGithub />
				</a>
			</div>
		</div>
	);
};

export default SocialMedia;
