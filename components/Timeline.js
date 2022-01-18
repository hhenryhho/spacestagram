import React from "react";
import { Flex, Heading, Container, Stack, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import TimelineCard from "./TimelineCard";

const Timeline = ({ posts }) => {
  return (
    <Container>
      <Stack>
        <Heading py={10}>Spacestagram</Heading>
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
