import styled from "styled-components";

import { SECONDARY_FONT_COLOUR } from "../../constants";

const BoldInlineWrapper = styled.span`
  color: ${SECONDARY_FONT_COLOUR};
  font-weight: 700;
`;

export const BoldInline = ({ children }) => (
  <BoldInlineWrapper>
    {children}
  </BoldInlineWrapper>
);
