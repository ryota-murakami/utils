import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { http, HttpResponse } from 'msw'
import { describe, test, expect, vi } from 'vitest'

import { server } from '../../mocks/server'

import { LoginForm } from './LoginForm'

describe('LoginForm', () => {
  describe('rendering', () => {
    test('renders all form elements', () => {
      render(<LoginForm />)

      expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
      expect(screen.getByLabelText(/password/i)).toBeInTheDocument()
      expect(
        screen.getByRole('button', { name: /sign in/i }),
      ).toBeInTheDocument()
    })

    test('renders with proper form attributes', () => {
      render(<LoginForm />)

      const form = screen.getByRole('form', { name: /login/i })
      expect(form).toBeInTheDocument()
    })

    test('email input has correct type and attributes', () => {
      render(<LoginForm />)

      const emailInput = screen.getByLabelText(/email/i)
      expect(emailInput).toHaveAttribute('type', 'email')
      expect(emailInput).toHaveAttribute('autocomplete', 'email')
    })

    test('password input has correct type and attributes', () => {
      render(<LoginForm />)

      const passwordInput = screen.getByLabelText(/password/i)
      expect(passwordInput).toHaveAttribute('type', 'password')
      expect(passwordInput).toHaveAttribute('autocomplete', 'current-password')
    })
  })

  describe('form validation', () => {
    test('shows validation errors for empty fields', async () => {
      const user = userEvent.setup()
      render(<LoginForm />)

      const submitButton = screen.getByRole('button', { name: /sign in/i })
      await user.click(submitButton)

      expect(await screen.findByText(/email is required/i)).toBeInTheDocument()
      expect(
        await screen.findByText(/password is required/i),
      ).toBeInTheDocument()
    })

    test('shows validation error for short password', async () => {
      const user = userEvent.setup()
      render(<LoginForm />)

      const passwordInput = screen.getByLabelText(/password/i)
      const submitButton = screen.getByRole('button', { name: /sign in/i })

      await user.type(passwordInput, '123')
      await user.click(submitButton)

      expect(
        await screen.findByText(/password must be at least 6 characters/i),
      ).toBeInTheDocument()
    })

    test('clears validation errors when user corrects input', async () => {
      const user = userEvent.setup()
      render(<LoginForm />)

      const emailInput = screen.getByLabelText(/email/i)
      const passwordInput = screen.getByLabelText(/password/i)
      const submitButton = screen.getByRole('button', { name: /sign in/i })

      // Trigger validation error by leaving email empty
      await user.type(passwordInput, 'password123')
      await user.click(submitButton)

      // Should show email validation error
      expect(await screen.findByText(/email is required/i)).toBeInTheDocument()

      // Clear and enter valid email
      await user.type(emailInput, 'test@example.com')
      await user.click(submitButton)

      // Should show success and clear the validation error
      expect(await screen.findByText(/welcome back/i)).toBeInTheDocument()
      expect(screen.queryByText(/email is required/i)).not.toBeInTheDocument()
    })
  })

  describe('form submission', () => {
    test('submits form with valid credentials', async () => {
      const user = userEvent.setup()

      render(<LoginForm />)

      const emailInput = screen.getByLabelText(/email/i)
      const passwordInput = screen.getByLabelText(/password/i)
      const submitButton = screen.getByRole('button', { name: /sign in/i })

      await user.type(emailInput, 'test@example.com')
      await user.type(passwordInput, 'password123')
      await user.click(submitButton)

      // Should show success message
      expect(await screen.findByText(/welcome back/i)).toBeInTheDocument()
    })

    test('disables submit button during loading', async () => {
      const user = userEvent.setup()

      // Mock a delayed response
      server.use(
        http.post('/api/login', async () => {
          await new Promise((resolve) => setTimeout(resolve, 200))
          return HttpResponse.json({
            success: true,
            user: { id: 1, email: 'test@example.com' },
          })
        }),
      )

      render(<LoginForm />)

      const emailInput = screen.getByLabelText(/email/i)
      const passwordInput = screen.getByLabelText(/password/i)
      const submitButton = screen.getByRole('button', { name: /sign in/i })

      await user.type(emailInput, 'test@example.com')
      await user.type(passwordInput, 'password123')
      await user.click(submitButton)

      // Button should be disabled and show loading state
      expect(submitButton).toBeDisabled()
      expect(screen.getByText(/signing in/i)).toBeInTheDocument()

      // Wait for completion and success message
      expect(await screen.findByText(/welcome back/i)).toBeInTheDocument()
    })

    test('shows loading spinner during submission', async () => {
      const user = userEvent.setup()

      // Mock a delayed response
      server.use(
        http.post('/api/login', async () => {
          await new Promise((resolve) => setTimeout(resolve, 200))
          return HttpResponse.json({
            success: true,
            user: { id: 1, email: 'test@example.com' },
          })
        }),
      )

      render(<LoginForm />)

      const emailInput = screen.getByLabelText(/email/i)
      const passwordInput = screen.getByLabelText(/password/i)
      const submitButton = screen.getByRole('button', { name: /sign in/i })

      await user.type(emailInput, 'test@example.com')
      await user.type(passwordInput, 'password123')
      await user.click(submitButton)

      // Should show loading spinner
      expect(
        screen.getByRole('status', { name: /loading/i }),
      ).toBeInTheDocument()

      await waitFor(() => {
        expect(
          screen.queryByRole('status', { name: /loading/i }),
        ).not.toBeInTheDocument()
      })
    })
  })

  describe('error handling', () => {
    test('displays server error message for invalid credentials', async () => {
      const user = userEvent.setup()

      render(<LoginForm />)

      const emailInput = screen.getByLabelText(/email/i)
      const passwordInput = screen.getByLabelText(/password/i)
      const submitButton = screen.getByRole('button', { name: /sign in/i })

      await user.type(emailInput, 'test@example.com')
      await user.type(passwordInput, 'wrongpassword')
      await user.click(submitButton)

      expect(
        await screen.findByText(/invalid credentials/i),
      ).toBeInTheDocument()
      expect(screen.getByRole('alert')).toBeInTheDocument()
    })

    test('displays network error message', async () => {
      const user = userEvent.setup()

      render(<LoginForm />)

      const emailInput = screen.getByLabelText(/email/i)
      const passwordInput = screen.getByLabelText(/password/i)
      const submitButton = screen.getByRole('button', { name: /sign in/i })

      await user.type(emailInput, 'network@error.com')
      await user.type(passwordInput, 'password123')
      await user.click(submitButton)

      expect(await screen.findByText(/network error/i)).toBeInTheDocument()
    })

    test('clears error message on new submission', async () => {
      const user = userEvent.setup()

      render(<LoginForm />)

      const emailInput = screen.getByLabelText(/email/i)
      const passwordInput = screen.getByLabelText(/password/i)
      const submitButton = screen.getByRole('button', { name: /sign in/i })

      // First submission with error
      await user.type(emailInput, 'test@example.com')
      await user.type(passwordInput, 'wrongpassword')
      await user.click(submitButton)

      expect(
        await screen.findByText(/invalid credentials/i),
      ).toBeInTheDocument()

      // Second submission should clear error
      await user.clear(passwordInput)
      await user.type(passwordInput, 'password123')
      await user.click(submitButton)

      await waitFor(() => {
        expect(
          screen.queryByText(/invalid credentials/i),
        ).not.toBeInTheDocument()
      })
    })

    test('handles custom error scenarios with MSW', async () => {
      const user = userEvent.setup()

      // Override handler for this specific test
      server.use(
        http.post('/api/login', () => {
          return HttpResponse.json(
            { message: 'Account locked' },
            { status: 423 },
          )
        }),
      )

      render(<LoginForm />)

      const emailInput = screen.getByLabelText(/email/i)
      const passwordInput = screen.getByLabelText(/password/i)
      const submitButton = screen.getByRole('button', { name: /sign in/i })

      await user.type(emailInput, 'test@example.com')
      await user.type(passwordInput, 'password123')
      await user.click(submitButton)

      expect(await screen.findByText(/account locked/i)).toBeInTheDocument()
    })
  })

  describe('success handling', () => {
    test('displays success message after successful login', async () => {
      const user = userEvent.setup()

      render(<LoginForm />)

      const emailInput = screen.getByLabelText(/email/i)
      const passwordInput = screen.getByLabelText(/password/i)
      const submitButton = screen.getByRole('button', { name: /sign in/i })

      await user.type(emailInput, 'test@example.com')
      await user.type(passwordInput, 'password123')
      await user.click(submitButton)

      expect(await screen.findByText(/welcome back/i)).toBeInTheDocument()
    })

    test('calls onSuccess callback when provided', async () => {
      const user = userEvent.setup()
      const onSuccess = vi.fn()

      render(<LoginForm onSuccess={onSuccess} />)

      const emailInput = screen.getByLabelText(/email/i)
      const passwordInput = screen.getByLabelText(/password/i)
      const submitButton = screen.getByRole('button', { name: /sign in/i })

      await user.type(emailInput, 'test@example.com')
      await user.type(passwordInput, 'password123')
      await user.click(submitButton)

      await waitFor(() => {
        expect(onSuccess).toHaveBeenCalledWith({
          id: 1,
          email: 'test@example.com',
        })
      })
    })
  })

  describe('accessibility', () => {
    test('associates error messages with form fields', async () => {
      const user = userEvent.setup()
      render(<LoginForm />)

      const emailInput = screen.getByLabelText(/email/i)
      const submitButton = screen.getByRole('button', { name: /sign in/i })

      await user.click(submitButton)

      const errorMessage = await screen.findByText(/email is required/i)
      const errorId = errorMessage.getAttribute('id')

      expect(emailInput).toHaveAttribute('aria-describedby', errorId)
      expect(emailInput).toHaveAttribute('aria-invalid', 'true')
    })

    test('announces errors to screen readers', async () => {
      const user = userEvent.setup()
      render(<LoginForm />)

      const submitButton = screen.getByRole('button', { name: /sign in/i })
      await user.click(submitButton)

      const errorRegions = await screen.findAllByRole('alert')
      expect(errorRegions).toHaveLength(2) // email and password errors
      expect(errorRegions[0]).toBeInTheDocument()
      expect(errorRegions[1]).toBeInTheDocument()
    })

    test('provides proper focus management', async () => {
      const user = userEvent.setup()
      render(<LoginForm />)

      const emailInput = screen.getByLabelText(/email/i)
      const passwordInput = screen.getByLabelText(/password/i)

      // Tab navigation should work properly
      await user.tab()
      expect(emailInput).toHaveFocus()

      await user.tab()
      expect(passwordInput).toHaveFocus()

      await user.tab()
      expect(screen.getByRole('button', { name: /sign in/i })).toHaveFocus()
    })
  })

  describe('keyboard navigation', () => {
    test('submits form when Enter is pressed in form fields', async () => {
      const user = userEvent.setup()

      render(<LoginForm />)

      const emailInput = screen.getByLabelText(/email/i)
      const passwordInput = screen.getByLabelText(/password/i)

      await user.type(emailInput, 'test@example.com')
      await user.type(passwordInput, 'password123')
      await user.keyboard('{Enter}')

      expect(await screen.findByText(/welcome back/i)).toBeInTheDocument()
    })
  })
})
