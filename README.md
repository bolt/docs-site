Bolt Documentation Site & Content
=================================

This repository is the first part (base) for the site of [Bolt][bolt], and should 
be considered a counterpart of the [Bolt Core repository][repo].

The second part (content) can be found [here](https://github.com/bolt/docs)

The documentation uses the [Markdown][markdown] format.

There is no need to build anything to generate HTML. We parse the markdown with
PHP.

Updating Documentation
----------------------

The repository uses branches to group documentation relevant to each version in
the format of `<major.minor>`, e.g. `3.0`.

Changes should be PR-ed against the *lowest* relevant version and will then be
merged down into higher version branches as required.

e.g. if you're fixing a typo that exists in the same Markdown file in both 
version 3.0 as well as in 3.1, you would checkout `3.0` and submit your PR 
against that branch.

Local site set-up
-----------------

To run the site locally you need to complete the following steps:

  * Create the repository with `git clone`
  * A second 'git clone' to install the content
  * Run `composer install` to install required vendor libraries

### Site Set-up

```
git clone git@github.com:bolt/docs-site.git bolt-docs
cd var/versions
git clone git@github.com:bolt/docs.git 5.0
composer install
```

### Set-up older versions

If you want to set-up older versions, e.g. 4.0, complete the following steps:

```
cd var/versions
git clone git@github.com:bolt/docs.git 4.0
```

Then, on your local site you are able to choose version 4.0 at the dropdown menu on the upper right side.

### Configure Default Version

For your local environment you can edit the `.env` file, located in the project
root. It should contain the following:

```
DEFAULT_VERSION=4.0
APP_ENV=dev
```

### Web Server Set-up

Finally if you wish to use the built-in PHP web server, it can be run from the
`bolt-docs/` folder, pointing to `public/` as the document root.

```
php -S 127.0.0.1:8000 -t public public/index.php
```

You can also use the Symfony web server bundle. You will need to start by
preparing the project:

```
git stash
composer require server --dev
git reset --hard HEAD
rm config/routes/annotations.yaml -f
git stash pop
```

Then starting the web server:
```
bin/console server:start
```

Alternatively, configure your preferred web server to point at the `public/`
folder.

To see the documentation site go to `example.localhost/3.5/`, from where you'll
get redirected to the front page of the documentation.

## Building front-end assets

First, install the `npm` dependencies: 

```bash
npm install
```

Then, build the assets: 

```bash
npm run build 
```

[bolt]: http://docs.bolt.cm/
[markdown]: http://daringfireball.net/projects/markdown/
[repo]: https://github.com/bolt/core
