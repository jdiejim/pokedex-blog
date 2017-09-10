# Lets Build a Pokedex with React 

I love building web apps with React. However, learning how to use the library and getting use to thinking in the React way can be difficult. I believe that personal projects are the best way to learn new things, and thus started to build a Pokedex with React. I had a lot of fun building it and learned a lot, so I decided to make this beginner's workshop for new developers interested in learning how to use React.

We are going to be using the [PokeApi](http://pokeapi.co/) to get all our resources and pokemon data.

* **PART 1** will describe all the file setup
* **PART 2** we will begin making our wireframes and main layout
* **PART 3** we will build the Pokemon view
* **PART 4** we will build the Detail view
* **PART 5** we will connect all the views

Without further ado, lets start coding.

# PART 1

To get the basic project setup you can clone the branch 'basic' of this [repo](https://github.com/jdiejim/pokedex-blog) or continue to follow the basic installation.

## Create React App Installation

You’ll need to have [Node](https://nodejs.org/en/) >= 6 on your machine in order to install [create-react-app](https://github.com/facebookincubator/create-react-app).

Once Node is installed, proceed to install the create-react-app package globally:

```shell

npm install -g create-react-app

```

## Setting up Create React App Boilerplate

First, create a new pokedex project and move into your new pokedex directory.

```Shell

create-react-app pokedex

```

Inside your pokedex directory you should see a **src** directory that should look like this:

```
src
│   App.css
|   App.js
│   App.test.js
|   index.css
|   index.js
|   logo.svg
|   registerServiceWorker.js

```

This is where we are going to tweak some files to make it more dynamic and easier to import and export files. Move into **src**, and lets start modifying some files.

```Shell

cd src

```

First remove the logo.svg file since we are no longer going to use it. 

```Shell

rm logo.svg

```

Then create a **test** directory, a **components** directory, and inside the new **components** directory, create a **styles** directory.

```Shell

mkdir test
mkdir components
mkdir components/styles

```

Then move the App files into their corresponding directories

```Shell

mv App.js components/
mv App.css components/styles/
mv App.test.js test/

```

Your new file structure in **src** should look like this:

```
src
|   index.css
|   index.js
|   registerServiceWorker.js
|
|___componets
|   |   App.js
|   |___styles
|       │   App.css
|
|___test
|   |   App.test.js

```

We are almost done. 

Open App.js and replace all the contents with the following code:

```javascript

import React, { Component } from 'react';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        Hello World I am a Pokedex
      </div>
    );
  }
}

export default App;

```

Open App.css and delete all the contents inside. We are going to write our own styling so don't worry. 

Open index.css and replace all contents inside with this code:

```css

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Avenir Next', sans-serif;
}

h1,
h2,
h3,
h4,
p {
  margin: 0;
}

```

In this app, **index.css** will be used to serve styles at the top level. In this case we want all elements to have box sizing of border box, and we also want to apply some normailzation to other elements.

Finally replace all the contents on your index.js with the following code:

```javascript

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

```

The only change we made here was changing the path of the App component.

We are not going to add anything else to **index.js** in this project. However, is always good to know what is this file doing. This file basically is telling the DOM to render the App component in the element with the id of root found in the html file. App will contain all of our components that we are going to be building.

Ok! We are done with the setup. Lets try it out. To star our application write this command in your terminal:

```shell

npm start

```

This will start our application in the browser in development mode. Now everytime we edit our project you are going to be able to see your changes in the browser. If you have and error, the browser most of the times will show you where the bug is located.

# PART 2

## WireFrame

React is all about building components so we will be making some wireframes that describe each of the components we need to build.

Our main app layout will contain 2 components: the Pokemon view, and the Detail view.

On the pokemon view, the user can navigate through a list of the first generation pokemon. If the user clicks a pokemon, the detail view will display the selected pokemon's details including: name, id, type, sprite, and ability.

![main](./screenshots/main.png)

### Pokemon View

The pokemon view will contain a scrollable **poke list component** that wraps all the **poke cell components**

![pokemonView](./screenshots/pokemonView.png)

### Detail View

The detail view will be only be its own component containing different elements.

![detailView](./screenshots/detailView.png)

## Main Layout

Now that we are done with our wireframe and our project setup lets begin setting the main app component.

## Component Types

There are 2 basic types of React components: Stateful and Stateless

StateFul, as the name describes it, are componets that have their own state. In our case, App is a stateful component. Lets see in detail how to build the App component. Open App.js and delete all of the contents inside. We are going to code it from start.

The first step is to import the react package, and deconstruct the Component class.

  ```javascript

import React, { Component } from 'react';

  ```

  Then you need to create a new class App that extends Component. All stateful components require 2 main methods: the constructor and the 
  super();render methods.

  In the constructor we always have to call the super() function since we are extending from the component class. Additionaly, we also need to declare our initial state. For now leave it as an empty object. We are going to use this later in the tutorial.

  ```javascript

  class App extends Component {
    constructor() {
      super();
      this.state = {};
    }
  }

  ```

Next add the render method. This method always returns jsx syntax, which is a mix between javscript and html. The render method only can return one element so we need to create a parent element and nest children inside. If we are returning a nested element we need to wrap it with a parentheses. 

Anything after the return keyword has to be jsx. That means we can do regular javascript before the return keyword.

 ```javascript

  class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

  ```

Finally, we need to import our stylesheet at the top to add the styles of our component, and export the whole class so we can use it in other files.

```javascript

import React, { Component } from 'react';
import './styles/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;

```

Open your App.css file and add this styles to it:

```css

.App {
  display: flex; 
  align-items: center;
  justify-content: center;
  width: 650px;
  height: 400px;
  padding-left: 10px;
  margin: 50px auto;
  background-color: #FE0065;
  border-radius: 10px;
  box-shadow: 0 14px 45px rgba(0, 0, 0, 0.22), 0 18px 45px rgba(0, 0, 0, 0.22);
}

```

Here are some comments on the styles we added:

* We use display flex to separate the 2 views we are going to be building
* We fixed our width and height for our desktop display
* We apply some top and bottom margin to separate the view from the corners and auto left and right to place it in the middle
* Finally we applied a red color to the background

![mainLayout](./screenshots/mainLayout.png)

# PART 3

To start in this point clone the branch 'part3' of this [repo](https://github.com/jdiejim/pokedex-blog)

## Stateless Components

In **src** Go to your componets folder and create a PokeList.js file. Then go to your stlyes folder and create a PokeList.css file.

```shell

cd src/components/
touch PokeList.js styles/PokeList.css

```

Stateless components have a shorter setup. Since they don't have state we don't use the Component class so we only need to import the React package.

```javascript

import React from 'react';

```

Then, instead of creating a new class, we create a regular arrow function, and return the jsx that we want to render. 

Then, lets import the styles at the top of the file, and export our PokeList function.

``` javascript

import React from 'react';
import './styles/PokeList.css';

const PokeList = () => {
  return (
    <section className="poke-list">

    </section>
  )
}

export default PokeList;

```
Lets add some style to our PokeList in the css file

```css

.poke-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: 50%;
  height: 80%;
  padding: 10px;
  margin-right: 10px;
  background-color: #BFF9FF;
  box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.5);
  overflow: scroll;
}

```

Notes on style:

* We are using display flex againg to take advantage of the wrap functioanlity since we are going to wrap cell buttons inside.
* We set the width to 50% to fill the left half of the app component
* we also included overflow scroll because not all of the pokecells are going to be displayed at once.

Finally go back to App.js and import the PokeList component. To render it, you need to place it inside the parent element in the render method as a self closing html tag. This is other feature React and jsx gives us. All the components you want to render are place like html tags. Cool right!

```javascript

import React, { Component } from 'react';
import PokeList from './PokeList';
import './styles/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <PokeList />
      </div>
    );
  }
}

export default App;

```

![prelist](./screenshots/prelist.png)

## PokeCell

The next step is to populate our list with pokecells, but first we need to build our PokeCell component. This component will act as a template for all of the 150 pokemons that we are going to render in PokeList.

In **src** Go to your componets folder and create a PokeCell.js file. Then go to your stlyes folder and create a PokeCell.css file.

```shell

cd src/components/
touch PokeCell.js styles/PokeCell.css

```

Open PokeCell.js and add the stateless setup. Since we are returning only one element we can avoid the parentheses.

```javascript

import React from 'react';
import './styles/PokeCell.css';

const PokeCell = () => {
  return <button className="poke-cell"></button>;
};

export default PokeCell;

```

Then import it in PokeList.js and render some cells in the list by placing them inside the parent element as an html elements.

```javascript

import React from 'react';
import PokeCell from './PokeCell';
import './styles/PokeList.css';

const PokeList = () => {
  return (
    <section className="poke-list">
      <PokeCell />
      <PokeCell />
      <PokeCell />
      <PokeCell />
      <PokeCell />
      <PokeCell />
    </section>
  )
}

export default PokeList;

```

Finally, lets add some style to our PokeCells in the css file.

```css

.poke-cell {
  width: 120px;
  height: 120px;
  margin: 10px;
  background-color: #FFF;
  background-repeat: no-repeat;
  border: none;
  border-radius: 5px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16);
}

```

Notes on PokeCell style:

* We set the background-repeat to no-repeat for the background image we are going to put later in the tutorial

## Sprites and Array Rendering

This section might be a little confusing, but I promise it is worth it. 

For this part of the tutorial please download the following resources: [sprites](https://github.com/jdiejim/pokedex-blog/blob/master/src/assets/sprites.png) and [pokeClasses](https://github.com/jdiejim/pokedex-blog/blob/master/src/pokeClasses.js)

The sprites image is a collection of images of the first 151 pokemon. We are going to display each sprite in each PokeCell using css and background position. This background positions can be found in the pokeClasses.js file that I provided.

The pokeClasses.js file is an array of objects containing the pokemon id and the background position of each sprite.

Ok. Lets move on.

Create an **assets** directory and place it in **src**. Then place the sprites image inside assets

```Shell

cd src
mkdir assets

```

Then place the pokeClasses.js file inside **src**.

Now for the fun part.

Go to PokeList.js and import the pokeClasses array.

```javascript

import React from 'react';
import PokeCell from './PokeCell';
import { pokeClasses } from '../pokeClasses';
import './styles/PokeList.css';

const PokeList = () => {
  return (
    <section className="poke-list">
    </section>
  )
}

export default PokeList;

```
We are going to map the pokeClasses inside our function to convert each element into a PokeCell component! Then we will assign the new array from the map to a new variable called cells.

In React, components can pass values to their children as props. Props look like html tag attributes and are placed between the opening and clossing tags. We can name the props any way we want, and pass any variable type (string, number, object, function).

In this case we need to pass the pokeClass information as props to each of the PokeCells that we are creating. The firts prop we need to pass is called keys. This is the only required prop react tells us to include everytime we create an array of components. This key prop needs to have a unique value since React uses it on the background to make optimizations. Lucky for us, each pokeClass contains an id value.

The next prop we are going to pass is called pokeClass, and is the current element of the pokeClasses array. One important thing to mention is that everytime we want to include regular javascript in the jsx section we need to wrap it with curly braces.
The end result will look like this:

```javascript

import React from 'react';
import PokeCell from './PokeCell';
import { pokeClasses } from '../pokeClasses';
import './styles/PokeList.css';

const PokeList = () => {
  const cells = pokeClasses.map(pokeClass => <PokeCell key={pokeClass.id} pokeClass={pokeClass}/>)
  return (
    <section className="poke-list">
    </section>
  )
}

export default PokeList;

```

Now that we have our cells array of PokeCell components we can render it by placing the cells variable inside the parent element wrapped in curly braces:

```javascript

import React from 'react';
import PokeCell from './PokeCell';
import { pokeClasses } from '../pokeClasses';
import './styles/PokeList.css';

const PokeList = () => {
  const cells = pokeClasses.map(pokeClass => <PokeCell key={pokeClass.id} pokeClass={pokeClass}/>)
  return (
    <section className="poke-list">
    {cells}
    </section>
  )
}

export default PokeList;

```

Cool right?! Insead of manually placing each PokeCell inside the parent element, we can just place the array and React appends each of the PokeCells to the list component.

## Rendering Sprites

Remeber that we passed to each of the PokeCell componets its own pokeClass. Now we can use this data to determine the position of the sprite in the sprite image, and render the image on each cell.

Go to the PokeCell.js file and pass in props as an argument.

```javascript

const PokeCell = (props) => {
  return <button className="poke-cell"></button>
};

```

Since we know that props contains a pokeClass object, we can deconstruct it from the props argument.

```javascript

const PokeCell = ({ pokeClass }) => {
  return <button className="poke-cell"></button>
};

```

Then lets deconstuct the properties from the pokeClass itself and assign them to their own variable.

```javascript

const PokeCell = ({ pokeClass }) => {
  const { id, backgroundPosition } = pokeClass;

  return <button className="poke-cell"></button>
};

```

Next, import the sprites image at the top of the file. 

```javascript

import sprites from '../assets/sprites.png';

```

To add the sprite as a background image, we are going to use in-line styling on the buttotn element.

First create a new styles object with two properties: backgroundImage and backgroundPosition. Notice that the css properties are written in camelCase instead of the regular format. This is because we are using javascript to add the in-line styling.

```javascript

import React from 'react';
import sprites from '../assets/sprites.png';
import './styles/PokeCell.css';

const PokeCell = ({ pokeClass }) => {
  const { id, backgroundPosition } = pokeClass;
  const style = { backgroundImage: '', backgroundPosition: '' };

  return <button className="poke-cell"></button>
};

export default PokeCell;
 
 ```

For the backgroundImage key, replace the empty string with the following code:

```javascript

  const style = { backgroundImage: `url(${sprites})`, backgroundPosition: '' };

```

Here we are placing the imported sprite image into the css url function. If you console log the sprites image, you will see that it will log the path of the image. We have to do this because this is how React is able to recognize the path of the image.

Next we can include the backgroundPosition property by assigning it the value of the variable we deconstructed earlier from pokeClass. Since they share the same name, we can just delete the string and semicolon. Finally we can add the in-line style object to the html element like this:

```javascript

import React from 'react';
import sprites from '../assets/sprites.png';
import './styles/PokeCell.css';

const PokeCell = ({ pokeClass }) => {
  const { id, backgroundPosition } = pokeClass;
  const style = { backgroundImage: `url(${sprites})`, backgroundPosition };

  return <button style={style} className="poke-cell"></button>
};

export default PokeCell;

```

Wow! That was a lot, but trust me, it was worth it, and this is the only section that is kind of confusing. Ok, go ahead and check the browser to see the result.

![finalPokeView](./screenshots/finalPokeView.png)

# PART 4

To start in this point clone the branch 'part4' of this [repo](https://github.com/jdiejim/pokedex-blog)


## Detail View

In **src** Go to your componets folder and create a DetailView.js file. Then go to your stlyes folder and create a DetailView.css file.

```shell

cd src/components/
touch DetailView.js styles/DetailView.css

```

Next, setup a stateless comopents and call it DetailView.

``` javascript

import React from 'react';
import './styles/DetailView.css';

const DetailView = () => {
  return (
    <section className="detail-view">

    </section>
  )
}

export default DetailView;

```

Add some elements to display the data and image.

```javascript

import React from 'react';
import './styles/DetailView.css';

const DetailView = () => {
  return (
    <section className="detail-view">
      <img src={sprite} className='sprite-image'/>
      <div className='data-wrapper'>
        <h1 className='data-name'></h1>
        <p className='data-char'></p>
        <p className='data-char'></p>
      </div>
    </section>
  )
}

export default DetailView;

```

Lets also add some style to our DetailView in the css file.

```css

.detail-view {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  height: 100%;
  padding: 10px;
  background-color: #df095e;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
}

.sprite-image {
  width: 80%;
  height: 150px;
  margin: 10px auto;
  background-color: #585858;
  border: 15px solid #DEDEDE;
  border-radius: 5px;
}

.data-wrapper {
  width: 80%;
  height: 110px;
  padding: 10px;
  margin: 0 auto;
  background-color: #585858;
  border-radius: 5px;
  box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.22);
  color: #FFF;
}

.data-name {
  margin: 0 0 5px;
}

.data-char {
  font-size: 10px;
}

```

Notes on the style and elements:

* sprite-image will contain the selected pokemon sprite
* the data-char class refers to the characterstics of the pokemon (id, type, abilities)

Next go back to App and import DetailView. Finally, render it by placing it inside the parent element.

```javascript

import React, { Component } from 'react';
import PokeList from './PokeList';
import DetailView from './DetailView';
import './styles/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <PokeList />
        <DetailView />
      </div>
    );
  }
}

export default App;

```

![finalDetailView](./screenshots/finalDetailView.png)

