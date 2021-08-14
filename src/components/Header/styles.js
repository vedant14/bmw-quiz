import styled from "styled-components"
import { colors } from "../../styles/GlobalStyles"

export const Wrapper = styled.div`
	display: block;
	margin-top: 30px;
	text-align: right;
	> a > button {
		border: 1px solid ${colors.primaryBlack};
		color: ${colors.primaryBlack};
		font-weight: 300;
		font-size: 16px;
		line-height: 16px;
		@media screen and (min-width: 768px) {
			font-size: 18px;
			line-height: 22px;
		}
		&:hover {
			background: ${colors.primary};
			border: 1px solid ${colors.white};
			color: ${colors.white};
		}
	}
`
