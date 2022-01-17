export default class R {
  static servers = {
    github: 'https://api.github.com',
  };
  static colors = {
    white: '#FFFFFF',
    prussianBlue: '#003469',
    vistaWhite: '#e4dcd3',
    black: '#000000',
  };
  static string = {
    general: {
      createdDate: 'Created date',
      id: 'id',
    },
    list: {
      empty: 'List is empty',
    },
    details: {
      actorId: 'Actor id',
      empty: 'Details info empty',
      public: 'Public',
      name: 'Name',
      repoUrl: 'Repository URL',
      repoBody: 'Commit details',
      actorInfo: 'Actor info',
      generalInfo: 'General info',
      repoInfo: 'Repository info',
      orgInfo: 'Organization info',
    },
  };
  static url = {
    main: {
      events: '/events',
    },
  };
}
