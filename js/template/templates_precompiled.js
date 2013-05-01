define(['app'],function(app){Ember.TEMPLATES["alert.hbs"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
helpers = helpers || Ember.Handlebars.helpers;
  var buffer = '', stack1, stack2, stack3, foundHelper, tmp1, self=this, escapeExpression=this.escapeExpression;


  data.buffer.push("<section class=\"alert\">\n	<header>");
  stack1 = depth0;
  stack2 = "title";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "</header>\n	<span>");
  stack1 = depth0;
  stack2 = "description";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "</span>\n</section>");
  return buffer;
});
Ember.TEMPLATES["application.hbs"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
helpers = helpers || Ember.Handlebars.helpers;
  var stack1, stack2, stack3, foundHelper, tmp1, self=this, escapeExpression=this.escapeExpression;


  stack1 = depth0;
  stack2 = "outlet";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1));
});
Ember.TEMPLATES["document.hbs"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
helpers = helpers || Ember.Handlebars.helpers;
  var stack1, stack2, stack3, foundHelper, tmp1, self=this, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n<div ");
  stack1 = {};
  stack2 = ":overlay active:active:unactive";
  stack1['class'] = stack2;
  stack2 = helpers.bindAttr;
  tmp1 = {};
  tmp1.hash = stack1;
  tmp1.contexts = [];
  tmp1.data = data;
  stack1 = stack2.call(depth0, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">\n    <div class=\"cover\">\n    	");
  stack1 = depth0;
  stack2 = "showsLoadingView";
  stack3 = helpers['if'];
  tmp1 = self.program(2, program2, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n    	<div ");
  stack1 = {};
  stack2 = ":document-container pageViewClass";
  stack1['class'] = stack2;
  stack2 = helpers.bindAttr;
  tmp1 = {};
  tmp1.hash = stack1;
  tmp1.contexts = [];
  tmp1.data = data;
  stack1 = stack2.call(depth0, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">\n    		<div class=\"document-page\">\n    			<header>\n    				<button class=\"btn pull-left\" ");
  stack1 = depth0;
  stack2 = "cancelComposing";
  stack3 = helpers.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">取消</button>\n    				<button class=\"btn pull-left\">下载模板</button>\n    				<h4>本科生论文（设计）开题报告</h4>\n    				<button class=\"btn btn-primary pull-right\" ");
  stack1 = depth0;
  stack2 = "post";
  stack3 = helpers.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">确认并上传</button>\n    			</header>\n    			<hr/>\n    			<section class=\"document-page-container\">\n    				\n    			</section>\n    		</div>\n    	</div>\n    </div>\n</div>\n");
  return buffer;}
function program2(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n    		<div ");
  stack1 = {};
  stack2 = ":document-loading loadingTemplate:document-loading-template";
  stack1['class'] = stack2;
  stack2 = helpers.bindAttr;
  tmp1 = {};
  tmp1.hash = stack1;
  tmp1.contexts = [];
  tmp1.data = data;
  stack1 = stack2.call(depth0, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">\n    			<i class=\"loading-background\"></i>\n    			<span>");
  stack1 = depth0;
  stack2 = "loadingViewText";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "</span>\n    			<button class=\"btn\" ");
  stack1 = depth0;
  stack2 = "cancelLoading";
  stack3 = helpers.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">取消</button>\n    		</div>\n    	");
  return buffer;}

  stack1 = depth0;
  stack2 = "opened";
  stack3 = helpers['if'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
});
Ember.TEMPLATES["login.hbs"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
helpers = helpers || Ember.Handlebars.helpers;
  var buffer = '', stack1, stack2, stack3, stack4, foundHelper, tmp1, self=this, escapeExpression=this.escapeExpression;


  data.buffer.push("<section id=\"login\">\n	<header id=\"login-header\">\n		alpha 论文管理系统\n	</header>\n	<div id=\"login-main\">\n		<form>\n			<div class=\"login-forms-container\">\n				<div class=\"form-row form-row-username\">\n					<input type=\"text\" id=\"inputUsername\" placeholder=\"用户名\">\n				</div>\n				<div class=\"form-row form-row-password\">\n					<input type=\"password\" id=\"inputPassword\" placeholder=\"密码\">\n				</div>\n			</div>\n			<button id=\"login-submit-button\" ");
  stack1 = depth0;
  stack2 = "tryLogin";
  stack3 = {};
  stack4 = true;
  stack3['href'] = stack4;
  stack4 = helpers.action;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + " ");
  stack1 = {};
  stack2 = "pending:disabled";
  stack1['class'] = stack2;
  stack2 = helpers.bindAttr;
  tmp1 = {};
  tmp1.hash = stack1;
  tmp1.contexts = [];
  tmp1.data = data;
  stack1 = stack2.call(depth0, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">\n				");
  stack1 = depth0;
  stack2 = "signinButtonTitle";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n			</button>\n			<div class=\"login-options-container\">\n				<label class=\"checkbox\">\n					<input id=\"login-remember-me\" type=\"checkbox\" checked> 下次自动登陆\n				</label>\n				<a id=\"login-forget-button\" href=\"mailto:theses.nfsysu@gmail.com\">忘记密码?</a>\n			</div>\n		</form>\n	</div>\n</section>");
  return buffer;
});
Ember.TEMPLATES["main.hbs"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
helpers = helpers || Ember.Handlebars.helpers;
  var buffer = '', stack1, stack2, stack3, foundHelper, tmp1, self=this, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing, undef=void 0;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3, stack4, stack5, stack6;
  data.buffer.push("\n                <a href=\"#\" ");
  stack1 = {};
  stack2 = "current";
  stack1['class'] = stack2;
  stack2 = helpers.bindAttr;
  tmp1 = {};
  tmp1.hash = stack1;
  tmp1.contexts = [];
  tmp1.data = data;
  stack1 = stack2.call(depth0, tmp1);
  data.buffer.push(escapeExpression(stack1) + " ");
  stack1 = depth0;
  stack2 = "";
  stack3 = depth0;
  stack4 = "navItemPressed";
  stack5 = {};
  stack6 = true;
  stack5['href'] = stack6;
  stack6 = helpers.action;
  tmp1 = {};
  tmp1.hash = stack5;
  tmp1.contexts = [];
  tmp1.contexts.push(stack3);
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack6.call(depth0, stack4, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">\n                    ");
  stack1 = depth0;
  stack2 = "title";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n                </a>\n            ");
  return buffer;}

function program3(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n<div id=\"confirm-overlay\" ");
  stack1 = {};
  stack2 = ":overlay hasRequest:active:hide";
  stack1['class'] = stack2;
  stack2 = helpers.bindAttr;
  tmp1 = {};
  tmp1.hash = stack1;
  tmp1.contexts = [];
  tmp1.data = data;
  stack1 = stack2.call(depth0, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">\n    <div class=\"cover\">\n        <div id=\"confirmation-container\" class=\"yield\">\n            ");
  stack1 = depth0;
  stack2 = "currentRequest";
  stack3 = helpers['if'];
  tmp1 = self.program(4, program4, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n    </div>\n</div>\n");
  return buffer;}
function program4(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3, stack4;
  data.buffer.push("\n                <div class=\"confirm-window-wrapper\">\n                 <div class=\"confirm-window\">\n                     <div class=\"confirm-wrapper\">\n                         <h4 class=\"confirm-title\">");
  stack1 = depth0;
  stack2 = "currentRequest.title";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "</h4>\n                         <p class=\"confirm-description\">");
  stack1 = depth0;
  stack2 = "currentRequest.description";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "</p>\n                         <section class=\"confirm-buttons\">\n                             <button class=\"btn\" ");
  stack1 = depth0;
  stack2 = "cancelCurrentRequest";
  stack3 = {};
  stack4 = "Theses.confirmationManager";
  stack3['target'] = stack4;
  stack4 = helpers.action;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">取消</button>\n                             <button class=\"btn btn-primary pull-right\" ");
  stack1 = depth0;
  stack2 = "confirmCurrentRequest";
  stack3 = {};
  stack4 = "Theses.confirmationManager";
  stack3['target'] = stack4;
  stack4 = helpers.action;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">确定</button>\n                         </section>\n                     </div>\n                 </div>\n             </div>\n            ");
  return buffer;}

  data.buffer.push("<div id=\"panel-overlay\" class=\"overlay unactive\" style=\"display:none\">\n    <div class=\"cover\">\n        <div class=\"yield\">\n            ");
  stack1 = depth0;
  stack2 = "panel";
  foundHelper = helpers.outlet;
  stack3 = foundHelper || depth0.outlet;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, tmp1); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "outlet", stack2, tmp1); }
  else { stack1 = stack3; }
  data.buffer.push(escapeExpression(stack1) + "\n        </div> \n    </div>\n</div>\n\n<header id=\"main-header\">\n    <div id=\"header\">\n        <h1><a href=\"#\">Theses 论文管理</a></h1>	\n        <div id=\"breadcrumb\">\n            <a href=\"#\" title=\"Go to Home\" class=\"tip-bottom\">主页</a>\n            ");
  stack1 = depth0;
  stack2 = "navItems";
  stack3 = helpers.each;
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n        ");
  stack1 = depth0;
  stack2 = "navbar";
  foundHelper = helpers.outlet;
  stack3 = foundHelper || depth0.outlet;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, tmp1); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "outlet", stack2, tmp1); }
  else { stack1 = stack3; }
  data.buffer.push(escapeExpression(stack1) + "	\n    </div>\n</header>\n<section id=\"main-content\" ");
  stack1 = {};
  stack2 = "modal-enabled";
  stack1['class'] = stack2;
  stack2 = helpers.bindAttr;
  tmp1 = {};
  tmp1.hash = stack1;
  tmp1.contexts = [];
  tmp1.data = data;
  stack1 = stack2.call(depth0, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">\n    ");
  stack1 = depth0;
  stack2 = "sidebar";
  foundHelper = helpers.outlet;
  stack3 = foundHelper || depth0.outlet;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, tmp1); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "outlet", stack2, tmp1); }
  else { stack1 = stack3; }
  data.buffer.push(escapeExpression(stack1) + "      \n    <div id=\"content\">\n        <div id=\"content-container\" class=\"container-fluid\">\n            ");
  stack1 = depth0;
  stack2 = "content";
  foundHelper = helpers.outlet;
  stack3 = foundHelper || depth0.outlet;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, tmp1); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "outlet", stack2, tmp1); }
  else { stack1 = stack3; }
  data.buffer.push(escapeExpression(stack1) + "\n        </div>\n    </div>\n    ");
  stack1 = depth0;
  stack2 = "message";
  foundHelper = helpers.outlet;
  stack3 = foundHelper || depth0.outlet;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, tmp1); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "outlet", stack2, tmp1); }
  else { stack1 = stack3; }
  data.buffer.push(escapeExpression(stack1) + "\n    ");
  stack1 = depth0;
  stack2 = "document";
  foundHelper = helpers.outlet;
  stack3 = foundHelper || depth0.outlet;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, tmp1); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "outlet", stack2, tmp1); }
  else { stack1 = stack3; }
  data.buffer.push(escapeExpression(stack1) + "\n    ");
  stack1 = depth0;
  stack2 = "upload";
  foundHelper = helpers.outlet;
  stack3 = foundHelper || depth0.outlet;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, tmp1); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "outlet", stack2, tmp1); }
  else { stack1 = stack3; }
  data.buffer.push(escapeExpression(stack1) + "\n     <div id=\"sidebar-copyright\" class=\"desktop\">\n        Design, Dev by <a href=\"http://weibo.com/naituw\">@Naituw</a> , <a href=\"http://weibo.com/jiayoushuishou\">@bo潮</a><br/>\n        Copyright NFSYSU\n    </div>\n</section>\n\n");
  stack1 = depth0;
  stack2 = "Theses.confirmationManager";
  stack3 = helpers['with'];
  tmp1 = self.program(3, program3, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
});
Ember.TEMPLATES["message.hbs"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
helpers = helpers || Ember.Handlebars.helpers;
  var stack1, stack2, stack3, foundHelper, tmp1, self=this, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3, stack4;
  data.buffer.push("\n<div ");
  stack1 = {};
  stack2 = ":overlay active:active:unactive";
  stack1['class'] = stack2;
  stack2 = helpers.bindAttr;
  tmp1 = {};
  tmp1.hash = stack1;
  tmp1.contexts = [];
  tmp1.data = data;
  stack1 = stack2.call(depth0, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">\n    <div class=\"cover\">\n\n    <div id=\"message-panel\"> \n        <div id=\"message-left\">\n            <header class=\"navigation-bar\">\n                <button id=\"new-message-button\" type=\"button\" class=\"btn\" ");
  stack1 = depth0;
  stack2 = "newConversationButtonPressed";
  stack3 = helpers.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">\n                    <i class=\"message-compose-icon\"></i>\n                </button>\n            </header>\n            <div id=\"conversations\">\n                ");
  stack1 = depth0;
  stack2 = "Theses.messagesManager";
  stack3 = helpers['with'];
  tmp1 = self.programWithDepth(program2, data, depth0);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </div>\n        </div>\n        <div id=\"message-right\">\n            <header class=\"navigation-bar\">\n                ");
  stack1 = depth0;
  stack2 = "selectedConversation";
  stack3 = helpers['if'];
  tmp1 = self.program(9, program9, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                <a class=\"close\" id=\"message-panel-close\" href=\"#\" ");
  stack1 = depth0;
  stack2 = "close";
  stack3 = {};
  stack4 = "true";
  stack3['href'] = stack4;
  stack4 = helpers.action;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">&times;</a>\n            </header>\n            ");
  stack1 = depth0;
  stack2 = "newConversationMode";
  stack3 = helpers['if'];
  tmp1 = self.program(11, program11, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(16, program16, data);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n\n        </div>\n    </div>\n</div>\n");
  return buffer;}
function program2(depth0,data,depth1) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n                    ");
  stack1 = depth0;
  stack2 = "conversations";
  stack3 = helpers.each;
  tmp1 = self.program(3, program3, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    ");
  stack1 = depth0;
  stack2 = "loadingMoreConversations";
  stack3 = helpers['if'];
  tmp1 = self.program(5, program5, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    ");
  stack1 = depth1;
  stack2 = "showsLoadMoreButton";
  stack3 = helpers['if'];
  tmp1 = self.program(7, program7, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                ");
  return buffer;}
function program3(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3, stack4;
  data.buffer.push("\n                        ");
  stack1 = depth0;
  stack2 = "Theses.ConversationRow";
  stack3 = {};
  stack4 = depth0;
  stack3['conversation'] = stack4;
  stack4 = helpers.view;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n                    ");
  return buffer;}

function program5(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n                        <div class=\"more-conversations\">\n                            ");
  stack1 = depth0;
  stack2 = "Theses.LoadingView";
  stack3 = helpers.view;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n                        </div>\n                    ");
  return buffer;}

function program7(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n                        <div class=\"more-conversations\">\n                            <a class=\"load-more-button\" ");
  stack1 = depth0;
  stack2 = "loadMoreConversations";
  stack3 = helpers.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">加载更多</a>\n                        </div>\n                    ");
  return buffer;}

function program9(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n                    <img class=\"message-current-avatar\" ");
  stack1 = {};
  stack2 = "selectedConversation.with_user.avatarThumbURL";
  stack1['src'] = stack2;
  stack2 = helpers.bindAttr;
  tmp1 = {};
  tmp1.hash = stack1;
  tmp1.contexts = [];
  tmp1.data = data;
  stack1 = stack2.call(depth0, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">\n                    <div class=\"message-current-info\">\n                        ");
  stack1 = depth0;
  stack2 = "selectedConversation.with_user.screenname";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + " / ");
  stack1 = depth0;
  stack2 = "selectedConversation.with_user.username";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n                    </div>\n                ");
  return buffer;}

function program11(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n                <div id=\"new-conversation\">\n                    <div class=\"new-conversation-tip\">\n                        新对话\n                    </div>\n                    <div class=\"new-conversation-target\">\n                        ");
  stack1 = depth0;
  stack2 = "Theses.messagesManager.pendingNewConversation";
  stack3 = helpers['if'];
  tmp1 = self.program(12, program12, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(14, program14, data);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    </div>\n                </div>\n            ");
  return buffer;}
