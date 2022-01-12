import React from 'react'
import parse from 'style-to-object'

const SuccessCard = () => (
  <div
    className="flex py-1 px-4 mb-2 font-sans text-sm font-normal tracking-normal leading-normal text-green-200 bg-gray-800 bg-none shadow-none"
    role="alert"
    style={parse(
      'transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms; border-radius: 10px;'
    )}
  >
    <div
      className="flex py-2 px-0 mr-3 text-xl leading-8 text-green-600"
      style={parse('opacity: 0.9;')}
    >
      <svg
        className="inline-block flex-shrink-0 w-4 h-4 leading-7 select-none"
        focusable="false"
        aria-hidden="true"
        viewBox="0 0 24 24"
        data-testid="CheckCircleRoundedIcon"
        style="fill: currentcolor; transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;"
      >
        <path
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9.29 16.29 5.7 12.7a.9959.9959 0 0 1 0-1.41c.39-.39 1.02-.39 1.41 0L10 14.17l6.88-6.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-7.59 7.59c-.38.39-1.02.39-1.41 0z"
          className=""
        ></path>
      </svg>
    </div>
    <div className="py-2 px-0 leading-5">
      <div className="mx-0 mb-1 -mt-px text-sm font-bold leading-normal">
        Thanks! Check your email.
      </div>
      You should get a <strong className="font-bold">confirmation email</strong>{' '}
      soon. Open it up and confirm your email address so that we can keep you up
      to date.
    </div>
  </div>
)

export default SuccessCard
