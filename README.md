# Link shortener with custom redirect  <h1> How to use

Use the command npm or yarn for the button installation

[![NPM version]](https://www.npmjs.com/package/shortener-url-with-domain)

```npm
npm install --save shortener-url-with-domain
```

Or

```yarn
yarn add shortener-url-with-domain
```

## Example

##### note: CommonJsUsage

In order to gain the TypeScript typings (for intellisense / autocomplete) while using CommonJS imports with require() use the following approach:

```js
const { shortener } = require("shortener-url-with-domain");
```

## Usage

the function shortener expects two parameters of which only the url is mandatory, by default it returns the shortened url with our domain name.

```js
const { shortener } = require("shortener-url-with-domain");

/*
 * @params url = https://www.google.com
 * @return shortUrl = 01mz
 */
export const createUrl = async (url: string) => {
  let shortUrl = await shortener(url);
  return shortUrl;
};
```

or

If you want the clipped url to have your domain it would be:

```js
const { shortener } = require("shortener-url-with-domain");

/*
 * @params url = https://www.google.com
 * @params domain = 'YOUR REDIRECT URI' -> Format : https://example.com/
 * @return shortUrl = https://example.com/01mz
 */
const createUrl = async (url: string) => {
  let shortUrl = await shortener(url);
  return shortUrl;
};
```

# Mandatory Parameters

```ts

    url: string -> (required)
    domain: string -> (optional)

```


## Usage Custom Redirect

In the path you indicated to the previous method you must send to the getUrl function only the shortUrl example:

```js
const { getUrl } = require("shortener-url-with-domain");
```

## Usage

```js
const { getUrl } = require("shortener-url-with-domain");

/*
 * @params shortUrl = 01mz
 * @return url = https://google.com
 */
const returnUrl = async (shortUrl: string) => {
  let completeUrl = await getUrl(shortUrl);
  return completeUrl;
};

```