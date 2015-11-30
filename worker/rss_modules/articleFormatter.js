var contentFormatter = require('./contentFormatter');
var imageScraper = require('./imageScraper');

module.exports = function (rawArticle, rssInfo) {
  var formattedArticle = {
    title: decodeURI(rawArticle.title),
    linkURL: rawArticle.link,
    publisher: rawArticle.feed.name,
    summary: contentFormatter(rawArticle.content),
    imgURL: null,
    date: rawArticle.published,
    category: null
  };
  console.log(rawArticle.title);
  console.log(formattedArticle.title);

  return imageScraper(formattedArticle.linkURL)
    .then(function (imgURL) {
      formattedArticle.imgURL = imgURL || rssInfo.fallbackArticleImage;
      return formattedArticle;
    });
};
