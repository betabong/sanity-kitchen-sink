export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6058f3b3aa7d1937a775e1e3',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-qjx5oyep',
                  apiId: '978777ac-7f64-45a6-8d37-44e7a267b267'
                },
                {
                  buildHookId: '6058f3b438f309352cca2480',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-oi7ynum5',
                  apiId: 'cdc69b9b-a224-4a0c-b53b-d201a2fd2aac'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/betabong/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-oi7ynum5.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
