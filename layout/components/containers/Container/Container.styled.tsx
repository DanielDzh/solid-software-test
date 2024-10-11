import styled from "styled-components/native";

export const Container = styled.Pressable<{
  $backgroundColor?: string;
}>`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex: 1;
  background-color: ${(props) => props.$backgroundColor || "#000"};
  color: #fff;
`;
