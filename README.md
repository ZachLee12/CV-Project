# Resume-CV-Builder 
  Live Demo: https://zachlee12.github.io/Resume-CV-Builder

  AWS-Amplify: https://aws-amplify.d24ws5qtncmkb5.amplifyapp.com/
  
  Docker Image: https://hub.docker.com/repository/docker/zachleezy/resume-cv-builder/general

A [React](https://reactjs.org/) project that allows you to build your own Resume/CV! You can easily customize your own Resume/CV just by hovering over the sections. Hidden fields and forms will then be revealed and you can then fill in, add `Descriptions` or create your own custom sections! 

You have the option to print your Resume/CV as well!

## About the Project
### Main Concept
This is my first React project. Each section of the Resume/CV template represents a Component that has its own state. Components such as `Education`, `WorkExperience`, and `Skills` have `Description` as their ***Child Component***, in which they `props` to them.

Each Component also listens for `onMouseOver` and `onMouseOut` React Events to decide whether to change their state which would cause a re-render. This is mainly implemented in the Components for them to decide whether if they should render some hidden elements in them.

### The `ProfilePicture` Component
For uploading your own images as your profile picture, it is handled with Promises and Async/Await. Inside `ProfilePicture`, the class method `onChangeInput` will handle converting image files to Base64 before updating its own state. Since the JavaScript built-in `readAsDataURL` is asynchronous, I have implemented a private asynchronous function `#getImageBase64` to handle the asynchrony with Promises. An example of this implementation can be found below:

```javascript
 onChangeInput = async (e) => {
        //await Promise to resolve first,
        const base64 = await this.#getImageBase64(e.target.files[0])
        //then only call this.setState()
        if (typeof base64 === typeof 'string comparison') {
            this.setState({
                imageBase64: base64
            })
        }
    }

    #getImageBase64 = async (file) => {
        return new Promise(resolve => {
            const reader = new FileReader();
            reader.readAsDataURL(file)
            reader.onloadend = function () {
                resolve(reader.result) //base64
            }
        }).catch(err => console.log('No file was uploaded, or it was not an image.'))
    }

```

### The `Interactable` Component
To use the draggable features of InteractJS in React, I have implemented `Interact` as a wrapper Component that gives, in this project, draggable and resizable behaviours to elements which it wraps. I have found the `Interactable` Component in this link [here](https://codesandbox.io/s/xl4qqqn774). 

Elements that should be draggable and/or resizable are then wrapped around as such: 

```javascript
<Interactable draggable={true} draggableOptions={draggableOptions} resizable={true} resizableOptions={resizableOptions}>
   <img className="profile-picture" src={this.state.imageBase64 === '' ? PlaceholderImage : this.state.imageBase64} alt="profile" />
</Interactable>
```

## Docker
This project is also available as a Docker Image! If you would like to run this project as your own Docker Container, please follow the steps below.

  Docker Repository: https://hub.docker.com/repository/docker/zachleezy/resume-cv-builder/general

Steps:
1. Pull the Docker Image of this project from the Docker Repository (link above).

```
docker pull zachleezy/resume-cv-builder:1.0
```

2. Run a container instance at port 8080 (or any other ports). The `-d` tag allows you to run the container instance in detached mode, meaning that your current terminal will still be available to use while the docker container is running in the background.

```
docker run -p 8080:8080 -d zachleezy/resume-cv-builder
```

3. Navigate to `localhost:8080` and have fun with the application! 

## Tools
### Built with:
  [React](https://reactjs.org/) 
  
  [InteractJS](https://interactjs.io/) 
  
  [React-To-Print](https://www.npmjs.com/package/react-to-print)
  
### Tested with:
  [JestJS](https://jestjs.io/)
  
  [React-Testing-Library](https://testing-library.com/).


