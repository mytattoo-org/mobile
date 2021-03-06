import { FlatList } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

import { androidPaddingSafeArea } from '@utils/androidPaddingSafeArea'

const Style = styled.SafeAreaView`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background};

  ${androidPaddingSafeArea()}
`

const HeartButton = styled.TouchableOpacity`
  justify-content: center;
`

const BalloonButton = styled.TouchableOpacity`
  margin-left: 16px;
  justify-content: center;
`

const TattooStylesButton = styled.TouchableOpacity`
  margin-left: auto;
  justify-content: center;
`

const Footer = styled.View`
  display: flex;
  flex-direction: row;

  padding: 0 8px;
  margin-top: 16px;
`

const Title = styled.Text`
  font-size: ${RFValue(24)}px;

  color: ${({ theme }) => theme.colors.primary};
`

const Description = styled.Text`
  width: 100%;
  margin-top: 16px;

  font-size: 17px;

  color: ${({ theme }) => theme.colors.secondary};
`

const Name = styled.Text`
  margin-left: 16px;
  font-size: 20px;

  flex: 1;

  color: ${({ theme }) => theme.colors.secondary};
`

const Avatar = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;
`

const Header = styled.View`
  display: flex;
  flex-flow: row wrap;
  align-items: center;

  padding: 8px;
`

const Post = styled.View`
  margin: 8px 0;
  width: 100%;
`

const Posts = styled.FlatList`
  width: 100%;
` as unknown as typeof FlatList

const PostImage = styled.Image`
  width: 100%;
  border-radius: 4px;
`

export {
  Name,
  Post,
  Style,
  Title,
  Posts,
  Header,
  Avatar,
  Footer,
  PostImage,
  HeartButton,
  Description,
  BalloonButton,
  TattooStylesButton
}
