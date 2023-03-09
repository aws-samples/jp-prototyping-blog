const fs = require('fs');
const fm = require('front-matter');

module.exports = async function getRecentPosts(context, options) {
  return {
    name: 'get-recent-posts',
    async loadContent() {
      const posts = fs.readdirSync('./blog')
            .filter(f => f !== 'authors.yml')
            .reverse()
            .slice(0, options.n);

      return posts.map(r => {
        const { attributes } = fm(fs.readFileSync(`./blog/${r}/index.md`, 'utf-8'));
        return {
          title: attributes.title,
          link: `/blog/${attributes.slug}`,
        };
      });
    },
    async contentLoaded({ content, actions }) {
      const { setGlobalData } = actions;
      setGlobalData(content);
    }
  }
}
