import styled from "styled-components/native";

import { Text as AppText } from "@/components";

export const Wrapper = styled.View`
  gap: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Text = styled(AppText)`
  text-decoration: underline;
  text-decoration-color: underline;
`;
