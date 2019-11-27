import styled from "styled-components";
import { extra_small_space } from "../variables/spacing";
import { black, white, text, primary } from "../variables/colors";

export const TextInput = styled.input`
  width: 70%;
  background: rgba(240, 244, 255, 0.6);
`;

export const ChangeOptionDropdown = styled.input`
  background: #f0f4ff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 2px;
`;

export const PreviewButton = styled.button`
  background: #ffffff;
  border: 1px solid #4e67eb;
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 2px;
`;
