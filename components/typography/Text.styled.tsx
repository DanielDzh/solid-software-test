import styled from "styled-components/native";

export const Text = styled.Text<{
  $color?: string;
}>`
  color: ${(props) => props.$color || "#ffffff"};
  text-decoration-color: ${(props) => props.$color || "#ffffff"};
  font-size: 14px;
  font-family: SpaceMono;
  user-select: none;
`;
