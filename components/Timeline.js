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
	useEffect(() => {
		setTimeout(() => {
			posts = posts.reverse()
			setReversed(!reversed)
		}, 1000)
	}, [posts])

	return (
		<Container>
			<Stack>
				<Heading pt={100} pb={2}>
					Spacestagram
				</Heading>
				<Stack spacing={10} flexDir='column'>
					{reversed ? (
						posts.map((post, index) => (
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
