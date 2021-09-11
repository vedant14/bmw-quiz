import styled from "styled-components"
import { colors } from "../../styles/GlobalStyles"

export const Wrapper = styled.div`
	@media screen and (min-width: 768px) {
		margin-top: 30px;
	}
	> div {
		@media screen and (min-width: 1350px) {
			display: flex;
			align-items: center;
			justify-content: flex-start;
			> h3 {
				margin-right: 30px;
			}
		}
	}
	.select__placeholder {
		color: ${colors.washedBlack} !important;
		font-size: 20px;
	}
	.select__option--is-selected {
		color: ${colors.white} !important;
		background: ${colors.primary};
	}
	.select__option--is-focused {
		transition: 0.1s;
		background: rgba(45, 156, 219, 0.4);
	}
	.select__single-value {
		color: ${colors.primary};
		font-size: 20px;
	}
	.select__control {
		background: ${colors.white};
	}
	.select-dropdown {
		width: 350px;
		max-width: 100%;
	}
`