function program12(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n                            ");
  stack1 = depth0;
  stack2 = "Theses.LoadingView";
  stack3 = helpers.view;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n                        ");
  return buffer;}

function program14(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3, stack4;
  data.buffer.push("\n                            <form>\n                                ");
  stack1 = depth0;
  stack2 = "Ember.TextField";
  stack3 = {};
  stack4 = "对方的用户名";
  stack3['placeholder'] = stack4;
  stack4 = "newConversationTarget";
  stack3['valueBinding'] = stack4;
  stack4 = helpers.view;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n                                <button class=\"btn btn-primary\" ");
  stack1 = {};
  stack2 = "newConversationStartButtonDisabled";
  stack1['disabled'] = stack2;
  stack2 = helpers.bindAttr;
  tmp1 = {};
  tmp1.hash = stack1;
  tmp1.contexts = [];
  tmp1.data = data;
  stack1 = stack2.call(depth0, tmp1);
  data.buffer.push(escapeExpression(stack1) + " ");
  stack1 = depth0;
  stack2 = "newConversationStart";
  stack3 = helpers.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + " type=\"submit\">开始</button>\n                            </form>\n                        ");
  return buffer;}

function program16(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n                ");
  stack1 = depth0;
  stack2 = "selectedConversation";
  stack3 = helpers['if'];
  tmp1 = self.program(17, program17, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            ");
  return buffer;}
function program17(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3, stack4;
  data.buffer.push("\n                    <div class=\"message-content-wrapper\">\n                        <div class=\"message-content\" id=\"message-content\">\n                            ");
  stack1 = depth0;
  stack2 = "selectedMessages";
  stack3 = helpers.each;
  tmp1 = self.program(18, program18, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                        </div>\n                        <div class=\"message-input-wrapper\">\n                            <div class=\"line-separator\"></div>\n                            <form>\n                                ");
  stack1 = depth0;
  stack2 = "Ember.TextField";
  stack3 = {};
  stack4 = "currentInputMessageContent";
  stack3['valueBinding'] = stack4;
  stack4 = helpers.view;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n                                <button class=\"btn btn-primary btn-mini\" type=\"submit\" ");
  stack1 = depth0;
  stack2 = "postButtonPressed";
  stack3 = helpers.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">发送</button>\n                            </form>\n                        </div>\n                    </div>\n                ");
  return buffer;}
function program18(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3, stack4;
  data.buffer.push("\n                                ");
  stack1 = depth0;
  stack2 = "Theses.MessageRow";
  stack3 = {};
  stack4 = depth0;
  stack3['content'] = stack4;
  stack4 = helpers.view;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n                            ");
  return buffer;}

  stack1 = depth0;
  stack2 = "opened";
  stack3 = helpers['if'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
});
Ember.TEMPLATES["navbar.hbs"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
helpers = helpers || Ember.Handlebars.helpers;
  var buffer = '', stack1, stack2, stack3, stack4, foundHelper, tmp1, self=this, escapeExpression=this.escapeExpression;


  data.buffer.push("    <div id=\"user-nav\" class=\"navbar navbar-inverse\">\n        <ul class=\"nav\">\n            <li id=\"user-nav-profile\" >\n            	<a href=\"#\" ");
  stack1 = depth0;
  stack2 = "profile";
  stack3 = {};
  stack4 = true;
  stack3['href'] = stack4;
  stack4 = helpers.action;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">\n            		<div class=\"avatar\"><img ");
  stack1 = {};
  stack2 = "currentAccount.user.avatarThumbURL";
  stack1['src'] = stack2;
  stack2 = helpers.bindAttr;
  tmp1 = {};
  tmp1.hash = stack1;
  tmp1.contexts = [];
  tmp1.data = data;
  stack1 = stack2.call(depth0, tmp1);
  data.buffer.push(escapeExpression(stack1) + "/></div>\n            		<span class=\"text\">");
  stack1 = depth0;
  stack2 = "currentAccount.user.screenname";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "</span>\n            	</a>\n            </li>\n            <li class=\"dropdown\" id=\"menu-messages\">\n            	<a href=\"#\" ");
  stack1 = depth0;
  stack2 = "message";
  stack3 = {};
  stack4 = true;
  stack3['href'] = stack4;
  stack4 = helpers.action;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">\n            		<i class=\"icon icon-envelope\"></i> \n            		<span class=\"text\">私信</span> \n            		<span ");
  stack1 = {};
  stack2 = ":label Theses.messagesManager.newFlagsCount:label-important:label-mute";
  stack1['class'] = stack2;
  stack2 = helpers.bindAttr;
  tmp1 = {};
  tmp1.hash = stack1;
  tmp1.contexts = [];
  tmp1.data = data;
  stack1 = stack2.call(depth0, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">");
  stack1 = depth0;
  stack2 = "Theses.messagesManager.newFlagsCount";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "</span> \n            	</a>\n            </li>\n            <li>\n            	<a title=\"\" href=\"#\"  ");
  stack1 = depth0;
  stack2 = "settings";
  stack3 = {};
  stack4 = true;
  stack3['href'] = stack4;
  stack4 = helpers.action;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">\n            		<i class=\"icon icon-cog\"></i> \n            		<span class=\"text\">设置</span>\n            	</a>\n            </li>\n            <li>\n            	<a href=\"#\" ");
  stack1 = depth0;
  stack2 = "signout";
  stack3 = {};
  stack4 = true;
  stack3['href'] = stack4;
  stack4 = helpers.action;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">\n            		<i class=\"icon icon-share-alt\"></i> \n            		<span class=\"text\">登出</span>\n            	</a>\n            </li>\n        </ul>\n    </div>");
  return buffer;
});
Ember.TEMPLATES["overlay.hbs"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
helpers = helpers || Ember.Handlebars.helpers;
  var foundHelper, self=this;


  data.buffer.push("            <header> \n                <section class=\"custom\"> \n                    <div class=\"info\"> \n                        <h1>用户资料</h1> \n                        <h2>更新你的账户信息</h2> \n                    </div> \n                </section> \n                <nav> \n                    <a class=\"close\">Close</a>  \n                </nav> \n            </header>\n            <form novalidate=\"\" autocomplete=\"on\" method=\"post\"> \n                <div class=\"yield\">\n                    <div class=\"payment\">\n                        <article> \n                            <div class=\"message\"></div> \n                            <div class=\"number\"> \n                                <label for=\"paymentNumber\">Card number</label> \n                                <input type=\"text\" id=\"paymentNumber\" placeholder=\"●●●● ●●●● ●●●● ●●●●\" data-placeholder=\"Card number\" x-autocompletetype=\"cc-number\" required=\"\" data-numeric=\"\"> \n                                <div class=\"placeholder\"></div> \n                                <div class=\"type\"></div> \n                            </div> \n                            <div class=\"expiry\"> \n                                <label for=\"paymentExpiry\">Expires</label> \n                                <input type=\"text\" id=\"paymentExpiry\" placeholder=\"MM / YY\" x-autocompletetype=\"cc-exp\" maxlength=\"9\" pattern=\"\\d*\" data-numeric=\"\" required=\"\"> \n                            </div> \n                            <div class=\"name\"> \n                                <label for=\"paymentName\">Name on card</label> \n                                <input type=\"text\" id=\"paymentName\" data-placeholder=\"Name on card\" x-autocompletetype=\"name\" autocapitalize=\"words\" autocorrect=\"off\" spellcheck=\"off\" required=\"\"> \n                            </div> \n                            <div class=\"cvc\"> \n                                <label for=\"paymentCVC\">Card code</label> \n                                <input type=\"text\" id=\"paymentCVC\" placeholder=\"CVC\" x-autocompletetype=\"cc-csc\" maxlength=\"4\" pattern=\"\\d*\" autocomplete=\"off\" data-numeric=\"\" required=\"\"> \n                            </div> \n                        </article> \n                        <div class=\"preloaded-images\"></div> \n                    </div>\n                    <div class=\"address international\">\n                        <article> \n                            <label for=\"line_1\">Billing address</label> \n                            <fieldset> \n                                <div class=\"line_1\"> \n                                    <input name=\"line_1\" id=\"line_1\" type=\"text\" placeholder=\"Street\" x-autocompletetype=\"address-line1\" required=\"\"> \n                                </div> \n                                <!-- <div class=\"line_2\"> <input name=\"line_2\" type=\"text\" placeholder=\"Apartment, suit, floor, etc\" x-autocompletetype=\"address-line2\" required> </div> --> \n                                <div class=\"hbox\"> \n                                    <div class=\"city\"> \n                                        <input name=\"city\" type=\"text\" placeholder=\"City\" x-autocompletetype=\"city\" required=\"\"> \n                                    </div> \n                                    <div class=\"state us\"> \n                                        <div class=\"select\" data-placeholder=\"State\"> \n                                            <span>State</span> \n                                            <select name=\"state\" placeholder=\"State\" x-autocomplete=\"state\" required=\"\"> \n                                                <option value=\"\">State:</option> \n                                                <option value=\"AL\">AL</option> \n                                                <option value=\"AK\">AK</option> \n                                            </select> \n                                        </div> \n                                    </div> \n                                    <div class=\"province international\"> \n                                        <input name=\"province\" type=\"text\" placeholder=\"Province\" x-autocompletetype=\"province\"> \n                                    </div> \n                                </div> \n                                <div class=\"hbox\"> \n                                    <div class=\"zip us\"> \n                                        <input name=\"zip\" type=\"text\" placeholder=\"Zip\" x-autocompletetype=\"postal-code\" required=\"\"> \n                                    </div> \n                                    <div class=\"postalcode international\"> \n                                        <input name=\"postalcode\" type=\"text\" placeholder=\"Postal code\" x-autocompletetype=\"postal-code\" required=\"\"> \n                                    </div> \n                                    <div class=\"country\"> \n                                        <div class=\"select changed\" data-placeholder=\"Country\"> \n                                            <span>China</span> \n                                            <select name=\"country\" placeholder=\"Country\" x-autocomplete=\"country\" required=\"\"> \n                                                <option value=\"\">Country:</option> \n                                                <option value=\"AF\">Afghanistan</option> \n                                                <option value=\"AL\">Albania</option> \n                                                <option value=\"ZW\">Zimbabwe</option> \n                                            </select> \n                                        </div> \n                                    </div> \n                                </div> \n                            </fieldset> \n                        </article> \n                    </div>\n                </div> \n                <footer> \n                    <button type=\"submit\" class=\"blue submit\">\n                        <span>Pay $5.00</span>\n                    </button> \n                </footer> \n            </form> \n            <div class=\"success\"> \n                <div class=\"check\"></div> \n            </div> ");
});
Ember.TEMPLATES["sidebar.hbs"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
helpers = helpers || Ember.Handlebars.helpers;
  var buffer = '', stack1, stack2, stack3, foundHelper, tmp1, self=this, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing, undef=void 0;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3, stack4, stack5, stack6;
  data.buffer.push("\n        <li ");
  stack1 = {};
  stack2 = "submenu active";
  stack1['class'] = stack2;
  stack2 = helpers.bindAttr;
  tmp1 = {};
  tmp1.hash = stack1;
  tmp1.contexts = [];
  tmp1.data = data;
  stack1 = stack2.call(depth0, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">\n            <a ");
  stack1 = {};
  stack2 = "action";
  stack1['data-action'] = stack2;
  stack2 = helpers.bindAttr;
  tmp1 = {};
  tmp1.hash = stack1;
  tmp1.contexts = [];
  tmp1.data = data;
  stack1 = stack2.call(depth0, tmp1);
  data.buffer.push(escapeExpression(stack1) + " ");
  stack1 = depth0;
  stack2 = "";
  stack3 = depth0;
  stack4 = "itemPressed";
  stack5 = {};
  stack6 = true;
  stack5['href'] = stack6;
  stack6 = helpers.action;
  tmp1 = {};
  tmp1.hash = stack5;
  tmp1.contexts = [];
  tmp1.contexts.push(stack3);
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack6.call(depth0, stack4, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">\n                ");
  stack1 = depth0;
  stack2 = "iconName";
  foundHelper = helpers.icon;
  stack3 = foundHelper || depth0.icon;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, tmp1); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "icon", stack2, tmp1); }
  else { stack1 = stack3; }
  data.buffer.push(escapeExpression(stack1) + "\n                <span>");
  stack1 = depth0;
  stack2 = "title";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "</span>\n                ");
  stack1 = depth0;
  stack2 = "unread";
  stack3 = helpers['if'];
  tmp1 = self.program(2, program2, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </a>\n        </li>\n        ");
  return buffer;}
function program2(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n                <span class=\"label\">");
  stack1 = depth0;
  stack2 = "unread";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "</span>\n                ");
  return buffer;}

  data.buffer.push("<div id=\"sidebar\">\n    <div id=\"sidebar-profile\" class=\"desktop\">\n        <div class='avatar'>\n            <img ");
  stack1 = {};
  stack2 = "currentUser.avatarURL";
  stack1['src'] = stack2;
  stack2 = helpers.bindAttr;
  tmp1 = {};
  tmp1.hash = stack1;
  tmp1.contexts = [];
  tmp1.data = data;
  stack1 = stack2.call(depth0, tmp1);
  data.buffer.push(escapeExpression(stack1) + "/>\n        </div>\n        <label id=\"sidebar-profile-details\">\n            ");
  stack1 = depth0;
  stack2 = "currentUser.username";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + " / ");
  stack1 = depth0;
  stack2 = "currentUser.levelType";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n        </label>\n    </div>\n    <a href=\"#\" id=\"phone-dropdown\" class=\"visible-phone\">\n        ");
  stack1 = depth0;
  stack2 = "Theses.mainController.currentNavTitle";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n    </a>\n    <ul>\n        ");
  stack1 = depth0;
  stack2 = "items";
  stack3 = helpers.each;
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </ul>\n</div>");
  return buffer;
});
Ember.TEMPLATES["upload.hbs"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
helpers = helpers || Ember.Handlebars.helpers;
  var buffer = '', stack1, stack2, stack3, foundHelper, tmp1, self=this, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3, stack4;
  data.buffer.push("\n			");
  stack1 = depth0;
  stack2 = "Theses.UploadItemView";
  stack3 = {};
  stack4 = depth0;
  stack3['task'] = stack4;
  stack4 = helpers.view;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n		");
  return buffer;}

  data.buffer.push("<div id=\"upload-panel\" class=\"desktop\">\n	<div id='upload-list' class=\"clearfix\">\n		<a id='upload-list-switch' ");
  stack1 = depth0;
  stack2 = "togglePanel";
  stack3 = helpers.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">\n			<i ");
  stack1 = {};
  stack2 = "opened:icon-chevron-down:icon-chevron-up";
  stack1['class'] = stack2;
  stack2 = helpers.bindAttr;
  tmp1 = {};
  tmp1.hash = stack1;
  tmp1.contexts = [];
  tmp1.data = data;
  stack1 = stack2.call(depth0, tmp1);
  data.buffer.push(escapeExpression(stack1) + " class=\"\"></i>\n		</a>\n		");
  stack1 = depth0;
  stack2 = "Theses.uploadManager.tasks";
  stack3 = helpers.each;
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n	</div>\n</div>");
  return buffer;
});
Ember.TEMPLATES["dashboard.hbs"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
helpers = helpers || Ember.Handlebars.helpers;
  var buffer = '', stack1, stack2, stack3, stack4, foundHelper, tmp1, self=this, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n	");
  stack1 = depth0;
  stack2 = "loadingMilestones";
  stack3 = helpers.unless;
  tmp1 = self.program(2, program2, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;}
function program2(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n	<div class=\"row-fluid\">\n		<div class=\"span12\">\n			");
  stack1 = depth0;
  stack2 = "currentStone";
  stack3 = helpers['if'];
  tmp1 = self.program(3, program3, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(5, program5, data);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n		</div>\n	</div>\n	");
  return buffer;}
function program3(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n			<div class=\"alert alert-success no-margin\"> \n				论文流程已在进行中，当前阶段为：<b>");
  stack1 = depth0;
  stack2 = "currentStone.tip";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "</b>\n			</div>\n			");
  return buffer;}

function program5(depth0,data) {
  
  
  data.buffer.push("\n			<div class=\"alert alert-warning no-margin\"> \n				目前论文流程还未开始。\n			</div>\n			");}

