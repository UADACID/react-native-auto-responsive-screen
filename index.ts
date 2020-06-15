import { Dimensions, Platform, PixelRatio } from 'react-native'
const { width, height } = Dimensions.get('window')
const SCREEN_WIDTH = width
const SCREEN_HEIGHT = height

class ResponsiveScreen {
  static wscale: number = 414
  static hscale: number =  852

  static init(width: number, height: number) {
    this.wscale = SCREEN_WIDTH / width
    this.hscale = SCREEN_HEIGHT / height
  }

  static normalize = (size: number, based: string) => {
    if (ResponsiveScreen.hscale && ResponsiveScreen.wscale) {
      const newSize =
        based === 'height'
          ? size * ResponsiveScreen.hscale
          : size * ResponsiveScreen.wscale
      if (Platform.OS === 'ios') {
        return Math.round(PixelRatio.roundToNearestPixel(newSize))
      } else {
        return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
      }
    }
    return size
  }

  static fontSize = (size: number, based: string) => {
    if (ResponsiveScreen.hscale && ResponsiveScreen.wscale) {
      const newSize =
        based === 'height'
          ? size * ResponsiveScreen.hscale
          : size * ResponsiveScreen.wscale
      if (Platform.OS === 'ios') {
        return Math.round(PixelRatio.roundToNearestPixel(newSize))
      } else {
        return Math.round(PixelRatio.roundToNearestPixel(newSize))
      }
    }
    return size
  }
}

export default ResponsiveScreen
