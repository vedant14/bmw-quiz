import React from "react"
import { LayoutWrapper } from "./styles"
import { GlobalStyles } from "../../styles/GlobalStyles"
import Helmet from "react-helmet"
export function Layout({ children }) {
	return (
		<LayoutWrapper>
			<Helmet>
				<script
					data-name="BMC-Widget"
					data-cfasync="false"
					src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
					data-id="vedantlohbare"
					data-description="Support me on Buy me a coffee!"
					data-message=""
					data-color="#5F7FFF"
					data-position="Right"
					data-x_margin="18"
					data-y_margin="18"
				></script>
			</Helmet>
			<GlobalStyles />
			<div className="Container">
				<main>{children}</main>
			</div>
		</LayoutWrapper>
	)
}
