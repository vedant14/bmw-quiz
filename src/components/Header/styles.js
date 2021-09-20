import styled from "styled-components"
import { colors } from "../../styles/GlobalStyles"

export const Wrapper = styled.div`
	display: block;
	margin-top: 20px;
	margin-bottom: 20px;
	@media screen and (min-width: 768px) {
		margin-top: 10px;
		margin-bottom: 30px;
	}
	text-align: right;
	> ul {
		@media screen and (min-width: 768px) {
			display: inline-flex;
		}
		a > button {
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
		> a > img {
			max-width: 100%;
		}
	}
`
