import { render } from '@testing-library/react'
import { describe, test, expect } from 'vitest'

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  CardFooter,
} from './card'

// Mock the cn utility function
vi.mock('@/lib/utils', () => ({
  cn: vi.fn((...classes) => classes.filter(Boolean).join(' ')),
}))

describe('Card Components', () => {
  describe('Card', () => {
    test('should render with default styling', () => {
      const { container } = render(<Card>Card Content</Card>)

      const card = container.firstChild as HTMLElement
      expect(card.tagName).toBe('DIV')
      expect(card).toHaveAttribute('data-slot', 'card')
      expect(card.textContent).toBe('Card Content')
    })

    test('should apply custom className', () => {
      const { container } = render(
        <Card className="custom-card">Custom Card</Card>,
      )

      const card = container.firstChild as HTMLElement
      expect(card.className).toContain('custom-card')
    })

    test('should pass through additional props', () => {
      const { container } = render(
        <Card data-testid="test-card" role="article" id="main-card">
          Test Card
        </Card>,
      )

      const card = container.firstChild as HTMLElement
      expect(card).toHaveAttribute('data-testid', 'test-card')
      expect(card).toHaveAttribute('role', 'article')
      expect(card).toHaveAttribute('id', 'main-card')
    })
  })

  describe('CardHeader', () => {
    test('should render with correct data-slot', () => {
      const { container } = render(<CardHeader>Header Content</CardHeader>)

      const header = container.firstChild as HTMLElement
      expect(header).toHaveAttribute('data-slot', 'card-header')
      expect(header.textContent).toBe('Header Content')
    })

    test('should apply custom className', () => {
      const { container } = render(
        <CardHeader className="custom-header">Header</CardHeader>,
      )

      const header = container.firstChild as HTMLElement
      expect(header.className).toContain('custom-header')
    })
  })

  describe('CardTitle', () => {
    test('should render with correct data-slot', () => {
      const { container } = render(<CardTitle>Title Text</CardTitle>)

      const title = container.firstChild as HTMLElement
      expect(title).toHaveAttribute('data-slot', 'card-title')
      expect(title.textContent).toBe('Title Text')
    })

    test('should apply custom className', () => {
      const { container } = render(
        <CardTitle className="custom-title">Title</CardTitle>,
      )

      const title = container.firstChild as HTMLElement
      expect(title.className).toContain('custom-title')
    })
  })

  describe('CardDescription', () => {
    test('should render with correct data-slot', () => {
      const { container } = render(
        <CardDescription>Description text</CardDescription>,
      )

      const description = container.firstChild as HTMLElement
      expect(description).toHaveAttribute('data-slot', 'card-description')
      expect(description.textContent).toBe('Description text')
    })

    test('should apply custom className', () => {
      const { container } = render(
        <CardDescription className="custom-description">
          Description
        </CardDescription>,
      )

      const description = container.firstChild as HTMLElement
      expect(description.className).toContain('custom-description')
    })
  })

  describe('CardAction', () => {
    test('should render with correct data-slot', () => {
      const { container } = render(<CardAction>Action Content</CardAction>)

      const action = container.firstChild as HTMLElement
      expect(action).toHaveAttribute('data-slot', 'card-action')
      expect(action.textContent).toBe('Action Content')
    })

    test('should apply custom className', () => {
      const { container } = render(
        <CardAction className="custom-action">Action</CardAction>,
      )

      const action = container.firstChild as HTMLElement
      expect(action.className).toContain('custom-action')
    })
  })

  describe('CardContent', () => {
    test('should render with correct data-slot', () => {
      const { container } = render(<CardContent>Content</CardContent>)

      const content = container.firstChild as HTMLElement
      expect(content).toHaveAttribute('data-slot', 'card-content')
      expect(content.textContent).toBe('Content')
    })

    test('should apply custom className', () => {
      const { container } = render(
        <CardContent className="custom-content">Content</CardContent>,
      )

      const content = container.firstChild as HTMLElement
      expect(content.className).toContain('custom-content')
    })
  })

  describe('CardFooter', () => {
    test('should render with correct data-slot', () => {
      const { container } = render(<CardFooter>Footer</CardFooter>)

      const footer = container.firstChild as HTMLElement
      expect(footer).toHaveAttribute('data-slot', 'card-footer')
      expect(footer.textContent).toBe('Footer')
    })

    test('should apply custom className', () => {
      const { container } = render(
        <CardFooter className="custom-footer">Footer</CardFooter>,
      )

      const footer = container.firstChild as HTMLElement
      expect(footer.className).toContain('custom-footer')
    })
  })

  describe('Composite Card', () => {
    test('should render complete card structure', () => {
      const { getByText, container } = render(
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card description text</CardDescription>
            <CardAction>
              <button type="button">Action Button</button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <p>This is the main card content.</p>
          </CardContent>
          <CardFooter>
            <button type="button">Footer Button</button>
          </CardFooter>
        </Card>,
      )

      // Check all parts are rendered
      expect(getByText('Card Title')).toBeInTheDocument()
      expect(getByText('Card description text')).toBeInTheDocument()
      expect(getByText('Action Button')).toBeInTheDocument()
      expect(getByText('This is the main card content.')).toBeInTheDocument()
      expect(getByText('Footer Button')).toBeInTheDocument()

      // Check structure
      const card = container.querySelector('[data-slot="card"]')
      const header = container.querySelector('[data-slot="card-header"]')
      const title = container.querySelector('[data-slot="card-title"]')
      const description = container.querySelector(
        '[data-slot="card-description"]',
      )
      const action = container.querySelector('[data-slot="card-action"]')
      const content = container.querySelector('[data-slot="card-content"]')
      const footer = container.querySelector('[data-slot="card-footer"]')

      expect(card).toContainElement(header as HTMLElement)
      expect(card).toContainElement(content as HTMLElement)
      expect(card).toContainElement(footer as HTMLElement)
      expect(header).toContainElement(title as HTMLElement)
      expect(header).toContainElement(description as HTMLElement)
      expect(header).toContainElement(action as HTMLElement)
    })

    test('should work with minimal structure', () => {
      const { getByText } = render(
        <Card>
          <CardContent>Simple card content</CardContent>
        </Card>,
      )

      expect(getByText('Simple card content')).toBeInTheDocument()
    })

    test('should handle missing optional components', () => {
      const { getByText } = render(
        <Card>
          <CardHeader>
            <CardTitle>Only Title</CardTitle>
            {/* No description or action */}
          </CardHeader>
          <CardContent>Content without footer</CardContent>
          {/* No footer */}
        </Card>,
      )

      expect(getByText('Only Title')).toBeInTheDocument()
      expect(getByText('Content without footer')).toBeInTheDocument()
    })
  })

  describe('Event Handling', () => {
    test('should handle click events on card', () => {
      const handleClick = vi.fn()
      const { container } = render(
        <Card onClick={handleClick}>Clickable Card</Card>,
      )

      const card = container.firstChild as HTMLElement
      card.click()

      expect(handleClick).toHaveBeenCalledTimes(1)
    })

    test('should handle events on card components', () => {
      const handleHeaderClick = vi.fn()
      const handleFooterClick = vi.fn()

      const { container } = render(
        <Card>
          <CardHeader onClick={handleHeaderClick}>Header</CardHeader>
          <CardContent>Content</CardContent>
          <CardFooter onClick={handleFooterClick}>Footer</CardFooter>
        </Card>,
      )

      const header = container.querySelector(
        '[data-slot="card-header"]',
      ) as HTMLElement
      const footer = container.querySelector(
        '[data-slot="card-footer"]',
      ) as HTMLElement

      header.click()
      footer.click()

      expect(handleHeaderClick).toHaveBeenCalledTimes(1)
      expect(handleFooterClick).toHaveBeenCalledTimes(1)
    })
  })

  describe('Accessibility', () => {
    test('should support ARIA attributes', () => {
      const { container } = render(
        <Card
          role="article"
          aria-labelledby="card-title"
          aria-describedby="card-desc"
        >
          <CardHeader>
            <CardTitle id="card-title">Accessible Title</CardTitle>
            <CardDescription id="card-desc">
              Accessible Description
            </CardDescription>
          </CardHeader>
        </Card>,
      )

      const card = container.firstChild as HTMLElement
      expect(card).toHaveAttribute('role', 'article')
      expect(card).toHaveAttribute('aria-labelledby', 'card-title')
      expect(card).toHaveAttribute('aria-describedby', 'card-desc')
    })

    test('should be keyboard navigable when interactive', () => {
      const { container } = render(
        <Card tabIndex={0} onKeyDown={() => {}}>
          Keyboard navigable card
        </Card>,
      )

      const card = container.firstChild as HTMLElement
      expect(card).toHaveAttribute('tabIndex', '0')
    })
  })

  describe('Edge Cases', () => {
    test('should handle empty components', () => {
      expect(() => {
        render(
          <Card>
            <CardHeader />
            <CardContent />
            <CardFooter />
          </Card>,
        )
      }).not.toThrow()
    })

    test('should handle null children', () => {
      expect(() => {
        render(
          <Card>
            <CardContent>
              {null}
              {undefined}
              Text content
            </CardContent>
          </Card>,
        )
      }).not.toThrow()
    })

    test('should handle conditional rendering', () => {
      const showAction = false
      const { container } = render(
        <Card>
          <CardHeader>
            <CardTitle>Title</CardTitle>
            {showAction && <CardAction>Hidden Action</CardAction>}
          </CardHeader>
        </Card>,
      )

      expect(container.textContent).toContain('Title')
      expect(container.textContent).not.toContain('Hidden Action')
    })
  })

  describe('TypeScript Props', () => {
    test('should accept all div props', () => {
      expect(() => {
        render(
          <Card
            id="test-card"
            style={{ backgroundColor: 'red' }}
            onMouseEnter={() => {}}
            onFocus={() => {}}
            data-custom="value"
          >
            Props Test
          </Card>,
        )
      }).not.toThrow()
    })

    test('should work with refs', () => {
      const ref = { current: null }

      expect(() => {
        render(<Card ref={ref}>Card with ref</Card>)
      }).not.toThrow()
    })
  })
})
