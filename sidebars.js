/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
  sidebar: [
    'intro',
    'architecture',
    {
      'Getting Started': [
        'getting-started/index',
        'getting-started/samples/index',
        {
          'Sample Applications': [
            'getting-started/samples/node',
            'getting-started/samples/go',
            'getting-started/samples/flask',
            'getting-started/samples/dotnet',
            'getting-started/samples/rails',
          ]
        },
        'getting-started/samples/test-application',
      ]
    },
    {
      'Authorizer': [
        'authorizer-guide/overview',
        'authorizer-guide/authz',
        'authorizer-guide/identity-context',
        'authorizer-guide/resource-context',
        'authorizer-guide/policy-context',
        'authorizer-guide/is',
        'authorizer-guide/decisiontree',
        'authorizer-guide/query',
        'authorizer-guide/policies',
        'authorizer-guide/display-state-map'
      ]
    },
    {
      'Directory': [
        'directory/index',
        'directory/define-domain-model',
        'directory/creating-instances',
        'directory/built-ins',
        'directory/apis',
        'directory/reader',
        'directory/writer',
      ]
    },
    {
      'Policies': [
        'policies/index',
        'policies/lifecycle'
      ]
    },
    {
      'Decision Logs': [
        'decision-logs/index'
      ]
    },
    {
      'Deployment': [
        'deployment/index',
        'deployment/sidecar',
        'deployment/microservice',
        'deployment/binary',
      ]
    },
    {
      'SDKs': [
        'software-development-kits/overview',
        {
          'JavaScript': [
            'software-development-kits/javascript/express',
            'software-development-kits/javascript/react',
            'software-development-kits/javascript/spa',
          ]
        },
        {
          'Go': [
            'software-development-kits/go/install',
            'software-development-kits/go/authorizer',
            'software-development-kits/go/middleware-http',
            'software-development-kits/go/middleware-grpc',
          ]
        },
        {
          'Python': [
            'software-development-kits/python/api-client',
            'software-development-kits/python/options',
            'software-development-kits/python/flask',
            'software-development-kits/python/identity-providers',
          ]
        },
        {
          'Java': [
            'software-development-kits/java/grpc-bindings',
            'software-development-kits/java/authorizer'
          ],
        },
        {
          'ASP.NET Core':[
            'software-development-kits/dotnet/install',
            'software-development-kits/dotnet/options',
            'software-development-kits/dotnet/asp-core-mvc',
          ]
        },
        {
          'Ruby': [
            'software-development-kits/ruby/middleware',
            'software-development-kits/ruby/rails',
          ]
        },
      ]
    },
    {
      'CLIs': {
        'Topaz CLI': [
          'command-line-interface/topaz-cli/index',
          'command-line-interface/topaz-cli/configuration',
        ],
        'Policy CLI': [
          'command-line-interface/policy-cli/download',
          'command-line-interface/policy-cli/login',
          'command-line-interface/policy-cli/init',
          'command-line-interface/policy-cli/build',
          'command-line-interface/policy-cli/images',
          'command-line-interface/policy-cli/tag',
          'command-line-interface/policy-cli/push',
          'command-line-interface/policy-cli/pull',
          'command-line-interface/policy-cli/rm',
          'command-line-interface/policy-cli/export',
          'command-line-interface/policy-cli/repl',
          'command-line-interface/policy-cli/sign',
        ]
      }
    }
  ]

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

module.exports = sidebars;
