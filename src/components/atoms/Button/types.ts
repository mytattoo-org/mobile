import { PressableProps } from 'react-native'

interface ITypeProp {
  type: 'primary' | 'secondary'
}

interface IButtonProps extends PressableProps, Partial<ITypeProp> {
  title: string
}

export type { IButtonProps, ITypeProp }
