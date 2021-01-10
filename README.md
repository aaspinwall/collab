# Welcome to our Collab project!

![Twitter header](https://user-images.githubusercontent.com/17233773/103695875-5caf0100-4f6b-11eb-82e2-677d7a782ce2.png)

You can reach us on:
🦆 [Twitter](https://twitter.com/CollabWebApp)

## Mission

We are an open source community, with an emphasis on maintaining a respectful, collaborative environment. Our group presents opportunities for members to learn and teach, whether in programming/tools or other parts of the project, such as organization and design. And most importantly... we want to have fun!

## What are we building right now?

**Working title:** Decision Maker App

We're currently working on the MVP. Here's a quick rundown of the app flow.

**Landing** Welcome screen and a prompt to create a new room.

**Room** The room author can set the configuration of the vote. ie: Time limit, voting style, maximum amount of choices per participant. The user will get a sharable link.

**Choices** (If the room author picked the options, skip this screen) When the other users get the link, they’ll open this page. They’ll be able to add their choices within the time limit. Once everybody submits their choices (or the time runs out) the voting can start.

Voting - The voting takes place. Depending on the voting style, each participant votes one or more times.

Results - A celebratory screen where the result is displayed. (edited)

Here is a development [preview](https://collab-git-main.aaspinwall.vercel.app/). It's automatically deployed from the main branch from Vercel.

## Where are we at?

### From wireframe to styled flow

We worked out a wireframe with an initial app flow. Right now we're starting to develop styled components that go into the app.

You can follow our UI ideas on [figma](https://www.figma.com/file/8tF9s4A400dTrWmzpTOy4X/Agora?node-id=0%3A1)
![Screen Shot 2020-12-11 at 11 27 01 AM](https://user-images.githubusercontent.com/17233773/101928642-d8ec3980-3ba3-11eb-81c0-33822cd19ea2.png).

## What's next?

- More styling (bring your design skills)!
- Putting it all together. An MVP that works and looks nice.

## Contributing

Are you ready to start collaborating? Head to our [Project page](https://github.com/aaspinwall/collab/projects/1) and pick up a task. Comment that you would like to work on it and we'll assign it to you. That will let others know that you're working on it and can reach out to you if they want to help. Note: In order for us to assign you one, **you have to comment on the issue**.

## Getting Started

**1. Clone this repository:**

```bash
git clone git@github.com:aaspinwall/collab.git collab

cd collab
```

**2. Install the dependencies and start the local server.**

On the command line, run:

```bash
npm run start
# or
yarn start
```

Open your browser on [localhost:3000](http://localhost:3000/). This will take you to the homepage.

**3. Next time you want to open the app.**

On the command line, run:

```bash
npm run dev
# or
yarn dev
```

## App structure

- frontend: Next.js app
- backend: GraphQL server

Our main branch is stable. If you decide to contribute, you can work off that branch. Our [backend branch](https://github.com/aaspinwall/collab/tree/backend) can get confusing at first glance since we're testing out features there.

## Community guidelines

- Exercise mutual respect
- Everyone is invited to contribute, regardless of their level of experience – don’t be afraid to make mistakes and ask questions!
- You can commit to as much or as little work as you want – but please respect the time of your fellow teammates and honour commitments to the best of your ability
- Communication: Join our [slack group](https://join.slack.com/t/collab-centre/shared_invite/zt-izqi8c7p-qzOXc48kkdQDXfpCPmtIZA)

Note: If you have a specific problem that does not involve everyone, don’t spam – create a separate slack channel or talk directly to the contributor.

### Collab-ers:

- Andrew 🐦🦚🐧
- Kolby 🖖 👨🏼‍💻 🏌🏼 ⚛️
- Shai 👋 👨‍💻 👨‍🏫 ⚛️
- Léonard ⚛️🖖 👨‍💻
- Avtar
- Alejandro 🎄⚛️👨🏽‍💻

### Troubleshooting and FAQ

**Before you submit a Pull Request**

Run this command:

`npm run lint-fix`
This will ensure that your PR passes all the tests on our CI/CD pipeline. i.e. Robts are happy, humans are happy 🤖👩‍🎤
 
