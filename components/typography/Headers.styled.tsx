import styled from "styled-components/native";

import { Text } from "./Text.styled";

export const H1 = styled(Text)`
  color: ${(props) => props.$color || "#ffffff"};
  font-size: 40px;
`;
