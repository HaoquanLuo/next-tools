import React from 'react'
import dynamic from 'next/dynamic'

import LoadingBox from '@/components/exception/LoadingBox'

interface PageSpeakerBoxProps {}

const SpeakerBox = dynamic(() => import('@/components/common/SpeakerBox'), {
  loading: () => <LoadingBox />,
  ssr: false,
})

const PageSpeakerBox: React.FC<PageSpeakerBoxProps> = () => {
  return (
    <div className={'full grid pic'}>
      <SpeakerBox />
    </div>
  )
}

export default PageSpeakerBox
