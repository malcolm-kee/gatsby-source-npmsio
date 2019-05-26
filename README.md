# gatsby-source-npmsio

[![version](https://img.shields.io/npm/v/gatsby-source-npmsio.svg)](https://www.npmjs.com/package/gatsby-source-npmsio) ![license](https://img.shields.io/npm/l/gatsby-source-mysql.svg)

Source plugin for pulling data into Gatsby from [npms.io](npms.io).

## How to use

```javascript
// In your gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-npmsio`,
      options: {
        name: 'author',
        qualifier: {
          author: `malcolmkee`
        }
      }
    }
    // ... other plugins
  ]
};
```

And then you can query via GraphQL with the type `allNpmsIo<Name>` where `<Name>` is the `name` you provided as plugin options.

Please refer to [npms.io docs](https://api-docs.npms.io/) for the supported qualifier.
