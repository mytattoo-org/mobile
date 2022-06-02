import React from 'react'

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

import Balloon from '@components/atoms/images/icons/Balloon'
import Heart from '@components/atoms/images/icons/Heart'
import Tattoo from '@components/atoms/images/icons/Tattoo'

const Feed = () => {
  const { formattedPosts, theme } = usePosts()

  return (
    <Style>
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
                <Heart color={theme.colors.secondary} />
              </HeartButton>

              <BalloonButton>
                <Balloon color={theme.colors.secondary} />
              </BalloonButton>

              <TattooStylesButton>
                <Tattoo color={theme.colors.secondary} />
              </TattooStylesButton>
            </Footer>
          </Post>
        )}
      />
    </Style>
  )
}

export default Feed
