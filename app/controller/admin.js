module.exports = app => {
  return class AdminController extends app.Controller {
    
    async render(ctx) {
      // const list = ctx.service.article.getList(); 
      if (ctx.query.mode === 'ssr') {
        await ctx.render('app.js', { url: ctx.url });
      } else {
        await ctx.renderClient('app.js', { url: ctx.url });
      } 
    }
  };
};