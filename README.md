![pycontw-frontend ci](https://github.com/pycontw/pycontw-frontend/actions/workflows/ci.yml/badge.svg)
![pycontw-frontend cd](https://github.com/pycontw/pycontw-frontend/actions/workflows/cd.yml/badge.svg)
![nuxt](https://img.shields.io/badge/Framework-Nuxt.js-04C58E.svg)

# pycontw-frontend

Frontend of PyCon TW official website.

## Set up a Development Environment

### Requirements

- node >= 14.21.3

> You can refer to `package.json` file for more details.

### Method 1: `Develop on your local machine`

1. Clone this repository.
2. Add Environment Variables to configure this project:

    ```bash
    export BUILD_TARGET=server
    export HOST=127.0.0.1
    export BASE_URL=http://127.0.0.1:9876
    export API_URL_BROWSER=http://127.0.0.1:9876
    export VUE_DEVTOOL=true
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Serve with hot reload at `localhost:3000`:

    ```bash
    npm run dev
    ```

5. Also, we have mock server to handle API on local:

    ```bash
    # You need to add Environment Variables(Step.2). Otherwise, some of the pages may not work correctly.
    npm run json-server
    ```

### Method 2: `Run Development Server with Docker`

1. Clone this repository.
2. Simply run the docker-compose commands to launch or stop the mock API server & the dev server:


```bash
# Launch the dev server and the mock API server
docker-compose -f ./docker-compose-dev.yml up

# Stop the dev server and the mock API server
docker-compose -f ./docker-compose-dev.yml down
```

## Start to contribute

- You can choose method 1 or method 2 to build setup, then you can start to contribute. 🙌
- Please follow [Github Flow](https://guides.github.com/introduction/flow/).

## Build for production and launch server

```bash
npm run build
npm run start

# Or just run:
npm run serve
```

**Note:** Make sure the `.env` file has the correct `API_URL_BROWSER` value when building for different environments (e.g., staging and production).

## Generate static project

```bash
npm run generate
```
### Archiving the Historical PyCon TW Website

<details>
1. Check out the uptodate branch like `pycontw-2021` or `pycontw-2022`.

```bash
git checkout pycontw-2021
```
2. (Optional) Install dependencies

```bash
npm i
```

3. Edit `nuxt.config.js` and set `DEFAULT_BASE_URL` to the corresponding API endpoint like `https://tw.pycon.org/prs`.

4. Generate static project

```bash
ROUTER_BASE="/2021/" npm run generate
```
</details>

## Check your code:

```bash
npm run lint
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
