# QuickCh@

QuickCh@ is a full stack, dockerized chat application for creating rooms and sending messages.

## Install and Run

- Make sure that you have Docker and Docker Compose installed
  - Windows or macOS: [Install Docker Desktop](https://www.docker.com/get-started)
  - Linux: [Install Docker](https://www.docker.com/get-started) and then [Docker Compose](https://github.com/docker/compose)
- Clone this repository locally
- Run `docker-compose up` to run the stack with a log stream, or `docker-compose up -d` to run the containers in the background
  - This command will also automatically import a backup of basic data for the application. To skip this step, [remove the two volume maps](https://github.com/leedotpang/quickchat/blob/1bbf9047e0a85e35e750fc8c3dd53792d48f0d1f/docker-compose.yaml#L21-L23) in the docker-compose.yml file.
- Visit [http://localhost:3000](http://localhost:3000) to access the client UI in your browser.
  - The API runs at **localhost:5000** && mongo runs at **localhost:27017**.
- To clean up, run `docker-compose down` or type `CTRL-C` in your terminal window to shut down the containers

## Process

This repo was maintained using a gitflow-like workflow. The commits weren't optimal, but [view the PRs to see](https://github.com/leedotpang/quickchat/pulls?q=is%3Apr+is%3Aclosed) how I progressed through the challenge.

## Prerequisites

1. Users are authenticated via unique username (passwords not required).
2. Users can create public rooms with unique names, which are listed by most recently active.
3. Users can post messages to any room, specific to that room, and can see the last 50 messages.

## Working Solution

This application is built utilizing the MERN (Mongo/Express/React/Node) stack, primarily with ESX syntax, and without the use of many additional libraries.
The goal of this exercise was to produce an MVP within a limited time-frame, and modify as time permitted.
