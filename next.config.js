/** @type {import('next').NextConfig} */
const {PHASE_DEVELOPMENT_SERVER} = require('next/constants')
module.exports = (phase) => {
  if ( phase === PHASE_DEVELOPMENT_SERVER){
    return {
      reactStrictMode: true,
      env: {
        mongoUri: 'mongodb+srv://test:node@node.lzn3y.mongodb.net/NextJs-dev?retryWrites=true&w=majority'
      }
    }
  }

  return {
    reactStrictMode: true,
    env: {
      mongoUri: 'mongodb+srv://test:node@node.lzn3y.mongodb.net/NextJs?retryWrites=true&w=majority'
    }
  }
}
