module.exports = {
  transpileDependencies: ["vuetify"],

  pluginOptions: {
    electronBuilder: {
        builderOptions: {
            productName: "Simplex",
            appId: 'simplex.com',
            win: {
                "target": [
                    "nsis"
                ],
              icon: 'public/simplexLogo.png',
              "requestedExecutionLevel": "requireAdministrator"
            },
            "nsis": {
                "installerIcon": "public/simplexfav.ico",
                "uninstallerIcon": "public/simplexfav.ico",
                "uninstallDisplayName": "CPU Monitor",
                "license": "license.txt",
                "oneClick": false,
                "allowToChangeInstallationDirectory": true
            }
        },
    },
  },
  // devServer: {
  //   proxy: 'https://mino-api.blooraid-consortium.com/'
  // }
};
