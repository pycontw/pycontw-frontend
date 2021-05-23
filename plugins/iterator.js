import { v4 as uuidV4 } from 'uuid'

const iteratorHelpers = {
    makeKey(index, ...prefixes) {
        return `${prefixes.join('_')}_${index}`
    },
    makeId: uuidV4,
}

// See: https://nuxtjs.org/docs/2.x/directory-structure/plugins
export default (context, inject) => {
    Object.keys(iteratorHelpers).forEach((pluginName) => {
        inject(pluginName, iteratorHelpers[pluginName])
    })
}
