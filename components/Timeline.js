/** @format */

import React, { useState, useEffect } from 'react'
import {
	Heading,
	Container,
	Stack,
	Spinner,
	Flex,
} from '@chakra-ui/react'
import TimelineCard from './TimelineCard'

const Timeline = ({ posts }) => {
	const [reversed, setReversed] = useState(false)
	const [reversedPosts, setReversedPosts] = useState()

	useEffect(() => {
		// Only execute if there are posts from parent obj
		if (posts !== null) {
			setReversedPosts(posts.props.posts.reverse()) // Take posts from parent, reverse and set to reversedPosts
			setReversed(!reversed) // Set flag to true
		}
	}, [posts]) // When posts are finally retrieved, run again

	return (
		<Container>
			<Stack>
				<Heading pt={100} pb={2}>
					Spacestagram
				</Heading>
				<Stack spacing={10} flexDir='column'>
					{reversed ? (
						reversedPosts.map((post, index) => (
							<TimelineCard key={index} post={post} />
						))
					) : (
						<Flex
							align='center'
							justify='center'
							w='100%'
							h='50vh'>
							<Spinner />
						</Flex>
					)}
				</Stack>
			</Stack>
		</Container>
	)
}

export default Timeline
