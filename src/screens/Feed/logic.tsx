import { useTheme } from 'styled-components/native'

import avatar2 from '@assets/temp/avatar2.jpg'
import avatar from '@assets/temp/avatar.png'
import tattoo from '@assets/temp/tattoo.png'

interface IPost {
  id: string
  headerData: {
    description: string
    avatar: string
    isArtist: string
    name: string
  }
  image: string
}

const fakePosts = [
  {
    id: '2',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit dolor, eos possimus sint, quam aliquam veniam obcaecati, eius libero numquam perspiciatis dolorem! Sed, adipisci odio minima odit dolorum libero vero.',
    author: { name: 'Vitor Daniel', isArtist: true, avatar: avatar2 },
    image: tattoo
  },
  {
    id: '1',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit dolor, eos possimus sint, quam aliquam veniam obcaecati, eius libero numquam perspiciatis dolorem! Sed, adipisci odio minima odit dolorum libero vero.',
    author: { name: 'Miguel Andrade', isArtist: false, avatar: avatar },
    image: tattoo
  }
]

const usePosts = () => {
  const theme = useTheme()

  const formattedPosts = fakePosts.map(
    ({ id, author, description, image }) => ({
      id: id,
      headerData: {
        description,
        avatar: author.avatar,
        isArtist: author.isArtist,
        name: author.name
      },
      image
    })
  )

  return { formattedPosts, theme }
}

export { usePosts }

export type { IPost }
