export default function ({ $http }) {
    const token = process.env.AUTH_TOKEN || ''
    $http.setToken(token, 'Token')
    if (process.env.DEPLOY_ENV) {
        $http.setHeader('Host', process.env.DEPLOY_ENV)
    }
    $http.onError((error) => {
        return error.response.data
    })
}
