import { Avatar, Box, Text, Flex, IconButton, Button } from "@chakra-ui/react";
import Image from "next/image";
import React, { useState } from "react";
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

  const correctedUrl = post.thumbnail_url ? post.thumbnail_url : post.url;

  const [isExpanded, setExpand] = useState(false);
  const [isLiked, setLike] = useState(false);

  var currentDateObj = new DateObject();
  var postDateObj = new DateObject(post.date.replace("-", "/"));
  var daysAgo = Math.floor((currentDateObj.unix - postDateObj.unix) / 86400);

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
          src={correctedUrl}
          alt={
            "This photo is owned by " + post.copyright
              ? post.copyright
              : "Anonymous"
          }
          width='510px'
          height='510px'
        />
      </Box>
      <Flex flexDir='column' px={4} pb={4}>
        <Flex>
          {isLiked ? (
            <IconButton
              aria-label='Like button'
              fontSize='2xl'
              icon={<FaHeart />}
              variant='ghost'
              onClick={() => setLike(false)}
            />
          ) : (
            <IconButton
              aria-label='Like button'
              fontSize='2xl'
              icon={<FaRegHeart />}
              variant='ghost'
              onClick={() => setLike(true)}
            />
          )}

          <IconButton
            aria-label='Share button'
            fontSize='2xl'
            icon={<FaRegPaperPlane />}
            variant='ghost'
          />
        </Flex>
        <Flex>
          {isExpanded ? (
            <Flex flexDir='column'>
              <Text>
                <b>{post.copyright ? post.copyright : "Anonymous"}</b>
                {" " + post.explanation}
              </Text>
              <Button
                w='40px'
                pt={1}
                pl={0}
                pr={2}
                h='20px'
                variant='ghost'
                onClick={() => setExpand(false)}
              >
                less
              </Button>
            </Flex>
          ) : (
            <Flex w='100%' flexDir='row'>
              <Text isTruncated>
                <b>{post.copyright ? post.copyright : "Anonymous"}</b>
                {" " + post.explanation}
              </Text>
              <Button h='20px' variant='ghost' onClick={() => setExpand(true)}>
                more
              </Button>
            </Flex>
          )}
        </Flex>
        <Flex>
          <Text py={1}>{daysAgo > 0 ? daysAgo + " days ago" : "Today"}</Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default TimelineCard;
