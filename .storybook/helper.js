const toPath = (_path) => path.join(process.cwd(), _path)

const getConfig = (config) => {
  return {
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve.alias
      }
    }
  }
}

module.exports = getConfig
