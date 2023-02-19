# Resume-CV-Builder 
Live Demo: https://zachlee12.github.io/Resume-CV-Builder
AWS-Amplify: https://aws-amplify.d24ws5qtncmkb5.amplifyapp.com/
Docker Image: https://hub.docker.com/repository/docker/zachleezy/resume-cv-builder/general

A [React](https://reactjs.org/) project that allows you to build your own Resume/CV! You can easily customize your own Resume/CV just by hovering over the sections. Hidden fields and forms will then be revealed and you can then fill in, add `Descriptions` or create your own custom sections! 

You have the option to print your Resume/CV as well.

## Project Concept
This is my first React project. Each section of the Resume/CV template represents a `Component` 


## Tools
This project is built with [React](https://reactjs.org/), [InteractJS](https://interactjs.io/), [React-To-Print](https://www.npmjs.com/package/react-to-print) and tested with [JestJS](https://jestjs.io/) and [React-Testing-Library](https://testing-library.com/).

## Docker
This project is also available as a Docker Image! If you would like to run this project as your own Docker Container, please follow the steps below.
Docker Repository: https://hub.docker.com/repository/docker/zachleezy/resume-cv-builder/general

Steps:
1. Pull the Docker Image of this project from the Docker Repository.

```
docker pull zachleezy/resume-cv-builder:1.0
```

2. Run a container instance at port 8080 (or any other ports). The `-d` tag allows you to run the container instance in detached mode, meaning that your current terminal will still be available to use while the docker container is running in the background.

```
docker run -p 8080:8080 -d zachleezy/resume-cv-builder
```

3. Navigate to `localhost:8080` and have fun with the applcation! 