function program7(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3, stack4;
  data.buffer.push("\n					<a href=\"#\" ");
  stack1 = depth0;
  stack2 = "newNoticeButtonPressed";
  stack3 = {};
  stack4 = true;
  stack3['href'] = stack4;
  stack4 = helpers.action;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + " class=\"btn btn-mini\">\n						<i class=\"icon-plus\"></i> 发布\n					</a>\n					");
  return buffer;}

function program9(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n					");
  stack1 = depth0;
  stack2 = "Theses.LoadingView";
  stack3 = helpers.view;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n				");
  return buffer;}

function program11(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3, stack4;
  data.buffer.push("\n					");
  stack1 = depth0;
  stack2 = "notices.length";
  stack3 = helpers['if'];
  tmp1 = self.program(12, program12, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(15, program15, data);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n					");
  stack1 = depth0;
  stack2 = "Theses.PagingView";
  stack3 = {};
  stack4 = "currentNoticePage";
  stack3['pageBinding'] = stack4;
  stack4 = "hasMoreNotices";
  stack3['hasNextBinding'] = stack4;
  stack4 = helpers.view;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n				");
  return buffer;}
function program12(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n						<div class=\"review-title-list\">\n							");
  stack1 = depth0;
  stack2 = "notices";
  stack3 = helpers.each;
  tmp1 = self.program(13, program13, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n						</div>\n					");
  return buffer;}
function program13(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3, stack4;
  data.buffer.push("\n								");
  stack1 = depth0;
  stack2 = "Theses.NoticeRowView";
  stack3 = {};
  stack4 = depth0;
  stack3['notice'] = stack4;
  stack4 = helpers.view;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n							");
  return buffer;}

function program15(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3, stack4;
  data.buffer.push("\n						");
  stack1 = depth0;
  stack2 = "Theses.PromptView";
  stack3 = {};
  stack4 = "暂无数据，点击刷新来重新获取通知列表";
  stack3['text'] = stack4;
  stack4 = helpers.view;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n					");
  return buffer;}

function program17(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n<div class=\"row-fluid\">\n	<div class=\"span12\">\n		<div class=\"widget-box\">\n			<div class=\"widget-title\">\n				<span class=\"icon\"><i class=\"icon-time\"></i></span>\n				<h5>流程时间表</h5>\n				");
  stack1 = depth0;
  stack2 = "canOperation";
  stack3 = helpers['if'];
  tmp1 = self.program(18, program18, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n			</div>\n			<div class=\"widget-content\">\n				");
  stack1 = depth0;
  stack2 = "loadingMilestones";
  stack3 = helpers['if'];
  tmp1 = self.program(20, program20, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(22, program22, data);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n			</div>\n		</div>\n	</div>\n</div>\n");
  return buffer;}
function program18(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3, stack4;
  data.buffer.push("\n				<div class=\"buttons\">\n					<a href=\"#\" ");
  stack1 = {};
  stack2 = "submitTimesButtonClass";
  stack1['class'] = stack2;
  stack2 = helpers.bindAttr;
  tmp1 = {};
  tmp1.hash = stack1;
  tmp1.contexts = [];
  tmp1.data = data;
  stack1 = stack2.call(depth0, tmp1);
  data.buffer.push(escapeExpression(stack1) + " ");
  stack1 = depth0;
  stack2 = "submitTimesPressed";
  stack3 = {};
  stack4 = "view";
  stack3['target'] = stack4;
  stack4 = true;
  stack3['href'] = stack4;
  stack4 = helpers.action;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">\n						<i class=\"icon-refresh\"></i> 提交并刷新\n					</a>\n				</div>\n				");
  return buffer;}

function program20(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n					");
  stack1 = depth0;
  stack2 = "Theses.LoadingView";
  stack3 = helpers.view;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n				");
  return buffer;}

function program22(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n				<table class=\"table table-bordered table-hover table-striped\">\n					<tr>\n						<th>项目</th><th>时间</th>\n					</tr>\n					");
  stack1 = depth0;
  stack2 = "milestones";
  stack3 = helpers.each;
  tmp1 = self.program(23, program23, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n				</table>\n				");
  return buffer;}
function program23(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n						");
  stack1 = depth0;
  stack2 = "canView";
  stack3 = helpers['if'];
  tmp1 = self.program(24, program24, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n					");
  return buffer;}
function program24(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n						<tr ");
  stack1 = {};
  stack2 = "isCurrent:success isNext:error";
  stack1['class'] = stack2;
  stack2 = helpers.bindAttr;
  tmp1 = {};
  tmp1.hash = stack1;
  tmp1.contexts = [];
  tmp1.data = data;
  stack1 = stack2.call(depth0, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">\n							<td>");
  stack1 = depth0;
  stack2 = "desc";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "</td>\n							<td>\n								");
  stack1 = depth0;
  stack2 = "canOperate";
  stack3 = helpers['if'];
  tmp1 = self.program(25, program25, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(27, program27, data);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n							</td>\n						</tr>\n						");
  return buffer;}
function program25(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3, stack4, stack5, stack6;
  data.buffer.push("\n								<form class=\"form-inline\">\n								<div class=\"input-append date datepicker\" ");
  stack1 = {};
  stack2 = "formatedTime";
  stack1['data-date'] = stack2;
  stack2 = helpers.bindAttr;
  tmp1 = {};
  tmp1.hash = stack1;
  tmp1.contexts = [];
  tmp1.data = data;
  stack1 = stack2.call(depth0, tmp1);
  data.buffer.push(escapeExpression(stack1) + "  data-date-format=\"yyyy-mm-dd\">\n  									<input ");
  stack1 = {};
  stack2 = "name";
  stack1['name'] = stack2;
  stack2 = helpers.bindAttr;
  tmp1 = {};
  tmp1.hash = stack1;
  tmp1.contexts = [];
  tmp1.data = data;
  stack1 = stack2.call(depth0, tmp1);
  data.buffer.push(escapeExpression(stack1) + " readonly type=\"text\" ");
  stack1 = {};
  stack2 = "formatedTime";
  stack1['value'] = stack2;
  stack2 = helpers.bindAttr;
  tmp1 = {};
  tmp1.hash = stack1;
  tmp1.contexts = [];
  tmp1.data = data;
  stack1 = stack2.call(depth0, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">\n  									<span class=\"add-on\"><i class=\"icon-th\"></i></span>\n								</div>\n								<a class=\"btn\" ");
  stack1 = depth0;
  stack2 = "";
  stack3 = depth0;
  stack4 = "clearTime";
  stack5 = {};
  stack6 = "view";
  stack5['target'] = stack6;
  stack6 = helpers.action;
  tmp1 = {};
  tmp1.hash = stack5;
  tmp1.contexts = [];
  tmp1.contexts.push(stack3);
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack6.call(depth0, stack4, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">重置</a>\n								</form>\n								");
  return buffer;}

function program27(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n								");
  stack1 = depth0;
  stack2 = "displayTime";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n								");
  return buffer;}

  stack1 = depth0;
  stack2 = "showsMilestonesView";
  stack3 = helpers['if'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n<div class=\"row-fluid\">\n	<div class=\"span12\">\n		<div class=\"widget-box\">\n			<div class=\"widget-title\">\n				<span class=\"icon\"><i class=\"icon-bullhorn\"></i></span>\n				<h5>通知</h5>\n				<div class=\"buttons\">\n					");
  stack1 = depth0;
  stack2 = "canPostNotice";
  stack3 = helpers['if'];
  tmp1 = self.program(7, program7, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n					<a href=\"#\" ");
  stack1 = depth0;
  stack2 = "reloadNoticeButtonPressed";
  stack3 = {};
  stack4 = true;
  stack3['href'] = stack4;
  stack4 = helpers.action;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + " class=\"btn btn-mini\">\n						<i class=\"icon-refresh\"></i> 刷新\n					</a>\n				</div>\n			</div>\n			<div class=\"widget-content nopadding\">\n				");
  stack1 = depth0;
  stack2 = "loadingNotices";
  stack3 = helpers['if'];
  tmp1 = self.program(9, program9, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(11, program11, data);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n			</div>\n		</div>\n	</div>\n</div>\n\n");
  stack1 = depth0;
  stack2 = "showsMilestonesView";
  stack3 = helpers['if'];
  tmp1 = self.program(17, program17, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
});
Ember.TEMPLATES["majors.hbs"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
helpers = helpers || Ember.Handlebars.helpers;
  var buffer = '', stack1, stack2, stack3, stack4, foundHelper, tmp1, self=this, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n					");
  stack1 = depth0;
  stack2 = "Theses.LoadingView";
  stack3 = helpers.view;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n				");
  return buffer;}

function program3(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n					<table class=\"table table-bordered table-hover table-striped\">\n						<tr><th style=\"width:50px;\">系ID</th><th>系名称</th></tr>\n						");
  stack1 = depth0;
  stack2 = "Theses.majorsManager.departments";
  stack3 = helpers.each;
  tmp1 = self.program(4, program4, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n						");
  stack1 = depth0;
  stack2 = "canCreateDept";
  stack3 = helpers['if'];
  tmp1 = self.program(6, program6, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n					</table>\n				");
  return buffer;}
function program4(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n							<tr>\n								<td style=\"text-align:center\">");
  stack1 = depth0;
  stack2 = "deptid";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "</td><td>");
  stack1 = depth0;
  stack2 = "name";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "</td>\n							</tr>\n						");
  return buffer;}

function program6(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3, stack4;
  data.buffer.push("\n							<tr><td><a class=\"btn btn-success\" href=\"#\" ");
  stack1 = depth0;
  stack2 = "addNewDept";
  stack3 = {};
  stack4 = true;
  stack3['href'] = stack4;
  stack4 = helpers.action;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">添加</a></td><td>");
  stack1 = depth0;
  stack2 = "Ember.TextField";
  stack3 = {};
  stack4 = "newDeptName";
  stack3['valueBinding'] = stack4;
  stack4 = helpers.view;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "</td></tr>\n						");
  return buffer;}

function program8(depth0,data) {
  
  
  data.buffer.push("\n");}

function program10(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3, stack4;
  data.buffer.push("\n<div class=\"row-fluid\">\n	<div class=\"span12\">\n		<div class=\"widget-box\">\n			<div class=\"widget-title\">\n				<span class=\"icon\">\n					");
  stack1 = depth0;
  stack2 = "Ember.Select";
  stack3 = {};
  stack4 = "Theses.majorsManager.departments";
  stack3['contentBinding'] = stack4;
  stack4 = "content.deptid";
  stack3['optionValuePath'] = stack4;
  stack4 = "content.name";
  stack3['optionLabelPath'] = stack4;
  stack4 = "currentDeptid";
  stack3['valueBinding'] = stack4;
  stack4 = helpers.view;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n				</span>\n				<h5>的专业</h5>\n			</div>\n			<div class=\"widget-content nopadding\">\n				<table  class=\"table table-bordered table-hover table-striped\">\n					<tr><th style=\"width:50px\">专业ID</th><th>专业名</th></tr>\n					");
  stack1 = depth0;
  stack2 = "currentDept";
  stack3 = helpers['if'];
  tmp1 = self.program(11, program11, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(14, program14, data);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n					");
  stack1 = depth0;
  stack2 = "canCreateMajor";
  stack3 = helpers['if'];
  tmp1 = self.program(16, program16, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n				</table>\n			</div>\n		</div>\n	</div>\n<div>\n");
  return buffer;}
function program11(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n						");
  stack1 = depth0;
  stack2 = "currentDept.majors";
  stack3 = helpers.each;
  tmp1 = self.program(12, program12, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n					");
  return buffer;}
function program12(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n							<tr><td style=\"text-align:center\">");
  stack1 = depth0;
  stack2 = "majorid";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "</td><td>");
  stack1 = depth0;
  stack2 = "name";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "</td></tr>\n						");
  return buffer;}

function program14(depth0,data) {
  
  
  data.buffer.push("\n						<tr><td></td><td>此系不存在</td></tr>\n					");}

function program16(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3, stack4;
  data.buffer.push("\n					<tr><td><a class=\"btn btn-success\" href=\"#\" ");
  stack1 = depth0;
  stack2 = "addNewMajor";
  stack3 = {};
  stack4 = true;
  stack3['href'] = stack4;
  stack4 = helpers.action;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">添加</a></td><td>");
  stack1 = depth0;
  stack2 = "Ember.TextField";
  stack3 = {};
  stack4 = "newMajorName";
  stack3['valueBinding'] = stack4;
  stack4 = helpers.view;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "</td></tr>\n					");
  return buffer;}

  data.buffer.push("<div class=\"row-fluid\">\n	<div class=\"span12\">\n		<div class=\"widget-box\">\n			<div class=\"widget-title\">\n				<span class=\"icon\"><i class=\"icon-th-list\"></i></span>\n				<h5>学系列表</h5>\n				<div class=\"buttons\">\n					<a href=\"#\" ");
  stack1 = {};
  stack2 = "reloadButtonClass";
  stack1['class'] = stack2;
  stack2 = helpers.bindAttr;
  tmp1 = {};
  tmp1.hash = stack1;
  tmp1.contexts = [];
  tmp1.data = data;
  stack1 = stack2.call(depth0, tmp1);
  data.buffer.push(escapeExpression(stack1) + " ");
  stack1 = depth0;
  stack2 = "reload";
  stack3 = {};
  stack4 = true;
  stack3['href'] = stack4;
  stack4 = helpers.action;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">\n						<i class=\"icon-refresh\"></i> 刷新\n					</a>\n				</div>\n			</div>\n			<div class=\"widget-content nopadding\">\n				");
  stack1 = depth0;
  stack2 = "Theses.majorsManager.loading";
  stack3 = helpers['if'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(3, program3, data);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n			</div>\n		</div>\n	</div>\n<div>\n");
  stack1 = depth0;
  stack2 = "Theses.majorsManager.loading";
  stack3 = helpers['if'];
  tmp1 = self.program(8, program8, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(10, program10, data);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
});
Ember.TEMPLATES["title_chosen.hbs"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
helpers = helpers || Ember.Handlebars.helpers;
  var stack1, stack2, stack3, foundHelper, tmp1, self=this, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n	\n");
  stack1 = depth0;
  stack2 = "Theses.myTitlesManager.hasValidTitle";
  stack3 = helpers['if'];
  tmp1 = self.program(2, program2, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n<div class=\"row-fluid\">\n	<div class=\"span12\">\n		<div class=\"widget-box\">\n			<div class=\"widget-title\">\n				<span class=\"icon\"><i class=\"icon-check\"></i></span>\n				<h5>论题选择</h5>\n				<div class=\"buttons\">\n					<a href=\"#\" class=\"btn btn-mini\" ");
  stack1 = depth0;
  stack2 = "refresh";
  stack3 = helpers.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">\n						<i class=\"icon-refresh\"></i> 刷新\n					</a>\n				</div>\n			</div>\n			<div class=\"widget-content nopadding\">\n				");
  stack1 = depth0;
  stack2 = "loading";
  stack3 = helpers['if'];
  tmp1 = self.program(4, program4, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(6, program6, data);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n			</div>\n		</div>\n	</div>\n</div>\n\n\n\n");
  return buffer;}
function program2(depth0,data) {
  
  
  data.buffer.push("\n	<div class=\"alert alert-block\">\n	  <b>注意!</b> 每个同学仅可以选择一个论题，再进行选择将不会成功。请前往 <a href=\"/#/titles_mine\">我的论题</a> 页面查看当前已选择论题的状态。\n	</div>\n");}

function program4(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n					");
  stack1 = depth0;
  stack2 = "Theses.LoadingView";
  stack3 = helpers.view;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n				");
  return buffer;}

