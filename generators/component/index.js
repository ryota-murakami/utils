module.exports = {
  description: 'Component Generator',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'component name',
    },
    {
      type: 'input',
      name: 'folder',
      message: 'folder in components',
    },
  ],
  actions: [
    {
      type: 'add',
      path: 'react/components/{{folder}}/{{properCase name}}/index.tsx',
      templateFile: 'generators/component/index.tsx.hbs',
    },
    {
      type: 'add',
      path: 'react/components/{{folder}}/{{properCase name}}/{{properCase name}}.tsx',
      templateFile: 'generators/component/Component.test.tsx.hbs',
    },
    {
      type: 'add',
      path: 'react/components/{{folder}}/{{properCase name}}/{{properCase name}}.stories.tsx',
      templateFile: 'generators/component/Component.stories.tsx.hbs',
    },
  ],
}
