import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { images } from "../../constants";
import { urlFor, client } from "../../client";
import "./About.scss";
import { AppWrap } from "../../wrapper";
const About = () => {
	const [abouts, setAbouts] = useState([]);

	useEffect(() => {
		const query = '*[_type == "abouts"]';

		client.fetch(query).then((data) => {
			//   console.log(data)
			return setAbouts(data);
		});
	}, []);
	return (
		<>
			<h2 className="head-text" style={{ marginTop: "25px" }}>
				I Am A <span>Web Devloper </span> <br />
				with<span> Good Design Skills</span>
			</h2>
			<div className="app__profiles">
				{abouts.map((about, index) => (
					<motion.div
						whileInView={{ opacity: 1 }}
						whileHover={{ scale: 1.1 }}
						transition={{ duration: 0.5, type: "tween" }}
						className="app__profile-item"
						key={about.title + index}
					>
						<img src={urlFor(about.imgUrl)} alt={about.title} />
						<h2 className="bold-text" style={{ marginTop: "20px" }}>
							{about.title}
						</h2>
						<p className="p-text" style={{ marginTop: "20px" }}>
							{about.description}
						</p>
					</motion.div>
				))}
			</div>
		</>
	);
};

export default AppWrap(About, "about");
