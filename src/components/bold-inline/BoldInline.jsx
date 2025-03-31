import styled from "styled-components";

import { SECONDARY_FONT_COLOUR } from "../../constants";

const BoldInlineWrapper = styled.span`
  color: ${SECONDARY_FONT_COLOUR};
  font-weight: normal;
`;

export const BoldInline = ({ children }) => (
  <BoldInlineWrapper>
    {children}
  </BoldInlineWrapper>
);
