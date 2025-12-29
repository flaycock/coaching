import { Box, Text } from "@chakra-ui/react";

import { CustomLink } from "../../components/custom-link";
import { SectionContainer } from "../../components/section-container";
import { Testimonial } from "../../components/testimonial";

const TESTIMONIAL_DATA = [
  {
    quotes: [
      `
        My sessions with Clare have been incredibly helpful. She's creative, kind and collaborative.
        Working together, she helped me break professional challenges down into bite size chunks, to
        come up with strategic and actionable solutions. Her encyclopaedic knowledge of our industry,
        and the people who run it, was also really useful in helping me come up with practical next
        steps. I would recommend her to any senior leaders in TV and film.
      `
    ],
    sources: [
      `
        - Lucy Pilkington
      `,
      `
        Founder & CEO, Milk & Honey Media

      `
    ]
  },
  {
    quotes: [
      `
        I had six insightful and highly valuable sessions and was able to lead the direction of
        the sessions so we could tailor them to the areas I was most interested in exploring and
        improving. They helped me build on my strengths and identify areas where I could adapt and
        develop further. They also gave me the chance to gather feedback from colleagues, explore how
        my approach is perceived, and consider practical ways to refine it.
      `,
      `
        Overall, it was a positive and extremely helpful experience that has given me greater
        self-awareness, along with practical tools and methods to improve my performance for the
        benefit of both myself and my team.

      `
    ],
    sources: [
      `
        - John Connerty
      `,
      `
        Head of Factual Entertainment, Crackit Productions
      `
    ]
  },
  {
    quotes: [
      `
        Super helpful - Clare really helped me see things from a new perspective and figure out how
        to move forward. I left each session feeling clearer and more confident about what to do next.
        I’ve also noticed a real shift in mindset and  I feel more confident and intentional in how I
        articulate my goals.
      `
    ],
    sources: [
      `
        - Domman Yakubu
      `,
      `
        Start-up Entrepreneur
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
    <Text textStyle={["sm", "sm", "lg", "xl", "2xl"]}>
      Read more testimonials&nbsp;
      <CustomLink
        href="https://docs.google.com/document/d/1nao1ZmT-FEB21-rC-yoYGLIB63ck5d-WJmUlwpqOztQ/edit?usp=sharing"
        newTab
        text="here"
      />
      .
    </Text>
  </SectionContainer>
);
