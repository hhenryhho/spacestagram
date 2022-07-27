/** @format */

import {
	/** @format */
	Avatar,
	Box,
	Text,
	Flex,
	IconButton,
	Button,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
	useClipboard,
	AspectRatio,
} from '@chakra-ui/react'
import Image from 'next/image'
import React, { useState } from 'react'
import DateObject from 'react-date-object'
import { FaHeart, FaRegHeart, FaRegPaperPlane } from 'react-icons/fa'
import FadeInSection from './FadeInSection'

const TimelineCard = ({ post, onLike, onUnlike, isLiked }) => {
	// For the more button
	const [isExpanded, setExpand] = useState(false)

	// For the share button
	const [value, _1] = useState(post.url)
	const { isOpen, onOpen, onClose } = useDisclosure()
	const { _2, onCopy } = useClipboard(value)

	const currentDateObj = new DateObject()
	const postDateObj = new DateObject(post.date.replace('-', '/'))
	const daysAgo = Math.floor(
		(currentDateObj.unix - postDateObj.unix) / 86400
	)

	return (
		<FadeInSection direction='fromBottom'>
			<Box maxW='lg' borderWidth='1px' borderRadius='md'>
				<Flex flexDir='row' align='center' p={3}>
					<Avatar
						size='sm'
						name={
							post.copyright
								? post.copyright
								: 'Anonymous'
						}
					/>
					<Flex px={3} flexDir='column'>
						<Text>
							<b>
								{post.copyright
									? post.copyright
									: 'Anonymous'}
							</b>
						</Text>
						<Text fontSize={['sm', 'md']}>
							{post.title}
						</Text>
					</Flex>
				</Flex>
				<Box>
					{post.url.includes('apod') ? (
						<Image
							src={post.url}
							alt={
								'This photo is owned by ' +
								post.copyright
									? post.copyright
									: 'Anonymous'
							}
							width='510px'
							height='510px'
						/>
					) : (
						<AspectRatio ratio='1'>
							<iframe src={post.url} alt='demo' />
						</AspectRatio>
					)}
				</Box>
				<Flex flexDir='column' px={4} pb={4}>
					<Flex>
						<IconButton
							aria-label='Like button'
							fontSize='2xl'
							icon={
								isLiked ? (
									<FaHeart color='red' />
								) : (
									<FaRegHeart />
								)
							}
							variant='ghost'
							onClick={() => {
								if (isLiked) {
									onUnlike(post)
								} else {
									onLike(post)
								}
							}}
						/>
						<IconButton
							aria-label='Share button'
							fontSize='2xl'
							icon={<FaRegPaperPlane />}
							variant='ghost'
							onClick={() => {
								onOpen()
								onCopy()
							}}
						/>
						<Modal isOpen={isOpen} onClose={onClose}>
							<ModalOverlay />
							<ModalContent>
								<ModalHeader>
									Copy to Clipboard
								</ModalHeader>
								<ModalCloseButton />
								<ModalBody>
									<Text>
										A link to this image has been
										copied to your clipboard
									</Text>
								</ModalBody>

								<ModalFooter>
									<Button
										variant='ghost'
										mr={3}
										onClick={onClose}>
										Close
									</Button>
								</ModalFooter>
							</ModalContent>
						</Modal>
					</Flex>
					<Flex>
						{isExpanded ? (
							<Flex flexDir='column'>
								<Text fontSize={['sm', 'md']}>
									<b>
										{post.copyright
											? post.copyright
											: 'Anonymous'}
									</b>
									{' ' + post.explanation}
								</Text>
								<Button
									w='40px'
									pt={1}
									pl={0}
									pr={2}
									h='20px'
									variant='ghost'
									onClick={() => setExpand(false)}>
									less
								</Button>
							</Flex>
						) : (
							<Flex w='100%' flexDir='row'>
								<Text
									fontSize={['sm', 'md']}
									isTruncated>
									<b>
										{post.copyright
											? post.copyright
											: 'Anonymous'}
									</b>
									{' ' + post.explanation}
								</Text>
								<Button
									h='20px'
									variant='ghost'
									onClick={() => setExpand(true)}>
									more
								</Button>
							</Flex>
						)}
					</Flex>
					<Flex>
						<Text
							color='gray.400'
							fontSize={['sm', 'md']}
							py={1}>
							{daysAgo > 0
								? daysAgo + ' days ago'
								: 'Today'}
						</Text>
					</Flex>
				</Flex>
			</Box>
		</FadeInSection>
	)
}

export default TimelineCard
