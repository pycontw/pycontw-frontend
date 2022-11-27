import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import advancedFormat from 'dayjs/plugin/advancedFormat'
import timezone from 'dayjs/plugin/timezone'

dayjs.extend(utc)
dayjs.extend(customParseFormat)
dayjs.extend(advancedFormat)
dayjs.extend(timezone)

const defaultDatetimeOptions = {
    defaultValue: '',
    outputFormat: 'YYYY-MM-DD',
    isLocal: false,
}

export const datetimeToString = (source, options = defaultDatetimeOptions) => {
    if (!source) {
        return options.defaultValue || defaultDatetimeOptions.defaultValue
    }
    const inputFormat = options.inputFormat
    const outputFormat =
        options.outputFormat || defaultDatetimeOptions.outputFormat

    return dayjs(source, inputFormat).format(outputFormat)
}

export const parseDate = (
    source,
    format = defaultDatetimeOptions.inputFormat,
) => dayjs(source, format)

const stringsHelpers = {
    datetimeToString,
    parseDate,
}

export default (context, inject) => {
    Object.keys(stringsHelpers).forEach((pluginName) => {
        inject(pluginName, stringsHelpers[pluginName])
    })
}
