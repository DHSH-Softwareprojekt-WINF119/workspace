import { promises as fs } from 'node:fs'
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

// find directories in parent directory
const cwd = dirname(dirname(fileURLToPath(import.meta.url)))
const directories = await fs.readdir(cwd)

// load settings from local project
const settings = await fs.readFile('.vscode/settings.json')

// create workspace structure
const workspace = {
	folders: directories.map(directory => ({
        path: `../${directory}`
    })),
    settings: JSON.parse(settings.toString())
}

await fs.writeFile('workspace.code-workspace', JSON.stringify(workspace, null, 4))
