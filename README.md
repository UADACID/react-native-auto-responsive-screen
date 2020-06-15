
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
![alt text](https://filebin.net/ebk0dq7kduvqi58u/Screen_Shot_2020-06-12_at_19.14.00.png?t=fkomkn06)

### after
![alt text](https://filebin.net/5lfogsq3ed7i7mg3/Screen_Shot_2020-06-12_at_19.28.48.png?t=8t0blpzz)


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