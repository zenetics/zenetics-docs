# ZENETICS Docs

This project contains the pubic documentation of Zenetics: [docs.zenetics.io](https://docs.zenetics.io)

This project is based on [Nextra](https://nextra.site), a documentation framework based on NextJS. The [Nextra Docs](https://nextra.site/docs) provide additional information on how to add new pages and add content for pages. 

The project is a fork of [Nextra-Docs-Templates](https://github.com/shuding/nextra-docs-template).



## Local Development

### Dependencies

To build and run the project, a NodeJs installation (>= v19) is required. One option is to use the Node version manager: [nvm](https://github.com/nvm-sh/nvm).

The project requires the package manager [pnpm](https://pnpm.io/) to be installed: `npm install -g pnpm`

### Run locally

First, run `pnpm i` to install the dependencies. 

Run `make run` to to start the development server and visit localhost:3000.
Run `make build` to create a local build and check for build errors.


## Deployment

The application is intended to be run as a docker container on Google Cloud Run: zenetics-docs. The application is build via CloudBuild Tiggers when an update is push to the `main`-branch.

The CloudRun service `zenetics-docs` is set up in Terraform as a separate module.

## Managing Content

The [Nextra documentation](https://nextra.site/docs/docs-theme/page-configuration) provides a short overview on how to add new pages and manage the navigation menues.


### Adding New Pages

To add a new page, create a new mdx-file in under the `pages`-folder or one of its subfolders. The page will automatically be shown in the sidebar navigation. To control the sort order of the sidebar navigation and to add a custom title, the page shall be added to the `_meta.json`-file in the respective folder where the page is placed.

For more information, see the Netra Documention: [Organizing Files](https://nextra.site/docs/guide/organize-files)

### Adding Images

Images can be added in the `/public` folder. 

Nextra support the NextJS Image component that automatically optimizes the images served to the client: [NEXT - Image Optimization](https://nextjs.org/docs/pages/building-your-application/optimizing/images).

Use the `<Image>`compnent instead of the standard image-tag to provide a better UX.

### Specific Content Components

Nextra is based on NextJS and therefore supports frontend components based on React to define specific types of content (e.g. Code Blocks, Tables, etc.). There is a list of predefined components that come with Nextra: [Build-in components](https://nextra.site/docs/guide/built-ins)

In addition, Nextra allows custom components to be defined. These will be locaed in the **components**-folder in this repository.

### Spellchecking 

Always check the spelling of your generated text before pushing the changes to the origin. Please set up your editor to support spell checking:
* [VS Code: Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)