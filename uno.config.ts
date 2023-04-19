import { defineConfig, presetMini, presetIcons, presetUno } from 'unocss'

export default defineConfig({
  presets: [
    presetIcons({
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle',
        margin: '5px',
      },
    }),
    presetMini({
      dark: 'class',
    }),
    presetUno(),
  ],
  shortcuts: {
    full: 'w-full h-full',
    fit: 'w-fit h-fit',
    max: 'w-max h-max',
    min: 'w-min h-min',
    ofh: 'overflow-hidden',
    ja: 'justify-around',
    jb: 'justify-between',
    jc: 'justify-center',
    je: 'justify-evenly',
    jn: 'justify-end',
    ca: 'content-around',
    cb: 'content-between',
    cc: 'content-center',
    ce: 'content-evenly',
    cn: 'content-end',
    ic: 'items-center',
    pic: 'place-items-center',
    'text-fade': 'text-light text-op-70',
    active: 'before:content-empty before:absolute before:bg-red-600 before:rd',
    activeLeft:
      'active bg-light bg-op-20 before:left-1 before:w-1 before:h-70% before:translate-y-20%',
    activeBottom: 'active before:bottom--2 before:w-full before:h-0.75',
    bgHighlight: 'hover:bg-light hover:bg-op-20',
  },
})
