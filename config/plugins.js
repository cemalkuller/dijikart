  module.exports = ({ env }) => ({
    // enable a plugin that doesn't require any configuration
    i18n: true,
    'users-permissions': {
      false: true,
    },
    documentation: { 
      enabled: true, 
      config : {
        translations: {
        tr: {
            "components.Row.open": "Aç", 
            "components.Row.regenerate": "Yeniden Oluştur",
            "pages.PluginPage.table.version": "Versiyon",
            "containers.HomePage.Button.update": "GÜncelle",
            "containers.HomePage.PluginHeader.title": "Api Dökümanı Ayarları",
            "containers.HomePage.PopUpWarning.confirm": "Anladım",
            "containers.HomePage.PopUpWarning.message": "Seçili versiyon silinecektir, onaylıyor musunuz?",
            "containers.HomePage.form.password": "Şifre",
            "containers.HomePage.form.password.inputDescription": "Set the password to access the documentation",
            "containers.HomePage.form.restrictedAccess": "Kısıtlı Erişim",
            "containers.HomePage.form.restrictedAccess.inputDescription": "Make the documentation endpoint private. By default, the access is public",
            "containers.HomePage.form.showGeneratedFiles": "Show generated files",
            "containers.HomePage.form.showGeneratedFiles.inputDescription": "Useful when you want to override the generated documentation. \nThe plugin will generate files split by model and plugin. \nBy enabling this option it will be easier to customize your documentation",
            "error.deleteDoc.versionMissing": "The version you are trying to delete does not exist.",
            "error.noVersion": "A version is required",
            "error.regenerateDoc": "An error occurred while regenerating the doc", 
            "error.regenerateDoc.versionMissing": "The version you are trying to generate doesn't exist",
            "notification.update.success": "Settings updated successfully",
            "pages.SettingsPage.Button.save" : "Kaydet",
            "plugin.name" : "Api Dökümanı",
            "pages.SettingsPage.toggle.label" : "Kısıtlı Erişim",
            "pages.SettingsPage.header.description" : "Api Dökümanını Yapılandırın",
            "pages.SettingsPage.toggle.hint" : "Uç noktayı özel yapın",
            "pages.PluginPage.Button.open" : "Api Dökümanını Aç",
            "pages.PluginPage.table.generated" : "Son Oluşturma",
            "pages.PluginPage.table.icon.show" : "Aç",
            "pages.PluginPage.table.icon.regenerate" : "Yeniden Oluştur"
        }
    }
    }
    },
  });