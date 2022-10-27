import React from 'react'
import './Spinner.css'

const Spinner: React.FC = () => (
  <svg
    style={{ boxSizing: 'content-box', color: '#24292e' }}
    viewBox="0 0 16 16"
    fill="none"
    width="32"
    height="32"
    className="laststance--github--spinner"
  >
    <circle
      cx="8"
      cy="8"
      r="7"
      stroke="currentColor"
      strokeOpacity="0.25"
      strokeWidth="2"
      vectorEffect="non-scaling-stroke"
    ></circle>
    <path
      d="M15 8a7.002 7.002 0 00-7-7"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      vectorEffect="non-scaling-stroke"
    ></path>
  </svg>
)

export default Spinner
