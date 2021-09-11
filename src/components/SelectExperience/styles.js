import styled from "styled-components"
import { colors } from "../../styles/GlobalStyles"

export const Range = styled.div`
	margin: 20px auto 20px 0px;
	position: relative;
	width: 100%;
`

export const RangeIndicator = styled.p`
	position: absolute;
	bottom: 5%;
	z-index: -10;
	&#actual {
		top: -10%;
		background: ${colors.primary};
		color: ${colors.white};
		height: fit-content;
		padding: 20px;
		border-radius: 100px;
		line-height: 0px;
		left: calc(
			${props => props.inputExperience || `0`} -
				${props => props.inputExperienceMinus || `0`}
		);

		&:before {
			color: red;
		}

		display: ${props =>
			props.inputExperience === "0%" ? `none` : "inline-flex"};
	}
	&#min {
		left: -10px;
	}
	&#max {
		right: -10px;
	}
`
