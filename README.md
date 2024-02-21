# vite-electron-rui-poc

<a href="https://nikoni.top/rui-next/" target="_blank"><img src="https://img.shields.io/static/v1?label=&message=RUI%20docs%20%26%20demos&color=3366cc" alt="RUI docs & demos" /></a> [![Required Node.JS >= v16.0.0](https://img.shields.io/static/v1?label=node&message=%3E=16.0.0&logo=node.js&color=3f893e&style=flat)](https://nodejs.org/about/releases)

## INTRODUCTION

The HelloWorld demo based on RUI (react-hooks) with Vite 5 and Electron.

> RUI contains Mobile web UI components based on React.

## Project setup

### How to setup your project

Install dependencies (use package manager: [pnpm](https://pnpm.io/))

```
pnpm i
```

> To resolve Electron specific `npm` install issue from China (Mainland),
> please use `cnpm` instead, the registry of `cnpm`: `https://registry.npmmirror.com`.
>
> npm i -g cnpm
>
> cnpm i -D electron
>
> To resolve Electron build issue (zip-download-timeout) from China (Mainland),
> please put `electron-vX.Y.Z-darwin-arm64.zip` manually into the cache folder `~/Library/Caches/electron/`.

### Compiles and hot-reloads for development

```
pnpm start
```

### Compiles and minifies for production

```
pnpm run build
```

### Customize configuration

About vite and electron, please check Configuration Reference - [vite](https://vitejs.dev/config/) | [electron](https://www.electronjs.org/).

## License

<img src="https://nikoni.top/images/niko-mit-react.png" alt="MIT License" width="396" height="250"/>
