'use strict'
const url = require('url')

module.exports = (req, res, next) => {
    // enable inserting a comma-separated string as
    // multi-value query parameters for event type
    const eventType = req.query.event_type
    if (eventType && !Array.isArray(eventType)) {
        req.query.event_type = eventType.split(',')
    }

    // return Object instead of Array if the singular flag is given
    const _send = res.send
    res.send = function (body) {
        // eslint-disable-next-line
        const parsedUrl = url.parse(req.url, true)
        if (parsedUrl.query.singular) {
            try {
                const json = JSON.parse(body)
                if (Array.isArray(json)) {
                    if (json.length === 1) {
                        return _send.call(this, json[0])
                    } else if (json.length === 0) {
                        return _send.call(this, {}, 404)
                    }
                }
            } catch (e) {}
        }
        return _send.call(this, body)
    }
    next()
}
