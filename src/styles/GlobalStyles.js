import { createGlobalStyle } from "styled-components"

export const colors = {
  primaryBlack: "#000000",
  washedBlack: "#4A4A4A",
  primary: "#2D9CDB",
  white: "#FFF2F2",
}

export const GlobalStyles = createGlobalStyle`
  :root {
    --site-max-width: 1200px;
  }


  body {
    background-color: ${colors.white}; 
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
  }

  main {
    margin-right: auto;
    margin-left: auto;
    min-height: 80vh;
  }


  h1{    
    font-style: normal;
    font-weight: normal;
    font-size: 26px;
    line-height: 28px;
    color: ${colors.primaryBlack};
    @media screen and (min-width: 768px) {
      font-size: 28px;
      line-height: 30px;
    }
  }

  h2{    
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 24px;
    @media screen and (min-width: 768px) {
      font-size: 28px;
      line-height: 34px;
    }
  }

  h3, .h3{
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;
    @media screen and (min-width: 768px) {
      font-size: 24px;
      line-height: 32px;
    }
  }

  p, a, li, .li {
    color: ${colors.washedBlack};
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 16px;
    @media screen and (min-width: 768px) {
      font-size: 18px;
      line-height: 22px;
    }
  }

  small{
    font-style: normal;
    font-weight: 200;
    font-size: 14px;
    line-height: 16px;
    > a {
      font-size: 14px;
    }
  }

  a {
    font-weight: 500;
    text-decoration: none;
    color: ${colors.primary};
    &:hover {
      text-decoration: none; 
    }
  }

  button {
    background: ${colors.white};
    border: 1px solid ${colors.primary};
    cursor: pointer;
    padding: 10px 14px;
    color: ${colors.primary};
    font-style: normal;
    font-weight: 600;
    border-radius: 10px;
    margin: 5px 10px 5px 0px;
    @media screen and (min-width: 768px) {
      font-size: 18px;
      padding: 10px 20px;
      margin: 10px 30px 10px 0px;
    }
  }
  .active {
    background: ${colors.primary};
    color: ${colors.white};
  }

  select {
    background: ${colors.white};
    border: none;
  }
  select:focus-visible{
    border: none;
    outline: none; 
  }
  select option{
    font-size: 30px;
  }

  .Container {
    margin-left: 10px;
    margin-right: 10px;
    @media screen and (min-width: 768px) {
      margin-left: 20px;
      margin-right: 20px;
    }
    @media screen and (min-width: 1024px) {
      margin-left: 30px;
      margin-right: 30px;
    }
    @media screen and (min-width: 1324px) {
      margin-left: 50px;
      margin-right: 50px;
    }
    @media screen and (min-width: 1920px) {
      max-width: 1600px;
      margin-left: auto;
      padding-left: 80px;
      padding-right: 80px;
      margin-right: auto;
    }
  }
  .slider {
    -webkit-appearance: none;
    width: 100%;
    margin: 60px auto;
    height: 10px;
    background: #E0E0E0;
    outline: none;
    opacity: 0.7;
    -webkit-transition: .2s;
    transition: opacity .2s;
    border-radius: 20px;
  }

  .slider:hover {
    opacity: 1;
  }

  .ph-share-button {
    margin: 10px 10px 10px 0px;
    @media screen and (min-width: 768px) {
      margin: 10px 30px 10px 0px;
    }
    > img {
      width: 200px;
    }
  }


  .slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    z-index: 10;
    width: 30px;
    height: 30px;
    border-radius: 50px;
    background: ${colors.primary};
    cursor: pointer;
  }

  .slider::-moz-range-thumb {
    width: 25px;
    height: 25px;
    background: #04AA6D;
    cursor: pointer;
  }

`
