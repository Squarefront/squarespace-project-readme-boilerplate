## /assets/
Store your app-wide assets here.

**Note: Squarespace has a file size limit that has changed a few times over the years. I believe it's currently 1-2mb.**

### Storing large files
To get around Squarespace's dev mode file size limit, you can alternatively use their backend CMS file storage, although you should avoid using that for assets in general. The only use I've found for file storage is uploading videos to be used for autoplaying backgrounds, PDFs, .zip files and Press Kits.

### Async asset loading
If you're building a complex app on Squarespace, it's good to asyncronously load some external dependencies like JavaScript and CSS. I load them from `assets/async`.
