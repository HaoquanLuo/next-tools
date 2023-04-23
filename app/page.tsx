import { Inter } from 'next/font/google'
import Link from 'next/link'
import styles from '@/app/page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={inter.className}>
      <div className={styles.main}>
        <div className={styles.grid}>
          <Link href={'/speakerbox'}>
            <div className={styles.card}>
              <div className={'text-2xl font-600'}>SpeakerBox</div>
              <p>文字朗读工具</p>
            </div>
          </Link>
          <Link href={'/'}>
            <div className={styles.card}>
              <div className={'text-2xl font-600'}>敬请期待</div>
              <p>更多实用的工具</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
