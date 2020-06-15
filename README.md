
# react-native-auto-responsive-screen

This dependency is used to make responsive appearance in accordance with the dimensions of the design.

### Installation

```sh
$ cd project_name
$ yarn add react-native-auto-responsive-screen
```
or
```sh
$ cd project_name
$ npm install react-native-auto-responsive-screen
```
### before
![alt text](https://serving.photos.photobox.com/79744764dcccf702991bc4ffa5e81d3e30ea55a3f35065658b2a59a1b0f87f5383f519f8.jpg)

### after
![alt text](https://serving.photos.photobox.com/4185396168cceb1eb88c7473f4c7afd369799824b7389d7e555188b1e1f1816005a42c71.jpg)


You need init first, this step is required

```js
// file on root directory

import ResponsiveScreen from 'react-native-auto-responsive-screen'

/**
 * WIDTH AND HEIGHT BASE ON MOCKUP
 */
ResponsiveScreen.init(414, 852)

const App = () => {
  ...
};
```
next step

```js
// font example
import ResponsiveScreen from 'react-native-auto-responsive-screen'

<Text style={{
    color: '#FFFFFF',
    fontSize: ResponsiveScreen.fontSize(14)
}}>dummy text</Text>
```

```js
// component example
import ResponsiveScreen from 'react-native-auto-responsive-screen'

<TouchableOpacity style={{
    height: ResponsiveScreen.normalize(40),
    width: ResponsiveScreen.normalize(180),
    backgroundColor: '#CD3438',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: ResponsiveScreen.normalize(5)
}}>
    ...
    
</TouchableOpacity>
```