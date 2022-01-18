import React from "react";
import { Flex, Heading, Container, Stack, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import TimelineCard from "./TimelineCard";

const Timeline = ({ posts }) => {
  const [timeline, setTimeline] = useState();

  return (
    <Container>
      <Stack>
        <Heading py={10}>Spacestagram Posts</Heading>
        <Stack spacing={10} flexDir='column'>
          {posts.map((post) => (
            <TimelineCard post={post}></TimelineCard>
          ))}
        </Stack>
      </Stack>
    </Container>
  );
};

export default Timeline;
