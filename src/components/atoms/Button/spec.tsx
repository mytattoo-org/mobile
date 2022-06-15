import { render } from '@testing-library/react-native'
import React from 'react'

import { Button } from '@components/atoms/Button'

import GlobalProvider from '@components/providers/GlobalProvider'

describe('Button', () => {
  it('Should be able to render button with correct title prop', async () => {
    const expectedButtonTitle = 'Test'

    const { findByA11yLabel } = render(
      <GlobalProvider>
        <Button title={expectedButtonTitle} />
      </GlobalProvider>
    )

    const buttonTitle = (await findByA11yLabel('Button title')).children[0]

    expect(buttonTitle).toBe(expectedButtonTitle)
  })
})
