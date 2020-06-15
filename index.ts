import { Dimensions, Platform, PixelRatio } from 'react-native'
const { width, height } = Dimensions.get('window')
const SCREEN_WIDTH = width;
const SCREEN_HEIGHT = height;

class ResponsiveScreen {

    wscale: number = 0
    hscale: number = 0

    init(width: number, height: number) {
        this.wscale = SCREEN_WIDTH / width;
        this.hscale = SCREEN_HEIGHT / height;
    }

    normalize = (size: number, based: string) => {
        const newSize = based === 'height' ? size * this.hscale : size * this.wscale;
        if (Platform.OS === 'ios') {
            return Math.round(PixelRatio.roundToNearestPixel(newSize));
        } else {
            return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
        }
    }

    fontSize = (size: number, based: string) => {
        const newSize = based === 'height' ? size * this.hscale : size * this.wscale;
        if (Platform.OS === 'ios') {
            return Math.round(PixelRatio.roundToNearestPixel(newSize));
        } else {
            return Math.round(PixelRatio.roundToNearestPixel(newSize));
        }
    }
}

export default ResponsiveScreen