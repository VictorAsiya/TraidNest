import React from 'react'
import styles from './footer.module.css'

function Footer() {
  return (
    <footer>
        <div>
          <img src="/favicon.ico" alt="TraidNest" className={styles.logo} />
        </div>

        <div>
            <p>&copy; Victor Asiya</p>
        </div>
    </footer>
  )
}

export default Footer
