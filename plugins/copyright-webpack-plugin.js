class CopyrightWebpackPlugin {
  constructor(options) {
    this.options = options || {};
  }

  // compiler可以理解为webpack的一个实例
  // 打包所有相关内容都在compiler存放
  apply(compiler) {
    // emit hook
    // @see https://webpack.js.org/api/compiler-hooks/#emit
    // compilation存放了和这次打包相关的内容
    compiler.hooks.emit.tapAsync('CopyrightWebpackPlugin', (compilation, cb) => {
      console.log('-------emit hook------');
      cb();
    });
  }
}

module.exports = CopyrightWebpackPlugin;