function program6(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3, stack4;
  data.buffer.push("\n					");
  stack1 = depth0;
  stack2 = "titles.length";
  stack3 = helpers['if'];
  tmp1 = self.program(7, program7, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(10, program10, data);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n					");
  stack1 = depth0;
  stack2 = "Theses.PagingView";
  stack3 = {};
  stack4 = "currentPage";
  stack3['pageBinding'] = stack4;
  stack4 = "hasMoreTitles";
  stack3['hasNextBinding'] = stack4;
  stack4 = helpers.view;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n				");
  return buffer;}
function program7(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n						<div class=\"review-title-list\">\n							");
  stack1 = depth0;
  stack2 = "titles";
  stack3 = helpers.each;
  tmp1 = self.program(8, program8, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n						</div>\n					");
  return buffer;}
function program8(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3, stack4;
  data.buffer.push("\n								");
  stack1 = depth0;
  stack2 = "Theses.ChosenTitleCell";
  stack3 = {};
  stack4 = depth0;
  stack3['title'] = stack4;
  stack4 = helpers.view;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n							");
  return buffer;}

function program10(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3, stack4;
  data.buffer.push("\n						");
  stack1 = depth0;
  stack2 = "Theses.PromptView";
  stack3 = {};
  stack4 = "暂无数据，点击刷新来重新获取待选论题列表";
  stack3['text'] = stack4;
  stack4 = helpers.view;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n					");
  return buffer;}

function program12(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3, stack4;
  data.buffer.push("\n	");
  stack1 = depth0;
  stack2 = "Theses.WrongTimeView";
  stack3 = {};
  stack4 = "选题";
  stack3['name'] = stack4;
  stack4 = helpers.view;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n");
  return buffer;}

  stack1 = depth0;
  stack2 = "Theses.milestoneManager.isTitleChosenTime";
  stack3 = helpers['if'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(12, program12, data);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
});
Ember.TEMPLATES["titles_admin.hbs"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
helpers = helpers || Ember.Handlebars.helpers;
  var foundHelper, self=this;


  data.buffer.push("论题管理");
});
Ember.TEMPLATES["titles_mine.hbs"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
helpers = helpers || Ember.Handlebars.helpers;
  var buffer = '', stack1, stack2, stack3, foundHelper, tmp1, self=this, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n						<a href=\"#\" class=\"btn btn-mini\" ");
  stack1 = depth0;
  stack2 = "assignNew";
  stack3 = helpers.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">\n							<i class=\"icon-plus\"></i> 出题\n						</a>\n					");
  return buffer;}

function program3(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n					");
  stack1 = depth0;
  stack2 = "mytitles.length";
  stack3 = helpers['if'];
  tmp1 = self.program(4, program4, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(7, program7, data);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n					");
  stack1 = depth0;
  stack2 = "loading";
  stack3 = helpers['if'];
  tmp1 = self.program(9, program9, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(11, program11, data);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n				");
  return buffer;}
function program4(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n						<div class=\"custom-list bordered-list\">\n							");
  stack1 = depth0;
  stack2 = "mytitles";
  stack3 = helpers.each;
  tmp1 = self.program(5, program5, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n						</div>\n					");
  return buffer;}
function program5(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3, stack4;
  data.buffer.push("\n								");
  stack1 = depth0;
  stack2 = "Theses.TitleCell";
  stack3 = {};
  stack4 = depth0;
  stack3['title'] = stack4;
  stack4 = helpers.view;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n							");
  return buffer;}

function program7(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3, stack4;
  data.buffer.push("\n						");
  stack1 = depth0;
  stack2 = "Theses.PromptView";
  stack3 = {};
  stack4 = "暂无数据，点击刷新来重新获取论题列表";
  stack3['text'] = stack4;
  stack4 = helpers.view;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n					");
  return buffer;}

function program9(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n						");
  stack1 = depth0;
  stack2 = "Theses.LoadingView";
  stack3 = helpers.view;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n					");
  return buffer;}

function program11(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n						");
  stack1 = depth0;
  stack2 = "hasMore";
  stack3 = helpers['if'];
  tmp1 = self.program(12, program12, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n					");
  return buffer;}
function program12(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n							<div class=\"load-more-container\"><button class=\"btn btn-large btn-block\" ");
  stack1 = depth0;
  stack2 = "loadMore";
  stack3 = helpers.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">加载更多</button></div>\n						");
  return buffer;}

  data.buffer.push("<div class=\"row-fluid\">\n	<div class=\"span12\">\n		<div class=\"widget-box\">\n			<div class=\"widget-title\">\n				<span class=\"icon\"><i class=\"icon-folder-open\"></i></span>\n				<h5>我的论题</h5>\n				<div class=\"buttons\">\n					<a href=\"#\" class=\"btn btn-mini\" ");
  stack1 = depth0;
  stack2 = "refresh";
  stack3 = helpers.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">\n						<i class=\"icon-refresh\"></i> 刷新\n					</a>\n					");
  stack1 = depth0;
  stack2 = "canAssignNewTitle";
  stack3 = helpers['if'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n				</div>\n			</div>\n			<div class=\"widget-content nopadding\">\n				");
  stack1 = depth0;
  stack2 = "Theses.myTitlesManager";
  stack3 = helpers['with'];
  tmp1 = self.program(3, program3, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n			</div>\n		</div>\n	</div>\n</div>");
  return buffer;
});
Ember.TEMPLATES["titles_show.hbs"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
helpers = helpers || Ember.Handlebars.helpers;
  var stack1, stack2, stack3, foundHelper, tmp1, self=this, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n");
  stack1 = depth0;
  stack2 = "Theses.LoadingView";
  stack3 = helpers.view;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n");
  return buffer;}

function program3(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n  ");
  stack1 = depth0;
  stack2 = "content.loadingFailed";
  stack3 = helpers['if'];
  tmp1 = self.program(4, program4, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(6, program6, data);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;}
function program4(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3, stack4;
  data.buffer.push("\n  	");
  stack1 = depth0;
  stack2 = "Theses.PromptView";
  stack3 = {};
  stack4 = "论题加载失败，请尝试返回重新获取";
  stack3['text'] = stack4;
  stack4 = helpers.view;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n  ");
  return buffer;}

function program6(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3, stack4;
  data.buffer.push("\n\n\n<div class=\"row-fluid\">\n	<div class=\"span12\">\n		<div class=\"widget-box\">\n			<div class=\"widget-title\">\n				<span class=\"icon\"><i class=\"icon-folder-open\"></i></span>\n				<h5>论题信息</h5>\n				\n			</div>\n			<div class=\"widget-content\">\n				<table class=\"table table-bordered\">\n					<tr>\n						<td><strong>标题</strong></td>\n						<td>");
  stack1 = depth0;
  stack2 = "content.title";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "</td>\n					</tr>\n					<tr>\n						<td><strong>指导教师</strong></td>\n						<td>");
  stack1 = depth0;
  stack2 = "teacherName";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "</td>\n					</tr>\n					<tr>\n						<td><strong>系别</strong></td>\n						<td>");
  stack1 = depth0;
  stack2 = "content.departmentName";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "</td>\n					</tr>\n					<tr>\n						<td><strong>状态</strong></td>\n						<td>");
  stack1 = depth0;
  stack2 = "content.stateName";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "</td>\n					</tr>\n					<tr>\n						<td><strong>可选专业</strong></td>\n						<td>");
  stack1 = depth0;
  stack2 = "avaliableMajors";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "</td>\n					</tr>\n					<tr>\n						<td><strong>说明</strong></td>\n						<td>");
  stack1 = depth0;
  stack2 = "content.description";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "</td>\n					</tr>\n					<tr>\n						<td><strong>要求</strong></td>\n						<td>");
  stack1 = depth0;
  stack2 = "content.require_info";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "</td>\n					</tr>\n				</table>\n			</div>\n		</div>\n	</div>\n</div>\n\n");
  stack1 = depth0;
  stack2 = "showsReviewTip";
  stack3 = helpers['if'];
  tmp1 = self.program(7, program7, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n<div class=\"row-fluid\">\n	<div class=\"span12\">\n		<div class=\"widget-box\">\n			<div class=\"widget-title\">\n				<span class=\"icon\"><i class=\"icon-user\"></i></span>\n				<h5>相关用户</h5>\n				<div class=\"buttons\">\n					<a href=\"#\" class=\"btn btn-mini\" ");
  stack1 = depth0;
  stack2 = "refreshUsers";
  stack3 = {};
  stack4 = true;
  stack3['href'] = stack4;
  stack4 = helpers.action;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">\n						<i class=\"icon-refresh\"></i> 刷新\n					</a>\n				</div>\n			</div>\n			<div class=\"widget-content\">\n				");
  stack1 = depth0;
  stack2 = "loadingUsers";
  stack3 = helpers['if'];
  tmp1 = self.program(9, program9, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(11, program11, data);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n			</div>\n		</div>\n	</div>\n</div>\n\n<div class=\"row-fluid\">\n	<div class=\"span12\">\n		<div class=\"widget-box\">\n			<div class=\"widget-title\">\n				<span class=\"icon\"><i class=\"icon-file\"></i></span>\n				<h5>文档列表</h5>\n				<div class=\"buttons\">\n					");
  stack1 = depth0;
  stack2 = "canUploadDocument";
  stack3 = helpers['if'];
  tmp1 = self.program(19, program19, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n					<a href=\"#\" class=\"btn btn-mini\" ");
  stack1 = depth0;
  stack2 = "refreshDocuments";
  stack3 = {};
  stack4 = true;
  stack3['href'] = stack4;
  stack4 = helpers.action;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">\n						<i class=\"icon-refresh\"></i> 刷新\n					</a>\n				</div>\n			</div>\n			<div class=\"widget-content nopadding\">\n				");
  stack1 = depth0;
  stack2 = "loadingDocuments";
  stack3 = helpers['if'];
  tmp1 = self.program(21, program21, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(23, program23, data);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n				");
  stack1 = depth0;
  stack2 = "Theses.PagingView";
  stack3 = {};
  stack4 = "currentDocPage";
  stack3['pageBinding'] = stack4;
  stack4 = "hasMoreDocuments";
  stack3['hasNextBinding'] = stack4;
  stack4 = helpers.view;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n			</div>\n		</div>\n	</div>\n</div>\n\n  ");
  return buffer;}
function program7(depth0,data) {
  
  
  data.buffer.push("\n<div class=\"alert alert-info\" style=\"margin-bottom:0;\">\n  现在是论文评分时间，点击一个选题学生开始评分\n</div>\n");}

function program9(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n					");
  stack1 = depth0;
  stack2 = "Theses.LoadingView";
  stack3 = helpers.view;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n				");
  return buffer;}

function program11(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n					");
  stack1 = depth0;
  stack2 = "teacher";
  stack3 = helpers['if'];
  tmp1 = self.program(12, program12, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(17, program17, data);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n				");
  return buffer;}
function program12(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3, stack4;
  data.buffer.push("\n					<div class=\"related-users\">\n						<div class=\"related-teacher\">\n							<h5>导师</h5>\n							");
  stack1 = depth0;
  stack2 = "Theses.UserCell";
  stack3 = {};
  foundHelper = helpers.teacher;
  stack4 = foundHelper || depth0.teacher;
  stack3['user'] = stack4;
  stack4 = helpers.view;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "	\n						</div>\n						<div class=\"related-students\">\n							<h5>选题学生</h5>\n							");
  stack1 = depth0;
  stack2 = "students";
  stack3 = helpers.each;
  tmp1 = self.programWithDepth(program13, data, depth0);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(15, program15, data);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n						</div>\n					</div>\n					");
  return buffer;}
function program13(depth0,data,depth1) {
  
  var buffer = '', stack1, stack2, stack3, stack4;
  data.buffer.push("\n								");
  stack1 = depth0;
  stack2 = "Theses.UserSelectionCell";
  stack3 = {};
  stack4 = depth0.user;
  stack3['user'] = stack4;
  stack4 = depth0.selection;
  stack3['selection'] = stack4;
  foundHelper = helpers.studentClicked;
  stack4 = foundHelper || depth1.studentClicked;
  stack3['clickAction'] = stack4;
  stack4 = helpers.view;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n							");
  return buffer;}

function program15(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3, stack4;
  data.buffer.push("\n								");
  stack1 = depth0;
  stack2 = "Theses.PromptView";
  stack3 = {};
  stack4 = "暂时没有学生选择此论题";
  stack3['text'] = stack4;
  stack4 = helpers.view;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n							");
  return buffer;}

function program17(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3, stack4;
  data.buffer.push("\n						");
  stack1 = depth0;
  stack2 = "Theses.PromptView";
  stack3 = {};
  stack4 = "暂无数据，您可能没有权限查看此信息";
  stack3['text'] = stack4;
  stack4 = helpers.view;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n					");
  return buffer;}

function program19(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3, stack4;
  data.buffer.push("\n						<input id=\"upload-document-input\" class=\"hidden-input\" type=\"file\" name=\"upload\">\n						<div class=\"dropdown desktop inline-block\">\n  							<a class=\"dropdown-toggle btn btn-mini\" id=\"add-new-document\" role=\"button\" data-toggle=\"dropdown\" data-target=\"#\" href=\"/page.html\">\n						    	<i class=\"icon-plus\"></i> 添加文档\n						    <b class=\"caret\"></b>\n						  </a>\n						  <ul class=\"dropdown-menu pull-right bottom-up\" role=\"menu\" aria-labelledby=\"add-new-document\">\n							<li>\n								<a tabindex=\"-1\" href=\"#\" ");
  stack1 = depth0;
  stack2 = "uploadButtonPressed";
  stack3 = {};
  stack4 = "view";
  stack3['target'] = stack4;
  stack4 = helpers.action;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">\n									<i class=\"icon-upload\"></i>从本地上传\n								</a>\n								<a tabindex=\"-1\" href=\"#\" ");
  stack1 = depth0;
  stack2 = "newTypeTwoDocument";
  stack3 = {};
  stack4 = "view";
  stack3['target'] = stack4;
  stack4 = helpers.action;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">\n									<i class=\"icon-book\"></i>论文开题报告\n								</a>\n								<a tabindex=\"-1\" href=\"#\" ");
  stack1 = depth0;
  stack2 = "newTypeThreeDocument";
  stack3 = {};
  stack4 = "view";
  stack3['target'] = stack4;
  stack4 = helpers.action;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">\n									<i class=\"icon-book\"></i>过程检查情况记录表\n								</a>\n							</li>\n						  </ul>\n						</div>\n					");
  return buffer;}

function program21(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n					");
  stack1 = depth0;
  stack2 = "Theses.LoadingView";
  stack3 = helpers.view;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n				");
  return buffer;}

function program23(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n					");
  stack1 = depth0;
  stack2 = "documents.length";
  stack3 = helpers['if'];
  tmp1 = self.program(24, program24, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(27, program27, data);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n				");
  return buffer;}
function program24(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n						");
  stack1 = depth0;
  stack2 = "documents";
  stack3 = helpers.each;
  tmp1 = self.program(25, program25, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n					");
  return buffer;}
function program25(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3, stack4;
  data.buffer.push("\n							");
  stack1 = depth0;
  stack2 = "Theses.DocumentCell";
  stack3 = {};
  stack4 = depth0;
  stack3['doc'] = stack4;
  stack4 = helpers.view;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n						");
  return buffer;}

function program27(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3, stack4;
  data.buffer.push("\n						");
  stack1 = depth0;
  stack2 = "Theses.PromptView";
  stack3 = {};
  stack4 = "暂无数据，请点击刷新重新获取";
  stack3['text'] = stack4;
  stack4 = helpers.view;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n					");
  return buffer;}

  stack1 = depth0;
  stack2 = "content.loading";
  stack3 = helpers['if'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(3, program3, data);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
});
Ember.TEMPLATES["titles_verify.hbs"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
helpers = helpers || Ember.Handlebars.helpers;
  var stack1, stack2, stack3, foundHelper, tmp1, self=this, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n	\n\n\n<div class=\"row-fluid\">\n	<div class=\"span12\">\n		<div class=\"widget-box\">\n			<div class=\"widget-title\">\n				<span class=\"icon\"><i class=\"icon-eye-open\"></i></span>\n				<h5>论题审核</h5>\n				<div class=\"buttons\">\n					<a href=\"#\" class=\"btn btn-mini\" ");
  stack1 = depth0;
  stack2 = "refresh";
  stack3 = helpers.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">\n						<i class=\"icon-refresh\"></i> 刷新\n					</a>\n				</div>\n			</div>\n			<div class=\"widget-content nopadding\">\n				");
  stack1 = depth0;
  stack2 = "loading";
  stack3 = helpers['if'];
  tmp1 = self.program(2, program2, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(4, program4, data);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n			</div>\n		</div>\n	</div>\n</div>\n\n\n\n");
  return buffer;}
