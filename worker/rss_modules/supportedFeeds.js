var NPR = {
  rssUrl: 'http://www.npr.org/rss/rss.php?id=100', // Most Emailed Stories
  fallbackArticleImage: 'http://kentanabe.com/wordpress/wp-content/uploads/press_logo_npr.jpg'
};

var BBC = {
  rssUrl: 'http://feeds.bbci.co.uk/news/rss.xml', // Trending News
  fallbackArticleImage: 'https://i.embed.ly/1/display/resize?key=1e6a1a1efdb011df84894040444cdc60&url=http%3A%2F%2Fnewsimg.bbc.co.uk%2Fmedia%2Fimages%2F67373000%2Fjpg%2F_67373987_09f1654a-e583-4b5f-bfc4-f05850c6d3ce.jpg'
};

var techCrunch = {
  rssUrl: 'http://feeds.feedburner.com/TechCrunch/', // All Tech Crunch articles
  fallbackArticleImage: 'https://s0.wp.com/wp-content/themes/vip/techcrunch-2013/assets/images/logo.svg'
};

var ESPN = {
  rssUrl: 'http://sports.espn.go.com/espn/rss/news', // Top Headlines
  fallbackArticleImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK1WbB8VWRr46hvlR7JXm24efLg3iuRN2nzcY_rqEs-9oP3RB93ZPT_737AQ'
};

var AVClub = {
  rssUrl: 'http://www.avclub.com/feed/rss/', // All AV Club articles
  fallbackArticleImage: 'http://assets.onionstatic.com/avclub/core/img/avclub-logo.png'
};

var Vox = {
  rssUrl: 'http://www.vox.com/rss/index.xml', // Vox Headlines
  fallbackArticleImage: 'http://freebeacon.com/wp-content/uploads/2014/07/Vox-logo.png'
};

var supportedFeeds = [NPR, BBC, AVClub, ESPN, Vox];


module.exports = supportedFeeds;
