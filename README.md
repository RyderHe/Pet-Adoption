# Pet Adoption

[React Course](https://frontendmasters.com/courses/complete-react-v6/) from FrontendMaster

## Setup

### 1. npm

```
npm init -y
```

### 2. Prettier

```
npm install -D prettier
```

In `package.json`:

`
"scripts": {
	"format": "prettier --write \"src/**/*.{js,jsx}\""
},
`

Create `.prettierrc`:

```
{}
```

Run `npm run format`

### 3. ESLint

```
npm install -D eslint eslint-config-prettier
```

In `package.json`:

```
  "scripts": {
    "lint": "eslint \"src/**/*.{js, jsx}\" --quiet"
  },
```

Create `eslintrc.json`:

```
{
    "extends": [
        "eslint:recommended",
        "prettier"
    ],

    "plugins": [],
    "parserOptions": {
        "ecmaVersion": 2021,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },

    "env": {
        "es6": true,
        "browser": true,
        "node": true
    }
}

```

Run `npm run lint`

To make ESlint understand React:

```
npm install -D eslint-plugin-import@2.22.1 eslint-plugin-jsx-a11y@6.4.1 eslint-plugin-react@7.22.0
```

In `.eslintrc.json`:

```
{
    "extends": [
        "eslint:recommended",
        "plugin:import/errors",
        "plugin:react/recommended",
        "plugin:jsx-a11y/recommended",
        "prettier"
    ],

    "rules": {
        "react/prop-types": 0,
        "react/react-in-jsx-scope": 0
    },

    "plugins": ["react", "import", "jsx-a11y"],
    "parserOptions": {
        "ecmaVersion": 2021,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },

    "env": {
        "es6": true,
        "browser": true,
        "node": true
    },

    "settings": {
        "react": {
            "version": "detect"
        }
    }
}
```

To make ESLint understand Hooks:

```
eslint-plugin-react-hooks@4.2.0
```

In `.eslintrc.json`:

```
{
    "extends": [
        "eslint:recommended",
        "plugin:import/errors",
        "plugin:react/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:react-hooks/recommended",
        "prettier"
    ],

    "rules": {
        "react/prop-types": 0,
        "react/react-in-jsx-scope": 0
    },

    "plugins": ["react", "import", "jsx-a11y"],
    "parserOptions": {
        "ecmaVersion": 2021,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },

    "env": {
        "es6": true,
        "browser": true,
        "node": true
    },

    "settings": {
        "react": {
            "version": "detect"
        }
    }
}
```

### 4. Parcel

```
npm install -D parcel@1.12.3.
```

In `package.json`:

```
"scripts" {
  "dev": "parcel src/index.html"
}
```

Run `npm run dev```, then go to http://localhost:1234.

If parcel got into a bad state, run `rm -rf .cache dist` and then rerun `npm run dev` again.

---------------------------------

This will pull React and ReactDOM down from npm and put it in your node_modules directory. 

Now instead of loading them from unpkg, we can tell Parcel to include them in your main bundle. Let's do that now.

```
npm install react@17.0.1 react-dom@17.0.1
```

### 5. Babel

```
npm install -D @babel/core@7.12.16 @babel/preset-react@7.12.13
```

Create `.babelrc`:

```
{
    "presets": [
        [
            "@babel/preset-react",
            {
                "runtime": "automatic"
            }
        ]
    ]
}
```

### Files Directories

```
src --
    |
    .js
    .ss
    .html
    |
    --
package.json
.prettierrc
.eslintrc.json
.babelrc
```

### 6. React Router

```
npm install react-router-dom@5.2.0
```

### 7. Class Components

Typically, to write state of class components: 

```
class Details extends Component {
    constructor() {
        super();
        this.state = { loading: true };
    }
}
```

If you want to waite in this way:

```
class Details extends Component {
    state = { loading: true };
}
```

The parser would consider it an error.

To make it work:

```
npm i -D @babel/plugin-proposal-class-properties@7.13.0 @babel/preset-env@7.13.5 @babel/eslint-parser@7.13.4
```

In `.babelrc`:

```
{
    "presets": [
        [
            "@babel/preset-react",
            {
                "runtime": "automatic"
            }
        ],
        "@babel/preset-env" // new
    ],

    "plugins": [
        "@babel/plugin-proposal-class-properties" // new
    ]
}
```

In `.eslintrc.json`:

```
{
    "extends": [
        "eslint:recommended",
        "plugin:import/errors",
        "plugin:react/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:react-hooks/recommended",
        "prettier"
    ],

    "rules": {
        "react/prop-types": 0,
        "react/react-in-jsx-scope": 0
    },

    "plugins": ["react", "import", "jsx-a11y"],
    "parser": "@babel/eslint-parser",           // new
    "parserOptions": {
        "ecmaVersion": 2021,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },

    "env": {
        "es6": true,
        "browser": true,
        "node": true
    },

    "settings": {
        "react": {
            "version": "detect"
        }
    }
}
```
