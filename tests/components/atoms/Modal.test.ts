import { fireEvent, render } from '@testing-library/vue'
import { describe, it, expect } from 'vitest'
import { Modal } from '@/components/atoms'

describe('Modal', () => {
  it('renders slot', () => {
    const { getByText, unmount } = render(Modal, {
      props: {
        modelValue: true
      },
      slots: {
        default: 'ModalContent'
      }
    })
    getByText('ModalContent')
    unmount()
  })
  it('supports v-model', async () => {
    const { getByText, getByTestId, unmount, emitted } = render(Modal, {
      props: {
        modelValue: true
      },
      attrs: {
        'data-testid': 'modal'
      },
      slots: {
        default: 'ModalContent'
      }
    })
    getByTestId('modal')

    const closeButton = getByText('close modal').parentElement!

    await fireEvent.click(closeButton)
    expect(emitted()).toHaveProperty('update:modelValue')
    expect(emitted<[string]>('update:modelValue')[0][0]).toBe(false)

    unmount()
  })
  // TODO: animation tests
})
