import React from 'react'
import { Text } from 'react-native'
import renderer from 'react-test-renderer'

import { Button } from '@components/atoms/Button'

import GlobalProvider from '@components/providers/GlobalProvider'

describe('Button', () => {
  it('Should be able to render button with correct title prop', () => {
    const { root } = renderer.create(
      <GlobalProvider>
        <Button title='Test' />
      </GlobalProvider>
    )

    expect(root.findByType(Text).props.children).toEqual('Test')
  })
})
