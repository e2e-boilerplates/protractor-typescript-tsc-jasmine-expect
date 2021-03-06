import { browser, by, element } from "protractor";

describe("Sandbox", () => {
  beforeAll(() => {
    browser.get("https://e2e-boilerplate.github.io/sandbox/");
  });

  it("should be on Sandbox", async () => {
    const title = await browser.getTitle();
    const header = element(by.css("h1"));

    expect(title).toEqual("Sandbox");
    expect(await header.getText()).toEqual("Sandbox");
  });
});
