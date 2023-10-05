module.exports = {
  transpileDependencies: ["vuetify"],

  pluginOptions: {
    electronBuilder: {
        builderOptions: {
            productName: "Simplex",
            appId: 'simplex.com',
            copyright: 'Copyright © Blooraid-Consortium 2023',
            win: {
                "target": [
                    "nsis"
                ],
              icon: 'public/simplexLogo.jpeg',
              "requestedExecutionLevel": "requireAdministrator"
            },
            "nsis": {
                "installerIcon": "public/simplexfav.ico",
                "uninstallerIcon": "public/simplexfav.ico",
                "uninstallDisplayName": "Simplex-Uninstaller",
                "license": "public/license.txt",
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