function program2(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n					");
  stack1 = depth0;
  stack2 = "Theses.LoadingView";
  stack3 = helpers.view;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n				");
  return buffer;}

function program4(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3, stack4;
  data.buffer.push("\n					");
  stack1 = depth0;
  stack2 = "titles.length";
  stack3 = helpers['if'];
  tmp1 = self.program(5, program5, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(8, program8, data);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n					");
  stack1 = depth0;
  stack2 = "Theses.PagingView";
  stack3 = {};
  stack4 = "currentPage";
  stack3['pageBinding'] = stack4;
  stack4 = "hasMoreTitles";
  stack3['hasNextBinding'] = stack4;
  stack4 = helpers.view;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n				");
  return buffer;}
function program5(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n						<div class=\"review-title-list\">\n							");
  stack1 = depth0;
  stack2 = "titles";
  stack3 = helpers.each;
  tmp1 = self.program(6, program6, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n						</div>\n					");
  return buffer;}
function program6(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3, stack4;
  data.buffer.push("\n								");
  stack1 = depth0;
  stack2 = "Theses.ReviewTitleCell";
  stack3 = {};
  stack4 = depth0;
  stack3['title'] = stack4;
  stack4 = helpers.view;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n							");
  return buffer;}

function program8(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3, stack4;
  data.buffer.push("\n						");
  stack1 = depth0;
  stack2 = "Theses.PromptView";
  stack3 = {};
  stack4 = "暂无数据，点击刷新来重新获取待审核论题列表";
  stack3['text'] = stack4;
  stack4 = helpers.view;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n					");
  return buffer;}

function program10(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3, stack4;
  data.buffer.push("\n	");
  stack1 = depth0;
  stack2 = "Theses.WrongTimeView";
  stack3 = {};
  stack4 = "论题审核";
  stack3['name'] = stack4;
  stack4 = helpers.view;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n");
  return buffer;}

  stack1 = depth0;
  stack2 = "Theses.milestoneManager.isTitleVerifyTime";
  stack3 = helpers['if'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(10, program10, data);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
});
Ember.TEMPLATES["users.hbs"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
helpers = helpers || Ember.Handlebars.helpers;
  var buffer = '', stack1, stack2, stack3, foundHelper, tmp1, self=this, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3, stack4;
  data.buffer.push("\n					<a href=\"#\" class=\"btn btn-mini\" ");
  stack1 = depth0;
  stack2 = "addUser";
  stack3 = {};
  stack4 = true;
  stack3['href'] = stack4;
  stack4 = helpers.action;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">\n						<i class=\"icon-plus\"></i> 添加\n					</a>\n					");
  return buffer;}

function program3(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n				");
  stack1 = depth0;
  stack2 = "Theses.LoadingView";
  stack3 = helpers.view;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n				");
  return buffer;}

function program5(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3, stack4;
  data.buffer.push("\n				<div class=\"search-fields\">\n					<form class=\"form-inline\">\n						<div class=\"row-fluid\">\n							<div class=\"span3\">\n								");
  stack1 = depth0;
  stack2 = "Theses.Select";
  stack3 = {};
  stack4 = "departments";
  stack3['contentBinding'] = stack4;
  stack4 = "content.deptid";
  stack3['optionValuePath'] = stack4;
  stack4 = "content.name";
  stack3['optionLabelPath'] = stack4;
  stack4 = "selectedDeptID";
  stack3['valueBinding'] = stack4;
  stack4 = helpers.view;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n							</div>\n							<div class=\"span3\">\n								");
  stack1 = depth0;
  stack2 = "Theses.Select";
  stack3 = {};
  stack4 = "majors";
  stack3['contentBinding'] = stack4;
  stack4 = "content.majorid";
  stack3['optionValuePath'] = stack4;
  stack4 = "content.fullName";
  stack3['optionLabelPath'] = stack4;
  stack4 = "selectedMajorID";
  stack3['valueBinding'] = stack4;
  stack4 = helpers.view;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n							</div>\n							<div class=\"span4\">\n								");
  stack1 = depth0;
  stack2 = "Theses.Select";
  stack3 = {};
  stack4 = "levels";
  stack3['contentBinding'] = stack4;
  stack4 = "content.level";
  stack3['optionValuePath'] = stack4;
  stack4 = "content.name";
  stack3['optionLabelPath'] = stack4;
  stack4 = "selectedLevel";
  stack3['valueBinding'] = stack4;
  stack4 = helpers.view;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n							</div>\n							<div class=\"span2\">\n								<a href=\"#\" class=\"btn btn-primary span12\" ");
  stack1 = depth0;
  stack2 = "search";
  stack3 = {};
  stack4 = true;
  stack3['href'] = stack4;
  stack4 = helpers.action;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">查询</a>\n							</div>\n						</div>\n					</form>\n				</div>\n				<table class=\"table table-bordered table-hover table-striped table-centered user-table\">\n					<tr><th style=\"width:50px\">头像</th><th>用户名</th><th>名称</th><th>性别</th><th>用户类型</th></tr>\n					");
  stack1 = depth0;
  stack2 = "loadingUsers";
  stack3 = helpers['if'];
  tmp1 = self.program(6, program6, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(8, program8, data);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n				</table>\n				<div class=\"search-fields paging page-controls\">\n					<a ");
  stack1 = {};
  stack2 = "prevPageClass";
  stack1['class'] = stack2;
  stack2 = helpers.bindAttr;
  tmp1 = {};
  tmp1.hash = stack1;
  tmp1.contexts = [];
  tmp1.data = data;
  stack1 = stack2.call(depth0, tmp1);
  data.buffer.push(escapeExpression(stack1) + " ");
  stack1 = depth0;
  stack2 = "prevPage";
  stack3 = {};
  stack4 = true;
  stack3['href'] = stack4;
  stack4 = helpers.action;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">上一页</a>\n					第 ");
  stack1 = depth0;
  stack2 = "currentPage";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + " 页\n					<a ");
  stack1 = {};
  stack2 = "nextPageClass";
  stack1['class'] = stack2;
  stack2 = helpers.bindAttr;
  tmp1 = {};
  tmp1.hash = stack1;
  tmp1.contexts = [];
  tmp1.data = data;
  stack1 = stack2.call(depth0, tmp1);
  data.buffer.push(escapeExpression(stack1) + " ");
  stack1 = depth0;
  stack2 = "nextPage";
  stack3 = {};
  stack4 = true;
  stack3['href'] = stack4;
  stack4 = helpers.action;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">下一页</a>\n				</div>\n				");
  return buffer;}
function program6(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n					<tr><td colspan=\"8\">");
  stack1 = depth0;
  stack2 = "Theses.LoadingView";
  stack3 = helpers.view;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "</td></tr>\n					");
  return buffer;}

function program8(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n						");
  stack1 = depth0;
  stack2 = "users.length";
  stack3 = helpers['if'];
  tmp1 = self.program(9, program9, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(12, program12, data);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n					");
  return buffer;}
function program9(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n							");
  stack1 = depth0;
  stack2 = "users";
  stack3 = helpers.each;
  tmp1 = self.program(10, program10, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n						");
  return buffer;}
function program10(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3, stack4;
  data.buffer.push("\n							<tr ");
  stack1 = depth0;
  stack2 = "userClicked";
  stack3 = {};
  stack4 = "view";
  stack3['target'] = stack4;
  stack4 = true;
  stack3['href'] = stack4;
  stack4 = helpers.action;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + " class=\"clickable\">\n								<td>");
  stack1 = depth0;
  stack2 = "Theses.MessageAvatarView";
  stack3 = {};
  stack4 = depth0;
  stack3['user'] = stack4;
  stack4 = "user-table-avatar";
  stack3['class'] = stack4;
  stack4 = helpers.view;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "</td>\n								<td>");
  stack1 = depth0;
  stack2 = "username";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "</td><td>");
  stack1 = depth0;
  stack2 = "screenname";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "</td>\n								<td>");
  stack1 = depth0;
  stack2 = "genderString";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "</td>\n								<td>");
  stack1 = depth0;
  stack2 = "levelType";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "</td>\n							</tr>\n							");
  return buffer;}

function program12(depth0,data) {
  
  
  data.buffer.push("\n							<tr><td colspan=\"8\"><div class=\"no-result\">无结果</div></td></tr>\n						");}

function program14(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n<div class=\"section-header\">\n	<h3>出题教师管理<h3>\n</div>\n<div class=\"row-fluid\">\n	<div class=\"span12\">\n		<div class=\"widget-box\">\n			<div class=\"widget-title\">\n				<ul class=\"nav nav-tabs\">\n				  	<li ");
  stack1 = {};
  stack2 = "showingAllTeachers:active";
  stack1['class'] = stack2;
  stack2 = helpers.bindAttr;
  tmp1 = {};
  tmp1.hash = stack1;
  tmp1.contexts = [];
  tmp1.data = data;
  stack1 = stack2.call(depth0, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">\n				  	  	<a href=\"#\" ");
  stack1 = depth0;
  stack2 = "showAllTeachers";
  stack3 = helpers.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">全部教师</a>\n				  	</li>\n				  	<li ");
  stack1 = {};
  stack2 = "showingSeniorTeachers:active";
  stack1['class'] = stack2;
  stack2 = helpers.bindAttr;
  tmp1 = {};
  tmp1.hash = stack1;
  tmp1.contexts = [];
  tmp1.data = data;
  stack1 = stack2.call(depth0, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">\n				  		<a href=\"#\" ");
  stack1 = depth0;
  stack2 = "showSeniorTeachers";
  stack3 = helpers.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">出题教师</a></li>\n				  	<li ");
  stack1 = {};
  stack2 = "showingNormalTeachers:active";
  stack1['class'] = stack2;
  stack2 = helpers.bindAttr;
  tmp1 = {};
  tmp1.hash = stack1;
  tmp1.contexts = [];
  tmp1.data = data;
  stack1 = stack2.call(depth0, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">\n				  		<a href=\"#\" ");
  stack1 = depth0;
  stack2 = "showNormalTeachers";
  stack3 = helpers.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">非出题教师</a></li>\n				</ul>\n			</div>\n			<div class=\"widget-content nopadding\">\n				\n					");
  stack1 = depth0;
  stack2 = "showingTeachers";
  stack3 = helpers['if'];
  tmp1 = self.program(15, program15, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(24, program24, data);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n			</div>\n		</div>\n	</div>\n</div>\n");
  return buffer;}
function program15(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n						");
  stack1 = depth0;
  stack2 = "loadingTeachers";
  stack3 = helpers['if'];
  tmp1 = self.program(16, program16, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(18, program18, data);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n					");
  return buffer;}
function program16(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n							");
  stack1 = depth0;
  stack2 = "Theses.LoadingView";
  stack3 = helpers.view;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n						");
  return buffer;}

function program18(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3, stack4;
  data.buffer.push("\n							<div class=\"custom-list\">\n								");
  stack1 = depth0;
  stack2 = "hasTeachers";
  stack3 = helpers['if'];
  tmp1 = self.program(19, program19, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(22, program22, data);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n							</div>\n							");
  stack1 = depth0;
  stack2 = "Theses.PagingView";
  stack3 = {};
  stack4 = "_currentTeacherPage";
  stack3['pageBinding'] = stack4;
  stack4 = "hasMoreTeachers";
  stack3['hasNextBinding'] = stack4;
  stack4 = helpers.view;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n						");
  return buffer;}
function program19(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n									");
  stack1 = depth0;
  stack2 = "teachers";
  stack3 = helpers.each;
  tmp1 = self.program(20, program20, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n								");
  return buffer;}
function program20(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3, stack4;
  data.buffer.push("\n										");
  stack1 = depth0;
  stack2 = "Theses.TeacherCell";
  stack3 = {};
  stack4 = depth0;
  stack3['teacher'] = stack4;
  stack4 = helpers.view;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n									");
  return buffer;}

function program22(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3, stack4;
  data.buffer.push("\n									");
  stack1 = depth0;
  stack2 = "Theses.PromptView";
  stack3 = {};
  stack4 = "无结果";
  stack3['text'] = stack4;
  stack4 = helpers.view;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n								");
  return buffer;}

function program24(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3, stack4;
  data.buffer.push("\n						");
  stack1 = depth0;
  stack2 = "Theses.PromptView";
  stack3 = {};
  stack4 = "选择上方的教师种类，以开始管理教师出题资格";
  stack3['text'] = stack4;
  stack4 = helpers.view;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n					");
  return buffer;}

  data.buffer.push("<div class=\"row-fluid\">\n	<div class=\"span12\">\n		<div class=\"widget-box\">\n			<div class=\"widget-title\">\n				<span class=\"icon\"><i class=\"icon-user\"></i></span>\n				<h5>用户管理</h5>\n				<div class=\"buttons\">\n					");
  stack1 = depth0;
  stack2 = "canCreateUser";
  stack3 = helpers['if'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n				</div>\n			</div>\n			<div class=\"widget-content nopadding\">\n				");
  stack1 = depth0;
  stack2 = "Theses.majorsManager.loading";
  stack3 = helpers['if'];
  tmp1 = self.program(3, program3, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(5, program5, data);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n			</div>\n		</div>\n	</div>\n</div>\n\n");
  stack1 = depth0;
  stack2 = "canManageTeachers";
  stack3 = helpers['if'];
  tmp1 = self.program(14, program14, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
});
Ember.TEMPLATES["apply_title.hbs"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
helpers = helpers || Ember.Handlebars.helpers;
  var buffer = '', foundHelper, self=this;


  return buffer;
});
Ember.TEMPLATES["new_notice.hbs"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
helpers = helpers || Ember.Handlebars.helpers;
  var buffer = '', stack1, stack2, stack3, stack4, foundHelper, tmp1, self=this, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3, stack4;
  data.buffer.push("\n                                <div class=\"control-group\">\n                                    <div class=\"control-label\">\n                                        <label>通知内容：</label>\n                                    </div>\n                                    <div class=\"controls\">\n                                        ");
  stack1 = depth0;
  stack2 = "Ember.TextArea";
  stack3 = {};
  stack4 = "content";
  stack3['valueBinding'] = stack4;
  stack4 = helpers.view;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n                                    </div>\n                                </div>\n                                ");
  return buffer;}

  data.buffer.push("                <form novalidate=\"\" autocomplete=\"on\" class=\"update-profile\"> \n                        <div class=\"yield\" style=\"padding-top:20px\">\n                            <fieldset class='reset-password'>\n                                <div class=\"control-group\">\n                                    <div class=\"control-label\">\n                                        <label>通知标题：</label>\n                                    </div>\n                                    <div class=\"controls\">\n                                        ");
  stack1 = depth0;
  stack2 = "Ember.TextField";
  stack3 = {};
  stack4 = "title";
  stack3['valueBinding'] = stack4;
  stack4 = helpers.view;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n                                    </div>\n                                </div>\n                                <div class=\"control-group\">\n                                    <div class=\"control-label\">\n                                        <label>跳转链接：</label>\n                                    </div>\n                                    <div class=\"controls\">\n                                        ");
  stack1 = depth0;
  stack2 = "Ember.TextField";
  stack3 = {};
  stack4 = "url";
  stack3['valueBinding'] = stack4;
  stack4 = helpers.view;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n                                    </div>\n                                </div>\n                                ");
  stack1 = depth0;
  stack2 = "showsContentArea";
  stack3 = helpers['if'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                <div class=\"control-group\">\n                                    <div class=\"control-label\">\n                                        <label></label>\n                                    </div>\n                                    <div class=\"controls\">\n                                        <label>\n                                            ");
  stack1 = depth0;
  stack2 = "Ember.Checkbox";
  stack3 = {};
  stack4 = "sendEmail";
  stack3['checkedBinding'] = stack4;
  stack4 = helpers.view;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n                                            发送Email通知所有用户\n                                        </label>\n                                        \n                                    </div>\n                                </div>\n                            </fieldset>\n                        </div> \n                        <footer> \n                            <button type=\"submit\" class=\"blue submit\" ");
  stack1 = depth0;
  stack2 = "submit";
  stack3 = {};
  stack4 = true;
  stack3['href'] = stack4;
  stack4 = helpers.action;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">\n                                <span>发布通知</span>\n                            </button> \n                        </footer> \n                    </form>");
  return buffer;
});
Ember.TEMPLATES["new_title.hbs"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
helpers = helpers || Ember.Handlebars.helpers;
  var buffer = '', stack1, stack2, stack3, stack4, foundHelper, tmp1, self=this, escapeExpression=this.escapeExpression;


  data.buffer.push("  <form novalidate=\"\" autocomplete=\"on\" class=\"update-profile\"> \n                        <div class=\"yield\" style=\"padding-top:20px\">\n                            <fieldset class='reset-password'>\n                                <div class=\"control-group\">\n                                    <div class=\"control-label\">\n                                        <label>论文题目：</label>\n                                    </div>\n                                    <div class=\"controls\">\n                                        ");
  stack1 = depth0;
  stack2 = "Ember.TextField";
  stack3 = {};
  stack4 = "title";
  stack3['valueBinding'] = stack4;
  stack4 = helpers.view;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n                                    </div>\n                                </div>\n                                <div class=\"control-group\">\n                                    <div class=\"control-label\">\n                                        <label>可选人数：</label>\n                                    </div>\n                                    <div class=\"controls\">\n                                        ");
  stack1 = depth0;
  stack2 = "Ember.Select";
  stack3 = {};
  stack4 = "available_student_nums";
  stack3['contentBinding'] = stack4;
  stack4 = "student_num";
  stack3['valueBinding'] = stack4;
  stack4 = helpers.view;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n                                    </div>\n                                </div>\n\n                                <div class=\"control-group\">\n                                    <div class=\"control-label\">\n                                        <label>可选专业：</label>\n                                    </div>\n                                    <div class=\"controls\">\n                                        ");
  stack1 = depth0;
  stack2 = "Ember.Select";
  stack3 = {};
  stack4 = "available_majors";
  stack3['contentBinding'] = stack4;
  stack4 = "content.majorid";
  stack3['optionValuePath'] = stack4;
  stack4 = "content.name";
  stack3['optionLabelPath'] = stack4;
  stack4 = "majors";
  stack3['selectionBinding'] = stack4;
  stack4 = true;
  stack3['multiple'] = stack4;
  stack4 = helpers.view;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n                                    </div>\n                                </div>\n                                <div class=\"control-group\">\n                                    <div class=\"control-label\">\n                                        <label>描述：</label>\n                                    </div>\n                                    <div class=\"controls\">\n                                        ");
  stack1 = depth0;
  stack2 = "Ember.TextArea";
  stack3 = {};
  stack4 = "description";
  stack3['valueBinding'] = stack4;
  stack4 = helpers.view;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n                                    </div>\n                                </div>\n                                <div class=\"control-group\">\n                                    <div class=\"control-label\">\n                                        <label>要求：</label>\n                                    </div>\n                                    <div class=\"controls\">\n                                         ");
  stack1 = depth0;
  stack2 = "Ember.TextArea";
  stack3 = {};
  stack4 = "requirements";
  stack3['valueBinding'] = stack4;
  stack4 = helpers.view;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n                                    </div>\n                                </div>\n                            </fieldset>\n                        </div> \n                        <footer> \n                            <button type=\"submit\" class=\"blue submit\" ");
  stack1 = depth0;
  stack2 = "submit";
  stack3 = {};
  stack4 = true;
  stack3['href'] = stack4;
  stack4 = helpers.action;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">\n                                <span>创建论题</span>\n                            </button> \n                        </footer> \n                    </form>");
  return buffer;
});
Ember.TEMPLATES["panel.hbs"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
helpers = helpers || Ember.Handlebars.helpers;
  var buffer = '', stack1, stack2, stack3, stack4, foundHelper, tmp1, self=this, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing, undef=void 0;


  data.buffer.push("            <div class=\"panel\">\n                <header> \n                    <section class=\"custom\"> \n                        <div class=\"info\"> \n                            <h1>");
  stack1 = depth0;
  stack2 = "name";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "</h1> \n                            <h2>");
  stack1 = depth0;
  stack2 = "desc";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "</h2> \n                        </div> \n                    </section> \n                    <nav> \n                        <a class=\"close\" ");
  stack1 = depth0;
  stack2 = "closePanel";
  stack3 = {};
  stack4 = true;
  stack3['href'] = stack4;
  stack4 = helpers.action;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">Close</a> \n                    </nav> \n                </header> \n                <section class=\"content\">\n                     ");
  stack1 = depth0;
  stack2 = "content";
  foundHelper = helpers.outlet;
  stack3 = foundHelper || depth0.outlet;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, tmp1); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "outlet", stack2, tmp1); }
  else { stack1 = stack3; }
  data.buffer.push(escapeExpression(stack1) + "\n                </section>\n            </div>");
  return buffer;
});
Ember.TEMPLATES["profile.hbs"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
helpers = helpers || Ember.Handlebars.helpers;
  var buffer = '', stack1, stack2, stack3, stack4, foundHelper, tmp1, self=this, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n                                <div class=\"control-group\">\n                                    <div class=\"control-label\">\n                                        <label></label>\n                                    </div>\n                                    <div class=\"controls email-verification-info\">\n                                        ");
  stack1 = depth0;
  stack2 = "currentUser.email_verified";
  stack3 = helpers['if'];
  tmp1 = self.program(2, program2, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(4, program4, data);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                    </div>\n                                </div>\n                                ");
  return buffer;}
