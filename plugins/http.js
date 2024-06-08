export default function ({ $http }) {
    const token = process.env.AUTH_TOKEN || ''
    $http.setToken(token, 'Token')
    // Set the host name for the API header for the server side to avoid api 400 error.
    if (process.server && process.env.HOST_NAME) {
        $http.setHeader('Host', process.env.HOST_NAME)
    }
    $http.onError((error) => {
        return error.response.data
    })
}
