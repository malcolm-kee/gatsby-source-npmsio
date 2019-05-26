const createNodeHelpers = require('gatsby-node-helpers').default;
const got = require('got');

const { createNodeFactory, generateNodeId } = createNodeHelpers({
  typePrefix: 'npmsIo'
});

const stringifyQualifier = qualifier =>
  Object.keys(qualifier).reduce((result, key) => {
    const val = qualifier[key];
    return result + `${key}:${Array.isArray(val) ? val.join(',') : val}`;
  }, '');

exports.sourceNodes = async ({ actions }, configOptions) => {
  const { createNode } = actions;
  const { qualifier, name } = configOptions;
  const nodeFactory = createNodeFactory(name);

  const data = await got(`https://api.npms.io/v2/search?q=${stringifyQualifier(qualifier)}`).then(
    response => JSON.parse(response.body)
  );

  data.results.forEach(({ package }) => {
    const node = {
      id: generateNodeId(name, package.name),
      ...package,
      created: new Date(package.date),
      parent: null,
      children: []
    };

    createNode(nodeFactory(node));
  });

  return;
};
