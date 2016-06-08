# slush-component
A Slush generator for web components.

## Getting Started

1. Run the following command to install Homebrew:

  ```shell
  /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
  ```

2. Using Homebrew, install NPM and Docker Toolbox:

  ```shell
  brew install npm docker-toolbox
  ```

3. Using NPM, install slush and slush-component globally:

  ```shell
  npm install -g slush slush-component
  ```

4. Generate a component using the slush-component generator:

  ```shell
  slush component
  ```

5. Navigate to the directory of your web component:

  ```shell
  cd hello-component
  ```

6. Run the docker container via `docker-compose`:

  ```shell
  docker-compose up
  ```
