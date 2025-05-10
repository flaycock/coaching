import styled from "styled-components";

import { PRIMARY_FONT_COLOUR } from "../../constants";

const BoldInlineWrapper = styled.span`
  color: ${PRIMARY_FONT_COLOUR};
  font-weight: bold;
`;

export const BoldInline = ({ children }) => (
  <BoldInlineWrapper>
    {children}
  </BoldInlineWrapper>
);
