## Getting Started

**Important**: Make sure you duplicate the `env.sample` file and rename the copy `.env`

Since this repository is public, we don't want to share our API keys. Please go on the [slack group](https://join.slack.com/t/collab-centre/shared_invite/zt-izqi8c7p-qzOXc48kkdQDXfpCPmtIZA) to get our keys. Alternatively, you can generate your own API keys and test everything using your own accounts.

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More about Next.js

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Storybook

```bash
npm run storybook
# or
yarn run storybook
```

This will start a local server running on port 6006:
![Screen Shot 2020-11-27 at 3 02 00 PM](https://user-images.githubusercontent.com/17233773/100481275-91ed4700-30c1-11eb-8816-c65e870afcd8.png)

You'll see a playground where each component will be isolated. Click on the **docs** tab to see what each control does. Each control translates to a prop going into the react component.

You can read more about Storybook on their [getting started guide](https://storybook.js.org/docs/react/get-started/introduction).

testing CI/CD
