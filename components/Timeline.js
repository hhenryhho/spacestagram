import React from "react";
import { Heading, Container, Stack } from "@chakra-ui/react";
import TimelineCard from "./TimelineCard";

const Timeline = ({ posts }) => {
  var reversed = posts.reverse();
  console.log(reversed);
  return (
    <Container>
      <Stack>
        <Heading pt={100} pb={2}>
          Spacestagram
        </Heading>
        <Stack spacing={10} flexDir='column'>
          {reversed.map((post, index) => (
            <TimelineCard key={index} post={post}>
              {/* {console.log(post.copyright, index)} */}
            </TimelineCard>
          ))}
        </Stack>
      </Stack>
    </Container>
  );
};

export default Timeline;