function program2(depth0,data) {
  
  
  data.buffer.push("\n                                            <span class=\"text-success\">邮箱已通过验证</span>\n                                        ");}

function program4(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n                                            ");
  stack1 = depth0;
  stack2 = "currentUser.verifyEmailSended";
  stack3 = helpers['if'];
  tmp1 = self.program(5, program5, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(8, program8, data);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                        ");
  return buffer;}
function program5(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n                                                <span class=\"text-info\">验证邮件已发送</span>\n                                                ");
  stack1 = depth0;
  stack2 = "showsResendEmailButton";
  stack3 = helpers['if'];
  tmp1 = self.program(6, program6, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                            ");
  return buffer;}
function program6(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n                                                    <button class=\"btn btn-mini\" ");
  stack1 = depth0;
  stack2 = "reverify";
  stack3 = helpers.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">重新发送</button>\n                                                ");
  return buffer;}

function program8(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n                                                <span class=\"text-error\">尚未验证此邮箱</span>\n                                                <button class=\"btn btn-mini btn-primary\" ");
  stack1 = depth0;
  stack2 = "reverify";
  stack3 = helpers.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">发送验证邮件</button>\n                                            ");
  return buffer;}

  data.buffer.push("                    \n                    <form>\n                        <input class=\"upload-avatar hidden-input\" type=\"file\" name=\"avatar\">\n                    </form>\n                    <form novalidate=\"\" autocomplete=\"on\" class=\"update-profile\"> \n                        <div class=\"profile-basic-info\">\n                            <div class=\"avatar\">\n                                <a class=\"avatar-hover\" ");
  stack1 = depth0;
  stack2 = "updateAvatar";
  stack3 = {};
  stack4 = "view";
  stack3['target'] = stack4;
  stack4 = helpers.action;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">更换头像</a>\n                                <img ");
  stack1 = {};
  stack2 = "currentUser.avatarURL";
  stack1['src'] = stack2;
  stack2 = helpers.bindAttr;
  tmp1 = {};
  tmp1.hash = stack1;
  tmp1.contexts = [];
  tmp1.data = data;
  stack1 = stack2.call(depth0, tmp1);
  data.buffer.push(escapeExpression(stack1) + " width=\"100\" height=\"100\" />\n                            </div>\n                            <div class=\"info\">\n                                <label>");
  stack1 = depth0;
  stack2 = "currentUser.username";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "</label>\n                                <label>");
  stack1 = depth0;
  stack2 = "currentUser.levelType";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "</label>\n                                <label>");
  stack1 = depth0;
  stack2 = "currentUser.majorInfo.name";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "</label>\n                                <label>");
  stack1 = depth0;
  stack2 = "currentUser.departmentInfo.name";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "</label>\n                            </div>\n                        </div>\n                        <div class=\"yield\">\n                            <fieldset>\n                                <div class=\"control-group\">\n                                    <div class=\"control-label\">\n                                        <label>姓名：</label>\n                                    </div>\n                                    <div class=\"controls\">\n                                        <input type=\"text\" placeholder=\"请输入姓名…\" name='name' ");
  stack1 = {};
  stack2 = "currentUser.screenname";
  stack1['value'] = stack2;
  stack2 = helpers.bindAttr;
  tmp1 = {};
  tmp1.hash = stack1;
  tmp1.contexts = [];
  tmp1.data = data;
  stack1 = stack2.call(depth0, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">\n                                    </div>\n                                </div>\n                                <div class=\"control-group\">\n                                    <div class=\"control-label\">\n                                        <label>性别：</label>\n                                    </div>\n                                    <div class=\"controls\">\n                                        <select name='gender'>\n                                            <option value=\"0\">保密</option> \n                                            <option value=\"1\">男</option> \n                                            <option value=\"2\">女</option> \n                                        </select>\n                                    </div>\n                                </div>\n                                <div class=\"control-group\">\n                                    <div class=\"control-label\">\n                                        <label>邮箱：</label>  \n                                    </div>\n                                    <div class=\"controls\">\n                                        ");
  stack1 = depth0;
  stack2 = "Theses.NameTextField";
  stack3 = {};
  stack4 = "请输入电子邮箱…";
  stack3['placeholder'] = stack4;
  stack4 = "email";
  stack3['name'] = stack4;
  stack4 = "email";
  stack3['valueBinding'] = stack4;
  stack4 = helpers.view;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n                                    </div>\n                                </div>\n                                ");
  stack1 = depth0;
  stack2 = "showsEmailVerificationInfo";
  stack3 = helpers['if'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                            </fieldset>\n                        </div> \n                        <footer> \n                            <button type=\"submit\" class=\"blue submit\" ");
  stack1 = depth0;
  stack2 = "submit";
  stack3 = {};
  stack4 = "view";
  stack3['target'] = stack4;
  stack4 = true;
  stack3['href'] = stack4;
  stack4 = helpers.action;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">\n                                <span>提交</span>\n                            </button> \n                        </footer> \n                    </form>");
  return buffer;
});
Ember.TEMPLATES["settings.hbs"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
helpers = helpers || Ember.Handlebars.helpers;
  var buffer = '', stack1, stack2, stack3, stack4, foundHelper, tmp1, self=this, escapeExpression=this.escapeExpression;


  data.buffer.push("\n                    <form novalidate=\"\" autocomplete=\"on\" class=\"update-profile\"> \n                        <div class=\"yield\" style=\"padding-top:20px\">\n                            <fieldset class='reset-password'>\n                                <div class=\"control-group\">\n                                    <div class=\"control-label\">\n                                        <label>当前密码：</label>\n                                    </div>\n                                    <div class=\"controls\">\n                                        <input type=\"password\" name='old-password'>\n                                    </div>\n                                </div>\n                                <div class=\"control-group\">\n                                    <div class=\"control-label\">\n                                        <label>新密码：</label>\n                                    </div>\n                                    <div class=\"controls\">\n                                        <input type=\"password\" name='password'>\n                                    </div>\n                                </div>\n                                <div class=\"control-group\">\n                                    <div class=\"control-label\">\n                                        <label>确认新密码：</label>\n                                    </div>\n                                    <div class=\"controls\">\n                                        <input type=\"password\" name='re-password'>\n                                    </div>\n                                </div>\n                            </fieldset>\n                        </div> \n                        <footer> \n                            <button type=\"submit\" class=\"blue submit\" ");
  stack1 = depth0;
  stack2 = "submit";
  stack3 = {};
  stack4 = "view";
  stack3['target'] = stack4;
  stack4 = true;
  stack3['href'] = stack4;
  stack4 = helpers.action;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">\n                                <span>提交</span>\n                            </button> \n                        </footer> \n                    </form>");
  return buffer;
});
Ember.TEMPLATES["title_mark.hbs"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
helpers = helpers || Ember.Handlebars.helpers;
  var buffer = '', stack1, stack2, stack3, stack4, foundHelper, tmp1, self=this, escapeExpression=this.escapeExpression;


  data.buffer.push("\n                    <form novalidate=\"\" autocomplete=\"on\" class=\"update-profile\"> \n                        <div class=\"yield\" style=\"padding-top:20px\">\n                            <fieldset class=\"reset-password title-remark\">\n                                <div class=\"control-group\">\n                                    ");
  stack1 = depth0;
  stack2 = "Theses.ScoreField";
  stack3 = {};
  stack4 = "articleScore";
  stack3['valueBinding'] = stack4;
  stack4 = "论文分数：";
  stack3['title'] = stack4;
  stack4 = helpers.view;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n                                </div>\n                                <div class=\"control-group\">\n                                    ");
  stack1 = depth0;
  stack2 = "Theses.ScoreField";
  stack3 = {};
  stack4 = "oralScore";
  stack3['valueBinding'] = stack4;
  stack4 = "答辩分数：";
  stack3['title'] = stack4;
  stack4 = helpers.view;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n                                </div>\n                                <div class=\"control-group\">\n                                    <div class=\"control-label\">\n                                        <label>评价：</label>\n                                    </div>\n                                    <div class=\"controls\">\n                                        ");
  stack1 = depth0;
  stack2 = "Ember.TextArea";
  stack3 = {};
  stack4 = "height: 109px; float: right; width: 187px; margin: 0px 0px 10px;";
  stack3['style'] = stack4;
  stack4 = "comment";
  stack3['valueBinding'] = stack4;
  stack4 = helpers.view;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n                                    </div>\n                                </div>\n                            </fieldset>\n                        </div> \n                        <footer> \n                            <button type=\"submit\" class=\"blue submit\" ");
  stack1 = depth0;
  stack2 = "submit";
  stack3 = {};
  stack4 = "view";
  stack3['target'] = stack4;
  stack4 = true;
  stack3['href'] = stack4;
  stack4 = helpers.action;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">\n                                <span>更新分数</span>\n                            </button> \n                        </footer> \n                    </form>");
  return buffer;
});
Ember.TEMPLATES["user_edit.hbs"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
helpers = helpers || Ember.Handlebars.helpers;
  var buffer = '', stack1, stack2, stack3, stack4, foundHelper, tmp1, self=this, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3, stack4;
  data.buffer.push("\n                                    ");
  stack1 = depth0;
  stack2 = "Theses.UsernameField";
  stack3 = {};
  stack4 = "username";
  stack3['valueBinding'] = stack4;
  stack4 = helpers.view;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n                                ");
  return buffer;}

