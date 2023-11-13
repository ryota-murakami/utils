import { Component } from 'react'

import { Link } from '../components/Link'
import { Page } from '../components/Page'

import styles from './index.module.css'

class Index extends Component {
  render() {
    return (
      <Page.Container>
        <header className={styles.header}>
          <h1 className={styles.h1}>React Client Utils</h1>
        </header>
        <main className={styles.main}>
          <Link to="/workflow">Workflow</Link>
          <Link to="/react-hook-form">ReactHookForm</Link>
        </main>
      </Page.Container>
    )
  }
}

export default Index
