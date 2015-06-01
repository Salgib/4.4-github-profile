this["JST"] = this["JST"] || {};
this["JST"]["application"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "";
},"useData":true});
this["JST"]["repo-template"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "  <div class=\"repo\">\n    <div class=\"repositories\">\n      <div class=\"repo-name\">\n        <a href=\""
    + alias3(((helper = (helper = helpers.html_url || (depth0 != null ? depth0.html_url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"html_url","hash":{},"data":data}) : helper)))
    + "\"><strong>"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</strong></a>\n        <p>Updated at "
    + alias3(((helper = (helper = helpers.updated_at || (depth0 != null ? depth0.updated_at : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"updated_at","hash":{},"data":data}) : helper)))
    + "</p>\n      </div>\n      <div class=\"repo-details\">\n        <ul>\n          <li>\n            <a href=\""
    + alias3(((helper = (helper = helpers.languages_url || (depth0 != null ? depth0.languages_url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"languages_url","hash":{},"data":data}) : helper)))
    + "\"><strong>"
    + alias3(((helper = (helper = helpers.language || (depth0 != null ? depth0.language : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"language","hash":{},"data":data}) : helper)))
    + "</strong></a>\n          </li>\n          <li>\n            <span class=\"octicon octicon-star\"></span>\n            <a href=\""
    + alias3(((helper = (helper = helpers.stargazers_url || (depth0 != null ? depth0.stargazers_url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"stargazers_url","hash":{},"data":data}) : helper)))
    + "\"><strong>"
    + alias3(((helper = (helper = helpers.stargazers_count || (depth0 != null ? depth0.stargazers_count : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"stargazers_count","hash":{},"data":data}) : helper)))
    + "</strong></a>\n          </li>\n          <li>\n            <span class=\"octicon octicon-git-branch\"></span>\n            <a href=\""
    + alias3(((helper = (helper = helpers.forks_url || (depth0 != null ? depth0.forks_url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"forks_url","hash":{},"data":data}) : helper)))
    + "\"><strong>"
    + alias3(((helper = (helper = helpers.forks_count || (depth0 != null ? depth0.forks_count : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"forks_count","hash":{},"data":data}) : helper)))
    + "</strong></a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,depth0,{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
this["JST"]["user-template"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<img src=\""
    + alias3(((helper = (helper = helpers.avatar_url || (depth0 != null ? depth0.avatar_url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"avatar_url","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" class=\"avatar\">\n<h2>"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h2>\n<h3>"
    + alias3(((helper = (helper = helpers.login || (depth0 != null ? depth0.login : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"login","hash":{},"data":data}) : helper)))
    + "</h3>\n\n<h6>"
    + alias3(((helper = (helper = helpers.location || (depth0 != null ? depth0.location : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"location","hash":{},"data":data}) : helper)))
    + "</h6>\n<h6>"
    + alias3(((helper = (helper = helpers.created_at || (depth0 != null ? depth0.created_at : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"created_at","hash":{},"data":data}) : helper)))
    + "</h6>\n\n<ul class=\"followers-stars\">\n  <li><a href=\""
    + alias3(((helper = (helper = helpers.followers_url || (depth0 != null ? depth0.followers_url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"followers_url","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.followers || (depth0 != null ? depth0.followers : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"followers","hash":{},"data":data}) : helper)))
    + "</a></li>\n  <li><a href=\""
    + alias3(((helper = (helper = helpers.starred_url || (depth0 != null ? depth0.starred_url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"starred_url","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.starred || (depth0 != null ? depth0.starred : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"starred","hash":{},"data":data}) : helper)))
    + "</a></li>\n  <li><a href=\""
    + alias3(((helper = (helper = helpers.following_url || (depth0 != null ? depth0.following_url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"following_url","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.following || (depth0 != null ? depth0.following : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"following","hash":{},"data":data}) : helper)))
    + "</a></li>\n</ul>\n\n<h4>Organizations</h4>\n<a href=\""
    + alias3(((helper = (helper = helpers.organizations_url || (depth0 != null ? depth0.organizations_url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"organizations_url","hash":{},"data":data}) : helper)))
    + "\"><img src=\"https://avatars0.githubusercontent.com/u/11824325?v=3&s=84\" alt=\"TIY-FEE\" /></a>\n";
},"useData":true});