function program3(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3, stack4;
  data.buffer.push("\n                                <div class=\"control-group\">\n                                    <div class=\"control-label\">\n                                        <label>专业：</label>\n                                    </div>\n                                    <div class=\"controls\">\n                                        ");
  stack1 = depth0;
  stack2 = "Theses.Select";
  stack3 = {};
  stack4 = "majors";
  stack3['contentBinding'] = stack4;
  stack4 = "content.majorid";
  stack3['optionValuePath'] = stack4;
  stack4 = "content.name";
  stack3['optionLabelPath'] = stack4;
  stack4 = "selectedMajor";
  stack3['valueBinding'] = stack4;
  stack4 = helpers.view;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n                                    </div>\n                                </div>\n                                ");
  return buffer;}

  data.buffer.push("\n                    <form novalidate=\"\" autocomplete=\"on\" class=\"update-profile\"> \n                        <div class=\"yield\">\n                            <fieldset>\n                                ");
  stack1 = depth0;
  stack2 = "editmode";
  stack3 = helpers.unless;
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                ");
  stack1 = depth0;
  stack2 = "Theses.TextField";
  stack3 = {};
  stack4 = "全名";
  stack3['title'] = stack4;
  stack4 = "Fullname";
  stack3['placeholder'] = stack4;
  stack4 = "validateFullname";
  stack3['validateDelegate'] = stack4;
  stack4 = "fullname";
  stack3['valueBinding'] = stack4;
  stack4 = helpers.view;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n                                <div class=\"control-group\">\n                                    <div class=\"control-label\">\n                                        <label>性别：</label>\n                                    </div>\n                                    <div class=\"controls\">\n                                        ");
  stack1 = depth0;
  stack2 = "Theses.Select";
  stack3 = {};
  stack4 = "Theses.Genders";
  stack3['contentBinding'] = stack4;
  stack4 = "content.value";
  stack3['optionValuePath'] = stack4;
  stack4 = "content.name";
  stack3['optionLabelPath'] = stack4;
  stack4 = "selectedGender";
  stack3['valueBinding'] = stack4;
  stack4 = helpers.view;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n                                    </div>\n                                </div>\n                                <div class=\"control-group\">\n                                    <div class=\"control-label\">\n                                        <label>类型：</label>\n                                    </div>\n                                    <div class=\"controls\">\n                                        ");
  stack1 = depth0;
  stack2 = "Theses.Select";
  stack3 = {};
  stack4 = "levels";
  stack3['contentBinding'] = stack4;
  stack4 = "content.level";
  stack3['optionValuePath'] = stack4;
  stack4 = "content.name";
  stack3['optionLabelPath'] = stack4;
  stack4 = "selectedUserType";
  stack3['valueBinding'] = stack4;
  stack4 = helpers.view;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n                                    </div>\n                                </div>\n                                <div class=\"control-group\">\n                                    <div class=\"control-label\">\n                                        <label>学系：</label>\n                                    </div>\n                                    <div class=\"controls\">\n                                        ");
  stack1 = depth0;
  stack2 = "Theses.Select";
  stack3 = {};
  stack4 = "Theses.majorsManager.departmentsForUserCreation";
  stack3['contentBinding'] = stack4;
  stack4 = "content.deptid";
  stack3['optionValuePath'] = stack4;
  stack4 = "content.name";
  stack3['optionLabelPath'] = stack4;
  stack4 = "selectedDepartment";
  stack3['valueBinding'] = stack4;
  stack4 = helpers.view;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n                                    </div>\n                                </div>\n                                ");
  stack1 = depth0;
  stack2 = "needSelectMajor";
  stack3 = helpers['if'];
  tmp1 = self.program(3, program3, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                ");
  stack1 = depth0;
  stack2 = "Theses.TextField";
  stack3 = {};
  stack4 = "邮箱";
  stack3['title'] = stack4;
  stack4 = "Email";
  stack3['placeholder'] = stack4;
  stack4 = "validateEmail";
  stack3['validateDelegate'] = stack4;
  stack4 = false;
  stack3['required'] = stack4;
  stack4 = "email";
  stack3['valueBinding'] = stack4;
  stack4 = helpers.view;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n                            </fieldset>\n                        </div> \n                        <footer> \n                            <button type=\"submit\" class=\"blue submit\" ");
  stack1 = depth0;
  stack2 = "submit";
  stack3 = {};
  stack4 = "view";
  stack3['target'] = stack4;
  stack4 = true;
  stack3['href'] = stack4;
  stack4 = helpers.action;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">\n                                <span>提交</span>\n                            </button> \n                        </footer> \n                    </form>");
  return buffer;
});
Ember.TEMPLATES["document_cell.hbs"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
helpers = helpers || Ember.Handlebars.helpers;
  var stack1, stack2, stack3, foundHelper, tmp1, self=this, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n	");
  stack1 = depth0;
  stack2 = "Theses.LoadingView";
  stack3 = helpers.view;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n");
  return buffer;}

function program3(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3, stack4;
  data.buffer.push("\n	<div class=\"filetype pull-left\">\n		<div ");
  stack1 = {};
  stack2 = "view.fileType";
  stack1['class'] = stack2;
  stack2 = helpers.bindAttr;
  tmp1 = {};
  tmp1.hash = stack1;
  tmp1.contexts = [];
  tmp1.data = data;
  stack1 = stack2.call(depth0, tmp1);
  data.buffer.push(escapeExpression(stack1) + "></div>\n	</div>\n	<div class=\"document-info\">\n		<h4>");
  stack1 = depth0;
  stack2 = "view.doc.displayName";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "</h4>\n		<span>");
  stack1 = depth0;
  stack2 = "Theses.MessageAvatarView";
  stack3 = {};
  stack4 = "view.doc.author";
  stack3['userBinding'] = stack4;
  stack4 = helpers.view;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1));
  stack1 = depth0;
  stack2 = "view.lineTwo";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "</span>\n	</div>\n	");
  stack1 = depth0;
  stack2 = "view.canDelete";
  stack3 = helpers['if'];
  tmp1 = self.program(4, program4, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;}
function program4(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3, stack4;
  data.buffer.push("\n		<button class=\"close\" ");
  stack1 = depth0;
  stack2 = "delete";
  stack3 = {};
  stack4 = "view";
  stack3['target'] = stack4;
  stack4 = false;
  stack3['bubbles'] = stack4;
  stack4 = helpers.action;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">&times;</button>\n	");
  return buffer;}

  stack1 = depth0;
  stack2 = "view.pendingDelete";
  stack3 = helpers['if'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(3, program3, data);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
});
Ember.TEMPLATES["dropdown_button.hbs"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
helpers = helpers || Ember.Handlebars.helpers;
  var buffer = '', stack1, stack2, stack3, foundHelper, tmp1, self=this, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n			<li><a>");
  stack1 = depth0;
  stack2 = "title";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "</a></li>\n		");
  return buffer;}

  data.buffer.push("<div class=\"btn-group\">\n	<button class=\"btn dropdown-toggle\" data-toggle=\"dropdown\">\n		");
  stack1 = depth0;
  stack2 = "view.title";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + " \n		<span class=\"caret\"></span>\n	</button> \n	<ul class=\"dropdown-menu\"> \n		");
  stack1 = depth0;
  stack2 = "view.items";
  stack3 = helpers.each;
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n	</ul> \n</div>");
  return buffer;
});
Ember.TEMPLATES["loadingview.hbs"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
helpers = helpers || Ember.Handlebars.helpers;
  var foundHelper, self=this;


  data.buffer.push("<section class=\"loading-section\"><div class=\"loading-view loading-background\"></div></section>");
});
Ember.TEMPLATES["pagingview.hbs"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
helpers = helpers || Ember.Handlebars.helpers;
  var buffer = '', stack1, stack2, stack3, stack4, foundHelper, tmp1, self=this, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"search-fields paging page-controls\">\n	<a ");
  stack1 = {};
  stack2 = ":btn view.hasPrevious::disabled";
  stack1['class'] = stack2;
  stack2 = helpers.bindAttr;
  tmp1 = {};
  tmp1.hash = stack1;
  tmp1.contexts = [];
  tmp1.data = data;
  stack1 = stack2.call(depth0, tmp1);
  data.buffer.push(escapeExpression(stack1) + " ");
  stack1 = depth0;
  stack2 = "prevPage";
  stack3 = {};
  stack4 = true;
  stack3['href'] = stack4;
  stack4 = "view";
  stack3['target'] = stack4;
  stack4 = helpers.action;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">\n		上一页\n	</a>\n	第 ");
  stack1 = depth0;
  stack2 = "view.page";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + " 页\n	<a ");
  stack1 = {};
  stack2 = ":btn view.hasNext::disabled";
  stack1['class'] = stack2;
  stack2 = helpers.bindAttr;
  tmp1 = {};
  tmp1.hash = stack1;
  tmp1.contexts = [];
  tmp1.data = data;
  stack1 = stack2.call(depth0, tmp1);
  data.buffer.push(escapeExpression(stack1) + " ");
  stack1 = depth0;
  stack2 = "nextPage";
  stack3 = {};
  stack4 = true;
  stack3['href'] = stack4;
  stack4 = "view";
  stack3['target'] = stack4;
  stack4 = helpers.action;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">\n		下一页\n	</a>\n</div>");
  return buffer;
});
Ember.TEMPLATES["promptview.hbs"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
helpers = helpers || Ember.Handlebars.helpers;
  var buffer = '', stack1, stack2, stack3, foundHelper, tmp1, self=this, escapeExpression=this.escapeExpression;


  data.buffer.push("<section class=\"prompt-section\">");
  stack1 = depth0;
  stack2 = "view.text";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "</section>");
  return buffer;
});
Ember.TEMPLATES["textfield.hbs"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
helpers = helpers || Ember.Handlebars.helpers;
  var buffer = '', stack1, stack2, stack3, stack4, foundHelper, tmp1, self=this, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n	<label class=\"control-label\">\n		");
  stack1 = depth0;
  stack2 = "view.title";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n	</label>\n");
  return buffer;}

function program3(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n		<span class=\"help-inline\">\n			");
  stack1 = depth0;
  stack2 = "view.message";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n		</span>\n	");
  return buffer;}

  stack1 = depth0;
  stack2 = "view.title";
  stack3 = helpers['if'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n<div class=\"controls\">\n	");
  stack1 = depth0;
  stack2 = "Ember.TextField";
  stack3 = {};
  stack4 = "view.placeholder";
  stack3['placeholderBinding'] = stack4;
  stack4 = "view.value";
  stack3['valueBinding'] = stack4;
  stack4 = "view.type";
  stack3['typeBinding'] = stack4;
  stack4 = "view.inputClassNames";
  stack3['classNameBindings'] = stack4;
  stack4 = helpers.view;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + " \n	");
  stack1 = depth0;
  stack2 = "view.hasMessage";
  stack3 = helpers['if'];
  tmp1 = self.program(3, program3, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>");
  return buffer;
});
Ember.TEMPLATES["titlecell.hbs"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
helpers = helpers || Ember.Handlebars.helpers;
  var buffer = '', stack1, stack2, stack3, foundHelper, tmp1, self=this, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n		<h4>");
  stack1 = depth0;
  stack2 = "title";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "</h4>\n		<span ");
  stack1 = {};
  stack2 = "view.stateClass";
  stack1['class'] = stack2;
  stack2 = helpers.bindAttr;
  tmp1 = {};
  tmp1.hash = stack1;
  tmp1.contexts = [];
  tmp1.data = data;
  stack1 = stack2.call(depth0, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">");
  stack1 = depth0;
  stack2 = "stateName";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "</span>\n	");
  return buffer;}

  data.buffer.push("<div class=\"span12\">\n	");
  stack1 = depth0;
  stack2 = "view.title";
  stack3 = helpers['with'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>");
  return buffer;
});
Ember.TEMPLATES["upload_item_view.hbs"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
helpers = helpers || Ember.Handlebars.helpers;
  var buffer = '', stack1, stack2, stack3, stack4, foundHelper, tmp1, self=this, escapeExpression=this.escapeExpression;


  data.buffer.push("<h4>");
  stack1 = depth0;
  stack2 = "desc";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "</h4>\n<a class=\"upload-cancel\" ");
  stack1 = depth0;
  stack2 = "remove";
  stack3 = {};
  stack4 = "view";
  stack3['target'] = stack4;
  stack4 = helpers.action;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "><i class=\"icon-remove\"></i></a>\n<span>");
  stack1 = depth0;
  stack2 = "view.progress";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "%</span>\n<div class=\"progress progress-striped active\">\n	 	<div class=\"bar\" ");
  stack1 = {};
  stack2 = "view.progressBarStyle";
  stack1['style'] = stack2;
  stack2 = helpers.bindAttr;
  tmp1 = {};
  tmp1.hash = stack1;
  tmp1.contexts = [];
  tmp1.data = data;
  stack1 = stack2.call(depth0, tmp1);
  data.buffer.push(escapeExpression(stack1) + "></div>\n</div>");
  return buffer;
});
Ember.TEMPLATES["usercell.hbs"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
helpers = helpers || Ember.Handlebars.helpers;
  var buffer = '', stack1, stack2, stack3, stack4, foundHelper, tmp1, self=this, escapeExpression=this.escapeExpression;


  stack1 = depth0;
  stack2 = "Theses.MessageAvatarView";
  stack3 = {};
  stack4 = "view.user";
  stack3['userBinding'] = stack4;
  stack4 = "pull-left";
  stack3['class'] = stack4;
  stack4 = helpers.view;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n<div class=\"user-info\">\n	<label>");
  stack1 = depth0;
  stack2 = "view.lineOne";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "</label>\n	<label>");
  stack1 = depth0;
  stack2 = "view.lineTwo";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "</label>\n</div>");
  return buffer;
});
Ember.TEMPLATES["userselection_cell.hbs"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
helpers = helpers || Ember.Handlebars.helpers;
  var buffer = '', stack1, stack2, stack3, stack4, foundHelper, tmp1, self=this, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n		<label ");
  stack1 = {};
  stack2 = "view.articleScoreClass";
  stack1['class'] = stack2;
  stack2 = helpers.bindAttr;
  tmp1 = {};
  tmp1.hash = stack1;
  tmp1.contexts = [];
  tmp1.data = data;
  stack1 = stack2.call(depth0, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">\n			论文得分：");
  stack1 = depth0;
  stack2 = "view.selection.articleScore";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n		</label>\n	");
  return buffer;}

function program3(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n		<label ");
  stack1 = {};
  stack2 = "view.oralScoreClass";
  stack1['class'] = stack2;
  stack2 = helpers.bindAttr;
  tmp1 = {};
  tmp1.hash = stack1;
  tmp1.contexts = [];
  tmp1.data = data;
  stack1 = stack2.call(depth0, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">\n			答辩得分：");
  stack1 = depth0;
  stack2 = "view.selection.oralScore";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n		</label>\n	");
  return buffer;}

function program5(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n		<label class=\"text-info\">\n			导师评价：");
  stack1 = depth0;
  stack2 = "view.selection.comment";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n		</label>\n	");
  return buffer;}

  stack1 = depth0;
  stack2 = "Theses.MessageAvatarView";
  stack3 = {};
  stack4 = "view.user";
  stack3['userBinding'] = stack4;
  stack4 = "pull-left";
  stack3['class'] = stack4;
  stack4 = helpers.view;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n<div class=\"user-info\">\n	<label>");
  stack1 = depth0;
  stack2 = "view.lineOne";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "</label>\n	<label>");
  stack1 = depth0;
  stack2 = "view.lineTwo";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "</label>\n	");
  stack1 = depth0;
  stack2 = "view.selection.articleScore";
  stack3 = helpers['if'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n	");
  stack1 = depth0;
  stack2 = "view.selection.oralScore";
  stack3 = helpers['if'];
  tmp1 = self.program(3, program3, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n	");
  stack1 = depth0;
  stack2 = "view.hasComment";
  stack3 = helpers['if'];
  tmp1 = self.program(5, program5, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>");
  return buffer;
});
Ember.TEMPLATES["wrongtime_view.hbs"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
helpers = helpers || Ember.Handlebars.helpers;
  var buffer = '', stack1, stack2, stack3, foundHelper, tmp1, self=this, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"wrong-time-wrapper\">\n	<p class=\"wrong-time-description\">\n		<strong>现在不是");
  stack1 = depth0;
  stack2 = "view.name";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "时间</strong><br>请前往<a href=\"/#/dashboard\">管理中心</a>查看时间安排\n	</p>\n</div>");
  return buffer;
});
Ember.TEMPLATES["chosen_title_cell.hbs"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
helpers = helpers || Ember.Handlebars.helpers;
  var buffer = '', stack1, stack2, stack3, foundHelper, tmp1, self=this, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n			");
  stack1 = depth0;
  stack2 = "Theses.LoadingView";
  stack3 = helpers.view;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n		");
  return buffer;}

function program3(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3, stack4;
  data.buffer.push("\n			<div class=\"btn-group\">\n				<button ");
  stack1 = {};
  stack2 = ":btn controller.pendingSelection:disabled";
  stack1['class'] = stack2;
  stack2 = helpers.bindAttr;
  tmp1 = {};
  tmp1.hash = stack1;
  tmp1.contexts = [];
  tmp1.data = data;
  stack1 = stack2.call(depth0, tmp1);
  data.buffer.push(escapeExpression(stack1) + " style=\"width:100%\" ");
  stack1 = depth0;
  stack2 = "chooseButtonClicked";
  stack3 = {};
  stack4 = "view";
  stack3['target'] = stack4;
  stack4 = helpers.action;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + " title=\"选择\">选择</button>\n			</div>\n		");
  return buffer;}

