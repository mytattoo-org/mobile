module.exports = {
  presets: ['babel-preset-expo'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@config': ['./src/config'],
          '@assets': ['./assets'],
          '@hooks': ['./src/hooks'],
          '@store': ['./src/store'],
          '@tests': ['./src/tests'],
          '@utils': ['./src/utils'],
          '@routes': ['./src/routes'],
          '@styles': ['./src/styles'],
          '@screens': ['./src/screens'],
          '@typescript': ['./src/typescript'],
          '@components': ['./src/components'],
          '@common': ['./submodules/common/src']
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    ],
    [
      'module:react-native-dotenv',
      {
        path: '.env',
        moduleName: 'react-native-dotenv'
      }
    ]
  ]
}
