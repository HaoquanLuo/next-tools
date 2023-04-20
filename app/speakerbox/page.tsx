import React from 'react'
import SpeakerBox from '@/components/SpeakerBox'
interface PageSpeakerBoxProps {}

const PageSpeakerBox: React.FC<PageSpeakerBoxProps> = () => {
  return (
    <div className={'full grid pic'}>
      <SpeakerBox />
    </div>
  )
}

export default PageSpeakerBox
