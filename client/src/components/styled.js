import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: serif;
    background: #018281;
    color: white;
    padding: 20px;
    margin: 0;
    font-size: 14px;
  }

  html { padding: 0; margin: 0; }

  body > div {
    max-width: 768px;
    margin: 0 auto;
  }
`;

export const Button = styled.button`
  border-width: 2px;
  border-style: outset;
  border-color: buttonface;
  border-right-color: #424242;
  border-bottom-color: #424242;
  background: silver;
  color: black;
  padding: 2px 7px 4px;
  border-radius: 1px;
  font-size: 16px;

  &:active {
    border-top: 2px solid #808080;
    border-left: 2px solid #808080;
    border-right: 2px solid white;
    border-bottom: 2px solid white;
    box-shadow: inset 1px 1px black, inset -1px -1px #d4d0c9;
  }

  &:disabled {
    opacity: 0.5;
  }
`;

export const Input = styled.input`
  width: 100%;
  border: 2px inset #d5d5d5;
  color: #424242;
  background: #fff;
  box-shadow: -1px -1px 0 0 #828282;
  margin-top: 4px;
  padding-left: 2px;
`;

export const Textarea = styled.textarea`
  padding: 5px 8px;
  background-color: white;
  border-top: 1px solid #808080;
  border-left: 1px solid #808080;
  border-right: 1px solid white;
  border-bottom: 1px solid white;
  box-shadow: inset 1px 1px black, inset -1px -1px #d4d0c9;
  resize: none;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 10px;
  font-size: 15px;

  &:disabled {
    opacity: 0.5;
  }
`;

export const Label = styled.label`
  display: flex;
  align-items: center;

  span {
    max-width: 20%;
    flex: 0 0 20%;
  }
`;

export const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;

  > div {
    margin: 0;
  }
`;

export const WindowDiv = styled.div`
  h3 {
    background: -webkit-linear-gradient(left, #08216b, #a5cef7);
    color: #fff;
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-top: 2px;
    padding-bottom: 1px;
    text-align: left;
    margin: 0;
    padding: 7px 20px;
    font-size: 16px;
    display: flex;
    justify-content: space-between;

    button {
      line-height: 0;
      padding: 1px 2px;
      margin-right: -4px;

      img {
        width: 10px;
      }
    }
  }

  > div {
    padding: 20px;
  }

  > hr {
    margin: 2.5px 0;
    border-top: 1px solid #808080;
    border-bottom: 1px solid #ffffff;
  }

  border: solid;
  border-width: 2px;
  border-bottom-color: #424242;
  border-right-color: #424242;
  border-left-color: #fff;
  border-top-color: #fff;
  background: silver;
  color: #212529;
  width: ${(props) => `${props.width}px` || "100%"};
  margin: 0 auto;
`;

export const ScrollContent = styled.div`
  padding: 5px 8px;
  background-color: white;
  border-top: 1px solid #808080;
  border-left: 1px solid #808080;
  border-right: 1px solid white;
  border-bottom: 1px solid white;
  box-shadow: inset 1px 1px black, inset -1px -1px #d4d0c9;
  overflow-y: scroll;
  overflow-x: hidden;
  font-size: 15px;
  user-select: text;
  -moz-user-select: text;
  -webkit-user-select: text;
  -ms-user-select: text;
  height: ${(props) => `${props.height}px` || "100%"};

  ${(props) =>
    props.scrollBottom &&
    `
    display: flex;
    flex-direction: column-reverse;
  `}
`;

export const MessageUser = styled.strong`
  color: ${(props) => (props.self ? "blue" : "red")};
`;

export const RoomLink = styled.a`
  display: block;
  text-decoration: none;
  color: #000;
  font-weight: 600;
  padding: 2px 0;

  &:hover {
    text-decoration: underline;
  }
`;
