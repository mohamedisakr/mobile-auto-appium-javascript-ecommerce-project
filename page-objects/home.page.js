class Home {
  get $nameField() {
    return $(
      "//android.widget.EditText[@resource-id='com.androidsample.generalstore:id/nameField']"
    );
  }

  get $letShopButton() {
    return $(
      "//android.widget.Button[@resource-id='com.androidsample.generalstore:id/btnLetsShop']"
    );
  }

  goShopping() {
    this.$nameField.setValue("tota");
    this.$letShopButton.click();
  }
}

module.exports = new Home();
