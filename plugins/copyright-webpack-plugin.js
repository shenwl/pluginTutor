class CopyrightWebpackPlugin {
  constructor(options) {
    this.options = options || {};
  }

  // compiler可以理解为webpack的一个实例
  apply(compiler) {
    console.log(compiler.hooks);
  }
}

module.exports = CopyrightWebpackPlugin;
