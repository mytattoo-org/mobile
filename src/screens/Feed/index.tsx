import { usePosts } from './logic'
import {
  Avatar,
  BalloonButton,
  Description,
  Footer,
  Header,
  HeartButton,
  Name,
  Post,
  PostImage,
  Posts,
  Style,
  TattooStylesButton
} from './styles'

import Heart from '@components/atoms/icons/Heart'

import { StatusBar } from 'expo-status-bar'
import React from 'react'

const Feed = () => {
  const { formattedPosts } = usePosts()

  return (
    <Style>
      <StatusBar style='light' />

      <Posts
        data={formattedPosts}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => (
          <Post>
            <Header>
              <Avatar source={item.headerData.avatar} />

              <Name>{item.headerData.name}</Name>

              <Description>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
                accusamus, perspiciatis dolore, eum iure voluptatem reiciendis
                architecto tempora repellendus suscipit inventore eius quae hic.
              </Description>
            </Header>

            <PostImage source={item.image} />

            <Footer>
              <HeartButton>
                <Heart />
              </HeartButton>

              <BalloonButton />

              <TattooStylesButton />
            </Footer>
          </Post>
        )}
      />
    </Style>
  )
}

export default Feed
