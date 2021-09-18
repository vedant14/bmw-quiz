import styled from "styled-components"
import { colors } from "../../styles/GlobalStyles"

export const Wrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    border: ${props =>
      props.value === true ? `1px dashed ${colors.primary}` : `none`};
    grid-template-areas:
      "header header "
      "role company";
  }

  padding: 20px 10px 40px 10px;
  position: relative;
  &:before {
    @media screen and (min-width: 768px) {
      content: "take a screenshot to share";
      position: absolute;
      top: 102%;
      left: 80%;
      display: ${props => (props.value === true ? `block` : `none`)};
    }
  }

  > div:first-child {
    grid-area: header;
  }
  > div:nth-child(2) {
    grid-area: role;
  }
  > div:last-child {
    grid-area: company;
  }
`
