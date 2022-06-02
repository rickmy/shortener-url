import index from "../src/index";

describe("should return a link", () => {
  it("should return a link", async () => {
    const link = "https://www.google.com";
    const shortUrl = "01mz";
    const result = await index.getUrl(shortUrl).then((url) => {
      return url;
    });
    expect(result).toEqual(link);
  });

  it("should return void", async () => {
    const shortUrl = "";
    const result = await index.getUrl(shortUrl).then((url) => {
      return url;
    });
    expect(result).toEqual("Link not found");
  });
});

describe("should return a short link", () => {
  it("should return a short link", async () => {
    const link = "https://www.google.com";
    const domain = "https://www.facebook.com";
    const shortUrl = "/01mz";
    const result = await index.shortener(link, domain).then((url) => {
      return url;
    });
    expect(result).toEqual(domain + shortUrl);
  });

  it("should return a short link without domain", async () => {
    const link = "https://www.google.com";
    const domain = "littleurl.site/01mz";
    const result = await index.shortener(link).then((url) => {
      return url;
    });
    expect(result).toEqual(domain);
  });

  it("should return Url is required with url invalid", async () => {
    const link = "";
    const domain = "https://www.facebook.com";
    const result = await index.shortener(link, domain).then((url) => {
      return url;
    });
    expect(result).toEqual("Url is required");
  });

  it("should return Domain is not valid with url invalid", async () => {
    const link = "https://www.google.com";
    const domain = "hello";
    const result = await index.shortener(link, domain).then((url) => {
      return url;
    });
    expect(result).toEqual("Domain is not valid");
  });

  it("should return Url is not valid without domain", async () => {
    const link = "hello";
    const result = await index.shortener(link).then((url) => {
      return url;
    });
    expect(result).toEqual("Url is not valid");
  });
});
