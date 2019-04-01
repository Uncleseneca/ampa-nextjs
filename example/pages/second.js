import React from 'react'
import styles from './styles.css'
import Link from 'next/link'

function Second() {
  return (
    <div className={styles.second}>
      second page
      <br />
      <Link href="index">
        <a>first page</a>
      </Link>
    </div>
  )
}

export default Second
