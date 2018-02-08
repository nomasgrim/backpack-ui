# Contributing

## Setup

First, clone the repo and install dependencies.

```sh
git clone git@github.com:lonelyplanet/backpack-ui.git
npm install
lerna bootstrap
cd backpack-ui/packages/backpack-ui-styles-scss
```

To start developing, run:

```sh
npm start
```

To build, run:

```sh
npm run build
```

## Running linting and tests

A precommit hook is in place to run tests and lint code as soon as you run `git commit`. This ensures that the build will pass once the commit is created. The idea behind the precommit hook is that if there is a failure, you can’t commit your code.

To perform these tests manually, run:

```sh
npm test
```

If tests fail or linting violations are present, it is advised that you don’t force the commit via `-n` or `--no-verify`. While that will allow you to make your commit, there are a couple of problems with this:

- the next person to pull your code will have to clean up the code and make everything pass
- a new release cannot be made if tests don’t pass or linting returns an error

## Writing commit messages

backpack-ui uses [standard-version](https://github.com/conventional-changelog/standard-version) to help with releases and automatic generation of the CHANGELOG. In order for this to work well, you must follow the [Conventional Commits specification](https://conventionalcommits.org/) when writing your commit message.

The commit message should be structured as follows:

```
<type>[optional scope]: <description>

[optional body]

[optional footer]
```

When writing commit messages, keep in mind [the seven rules of a great Git commit message](https://chris.beams.io/posts/git-commit/).

### Squash and merge vs. create a merge commit

Ideally, there is only one feature per pull request, but sometimes this isn’t always the case.

When there is only one feature being merged, always use the “Squash and merge” feature.

If you have multiple features or fixes in a single pull request and each commit uses a structured message, then you should do a standard merge with the “Create a merge commit” feature. This will preserve the commit history from your branch after the merge and allow the CHANGELOG to be created accordingly.

From the [standard-version docs](https://github.com/conventional-changelog/standard-version#should-i-always-squash-commits-when-merging-prs):

> We recommend keeping the scope of each PR to one general feature or fix. In practice, this allows you to use unstructured commit messages when committing each little change and then squash them into a single commit with a structured message (referencing the PR number) once they have been reviewed and accepted.

## Questions?

If you’re a Lonely Planet team member, post a message to the #ui Slack channel.
