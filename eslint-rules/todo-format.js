module.exports = {
  create: function (context) {
    return {
      Comment: function (node) {
        const commentText = node.value.trim();
        if (
          commentText.startsWith('TODO') &&
          !commentText.startsWith('TODO:')
        ) {
          context.report({
            node,
            message: 'TODOコメントは"TODO:"の形式でお願いします🙇‍♂️',
          });
        }
      },
    };
  },
};
