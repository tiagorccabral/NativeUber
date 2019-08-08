import { Platform, PixelRatio } from 'react-native';
const secrets = require('./secrets');

export function getPixelSize(pixels) {
  return Platform.select({
    ios: pixels,
    android: PixelRatio.getPixelSizeForLayoutSize(pixels)
  });
}

export function getGoogleApiKey() {
  return `${secrets.GOOGLE_API_KEY}`
}