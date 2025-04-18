import { Box, Image, Text } from "@chakra-ui/react";

import { SectionContainer } from "../../components/section-container";
import { Testimonial } from "../../components/testimonial";

const TESTIMONIAL_DATA = [
  {
    quotes: [
      `
        Clare was the best ‘gift to myself’ I could’ve asked for.  She has been so helpful in providing
        me with the dedicated time, expertise and headspace I’ve needed to just focus on me for a change,
        which has allowed me to think clearly through my professional goals for the future.
      `,
      `
        She was kind, considerate, helpful, knowledgeable and patient throughout.  I would highly
        recommend Clare to anyone who is struggling with the way forward, be that in their personal or
        professional life, or indeed both !

      `
    ],
    sources: [
      `
        Katie Taylor
      `,
      `
        CEO & Founder of The Latte Lounge & Author of Midlife Matters
      `
    ]
  },
  {
    quotes: [
      `
        Working with Clare has been a transformative experience.  Her guidance helped me clarify some
        jumbled thinking, and take real action towards my goals.  I now feel more aligned and confident
        than I did before.  I can’t thank Clare enough.
      `
    ],
    sources: [
      `
        Barry Dale
      `,
      `
        Director, Specialised & Acquisition Finance

      `
    ]
  },
  {
    quotes: [
      `
        If you’re wondering about coaching - just do it !  Across our sessions Clare helped me identify
        what had been holding me back from making a crucial decision in my life - which has unlocked all
        sorts of positive changes.  I’m no longer stuck and in limbo and can now look to the future with
        excitement.  Thank you Clare.
      `
    ],
    sources: [
      `
        Katy Hall
      `,
      `  
        Mid-career change !
      `
    ]
  }
];

export const Testimonials = () => (
  <SectionContainer heading="testimonials" numChildren={1}>
    <Box marginY="auto">
      {TESTIMONIAL_DATA.map(({ quotes, sources }) => (
        <Testimonial quotes={quotes} sources={sources} />
      ))}
    </Box>
  </SectionContainer>
);
