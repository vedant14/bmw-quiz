import styled from "styled-components"

export const ImageWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-gap: 10px;
	@media screen and (min-width: 768px) {
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
		grid-gap: 30px;
	}
	> img {
		max-width: 100%;
	}
`
