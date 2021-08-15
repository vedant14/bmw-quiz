import React from "react"
import { Wrapper } from "./styles"

export function Header() {
	return (
		<Wrapper className="Container">
			<a
				class="twitter-share-button"
				href="https://twitter.com/intent/tweet?text=Check%20salaries%20at%20Unicorns&url=http://howmanybmws.com/"
				data-size="large"
				target="_blank"
				rel="noreferrer"
			>
				<button>Share with your friends</button>
			</a>
		</Wrapper>
	)
}
