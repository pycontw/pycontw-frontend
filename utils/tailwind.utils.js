/**
 * A curry function to create a CSS image URL.
 * Use this when there are a number of images with the same prefix.
 * @param {string} prefix
 * @returns {function(string): string}
 */
const createImgUrl =
    (prefix = '~/static/img/background') =>
    (img) =>
        `url("${prefix}/${img}")`

/**
 * Generate background with image sources
 * @param {Array.<string>} sources - An array of image names
 * @param {string} [prefix] - (Optional) The folder of the images
 * @returns {string}
 */
const generateBgWithSources = (sources, prefix) => {
    const getImg = createImgUrl(prefix)
    return sources.map((src) => getImg(src)).join(',')
}

module.exports = {
    createImgUrl,
    generateBgWithSources,
}
