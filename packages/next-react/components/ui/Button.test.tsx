import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Plus } from 'lucide-react'
import { describe, test, expect, vi } from 'vitest'

import { Button } from './button'

describe('Button', () => {
  describe('rendering', () => {
    test('renders a button element by default', () => {
      render(<Button>Click me</Button>)

      const button = screen.getByRole('button', { name: /click me/i })
      expect(button).toBeInTheDocument()
      expect(button.tagName).toBe('BUTTON')
    })

    test('renders children correctly', () => {
      render(<Button>Test Button</Button>)

      expect(screen.getByText('Test Button')).toBeInTheDocument()
    })

    test('renders as child component when asChild is true', () => {
      render(
        <Button asChild>
          <a href="/test">Link Button</a>
        </Button>,
      )

      const link = screen.getByRole('link', { name: /link button/i })
      expect(link).toBeInTheDocument()
      expect(link.tagName).toBe('A')
      expect(link).toHaveAttribute('href', '/test')
    })
  })

  describe('variants', () => {
    test('applies default variant styles', () => {
      render(<Button>Default Button</Button>)

      const button = screen.getByRole('button')
      expect(button).toHaveClass('bg-primary', 'text-primary-foreground')
    })

    test('applies destructive variant styles', () => {
      render(<Button variant="destructive">Delete</Button>)

      const button = screen.getByRole('button')
      expect(button).toHaveClass('bg-destructive', 'text-white')
    })

    test('applies outline variant styles', () => {
      render(<Button variant="outline">Outline</Button>)

      const button = screen.getByRole('button')
      expect(button).toHaveClass('border', 'bg-background')
    })

    test('applies secondary variant styles', () => {
      render(<Button variant="secondary">Secondary</Button>)

      const button = screen.getByRole('button')
      expect(button).toHaveClass('bg-secondary', 'text-secondary-foreground')
    })

    test('applies ghost variant styles', () => {
      render(<Button variant="ghost">Ghost</Button>)

      const button = screen.getByRole('button')
      expect(button).toHaveClass('hover:bg-accent')
    })

    test('applies link variant styles', () => {
      render(<Button variant="link">Link</Button>)

      const button = screen.getByRole('button')
      expect(button).toHaveClass('text-primary', 'underline-offset-4')
    })
  })

  describe('sizes', () => {
    test('applies default size styles', () => {
      render(<Button>Default Size</Button>)

      const button = screen.getByRole('button')
      expect(button).toHaveClass('h-9', 'px-4', 'py-2')
    })

    test('applies small size styles', () => {
      render(<Button size="sm">Small</Button>)

      const button = screen.getByRole('button')
      expect(button).toHaveClass('h-8', 'px-3')
    })

    test('applies large size styles', () => {
      render(<Button size="lg">Large</Button>)

      const button = screen.getByRole('button')
      expect(button).toHaveClass('h-10', 'px-6')
    })

    test('applies icon size styles', () => {
      render(
        <Button size="icon">
          <Plus className="h-4 w-4" />
        </Button>,
      )

      const button = screen.getByRole('button')
      expect(button).toHaveClass('size-9')
    })
  })

  describe('states', () => {
    test('handles disabled state', () => {
      render(<Button disabled>Disabled Button</Button>)

      const button = screen.getByRole('button')
      expect(button).toBeDisabled()
      expect(button).toHaveClass(
        'disabled:pointer-events-none',
        'disabled:opacity-50',
      )
    })

    test('passes through custom className', () => {
      render(<Button className="custom-class">Custom</Button>)

      const button = screen.getByRole('button')
      expect(button).toHaveClass('custom-class')
    })

    test('includes data-slot attribute', () => {
      render(<Button>Test</Button>)

      const button = screen.getByRole('button')
      expect(button).toHaveAttribute('data-slot', 'button')
    })
  })

  describe('interactions', () => {
    test('handles click events', async () => {
      const user = userEvent.setup()
      const handleClick = vi.fn()

      render(<Button onClick={handleClick}>Click me</Button>)

      const button = screen.getByRole('button')
      await user.click(button)

      expect(handleClick).toHaveBeenCalledTimes(1)
    })

    test('does not trigger click when disabled', async () => {
      const user = userEvent.setup()
      const handleClick = vi.fn()

      render(
        <Button onClick={handleClick} disabled>
          Disabled Button
        </Button>,
      )

      const button = screen.getByRole('button')
      await user.click(button)

      expect(handleClick).not.toHaveBeenCalled()
    })

    test('handles keyboard navigation', async () => {
      const user = userEvent.setup()
      const handleClick = vi.fn()

      render(<Button onClick={handleClick}>Keyboard Button</Button>)

      const button = screen.getByRole('button')
      button.focus()
      await user.keyboard('{Enter}')

      expect(handleClick).toHaveBeenCalledTimes(1)
    })
  })

  describe('accessibility', () => {
    test('has proper button role', () => {
      render(<Button>Accessible Button</Button>)

      const button = screen.getByRole('button')
      expect(button).toBeInTheDocument()
    })

    test('supports custom aria attributes', () => {
      render(
        <Button aria-label="Custom label" aria-describedby="description">
          Button
        </Button>,
      )

      const button = screen.getByRole('button')
      expect(button).toHaveAttribute('aria-label', 'Custom label')
      expect(button).toHaveAttribute('aria-describedby', 'description')
    })

    test('maintains focus styles', () => {
      render(<Button>Focusable Button</Button>)

      const button = screen.getByRole('button')
      expect(button).toHaveClass('focus-visible:ring-ring/50')
    })
  })

  describe('with icons', () => {
    test('renders button with icon', () => {
      render(
        <Button>
          <Plus className="h-4 w-4" />
          Add Item
        </Button>,
      )

      expect(screen.getByText('Add Item')).toBeInTheDocument()
      // Icon should be present (Plus component is rendered)
      expect(screen.getByRole('button')).toBeInTheDocument()
    })

    test('renders icon-only button', () => {
      render(
        <Button size="icon" aria-label="Add">
          <Plus className="h-4 w-4" />
        </Button>,
      )

      const button = screen.getByRole('button', { name: /add/i })
      expect(button).toBeInTheDocument()
      expect(button).toHaveClass('size-9')
    })
  })

  describe('forwarded props', () => {
    test('forwards HTML button props', () => {
      render(
        <Button type="submit" form="test-form" data-testid="submit-button">
          Submit
        </Button>,
      )

      const button = screen.getByTestId('submit-button')
      expect(button).toHaveAttribute('type', 'submit')
      expect(button).toHaveAttribute('form', 'test-form')
    })
  })
})
