import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import customParseFormat from 'dayjs/plugin/customParseFormat'

dayjs.extend(utc)
dayjs.extend(customParseFormat)

const defaultDatetimeOptions = {
    defaultValue: '',
    outputFormat: 'YYYY-MM-DD',
    inputFormat: 'YYYY-MM-DD HH:mm:ssZ',
    isLocal: false,
}

export const padTimezone = (time) => `${time}Z`

export const datetimeToString = (source, options = defaultDatetimeOptions) => {
    if (!source) {
        return options.defaultValue || defaultDatetimeOptions.defaultValue
    }
    const inputFormat =
        options.inputFormat || defaultDatetimeOptions.inputFormat
    const outputFormat =
        options.outputFormat || defaultDatetimeOptions.outputFormat

    const offset = new Date().getTimezoneOffset()
    return dayjs(source, inputFormat).subtract(offset, 'm').format(outputFormat)
}

export const parseDate = (
    source,
    format = defaultDatetimeOptions.inputFormat,
) => dayjs(source, format)

const stringsHelpers = {
    padTimezone,
    datetimeToString,
    parseDate,
}

export default (context, inject) => {
    Object.keys(stringsHelpers).forEach((pluginName) => {
        inject(pluginName, stringsHelpers[pluginName])
    })
}
