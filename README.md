# slush-component
A Slush generator for web components.

## Getting Started

1. Run the following command to install [Homebrew](http://brew.sh/):

  ```shell
  /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
  ```

2. Using Homebrew, install [Node.js](https://nodejs.org/en/) and [Docker Toolbox](https://www.docker.com/products/docker-toolbox):

  ```shell
  brew install node docker-toolbox
  ```

3. Using NPM, install [Slush](http://slushjs.github.io/#/) and [slush-component](https://github.com/andrewshawcare/slush-component) globally:

  ```shell
  npm install -g slush slush-component
  ```

4. Generate a component using the `slush-component` generator:

  ```shell
  slush component
  ```

5. Navigate to the directory of your web component (`hello-component` in this example):

  ```shell
  cd hello-component
  ```

6. Run the docker container container via `docker-compose`:

  ```shell
  docker-compose up
  ```
