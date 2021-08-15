import React from "react"
import { FooterWrapper } from "./styles"
// import Twitter from "../../images/social/twitter_icon.png"

export function Footer() {
	return (
		<FooterWrapper id="Footer" className="Container">
			<div>
				<small>
					This was inspired by{" "}
					<a
						href="https://www.linkedin.com/posts/ashneer_bharatpe-bmw-bmwbharatpe-activity-6826414398748278784-Py1l"
						target="_blank"
						rel="noreferrer"
					>
						this post
					</a>{" "}
					by the CEO of BharatPe. The salary numbers and bike prices depend on
					multiple factors and probably do not represent accurate numbers.
				</small>
			</div>
			<div>
				<small>
					Created by{" "}
					<a
						href="https://twitter.com/VedantLohbare"
						target="_blank"
						rel="noreferrer"
					>
						Vedant
					</a>{" "}
					|{" "}
					<a
						href="https://www.buymeacoffee.com/vedantlohbare"
						target="_blank"
						rel="noreferrer"
					>
						Buy me a book?
					</a>
				</small>
			</div>
		</FooterWrapper>
	)
}
