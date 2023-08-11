import React from 'react'
import './NuShell.css'
export const Nushell: React.FC = () => (
  <>
    <div id="app">
      {/*[*/}
      <div className="theme-container no-sidebar">
        {/*[*/}
        <header className="navbar">
          <div
            className="toggle-sidebar-button"
            title="toggle sidebar"
            aria-expanded="false"
            role="button"
            tabIndex={0}
          >
            <div className="icon" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
          </div>
          <span>
            <a
              aria-current="page"
              href="https://www.nushell.sh/"
              className="router-link-active router-link-exact-active"
            >
              {/**/}
              <span className="site-name">Nushell</span>
            </a>
          </span>
          <div className="navbar-items-wrapper" style={{ maxWidth: 1673 }}>
            {/*[*/}
            {/*]*/}
            <nav className="navbar-items can-hide">
              {/*[*/}
              <div className="navbar-item">
                <a href="https://www.nushell.sh/book/" aria-label="Book">
                  {/*[*/}
                  {/*]*/} Book
                  {/*[*/}
                  {/*]*/}
                </a>
              </div>
              <div className="navbar-item">
                <a
                  href="https://www.nushell.sh/commands/"
                  aria-label="Commands"
                >
                  {/*[*/}
                  {/*]*/} Commands
                  {/*[*/}
                  {/*]*/}
                </a>
              </div>
              <div className="navbar-item">
                <a
                  href="https://www.nushell.sh/cookbook/"
                  className=""
                  aria-label="Cookbook"
                >
                  {/*[*/}
                  {/*]*/} Cookbook
                  {/*[*/}
                  {/*]*/}
                </a>
              </div>
              <div className="navbar-item">
                <a
                  href="https://www.nushell.sh/blog/"
                  className=""
                  aria-label="Changelog"
                >
                  {/*[*/}
                  {/*]*/} Changelog
                  {/*[*/}
                  {/*]*/}
                </a>
              </div>
              <div className="navbar-item">
                <div className="navbar-dropdown-wrapper">
                  <button
                    className="navbar-dropdown-title"
                    type="button"
                    aria-label="Select language"
                  >
                    <span className="title">Languages</span>
                    <span className="arrow down" />
                  </button>
                  <button
                    className="navbar-dropdown-title-mobile"
                    type="button"
                    aria-label="Select language"
                  >
                    <span className="title">Languages</span>
                    <span className="right arrow" />
                  </button>
                  <ul style={{ display: 'none' }} className="navbar-dropdown">
                    {/*[*/}
                    <li className="navbar-dropdown-item">
                      <a
                        aria-current="page"
                        href="https://www.nushell.sh/"
                        className="router-link-active router-link-exact-active"
                        aria-label="English"
                      >
                        {/*[*/}
                        {/*]*/} English
                        {/*[*/}
                        {/*]*/}
                      </a>
                    </li>
                    <li className="navbar-dropdown-item">
                      <a
                        href="https://www.nushell.sh/zh-CN/"
                        className=""
                        aria-label="中文"
                      >
                        {/*[*/}
                        {/*]*/} 中文
                        {/*[*/}
                        {/*]*/}
                      </a>
                    </li>
                    <li className="navbar-dropdown-item">
                      <a
                        href="https://www.nushell.sh/de/"
                        className=""
                        aria-label="Deutsch"
                      >
                        {/*[*/}
                        {/*]*/} Deutsch
                        {/*[*/}
                        {/*]*/}
                      </a>
                    </li>
                    <li className="navbar-dropdown-item">
                      <a
                        href="https://www.nushell.sh/es/"
                        className=""
                        aria-label="Español"
                      >
                        {/*[*/}
                        {/*]*/} Español
                        {/*[*/}
                        {/*]*/}
                      </a>
                    </li>
                    <li className="navbar-dropdown-item">
                      <a
                        href="https://www.nushell.sh/ja/"
                        className=""
                        aria-label="日本語"
                      >
                        {/*[*/}
                        {/*]*/} 日本語
                        {/*[*/}
                        {/*]*/}
                      </a>
                    </li>
                    <li className="navbar-dropdown-item">
                      <a
                        href="https://www.nushell.sh/pt-BR/"
                        className=""
                        aria-label="Português do Brasil"
                      >
                        {/*[*/}
                        {/*]*/} Português do Brasil
                        {/*[*/}
                        {/*]*/}
                      </a>
                    </li>
                    {/*]*/}
                  </ul>
                </div>
              </div>
              <div className="navbar-item">
                <a
                  className="external-link"
                  href="https://github.com/nushell/nushell"
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label="GitHub"
                >
                  {/*[*/}
                  {/*]*/} GitHub{' '}
                  <span>
                    <svg
                      className="external-link-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      focusable="false"
                      x="0px"
                      y="0px"
                      viewBox="0 0 100 100"
                      width={15}
                      height={15}
                    >
                      <path
                        fill="currentColor"
                        d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
                      />
                      <polygon
                        fill="currentColor"
                        points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
                      />
                    </svg>
                    <span className="external-link-icon-sr-only">
                      open in new window
                    </span>
                  </span>
                  {/*[*/}
                  {/*]*/}
                </a>
              </div>
              {/*]*/}
            </nav>
            {/*[*/}
            {/*]*/}
            <button
              className="toggle-color-mode-button"
              title="toggle color mode"
            >
              <svg
                style={{ display: 'none' }}
                className="icon"
                focusable="false"
                viewBox="0 0 32 32"
              >
                <path
                  d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z"
                  fill="currentColor"
                />
                <path
                  d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z"
                  fill="currentColor"
                />
                <path d="M2 15.005h5v2H2z" fill="currentColor" />
                <path
                  d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z"
                  fill="currentColor"
                />
                <path d="M15 25.005h2v5h-2z" fill="currentColor" />
                <path
                  d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z"
                  fill="currentColor"
                />
                <path d="M25 15.005h5v2h-5z" fill="currentColor" />
                <path
                  d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z"
                  fill="currentColor"
                />
                <path d="M15 2.005h2v5h-2z" fill="currentColor" />
              </svg>
              <svg
                style={{}}
                className="icon"
                focusable="false"
                viewBox="0 0 32 32"
              >
                <path
                  d="M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z"
                  fill="currentColor"
                />
              </svg>
            </button>
            {/*[*/}
            <div id="docsearch-container" style={{ display: 'none' }} />
            <div>
              <button
                type="button"
                className="DocSearch DocSearch-Button"
                aria-label="Search"
              >
                <span className="DocSearch-Button-Container">
                  <svg
                    width={20}
                    height={20}
                    className="DocSearch-Search-Icon"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z"
                      stroke="currentColor"
                      fill="none"
                      fillRule="evenodd"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="DocSearch-Button-Placeholder">Search</span>
                </span>
                <span className="DocSearch-Button-Keys">
                  <kbd className="DocSearch-Button-Key">
                    <svg
                      width={15}
                      height={15}
                      className="DocSearch-Control-Key-Icon"
                    >
                      <path
                        d="M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953"
                        strokeWidth="1.2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="square"
                      />
                    </svg>
                  </kbd>
                  <kbd className="DocSearch-Button-Key">K</kbd>
                </span>
              </button>
            </div>
            {/*]*/}
          </div>
        </header>
        {/*]*/}
        <div className="sidebar-mask" />
        {/*[*/}
        <aside className="sidebar">
          <nav className="navbar-items">
            {/*[*/}
            <div className="navbar-item">
              <a
                href="https://www.nushell.sh/book/"
                className=""
                aria-label="Book"
              >
                {/*[*/}
                {/*]*/} Book
                {/*[*/}
                {/*]*/}
              </a>
            </div>
            <div className="navbar-item">
              <a
                href="https://www.nushell.sh/commands/"
                className=""
                aria-label="Commands"
              >
                {/*[*/}
                {/*]*/} Commands
                {/*[*/}
                {/*]*/}
              </a>
            </div>
            <div className="navbar-item">
              <a
                href="https://www.nushell.sh/cookbook/"
                className=""
                aria-label="Cookbook"
              >
                {/*[*/}
                {/*]*/} Cookbook
                {/*[*/}
                {/*]*/}
              </a>
            </div>
            <div className="navbar-item">
              <a
                href="https://www.nushell.sh/blog/"
                className=""
                aria-label="Changelog"
              >
                {/*[*/}
                {/*]*/} Changelog
                {/*[*/}
                {/*]*/}
              </a>
            </div>
            <div className="navbar-item">
              <div className="navbar-dropdown-wrapper">
                <button
                  className="navbar-dropdown-title"
                  type="button"
                  aria-label="Select language"
                >
                  <span className="title">Languages</span>
                  <span className="arrow down" />
                </button>
                <button
                  className="navbar-dropdown-title-mobile"
                  type="button"
                  aria-label="Select language"
                >
                  <span className="title">Languages</span>
                  <span className="right arrow" />
                </button>
                <ul style={{ display: 'none' }} className="navbar-dropdown">
                  {/*[*/}
                  <li className="navbar-dropdown-item">
                    <a
                      aria-current="page"
                      href="https://www.nushell.sh/"
                      className="router-link-active router-link-exact-active"
                      aria-label="English"
                    >
                      {/*[*/}
                      {/*]*/} English
                      {/*[*/}
                      {/*]*/}
                    </a>
                  </li>
                  <li className="navbar-dropdown-item">
                    <a
                      href="https://www.nushell.sh/zh-CN/"
                      className=""
                      aria-label="中文"
                    >
                      {/*[*/}
                      {/*]*/} 中文
                      {/*[*/}
                      {/*]*/}
                    </a>
                  </li>
                  <li className="navbar-dropdown-item">
                    <a
                      href="https://www.nushell.sh/de/"
                      className=""
                      aria-label="Deutsch"
                    >
                      {/*[*/}
                      {/*]*/} Deutsch
                      {/*[*/}
                      {/*]*/}
                    </a>
                  </li>
                  <li className="navbar-dropdown-item">
                    <a
                      href="https://www.nushell.sh/es/"
                      className=""
                      aria-label="Español"
                    >
                      {/*[*/}
                      {/*]*/} Español
                      {/*[*/}
                      {/*]*/}
                    </a>
                  </li>
                  <li className="navbar-dropdown-item">
                    <a
                      href="https://www.nushell.sh/ja/"
                      className=""
                      aria-label="日本語"
                    >
                      {/*[*/}
                      {/*]*/} 日本語
                      {/*[*/}
                      {/*]*/}
                    </a>
                  </li>
                  <li className="navbar-dropdown-item">
                    <a
                      href="https://www.nushell.sh/pt-BR/"
                      className=""
                      aria-label="Português do Brasil"
                    >
                      {/*[*/}
                      {/*]*/} Português do Brasil
                      {/*[*/}
                      {/*]*/}
                    </a>
                  </li>
                  {/*]*/}
                </ul>
              </div>
            </div>
            <div className="navbar-item">
              <a
                className="external-link"
                href="https://github.com/nushell/nushell"
                rel="noopener noreferrer"
                target="_blank"
                aria-label="GitHub"
              >
                {/*[*/}
                {/*]*/} GitHub{' '}
                <span>
                  <svg
                    className="external-link-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    focusable="false"
                    x="0px"
                    y="0px"
                    viewBox="0 0 100 100"
                    width={15}
                    height={15}
                  >
                    <path
                      fill="currentColor"
                      d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
                    />
                    <polygon
                      fill="currentColor"
                      points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
                    />
                  </svg>
                  <span className="external-link-icon-sr-only">
                    open in new window
                  </span>
                </span>
                {/*[*/}
                {/*]*/}
              </a>
            </div>
            {/*]*/}
          </nav>
          {/*[*/}
          {/*]*/}
          {/**/}
          {/*[*/}
          {/*]*/}
        </aside>
        {/*]*/}
        {/*[*/}
        <main className="home">
          <header className="hero">
            {/**/}
            <h1 id="main-title" className="">
              Nushell
            </h1>
            <p className="description">A new type of shell</p>
            {/**/}
          </header>
          <div className="features">
            {/*[*/}
            <div className="feature">
              <h2 className="">Pipelines to control any OS</h2>
              <p className="">
                Nu works on Linux, macOS, BSD, and Windows. Learn it once, then
                use it anywhere.
              </p>
            </div>
            <div className="feature">
              <h2>Everything is data</h2>
              <p className="">
                Nu pipelines use structured data so you can safely select,
                filter, and sort the same way every time. Stop parsing strings
                and start solving problems.
              </p>
            </div>
            <div className="feature">
              <h2>Powerful plugins</h2>
              <p>It's easy to extend Nu using a powerful plugin system.</p>
            </div>
            {/*]*/}
          </div>
          <div className="theme-default-content">
            <div className="">
              <img
                src="https://www.nushell.sh/frontpage/ls-example.png"
                alt="Screenshot showing using the ls command"
                className="hero medium-zoom-image"
              />
              <h3 id="nu-works-with-existing-data" tabIndex={-1} className="">
                <a
                  className="header-anchor"
                  href="https://www.nushell.sh/#nu-works-with-existing-data"
                  aria-hidden="true"
                >
                  #
                </a>{' '}
                Nu works with existing data
              </h3>
              <p>
                Nu speaks{' '}
                <a
                  href="https://www.nushell.sh/book/loading_data.html"
                  className=""
                >
                  JSON, YAML, SQLite, Excel, and more
                </a>{' '}
                out of the box. It's easy to bring data into a Nu pipeline
                whether it's in a file, a database, or a web API:
              </p>
              <img
                src="https://www.nushell.sh/frontpage/fetch-example.png"
                alt="Screenshot showing fetch with a web API"
                className="hero medium-zoom-image"
              />
              <h3 id="nu-has-great-error-messages" tabIndex={-1}>
                <a
                  className="header-anchor"
                  href="https://www.nushell.sh/#nu-has-great-error-messages"
                  aria-hidden="true"
                >
                  #
                </a>{' '}
                Nu has great error messages
              </h3>
              <p>
                Nu operates on typed data, so it catches bugs that other shells
                don't. And when things break, Nu tells you exactly where and
                why:
              </p>
              <img
                src="https://www.nushell.sh/frontpage/miette-example.png"
                alt="Screenshot showing Nu catching a type error"
                className="hero medium-zoom-image"
              />
              <h2 id="get-nu" tabIndex={-1}>
                <a
                  className="header-anchor"
                  href="https://www.nushell.sh/#get-nu"
                  aria-hidden="true"
                >
                  #
                </a>{' '}
                Get Nu
              </h2>
              <p>
                Nushell is available as{' '}
                <a
                  href="https://github.com/nushell/nushell/releases"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  downloadable binaries
                  <span>
                    <svg
                      className="external-link-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      focusable="false"
                      x="0px"
                      y="0px"
                      viewBox="0 0 100 100"
                      width={15}
                      height={15}
                    >
                      <path
                        fill="currentColor"
                        d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
                      />
                      <polygon
                        fill="currentColor"
                        points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
                      />
                    </svg>
                    <span className="external-link-icon-sr-only">
                      open in new window
                    </span>
                  </span>
                </a>
                ,{' '}
                <a
                  href="https://repology.org/project/nushell/versions"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  via your favourite package manager
                  <span>
                    <svg
                      className="external-link-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      focusable="false"
                      x="0px"
                      y="0px"
                      viewBox="0 0 100 100"
                      width={15}
                      height={15}
                    >
                      <path
                        fill="currentColor"
                        d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
                      />
                      <polygon
                        fill="currentColor"
                        points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
                      />
                    </svg>
                    <span className="external-link-icon-sr-only">
                      open in new window
                    </span>
                  </span>
                </a>
                , in{' '}
                <a
                  href="https://github.com/marketplace/actions/setup-nu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  a GitHub Action
                  <span>
                    <svg
                      className="external-link-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      focusable="false"
                      x="0px"
                      y="0px"
                      viewBox="0 0 100 100"
                      width={15}
                      height={15}
                    >
                      <path
                        fill="currentColor"
                        d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
                      />
                      <polygon
                        fill="currentColor"
                        points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
                      />
                    </svg>
                    <span className="external-link-icon-sr-only">
                      open in new window
                    </span>
                  </span>
                </a>
                , and as{' '}
                <a
                  href="https://github.com/nushell/nushell"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  source code
                  <span>
                    <svg
                      className="external-link-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      focusable="false"
                      x="0px"
                      y="0px"
                      viewBox="0 0 100 100"
                      width={15}
                      height={15}
                    >
                      <path
                        fill="currentColor"
                        d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
                      />
                      <polygon
                        fill="currentColor"
                        points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
                      />
                    </svg>
                    <span className="external-link-icon-sr-only">
                      open in new window
                    </span>
                  </span>
                </a>
                . Read{' '}
                <a
                  href="https://www.nushell.sh/book/installation.html"
                  className=""
                >
                  the detailed installation instructions
                </a>{' '}
                or dive right in:
              </p>
              <h4 id="macos-linux" tabIndex={-1}>
                <a
                  className="header-anchor"
                  href="https://www.nushell.sh/#macos-linux"
                  aria-hidden="true"
                >
                  #
                </a>{' '}
                macOS / Linux:
              </h4>
              <div className="language-console" data-ext="console">
                <pre className="language-console">
                  <code>$ brew install nushell{'\n'}</code>
                </pre>
              </div>
              <h4 id="windows" tabIndex={-1}>
                <a
                  className="header-anchor"
                  href="https://www.nushell.sh/#windows"
                  aria-hidden="true"
                >
                  #
                </a>{' '}
                Windows:
              </h4>
              <div className="language-console" data-ext="console">
                <pre className="language-console">
                  <code>$ winget install nushell{'\n'}</code>
                </pre>
              </div>
              <p>
                After installing, launch Nu by typing <code>nu</code>.
              </p>
              <h2 id="community" tabIndex={-1}>
                <a
                  className="header-anchor"
                  href="https://www.nushell.sh/#community"
                  aria-hidden="true"
                >
                  #
                </a>{' '}
                Community
              </h2>
              <p>
                Join us{' '}
                <a
                  href="https://discord.gg/NtAbbGn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  on Discord
                  <span>
                    <svg
                      className="external-link-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      focusable="false"
                      x="0px"
                      y="0px"
                      viewBox="0 0 100 100"
                      width={15}
                      height={15}
                    >
                      <path
                        fill="currentColor"
                        d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
                      />
                      <polygon
                        fill="currentColor"
                        points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
                      />
                    </svg>
                    <span className="external-link-icon-sr-only">
                      open in new window
                    </span>
                  </span>
                </a>{' '}
                if you have any questions about Nu!
              </p>
              <p>
                You can help improve this site by{' '}
                <a
                  href="https://github.com/nushell/nushell.github.io/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  giving us feedback
                  <span>
                    <svg
                      className="external-link-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      focusable="false"
                      x="0px"
                      y="0px"
                      viewBox="0 0 100 100"
                      width={15}
                      height={15}
                    >
                      <path
                        fill="currentColor"
                        d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
                      />
                      <polygon
                        fill="currentColor"
                        points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
                      />
                    </svg>
                    <span className="external-link-icon-sr-only">
                      open in new window
                    </span>
                  </span>
                </a>{' '}
                or{' '}
                <a
                  href="https://github.com/nushell/nushell.github.io/pulls"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  sending a PR
                  <span>
                    <svg
                      className="external-link-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      focusable="false"
                      x="0px"
                      y="0px"
                      viewBox="0 0 100 100"
                      width={15}
                      height={15}
                    >
                      <path
                        fill="currentColor"
                        d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
                      />
                      <polygon
                        fill="currentColor"
                        points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
                      />
                    </svg>
                    <span className="external-link-icon-sr-only">
                      open in new window
                    </span>
                  </span>
                </a>
                .
              </p>
            </div>
          </div>
          {/**/}
        </main>
        {/*]*/}
      </div>
      {/**/}
      {/*]*/}
    </div>
    <div
      data-tippy-root=""
      id="tippy-21"
      style={{
        inset: 'auto auto 0px 0px',
        margin: 0,
        pointerEvents: 'none',
        position: 'absolute',
        transform: 'translate3d(572px, -868px, 0px)',
        visibility: 'hidden',
        zIndex: 9999,
      }}
    >
      <div
        className="tippy-box"
        data-state="hidden"
        tabIndex={-1}
        data-theme="css-pro-tippy-with-dropdown"
        data-animation="fade"
        role="tooltip"
        data-placement="top"
        style={{ maxWidth: 350, transitionDuration: '250ms' }}
      >
        <div
          className="tippy-content"
          data-state="hidden"
          style={{ transitionDuration: '250ms' }}
        ></div>
      </div>
    </div>
  </>
)
