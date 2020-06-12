import { Dimensions, Platform, PixelRatio } from 'react-native'
const { width, height } = Dimensions.get('window')
const SCREEN_WIDTH = width;
const SCREEN_HEIGHT = height;

class ResponsiveScreen {

    static init(width, height) {
        this.wscale = SCREEN_WIDTH / width;
        this.hscale = SCREEN_HEIGHT / height;
    }

    static normalize = (size, based) => {
        const newSize = based === 'height' ? size * this.hscale : size * this.wscale;
        if (Platform.OS === 'ios') {
            return Math.round(PixelRatio.roundToNearestPixel(newSize));
        } else {
            return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
        }
    }

    static fontSize = (size, based) => {
        const newSize = based === 'height' ? size * this.hscale : size * this.wscale;
        if (Platform.OS === 'ios') {
            return Math.round(PixelRatio.roundToNearestPixel(newSize));
        } else {
            return Math.round(PixelRatio.roundToNearestPixel(newSize));
        }
    }
}

export default ResponsiveScreen