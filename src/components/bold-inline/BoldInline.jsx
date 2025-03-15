import styled from "styled-components";

const BoldInlineWrapper = styled.span`
  font-weight: 700;
`;

export const BoldInline = ({ children }) => (
  <BoldInlineWrapper>
    {children}
  </BoldInlineWrapper>
);
