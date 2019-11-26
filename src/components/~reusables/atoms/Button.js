import styled from "styled-components";
import { extra_small_space } from "../variables/spacing";
import { black, white, text, primary } from "../variables/colors";
import { button_text } from "../variables/font-sizes";

export const Button = styled.button`
  font-size: ${button_text};
  font-weight: 600;
  padding: 6px ${extra_small_space};
  min-width: ${props => (props.width ? props.width : "160px")};
  height: 40px;
  border: none;
  outline: none;
  transition: all 100ms ease-in-out;
  cursor: pointer;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 2px;
  &:hover {
    opacity: 0.9;
  }
  &:active {
    opacity: 0.8;
    box-shadow: 0 6px 10px 0 rgba(40, 51, 63, 0.11);
  }
`;

export const ButtonPrimary = styled(Button)`
  background: ${props => (props.color ? props.color : primary)};
  color: ${white};
`;

export const ButtonWhite = styled(Button)`
  background: ${white};
  color: ${black};
`;

export const ButtonSecondary = styled(Button)`
  background: ${white};
  color: ${primary};
`;
export const TextButton = styled(Button)`
  background-color: transparent;
  color: ${props => (props.color ? props.color : text)};
  padding: 10px;
  min-width: auto;
  box-shadow: none;
  margin: 15px;
`;
