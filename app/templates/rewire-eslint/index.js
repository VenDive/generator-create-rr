/**
 * Rewires the eslint config so to follow .eslintrc definitions
 * plus it allows to override any other option.
 *
 */
const isEslintUse = (use) => {
  if (!use.loader) return false;
  try {
    return use.loader.toString().indexOf('eslint-loader') !== -1;
  } catch (err) {
    return false;
  }
};

const isEslintRule = (rule) => {
  if (!rule) return false;
  if (!rule.use || !Array.isArray(rule.use)) return false;

  return rule.use.some(isEslintUse);
};

module.exports = (config, options = {}) => {
  const rules = config.module.rules
    .map((rule) => {
      if (!isEslintRule(rule)) return rule;
      const use = rule.use.map((item) => {
        if (!isEslintUse(item)) return item;

        return {
          ...item,
          options: {
            ...item.options,
            ignore: true,
            useEslintrc: true,
            ...options,
          },
        };
      });

      return {
        ...rule,
        use,
      };
    });


  return {
    ...config,
    module: {
      ...config.module,
      rules,
    },
  };
};
