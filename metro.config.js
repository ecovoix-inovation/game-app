// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

/** @type {import('expo/metro-config').MetroConfig} */
// eslint-disable-next-line no-undef
const config = getDefaultConfig(__dirname);

const{ transformer, resolver } = config;

config.transformer = {
  ...transformer,
  babelTransformerPath: require.resolve("react-native-svg-transformer"), // Adiciona o transformador de SVGs
  //assetPlugins: ['expo-asset/tools/hashAssetFiles'], // Plugin para hashing de assets
};

config.resolver = {
  ...resolver,
  assetExts: config.resolver.assetExts.filter((ext) => ext !== "svg"), // Remove "svg" do padrão
  sourceExts: [...config.resolver.sourceExts, "svg"], // Adiciona "svg" como extensão reconhecida
};

module.exports = withNativeWind(config, { input: './src/styles/global.css' });
