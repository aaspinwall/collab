## Ready to start contributing? Let's get our git workflow setup!

### Quick Cheat Sheet

###### Setup upstream
```bash
git remote add upstream git@github.com:aaspinwall/collab.git
```

###### Update everything before starting
```bash
git checkout main
git pull upstream/main
git push origin main
```

###### Got conflicts?
Make sure you don't have an important changes first! Then
```bash
git reset --hard upstream/main
git push -f origin main
```

###### Using fetch
```bash
git fetch upstream
```
Update your branch in one of three ways:
1. Using `reset`, see _*Got conficts?*_
2. Using `rebase`
```bash
git checkout main
git rebase upstream/main
git push origin main
```
3. Using `merge`
```bash
git checkout main
git merge main upstream/main
git push origin main
```


### Setup your local repo

1. If you've never setup git on your computer before, follow [this guide](https://theodinproject.com/courses/foundations/lessons/setting-up-git) to get started!
2. Navigate to the [project's repo on GitHub](https://github.com/aaspinwall/collab) and create your fork!
3. Copy the remote url from your fork: `git@github.com:<username>/collab.git`.
4. Next, clone the project locally: `git clone git@github.com:<username>/collab.git` and move into the project directory `cd collab`

We now have a local copy of the project! Now let's get ourselves setup to create pull requests! To do that, we'll have to setup upstream!

### What is the upstream?

Before creating a pull request, we want to ensure we have the latest changes. In our workflow, the **upstream** has all of the latest changes. Our **local** and our **origin** can be outdated anytime new changes are accepted. Have a look at this diagram:

<div align="center">
  <img src="https://i.ibb.co/ctJHD2M/github-outdated.png" alt="GitHub Outdated Origin" height="444" />
</div><br>

- **Upstream** is the shared repository that everyone's work gets pulled into
- **Origin** is your forked repository that is only managed and updated by you
- **Local** is of course the version of the repository that you have on your local machine

The important thing to notice is that **upstream** is **read-only**. In other words, we can pull changes from **upstream**, but we are not allowed to make any changes directly!

This is where a pull-request comes in. We _pull_ changes from **upstream**, make our own changes, _push_ to **origin**, and finally **origin** can _pull request_ **upstream**!

### Setup the upstream

1. To have a look at all the _remotes_ available on your **local**, use the command `git remote`. At this point we should see only one, **origin**.

  **tip: If we use the command `git remote show <remote>` we can see all the information about the specified remote! Try it out with `git remote show origin`

2. To create a _new remote_, we use the command `git remote add <remote> <remote-url>`. So to add our **upstream** remote, our command will be `git remote add upstream git@github.com:aaspinwall/collab.git`.

We now have everything we need create our very own pull requests!

### Bringing in new changes

There are two ways to bring in new changes: `git fetch` and `git pull`.

##### Git Fetch

Git fetch brings in all the specified changes **but does not move your head**. Let's go over what that means.

- We can _specify_ what changes we want to _fetch_ and where we want to _fetch_ them from (which remote). We can do this by providing optional parameters: `git fetch <remote> <branch>`.
    - If the _branch_ is not specified, _fetch_ will bring in all the changes from the specified remote. All branches on that remote will also be brought in.
    - When no _remote_ is specified, by default the **origin** remote will be used, unless there’s an **upstream** branch configured for the current branch.
<br><br>
- **Does not move your head**?? The **head** refers to where you currently are in history. After a _fetch_, the new changes get placed on top of your current head:
<div align="center">
 <img src="https://i.ibb.co/TMVgy8g/git-head.png" alt="GitHub head" />
</div>

In other words, the changes are available in your history, but are not yet brought into your current branch. To bring them into our branch we would next need to **merge**, **rebase** or **reset**. We will go over all these commands a little bit later.

**Why is this useful?** New changes can introduce pesky merge conflicts! Using _fetch_ gives us control over how we want these new changes to be introduced in order to avoid conflicts. Plus updating all the **upstream** branches in one shot is super useful!

##### Git Pull

Git pull is essentially two commands rolled into one! When you _pull_ the specified changes git does two things: it _fetches_ the changes from the specified location and then it _merges_ the changes with your local branch!

That's right! `git pull` is equivalent to `git fetch` plus `git merge`!

Unlike `git fetch`, it's important to be specific. The parameters are the same as fetch: `git pull <remote> <branch>`.

For example, if we want all of the latest changes from **upstream**'s main branch into our **local** main branch, we would use: `git pull upstream main`. That's it!

I say to be specific with `git pull` because the default values are often not clear. The default values for _remote_ and _branch_ depend on the configuration for your current branch.

### Branching

What's all this talk about branches? Git branches are essentially _deviations_ in history. At any point, we can _branch_ off from a point in history to create new changes.

This allows us to make changes and test them out without affecting any other work.

<div align="center">
 <img src="https://i.ibb.co/QPrmdQ0/git-branching.jpg" alt="GitHub head" height="300" />
</div><br>

In our **upstream** repository (specific to the collab project), we have two branches: **main** and **backend**.

To switch between branches, use the command `git checkout <branch>`. So to checkout the **backend** branch, we would use the command `git checkout backend`.

To create a new branch, first navigate to the point in history at which you want to branch off (using `git checkout <branch / point-in-history>`). Next, use the command `git checkout -b <new-branch-name>`.

### Merge, Rebase, and Reset

##### Merge

To merge two points in history we can do so with the command `git merge <point-a> <point-b>`. So for example, if we wanted to merge the **backend** branch with the new changes in **upstream/backend** (after performing a fetch) we would use `git merge backend upstream/backend`.

##### Rebase

Rebase is a powerful command that allows us to apply our changes _on top_ of any point in history. So for example, let's say I have made some new changes to the project and I'm ready to create my PR. For this example, my PR will be merged to the **main** branch.

Before I can push my changes, I need to ensure I have the latest changes from **upstream/main**. What I would like to do is have the new changes from **upstream/main**, _followed_ by my new changes. This is where `rebase` comes in!

I would enter the command `git fetch upstream main` and then `git rebase upstream/main` and that will place my commits on top of **upstream/main**!

<div align="center">
 <img src="https://i.ibb.co/KwDrhwC/git-rebase.png" alt="GitHub Rebase" height="300" />
</div><br>

If the **origin** remote has a version of the branch that you rebased, you will need to force push: `git push -f <remote> <branch>`.

##### Reset

Reset comes in handy when there are all sorts of merge conflicts and you don't care about these conflicts because you haven't made any new changes.

To align your **local** and **origin** branch with **upstream** without merge conflicts, we would do the following. For this example, we will use **main** as our branch.

```bash
git checkout main
git fetch upstream main
git reset --hard upstream/main
git push -f origin main
```

Let's break it down:
- `git checkout main` and `git fetch upstream main` brings in the new changes from **upstream/main**
- `git reset --hard upstream/main` forces your **local** **main** branch to align with **upstream/main**.
- `git push -f origin main` is a force push. This forces the **origin** remote to _drop_ it's version of **main** and accept the **local** version of **main**. **Be careful you don't have any important changes!**

### Helpful Resources

- The [Atlassian Docs](https://www.atlassian.com/git/tutorials/syncing)
- [Corey MS Video Tutorials](https://www.youtube.com/watch?v=HVsySz-h9r4&list=PL-osiE80TeTuRUfjRe54Eea17-YfnOOAx)
- The [Git Docs](https://git-scm.com/docs) have everything about everything!
- The [Git Pro Book](https://git-scm.com/book/en/v2)
- [Git Basics](https://theodinproject.com/courses/foundations/lessons/git-basics), [A Deeper Look at Git](https://theodinproject.com/courses/ruby-programming/lessons/a-deeper-look-at-git), and [Using Git in the Real World](https://theodinproject.com/courses/ruby-programming/lessons/using-git-in-the-real-world) from The Odin Project
- Getting stuck? Check out [Oh Shit, Git!?!](https://ohshitgit.com/)

### Advanced Tips and Tricks

- Interactive rebase is an incredibly useful tool that can allow you to make all kinds of edits to your commit history. Use the command `git rebase -i <branch / point-in-history>`. You can edit commit messages, re-order commits, edit commits, and more!
- Use `git pull` with a rebase instead of a merge: `git pull upstream main --rebase`
- Open up the `/.gitconfig` file and setup alias. See [this article](https://www.atlassian.com/git/tutorials/git-alias) for more on this!
- One of my favourite alias is the pretty git graphs, which allow you to see all the branches and remotes and how they are connected! Check it out!
```bash
lg1 = log --graph --abbrev-commit --decorate --format=format:'%C(bold blue)%h%C(reset) - %C(bold green)(%ar)%C(reset) %C(white)%s%C(reset) %C(dim white)- %an%C(reset)%C(bold yellow)%d%C(reset)' --all
lg2 = log --graph --abbrev-commit --decorate --format=format:'%C(bold blue)%h%C(reset) - %C(bold cyan)%aD%C(reset) %C(bold green)(%ar)%C(reset)%C(bold yellow)%d%C(reset)%n''          %C(white)%s%C(reset) %C(dim white)- %an%C(reset)' --all
lg = !"git lg1"
```
- Setup [OMyZSH](https://ohmyz.sh/) for your terminal and get access to a plethora of awesome shorthands with the [git plugin](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/git)
- Setup your own alias in the `~/.zshrc` file. You can even chain multiple commands together!
