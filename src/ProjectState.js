let projDataList = { // Implemented as table instead of array so it's easier to keep track of the IDs
    0: {
        title: "GitHub User Page",
        imgsrc: "/this-app-icon.png",
        info: (
        <>
          <div className="project-info-title">GitHub User Page</div>
          <p>This is the project you're using right now! It gives info about me and some of my personal projects.</p>
          <p>It was created using JavaScript, React, JSX (React's version of HTML), and CSS. It is hosted using GitHub Pages.
            Since GitHub Pages does not have an native, intuitive system for hosting pages made with React, I used the
            create-react-app and gh-pages npm packages to create and deploy the React app. While it made getting started a bit
            more difficult, using React for this app has been very beneficial. It has made it easier to update the page
            dynamically, like keeping track of whether the user's display is in portrait or landscape mode to adjust the
            page proportions accordingly, and keeping track of which project the user has selected to display its information instantly.
            Without React, it's a lot harder to make sites look good on both desktop and mobile!
          </p>
          <div className="project-info-title">Instructions</div>
          <p>Click <a href="#header">here</a> to use the project.</p>
          <p>You can navigate the page by clicking any section name on the navigation bar at the top of the screen. As you probably know,
            you are in the "Project Info" section. You can view information about some of my other projects by navigating to the
            Project List section and clicking on a project's image.
          </p>
        </>),
    },
    1: {
        title: "Pre-Babel Chat",
        imgsrc: "/filler-icon.png",
        info: (
          <>
          <div className="project-info-title">Pre-Babel Chat</div>
          <p>The project allows users to communicate with each other, even when they do not speak the same language.</p>
          <p>It was created using JavaScript, HTML, CSS, Node.js, Express, and MongoDB. It uses the Translatte API to indirectly use
            the Google Translate API (so I don't have to worry about data limitations). I created it from scratch as a solo project for
            a class.
          </p>
          <p>The messages are stored in a MongoDB database, and translated when necessary. Since translation is the slowest part of the application,
            translations are saved alongside the original message's text for quick access. Each message's original language is saved with it so that
            it can always be translated from the original language to keep the translations as accurate as Google Translate will allow.
          </p>
          <p>In order to keep the user's message display updated, the app uses HTTP long polling, so that on any message creation, update, or deletion,
            the client shows the most up-to-date spread of messages. Additionally, certain other events, like selecting a new username or language,
            also cause the messages to be updated (since you cannot edit or delete a message sent with a different username, and messages need to be
            displayed in your selected language).
          </p>
          <div className="project-info-title">Instructions</div>
          <p>Unfortunately, I cannot link to the app because of the academic honestly policy, but I can share lots of information about it.</p>
          <p>Start by choosing a username, user color, language, and chat room (there are 4 by default). Select the chat bar and write a message
            in your selected language, then press the enter key or the button next to the chat bar to send your message. Each will be displayed
            next to the sender's username, a square with their user color, and a small language code representing the message's original language.
            Additionally, your messages will have an edit button and a delete button. To edit the message, click the edit button, then enter the 
            new text in the chat bar, then submit the new text. To delete the message, simply press the delete button.
          </p>
        </>),
    },
    2: {
        title: "Linear Algebra Canvas",
        imgsrc: "/filler-icon.png",
        info: (
          <>
          <div className="project-info-title">Linear Algebra Canvas</div>
          <p>This project doesn't have info written right now, but I will get to it soon.</p>
          <div className="project-info-title">Instructions</div>
          <p>Click <a href="https://johngjcollins.github.io/linear-algebra-canvas/">here</a> to use the project.</p>
          <p>This project doesn't have instructions written right now, but I will get to it soon.</p>
        </>),
    },
  };
  
export default class ProjectState {
    constructor() {
      this.projId = 0;
      this.stateData = projDataList[0];
      this.projDataList = projDataList;
      this.subscriber = null;
    }
  
    set projNum(id) {
      if(~~projDataList[id]) {
        console.error("Attempted to display project #" + id + ", which does not exist.");
        return;
      }

      this.projId = id;
      this.stateData = projDataList[id];

      if(this.subscriber) {
        this.subscriber();
      }
    }

    get projNum() {
      return this.projId;
    }

    get state() {
        return this.stateData;
    }

    setInfoSubscriber(subscriber) {
      this.subscriber = subscriber;
    }
  }