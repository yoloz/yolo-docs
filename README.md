# yolo-docs

This is a [Docusaurus-powered](https://docusaurus.io) site to document collection, like note, reading, etc. Here are the steps used to setup this site and configure it for automated build-deploy workflows.

<br/>

## 1. Setup & Validate Site

| Command | Description |
|:--- |:--- |
| `npx create-docusaurus@latest www classic` | Scaffold classic docusaurus site in www/ folder |
| `cd www; npx docusaurus start` | Validate setup with local preview (and hot reload) |
| `cd www; npm run build` | Build production-ready site (in _build/_ folder by default) |
| `cd www; npm run serve` | Preview production-ready site on local device |
| | |

<br/>


## 2. Deploy to GitHub Pages

| Action | Description |
|:--- |:--- |
| [Modify docusaurus.config.js](https://docusaurus.io/docs/deployment#docusaurusconfigjs-settings)  | Add `organizationName`=user, `projectName`=repo, `deploymentBranch`=gh-pages properties. <br/>Updated `url` property to relevant github.io version for now |
| [Configure publishing source for GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)| Do an initial manual deploy using `GIT_USER=<GITHUB_USERNAME> GIT_PASS=<GITHUB_PERSONAL_ACCESS_TOKEN> npm run deploy` to setup the GitHub Pages branch. Generate [Personal Tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) if needed. Validate deploy by visiting [https://fearlessly-dev.github.io/30days/](https://fearlessly-dev.github.io/30days/) - then automate deploy using GitHub Actions.|
| | |

<br/>

## 3. Automate with GitHub Actions

| Action | Description |
|:--- |:--- |
| [Setup GitHub Actions for auto-deploy](https://docusaurus.io/docs/deployment#triggering-deployment-with-github-actions)  | We want this to auto-deploy build to gh-pages when new commit is made to `main/`. Follow the directions for "Same" repo - add `deploy.yml` and `test-deploy.yml` to `.github/workflows` -- commit changes! I used `www/**` for paths) and `npm` for build) |
|  [Visit Actions Dashboard](https://github.com/nitya/docusaurus-demo/actions) | Commits should trigger action - verify that build/deploy works. |
|  | |

<br/>

## 4. Deploying to Azure Static Web Apps

Get started in a few minutes by following [this step-by-step guide](https://dev.to/azure/11-share-content-with-docusaurus-azure-static-web-apps-30hc).

Tutorial source is here [on GitHub](https://github.com/fearlessly-dev/swa-demo-docusaurus)
