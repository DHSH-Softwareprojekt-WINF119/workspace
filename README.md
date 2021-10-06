# workspace

:package: VSCode workspace files

## Usage

1. Create a new top-level directory which will serve as a base for all other projects. Clone all other projects into that top-level directory, including this one. Afterwards your tree structure should look like the following:

```
Softwareprojekt/
├── backend
├── frontend
└── workspace
```

2. `cd` into `workspace`

3. Install [Node.js](https://nodejs.org/) >= `12.20.0`, >= `14.13.1` or >= `16.0.0` and run the following:

```
node cli.js
```

4. A file called `workspace.code-workspace` will be created. Open that file with VSCode.
