import React from 'react'
import styles from './styles.css'
import Link from 'next/link'

function First() {
  return (
    <div className={styles.first}>
      first page <br />
      <Link href="second">
        <a>second page</a>
      </Link>
    </div>
  )
}

export default First
