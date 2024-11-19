import antfu from '@antfu/eslint-config'
import antfuOptions from '~/rules/antfuOptions.ts'
import configBase from '~/rules/configBase.ts'
import configTailwind from '~/rules/configTailwind.ts'
import configVue from '~/rules/configVue.ts'

const thecodingmontana = (options, ...configs) => {
  return antfu(
    // @antfu/eslint-config options, must be the first argument
    {
      ...antfuOptions,
      ...options,
    },
    // Addtionals flat configs start from here
    sbConfigBase,
    ...configs,
  )
}

const vue = configVue
const tailwind = configTailwind

export {
  thecodingmontana,
  tailwind,
  vue,
}
