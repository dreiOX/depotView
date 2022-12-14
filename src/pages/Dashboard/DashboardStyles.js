import styled from "styled-components";

export const DashboardContainer = styled.div`
  margin: 5% 5% 5% 25%;
  width: 70%;
  // display: flex;
  // gap: 2em;
`;
export const Heading = styled.div`
  padding-bottom: 4em;
  font-weight: bold;
  &:hover {
    color: green;
  }
`;

export const TopCards = styled.div`
  display: flex;
  gap: 2em;
`;

export const LowerCards = styled.div`
  margin-top: 2em;
  display: flex;
  gap: 2em;
`;
