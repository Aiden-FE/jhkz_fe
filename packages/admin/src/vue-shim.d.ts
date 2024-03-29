import { IApiContextType } from '@helper-gdp/utils'
import Vue from 'vue'
import { Api } from '~/plugins/api.plugin'
import { Msg } from '~/plugins/message.plugin'

declare module '*.vue' {
  export default Vue
}

declare module '~/*'
declare module '@/*'

declare module 'vue/types/vue' {
  interface Vue {
    $api: typeof Api & IApiContextType,
    $msg: typeof Msg,
    options: {
      name: string
    }
  }
  interface VueConstructor {
    options: {
      name: string
    }
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $api: typeof Api & IApiContextType,
    $msg: typeof Msg,
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    $api: typeof Api & IApiContextType,
    $msg: typeof Msg,
  }
}