function program5(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n<div class=\"extended\">\n	<dl>\n  		<dt>Description / 论题说明</dt>\n  		<dd>");
  stack1 = depth0;
  stack2 = "view.title.description";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "</dd>\n  		<dt>Requirements / 要求</dt>\n  		<dd>");
  stack1 = depth0;
  stack2 = "view.requirements";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "</dd>\n  		<dt>Majors / 可选专业</dt>\n  		<dd>");
  stack1 = depth0;
  stack2 = "view.avaliableMajors";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "</dd>\n  		");
  stack1 = depth0;
  stack2 = "view.title.teacher";
  stack3 = helpers['if'];
  tmp1 = self.program(6, program6, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  		");
  stack1 = depth0;
  stack2 = "view.title.students.length";
  stack3 = helpers['if'];
  tmp1 = self.program(8, program8, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n	</dl>\n</div>\n");
  return buffer;}
function program6(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n  		<dt>Teacher / 指导教师</dt>\n  		<dd>");
  stack1 = depth0;
  stack2 = "view.title.teacher.displayName";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "</dd>\n  		");
  return buffer;}

function program8(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n  		<dt>Students / 选题学生</dt>\n  		");
  stack1 = depth0;
  stack2 = "view.title.students";
  stack3 = helpers.each;
  tmp1 = self.program(9, program9, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  		");
  return buffer;}
function program9(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n  			<dd>");
  stack1 = depth0;
  stack2 = "displayName";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "</dd>\n  		");
  return buffer;}

  data.buffer.push("<div class=\"overview\">\n	<span class=\"icon\"><i ");
  stack1 = {};
  stack2 = "view.opened:icon-chevron-down:icon-chevron-right";
  stack1['class'] = stack2;
  stack2 = helpers.bindAttr;
  tmp1 = {};
  tmp1.hash = stack1;
  tmp1.contexts = [];
  tmp1.data = data;
  stack1 = stack2.call(depth0, tmp1);
  data.buffer.push(escapeExpression(stack1) + "></i></span>\n	<div class=\"title-name\" ");
  stack1 = {};
  stack2 = "view.title.title";
  stack1['title'] = stack2;
  stack2 = helpers.bindAttr;
  tmp1 = {};
  tmp1.hash = stack1;
  tmp1.contexts = [];
  tmp1.data = data;
  stack1 = stack2.call(depth0, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">");
  stack1 = depth0;
  stack2 = "view.title.title";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "</div>\n		");
  stack1 = depth0;
  stack2 = "view.pendingState";
  stack3 = helpers['if'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(3, program3, data);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n	\n</div>\n");
  stack1 = depth0;
  stack2 = "view.opened";
  stack3 = helpers['if'];
  tmp1 = self.program(5, program5, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
});
Ember.TEMPLATES["conversation_row.hbs"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
helpers = helpers || Ember.Handlebars.helpers;
  var buffer = '', stack1, stack2, stack3, foundHelper, tmp1, self=this, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n        ");
  stack1 = depth0;
  stack2 = "newFlag";
  stack3 = helpers['if'];
  tmp1 = self.program(2, program2, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        <img class=\"conversation-avatar\" ");
  stack1 = {};
  stack2 = "with_user.avatarThumbURL";
  stack1['src'] = stack2;
  stack2 = helpers.bindAttr;
  tmp1 = {};
  tmp1.hash = stack1;
  tmp1.contexts = [];
  tmp1.data = data;
  stack1 = stack2.call(depth0, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">\n        <div class=\"conversation-user\">\n            <div class=\"screenname\">\n                ");
  stack1 = depth0;
  stack2 = "screenname";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n            </div>\n            <div class=\"info\">\n                ");
  stack1 = depth0;
  stack2 = "info";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n            </div>\n        </div>\n    ");
  return buffer;}
function program2(depth0,data) {
  
  
  data.buffer.push("\n            <div class=\"conversation-new-flag\"></div>\n        ");}

  data.buffer.push("<div ");
  stack1 = {};
  stack2 = ":conversation view.selected:selected";
  stack1['class'] = stack2;
  stack2 = helpers.bindAttr;
  tmp1 = {};
  tmp1.hash = stack1;
  tmp1.contexts = [];
  tmp1.data = data;
  stack1 = stack2.call(depth0, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">\n    ");
  stack1 = depth0;
  stack2 = "view.conversation";
  stack3 = helpers['with'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>");
  return buffer;
});
Ember.TEMPLATES["message_row.hbs"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
helpers = helpers || Ember.Handlebars.helpers;
  var stack1, stack2, stack3, foundHelper, tmp1, self=this, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n<div ");
  stack1 = {};
  stack2 = ":message-row isCurrentUser:message-row-right:message-row-left";
  stack1['class'] = stack2;
  stack2 = helpers.bindAttr;
  tmp1 = {};
  tmp1.hash = stack1;
  tmp1.contexts = [];
  tmp1.data = data;
  stack1 = stack2.call(depth0, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">\n    <div class=\"message-row-inner\">\n        ");
  stack1 = depth0;
  stack2 = "isCurrentUser";
  stack3 = helpers['if'];
  tmp1 = self.program(2, program2, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(4, program4, data);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("                   \n        <div class=\"bubble\">\n            ");
  stack1 = depth0;
  stack2 = "content";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n        </div>\n\n    </div>\n    <div ");
  stack1 = {};
  stack2 = "failed:failed:time";
  stack1['class'] = stack2;
  stack2 = helpers.bindAttr;
  tmp1 = {};
  tmp1.hash = stack1;
  tmp1.contexts = [];
  tmp1.data = data;
  stack1 = stack2.call(depth0, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">\n        ");
  stack1 = depth0;
  stack2 = "failed";
  stack3 = helpers['if'];
  tmp1 = self.program(6, program6, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(8, program8, data);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n</div>\n");
  return buffer;}
function program2(depth0,data) {
  
  var buffer = '', stack1, stack2;
  data.buffer.push("\n            <img class=\"bubble-avatar\" ");
  stack1 = {};
  stack2 = "Theses.accountManager.currentAccount.user.avatarThumbURL";
  stack1['src'] = stack2;
  stack2 = helpers.bindAttr;
  tmp1 = {};
  tmp1.hash = stack1;
  tmp1.contexts = [];
  tmp1.data = data;
  stack1 = stack2.call(depth0, tmp1);
  data.buffer.push(escapeExpression(stack1) + "/>\n        ");
  return buffer;}

function program4(depth0,data) {
  
  var buffer = '', stack1, stack2;
  data.buffer.push("\n            <img class=\"bubble-avatar\" ");
  stack1 = {};
  stack2 = "Theses.messageController.selectedConversation.with_user.avatarThumbURL";
  stack1['src'] = stack2;
  stack2 = helpers.bindAttr;
  tmp1 = {};
  tmp1.hash = stack1;
  tmp1.contexts = [];
  tmp1.data = data;
  stack1 = stack2.call(depth0, tmp1);
  data.buffer.push(escapeExpression(stack1) + "/>\n        ");
  return buffer;}

function program6(depth0,data) {
  
  
  data.buffer.push("\n            发送失败，双击以重新发送\n        ");}

function program8(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n            ");
  stack1 = depth0;
  stack2 = "dateString";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n        ");
  return buffer;}

  stack1 = depth0;
  stack2 = "view.content";
  stack3 = helpers['with'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
});
Ember.TEMPLATES["notice_row_view.hbs"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
helpers = helpers || Ember.Handlebars.helpers;
  var buffer = '', stack1, stack2, stack3, foundHelper, tmp1, self=this, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  data.buffer.push("\n		<i class=\"icon-share-alt\"></i>\n	");}

function program3(depth0,data) {
  
  var buffer = '', stack1, stack2;
  data.buffer.push("\n		<i ");
  stack1 = {};
  stack2 = "view.opened:icon-chevron-down:icon-chevron-right";
  stack1['class'] = stack2;
  stack2 = helpers.bindAttr;
  tmp1 = {};
  tmp1.hash = stack1;
  tmp1.contexts = [];
  tmp1.data = data;
  stack1 = stack2.call(depth0, tmp1);
  data.buffer.push(escapeExpression(stack1) + "></i>\n	");
  return buffer;}

function program5(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3, stack4;
  data.buffer.push("\n		<a class=\"close\" href=\"#\" ");
  stack1 = depth0;
  stack2 = "deleteNotice";
  stack3 = {};
  stack4 = "view";
  stack3['target'] = stack4;
  stack4 = "true";
  stack3['href'] = stack4;
  stack4 = helpers.action;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">&times;</a>\n	");
  return buffer;}

function program7(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n<div class=\"extended\">\n	<div class=\"content\">\n		");
  stack1 = depth0;
  stack2 = "view.notice.content";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n	</div>\n</div>\n");
  return buffer;}

  data.buffer.push("<div class=\"overview\">\n	<span class=\"icon\">\n	");
  stack1 = depth0;
  stack2 = "view.notice.url";
  stack3 = helpers['if'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(3, program3, data);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n	</span>\n	<div class=\"title-name\" ");
  stack1 = {};
  stack2 = "view.notice.title";
  stack1['title'] = stack2;
  stack2 = helpers.bindAttr;
  tmp1 = {};
  tmp1.hash = stack1;
  tmp1.contexts = [];
  tmp1.data = data;
  stack1 = stack2.call(depth0, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">");
  stack1 = depth0;
  stack2 = "view.notice.title";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "</div>\n	<div class=\"meta-info\">");
  stack1 = depth0;
  stack2 = "view.publisher";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + " 发表于 ");
  stack1 = depth0;
  stack2 = "view.time";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "</div>\n	");
  stack1 = depth0;
  stack2 = "view.showsDeleteButton";
  stack3 = helpers['if'];
  tmp1 = self.program(5, program5, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n");
  stack1 = depth0;
  stack2 = "view.opened";
  stack3 = helpers['if'];
  tmp1 = self.program(7, program7, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
});
Ember.TEMPLATES["review_title_cell.hbs"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
helpers = helpers || Ember.Handlebars.helpers;
  var buffer = '', stack1, stack2, stack3, foundHelper, tmp1, self=this, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n			");
  stack1 = depth0;
  stack2 = "Theses.LoadingView";
  stack3 = helpers.view;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n		");
  return buffer;}

function program3(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n			");
  stack1 = depth0;
  stack2 = "view.proccessed";
  stack3 = helpers['if'];
  tmp1 = self.program(4, program4, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(6, program6, data);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n		");
  return buffer;}
function program4(depth0,data) {
  
  
  data.buffer.push("\n				<div class=\"btn-group\">\n					<button class=\"btn disabled\">已处理</button>\n				</div>\n			");}

function program6(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3, stack4;
  data.buffer.push("\n				<div class=\"btn-group\">\n					<button class=\"btn btn-success\" ");
  stack1 = depth0;
  stack2 = "allow";
  stack3 = {};
  stack4 = "view";
  stack3['target'] = stack4;
  stack4 = helpers.action;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + " title=\"通过\"><i class=\"icon-white icon-ok\"></i></button>\n					<button class=\"btn btn-danger\" ");
  stack1 = depth0;
  stack2 = "deny";
  stack3 = {};
  stack4 = "view";
  stack3['target'] = stack4;
  stack4 = helpers.action;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + " title=\"否决\"><i class=\"icon-white icon-remove\"></i></button>\n				</div>\n			");
  return buffer;}

function program8(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n<div class=\"extended\">\n	<dl>\n  		<dt>Description / 论题说明</dt>\n  		<dd>");
  stack1 = depth0;
  stack2 = "view.title.description";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "</dd>\n  		<dt>Requirements / 要求</dt>\n  		<dd>");
  stack1 = depth0;
  stack2 = "view.requirements";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "</dd>\n  		<dt>Majors / 可选专业</dt>\n  		<dd>");
  stack1 = depth0;
  stack2 = "view.avaliableMajors";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "</dd>\n  		");
  stack1 = depth0;
  stack2 = "view.title.teacher";
  stack3 = helpers['if'];
  tmp1 = self.program(9, program9, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  		");
  stack1 = depth0;
  stack2 = "view.title.students.length";
  stack3 = helpers['if'];
  tmp1 = self.program(11, program11, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n	</dl>\n</div>\n");
  return buffer;}
function program9(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n  		<dt>Teacher / 指导教师</dt>\n  		<dd>");
  stack1 = depth0;
  stack2 = "view.title.teacher.displayName";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "</dd>\n  		");
  return buffer;}

function program11(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n  		<dt>Students / 选题学生</dt>\n  		");
  stack1 = depth0;
  stack2 = "view.title.students";
  stack3 = helpers.each;
  tmp1 = self.program(12, program12, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  		");
  return buffer;}
function program12(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n  			<dd>");
  stack1 = depth0;
  stack2 = "displayName";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "</dd>\n  		");
  return buffer;}

  data.buffer.push("<div class=\"overview\">\n	<span class=\"icon\"><i ");
  stack1 = {};
  stack2 = "view.opened:icon-chevron-down:icon-chevron-right";
  stack1['class'] = stack2;
  stack2 = helpers.bindAttr;
  tmp1 = {};
  tmp1.hash = stack1;
  tmp1.contexts = [];
  tmp1.data = data;
  stack1 = stack2.call(depth0, tmp1);
  data.buffer.push(escapeExpression(stack1) + "></i></span>\n	<div class=\"title-name\" ");
  stack1 = {};
  stack2 = "view.title.title";
  stack1['title'] = stack2;
  stack2 = helpers.bindAttr;
  tmp1 = {};
  tmp1.hash = stack1;
  tmp1.contexts = [];
  tmp1.data = data;
  stack1 = stack2.call(depth0, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">");
  stack1 = depth0;
  stack2 = "view.title.title";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "</div>\n		");
  stack1 = depth0;
  stack2 = "view.pendingState";
  stack3 = helpers['if'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(3, program3, data);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n	\n</div>\n");
  stack1 = depth0;
  stack2 = "view.opened";
  stack3 = helpers['if'];
  tmp1 = self.program(8, program8, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
});
Ember.TEMPLATES["tableview.hbs"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
helpers = helpers || Ember.Handlebars.helpers;
  var buffer = '', foundHelper, self=this;


  return buffer;
});
Ember.TEMPLATES["teachercell.hbs"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
helpers = helpers || Ember.Handlebars.helpers;
  var buffer = '', stack1, stack2, stack3, stack4, foundHelper, tmp1, self=this, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("（ ");
  stack1 = depth0;
  stack2 = "screenname";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + " ）");
  return buffer;}

function program3(depth0,data) {
  
  
  data.buffer.push("\n		<div class=\"loading-view loading-background\"></div>\n	");}

function program5(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3, stack4;
  data.buffer.push("\n		<button ");
  stack1 = {};
  stack2 = ":btn :pull-right :teacher-action view.buttonClass";
  stack1['class'] = stack2;
  stack2 = helpers.bindAttr;
  tmp1 = {};
  tmp1.hash = stack1;
  tmp1.contexts = [];
  tmp1.data = data;
  stack1 = stack2.call(depth0, tmp1);
  data.buffer.push(escapeExpression(stack1) + " ");
  stack1 = depth0;
  stack2 = "buttonClicked";
  stack3 = {};
  stack4 = "view";
  stack3['target'] = stack4;
  stack4 = helpers.action;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">");
  stack1 = depth0;
  stack2 = "view.buttonTitle";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "</button>\n	");
  return buffer;}

  data.buffer.push("<div class=\"span12 teacherinfo\">\n	");
  stack1 = depth0;
  stack2 = "Theses.MessageAvatarView";
  stack3 = {};
  stack4 = depth0;
  stack3['user'] = stack4;
  stack4 = "pull-left avatar-list desktop";
  stack3['class'] = stack4;
  stack4 = helpers.view;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n	<div class=\"userinfo\">\n		<label class=\"username\">");
  stack1 = depth0;
  stack2 = "username";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + " ");
  stack1 = depth0;
  stack2 = "screenname.length";
  stack3 = helpers['if'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</label>\n		<label class=\"description\">");
  stack1 = depth0;
  stack2 = "genderString";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "， ");
  stack1 = depth0;
  stack2 = "departmentInfo.name";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "</label>\n	</div>\n	");
  stack1 = depth0;
  stack2 = "view.pendingState";
  stack3 = helpers['if'];
  tmp1 = self.program(3, program3, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(5, program5, data);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>");
  return buffer;
});
});