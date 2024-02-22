# vite-electron-rui-poc

<a href="https://nikoni.top/rui-next/" target="_blank"><img src="https://img.shields.io/static/v1?label=&message=RUI%20docs%20%26%20demos&color=3366cc" alt="RUI docs & demos" /></a> [![Required Node.JS >= v16.0.0](https://img.shields.io/static/v1?label=node&message=%3E=16.0.0&logo=node.js&color=3f893e&style=flat)](https://nodejs.org/about/releases)

## INTRODUCTION

The HelloWorld demo based on RUI (react-hooks) with Vite 5 and Electron.

> RUI contains Mobile web UI components based on React.

## Project setup

### How to setup your project

Install dependencies (use package manager: [pnpm](https://pnpm.io/))

```bash
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

```bash
pnpm start
```

### Compiles and minifies for production

```bash
pnpm run build
```

build output info (for MacOS)

```
> vite-electron-rui-poc@0.3.5 build /Users/niko/react/vite-electron-rui-poc
> tsc && vite build && electron-builder

vite v5.1.4 building for production...
✓ 94 modules transformed.
dist/index.html                   0.56 kB │ gzip:   0.36 kB
dist/assets/index-DQAnH54z.css   43.30 kB │ gzip:   8.63 kB
dist/assets/index-dATLWMnG.js   419.81 kB │ gzip: 154.43 kB
✓ built in 970ms
vite v5.1.4 building for production...
✓ 2 modules transformed.
dist-electron/main/index.js  2.89 kB │ gzip: 1.24 kB
✓ built in 13ms
vite v5.1.4 building for production...
✓ 1 modules transformed.
dist-electron/preload/index.js  1.57 kB │ gzip: 0.76 kB
✓ built in 5ms
  • electron-builder  version=24.12.0 os=23.3.0
  • loaded configuration  file=/Users/niko/react/vite-electron-rui-poc/electron-builder.json5
  • writing effective config  file=release/0.3.5/builder-effective-config.yaml
  • packaging       platform=darwin arch=arm64 electron=29.0.0 appOutDir=release/0.3.5/mac-arm64
  • skipped macOS application code signing  reason=cannot find valid "Developer ID Application" identity or custom non-Apple code signing certificate, it could cause some undefined behaviour, e.g. macOS localized description not visible, see https://electron.build/code-signing allIdentities=     0 identities found
                                                Valid identities only
     0 valid identities found
  • building        target=DMG arch=arm64 file=release/0.3.5/vite-electron-rui-poc_0.3.5.dmg
  • building        target=macOS zip arch=arm64 file=release/0.3.5/vite-electron-rui-poc_0.3.5.zip
  • Detected arm64 process, HFS+ is unavailable. Creating dmg with APFS - supports Mac OSX 10.12+
  • building block map  blockMapFile=release/0.3.5/vite-electron-rui-poc_0.3.5.dmg.blockmap
  • building block map  blockMapFile=release/0.3.5/vite-electron-rui-poc_0.3.5.zip.blockmap
```

### Customize configuration

About vite and electron, please check Configuration Reference - [vite](https://vitejs.dev/config/) | [electron](https://www.electronjs.org/).

## License

<img src="https://nikoni.top/images/niko-mit-react.png" alt="MIT License" width="396" height="250"/>
