import React from "react"
import { Wrapper } from "./styles"

export function Header() {
	return (
		<Wrapper className="Container">
			<ul>
				<a
					className="ph-share-button"
					href="https://www.producthunt.com/posts/how-many-bmws?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-how-many-bmws"
					target="_blank"
				>
					<img
						src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=313125&theme=light"
						alt="How many BMWs? - How many BMW bikes can you earn working in tech in India? | Product Hunt"
					/>
				</a>
				<a
					className="twitter-share-button"
					href="https://twitter.com/intent/tweet?text=Check%20salaries%20at%20Unicorns&url=http://howmanyBMWs.com/"
					data-size="large"
					target="_blank"
					rel="noreferrer"
				>
					<button>Share with your friends</button>
				</a>
			</ul>
		</Wrapper>
	)
}
