import React from "react";
import { Heading, Container, Stack } from "@chakra-ui/react";
import TimelineCard from "./TimelineCard";

const Timeline = ({ posts }) => {
  return (
    <Container>
      <Stack>
        <Heading pt={100} pb={2}>
          Spacestagram
        </Heading>
        <Stack spacing={10} flexDir='column'>
          {posts.reverse().map((post, index) => (
            <TimelineCard key={index} post={post}></TimelineCard>
          ))}
        </Stack>
      </Stack>
    </Container>
  );
};

export default Timeline;
