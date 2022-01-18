import { Avatar, Box, Text, Flex, IconButton } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import DateObject from "react-date-object";
import {
  FaHeart,
  FaPaperPlane,
  FaRegHeart,
  FaRegPaperPlane,
} from "react-icons/fa";

const TimelineCard = ({ post }) => {
  post = post
    ? post
    : {
        thumbnail_url:
          "https://apod.nasa.gov/apod/image/2110/GS_20210917_Handol_5651_Pan1024.jpg",
      };

  var currentDateObj = new DateObject();
  var postDateObj = new DateObject(post.date.replace("-", "/"));

  var daysAgo = 0;

  return (
    <Box maxW='lg' borderWidth='1px' borderRadius='md'>
      <Flex flexDir='row' align='center' p={3}>
        <Avatar
          size='sm'
          name={post.copyright ? post.copyright : "Anonymous"}
        />
        <Text px={3}>{post.copyright ? post.copyright : "Anonymous"}</Text>
      </Flex>
      <Box>
        <Image
          src={post.thumbnail_url ? post.thumbnail_url : post.url}
          width='500px'
          height='500px'
        />
      </Box>
      <Flex flexDir='column' px={4} pb={4}>
        <Flex>
          <IconButton
            aria-label='Like button'
            fontSize='2xl'
            icon={<FaRegHeart />}
            variant='ghost'
          />
          <IconButton
            aria-label='Share button'
            fontSize='2xl'
            icon={<FaRegPaperPlane />}
            variant='ghost'
          />
        </Flex>
        <Flex>
          <Text isTruncated>
            <b>{post.copyright ? post.copyright : "Anonymous"}</b>
            {" " + post.explanation}
          </Text>
        </Flex>
        <Flex>
          <Text py={1}>{daysAgo > 0 ? daysAgo + " days ago" : "Today"}</Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default TimelineCard;
