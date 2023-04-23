import React from 'react'

interface LoadingBoxProps {}

const LoadingBox: React.FC<LoadingBoxProps> = () => {
  return (
    <div className={'grid pic'}>
      <div className={'text-2xl font-500'}>Loading...</div>
    </div>
  )
}

export default LoadingBox
