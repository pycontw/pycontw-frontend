import { breakpointsTailwind } from '@vueuse/core'

export const breakpoints = useBreakpoints(breakpointsTailwind)

export const isMobileScreen = breakpoints.smallerOrEqual('sm')
