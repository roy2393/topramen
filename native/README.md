# Mystique

Monorepo for client facing app. It includes codebase for Web, Android and IOS.

# Installation

## Android

1. Make a .evn file in native/ folder
2. Add below snipper in .env file
```
IS_PRODUCTION=false
API_HOST=<ip-for-mock-server>
```

```bash
#Setup steps
yarn install
cd commons && yarn && cd ..
cd native && yarn && cd ..

#Run steps
// Run Mock server from root folder
yarn run mock

// Start Packager
cd native && yarn run start

// Run dev build
yarn run android
```