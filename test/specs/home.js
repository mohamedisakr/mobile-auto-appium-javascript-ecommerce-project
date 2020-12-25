const home = require("../../page-objects/home.page");
// import ADB from "appium-adb";

//
describe("Task 1 : home page", () => {
  // beforeEach(async () => {
  //   const adb = await ADB.createADB();
  // });

  //
  // it("should load properly", () => {
  //   // check that page locator exist
  //   expect(home.$title).toBeExisting();
  //   expect(home.$courseCategory).toBeExisting();
  //   expect(home.$courseList).toBeExisting();
  // });

  it("1.1 home page form is filled", () => {
    // // expect(home.isTitleDisplayed).toBe(true);
    // const $nameField = $(
    //   "//android.widget.EditText[@resource-id='com.androidsample.generalstore:id/nameField']"
    // );
    // $nameField.setValue("tota");

    // const $letShopButton = $(
    //   "//android.widget.Button[@resource-id='com.androidsample.generalstore:id/btnLetsShop']"
    // );
    // $letShopButton.click();
    home.goShopping();
  });
});
