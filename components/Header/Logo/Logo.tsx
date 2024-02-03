import React from 'react'

import styles from './Logo.module.scss'

const Logo = () => {
  return (
    <div className={styles.logoWrapper}>
      <i className="heartbeat icon"></i>
      <h3 className={styles.nameLogo}>TrainTrack</h3>
    </div>
  )
}

export default Logo
