'use client'

import React, { useEffect, useRef, useState } from 'react'

type UtteranceSettings = {
  voice: SpeechSynthesisVoice | null
  lang: string
  rate: number
  pitch: number
  volume: number
}

interface PageSpeakerBoxProps {}

const PageSpeakerBox: React.FC<PageSpeakerBoxProps> = () => {
  // hooks
  const selectRef = useRef<HTMLSelectElement>(null)
  const [text, setText] = useState('你好，我是 SpeakerBox')
  const [utteranceSettings, setUtteranceSettings] = useState<UtteranceSettings>(
    {
      lang: 'zh-CN',
      rate: 1,
      pitch: 1,
      volume: 1,
      voice: null,
    }
  )
  const [voiceList, setVoiceList] = useState<SpeechSynthesisVoice[]>([])
  const [isSpeaking, setIsSpeaking] = useState(false)
  // other handles
  const synth = window.speechSynthesis
  // effects
  useEffect(() => {
    function init() {
      const voices = synth.getVoices()
      setVoiceList(voices)
      // initialize the settings' voice
      setUtteranceSettings((state) => {
        return { ...state, voice: voices[0] }
      })
    }
    init()
  }, [synth])
  useEffect(() => {
    // initialize the options of voice
    voiceList.map((voice) => {
      const voiceElement = document.createElement('option')
      voiceElement.textContent = voice.name
      voiceElement.value = voice.name
      selectRef.current?.appendChild(voiceElement)
    })
  }, [voiceList])
  // handler
  function mutateUtterance(utterance: SpeechSynthesisUtterance) {
    utterance.lang = utteranceSettings.lang
    utterance.volume = utteranceSettings.volume
    utterance.pitch = utteranceSettings.pitch
    utterance.rate = utteranceSettings.rate
    utterance.voice = utteranceSettings.voice
    utterance.onend = () => {
      setIsSpeaking(false)
    }
  }
  function handleSwitchSpeaker(e: React.ChangeEvent<HTMLSelectElement>) {
    setUtteranceSettings((state) => {
      const value =
        voiceList.find((voice) => voice.name === e.target.value) ?? null
      return { ...state, voice: value }
    })
  }
  function handleSpeak() {
    if (isSpeaking) {
      return
    }
    const utterance = new SpeechSynthesisUtterance(text)
    mutateUtterance(utterance)
    setIsSpeaking(true)
    synth.speak(utterance)
  }

  return (
    <div className={'full grid pic'}>
      <div className={'w-150 h-120 rd-2 b-2 b-dark flex flex-col gap-3'}>
        <div className={'w-full flex jb'}>
          <div className={'flex gap-1 v-bottom'}>
            <div className={'font-500 text-xl'}>SpeakerBox</div>
            <div className={'text-sm text-light text-op-60'}>文本朗读</div>
          </div>
          <div className={'b-1 flex ic gap-2'}>
            <div className={'v-bottom'}>语音</div>
            <select
              ref={selectRef}
              className={'w-80'}
              onChange={handleSwitchSpeaker}
            ></select>
          </div>
        </div>
        <div className={'flex flex-col gap-1'}>
          <div className={'full'}>
            <textarea
              className={'w-full! h-100 resize-none p-1.5 text-base'}
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div></div>
        </div>
        <div className={'flex jc'}>
          <button onClick={handleSpeak} disabled={isSpeaking}>
            {isSpeaking ? '朗读中...' : '朗读'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default PageSpeakerBox
