/**
 *
 * @type {import('plop').PlopGenerator}
 */
module.exports = {
  actions: () => {
    return [
      {
        path: 'packages/react-client/pages/{{properCase name}}/index.tsx',
        templateFile: 'generators/pages/index.tsx.hbs',
        type: 'add',
      },
      {
        path: 'packages/react-client/pages/index.jsx',
        pattern: /(.*)(<main className={styles.main}>[\s\S]*)(<\/main>)/m,
        template:
          '$1$2  <Link to="/{{lowerCase name}}">{{properCase name}}</Link>\n$3',
        type: 'modify',
      },
      {
        path: 'packages/react-client/Routes.tsx',
        pattern: /(const Routes = \(\) => {)/,
        template:
          "const {{properCase name}} = lazy(async () => import('./pages/{{properCase name}}'));\n\n$1",
        type: 'modify',
      },
      {
        path: 'packages/react-client/Routes.tsx',
        pattern:
          /(.*)(<Route path="\*" element={<NotFound \/>} \/>\s*<\/RouteList>)/s,
        template:
          '$1<Route path="/{{lowerCase name}}" element={<{{properCase name}} />} />\n$2',
        type: 'modify',
      },
    ]
  },
  description: 'Pages Generator',
  prompts: [
    {
      name: 'name',
      message: 'page name',
      type: 'input',
    },
  ],
}
