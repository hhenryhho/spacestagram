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

// const posts = {
// 	props: {
// 		posts: [
// 			{
// 				copyright: 'Ruslan Merzlyakovastrorms',
// 				date: '2022-07-27',
// 				explanation:
// 					"This moon made quite an entrance. Typically, a moonrise is quiet and serene.  Taking a few minutes to fully peek above the horizon, Earth's largest orbital companion can remain relatively obscure until it rises high in the nighttime sky. About a week ago, however, and despite being only half lit by the Sun, this rising moon put on a show -- at least from this location. The reason was that, as seen from Limfjord in Nykøbing Mors, Denmark, the moon rose below scattered clouds near the horizon.  The result, captured here in a single exposure, was that moonlight poured through gaps in the clouds to created what are called crepuscular rays.  These rays can fan out dramatically across the sky when starting near the horizon, and can even appear to converge on the other side of the sky. Well behind our Moon, stars from our Milky Way galaxy dot the background, and our galaxy's largest orbital companion -- the Andromeda galaxy -- can be found on the upper left.    Almost Hyperspace: Random APOD Generator",
// 				hdurl: 'https://apod.nasa.gov/apod/image/2207/CrepuscularMoonrise_Merzyakov_1308.jpg',
// 				media_type: 'image',
// 				service_version: 'v1',
// 				title: 'Crepuscular Moon Rays over Denmark',
// 				url: 'https://apod.nasa.gov/apod/image/2207/CrepuscularMoonrise_Merzyakov_960.jpg',
// 			},
// 			{
// 				copyright: 'Paolo Girotti',
// 				date: '2022-07-26',
// 				explanation:
// 					'This sight was worth getting out of bed early.  Two years ago this month, Comet C/2020 F3 (NEOWISE) rose before dawn to the delight of northern sky enthusiasts awake that early. Up before sunrise on July 8th, the featured photographer was able to capture in dramatic fashion one of the few comets visible to the unaided eye this century, an inner-Solar System intruder that has become known as the Great Comet of 2020.  The resulting video detailed Comet NEOWISE from Italy rising over the Adriatic Sea. The time-lapse video combines over 240 images taken over 30 minutes.  The comet was seen rising through a foreground of bright and undulating noctilucent clouds, and before a background of distant stars.  Comet NEOWISE remained unexpectedly bright until 2020 August, with its ion and dust tails found to emanate from a nucleus spanning about five kilometers across.    Astrophysicists: Browse 2,800+ codes in the Astrophysics Source Code Library',
// 				media_type: 'video',
// 				service_version: 'v1',
// 				thumbnail_url:
// 					'https://img.youtube.com/vi/ts0Ek3nLHew/0.jpg',
// 				title: 'Comet NEOWISE Rising over the Adriatic Sea',
// 				url: 'https://www.youtube.com/embed/ts0Ek3nLHew?rel=0',
// 			},
// 			{
// 				copyright: 'Mohamad Soltanolkotabi',
// 				date: '2022-07-25',
// 				explanation:
// 					"Can you find the Moon? This usually simple task can be quite difficult.  Even though the Moon is above your horizon half of the time, its phase can be anything from crescent to full. The featured image was taken in late May from Sant Martí d'Empúries, Spain, over the Mediterranean Sea in the early morning. One reason you can't find this moon is because it is very near to its new phase, when very little of the half illuminated by the Sun is visible to the Earth. Another reason is because this moon is near the horizon and so seen through a long path of Earth's atmosphere -- a path which dims the already faint crescent. Any crescent moon is only visible near the direction the Sun, and so only locatable near sunrise or sunset. The Moon runs through all of its phases in a month (moon-th), and this month the thinnest sliver of a crescent -- a new moon -- will occur in three days.",
// 				hdurl: 'https://apod.nasa.gov/apod/image/2207/FindTheMoon_soltanolkotabi_1500.jpg',
// 				media_type: 'image',
// 				service_version: 'v1',
// 				title: 'Find the New Moon',
// 				url: 'https://apod.nasa.gov/apod/image/2207/FindTheMoon_soltanolkotabi_1080.jpg',
// 			},
// 			{
// 				date: '2022-07-24',
// 				explanation:
// 					"Many details of Saturn appear clearly in infrared light.  Bands of clouds show great structure, including long stretching storms.  Also quite striking in infrared is the unusual hexagonal cloud pattern surrounding Saturn's North Pole.  Each side of the dark hexagon spans roughly the width of our Earth. The hexagon's existence was not predicted, and its origin and likely stability remains a topic of research.  Saturn's famous rings circle the planet and cast shadows below the equator. The featured image was taken by the robotic Cassini spacecraft in 2014 in several infrared colors.  In 2017 September, the Cassini mission was brought to a dramatic conclusion when the spacecraft was  directed to dive into ringed giant.    Explore Your Universe: Random APOD Generator",
// 				hdurl: 'https://apod.nasa.gov/apod/image/2207/SaturnIR_CassiniKakitsev_1024.jpg',
// 				media_type: 'image',
// 				service_version: 'v1',
// 				title: 'Saturn in Infrared from Cassini',
// 				url: 'https://apod.nasa.gov/apod/image/2207/SaturnIR_CassiniKakitsev_960.jpg',
// 			},
// 		],
// 	},
// }

const Timeline = ({ posts }) => {
	const [reversed, setReversed] = useState(false)
	const [reversedPosts, setReversedPosts] = useState()
	const [likes, setLikes] = useState([])

	const onLike = (item) => {
		const postID =
			item.title + ': ' + (item.copyright || 'Anonymous')

		setLikes([...likes, postID])
	}

	const onUnlike = (item) => {
		const postID =
			item.title + ': ' + (item.copyright || 'Anonymous')

		setLikes(likes.filter((like) => like !== postID))
	}

	useEffect(() => {
		// Only execute if there are posts from parent obj
		if (posts !== null) {
			setReversedPosts(posts.props.posts.reverse()) // Take posts from parent, reverse and set to reversedPosts
			setReversed(!reversed) // Set flag to true
		}

		// Read local storage with key 'likes'
		const existingLikes = JSON.parse(
			localStorage.getItem('likes')
		)
		if (existingLikes) {
			setLikes(existingLikes)
		}
	}, [posts]) // When posts are updated, run again

	// Update local storage whenever setLikes is run
	useEffect(() => {
		localStorage.setItem('likes', JSON.stringify(likes))
		console.log('Called: ', likes)
	}, [likes]) // When likes are updated, run again

	return (
		<Container>
			<Stack>
				<Heading pt={100} pb={2}>
					Spacestagram
				</Heading>
				<Stack spacing={10} flexDir='column'>
					{reversed ? (
						reversedPosts.map((post, index) => (
							<TimelineCard
								key={index}
								onLike={onLike}
								onUnlike={onUnlike}
								post={post}
								isLiked={likes.includes(
									post.title +
										': ' +
										(post.copyright ||
											'Anonymous')
								)}
							/>
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
