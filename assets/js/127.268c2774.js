(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{432:function(t,a,s){"use strict";s.r(a);var e=s(25),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"dapper"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dapper"}},[t._v("#")]),t._v(" Dapper")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.nuget.org/packages/MassTransit.Dapper",target:"_blank",rel:"noopener noreferrer"}},[t._v("MassTransit.Dapper"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://dapper-tutorial.net/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Dapper"),s("OutboundLink")],1),t._v(" is a "),s("a",{attrs:{href:"https://github.com/StackExchange/Dapper",target:"_blank",rel:"noopener noreferrer"}},[t._v("super lightweight Micro-ORM"),s("OutboundLink")],1),t._v(" usable for saga persistence with Microsoft SQL Server. Dapper.Contrib is used for inserts and updates. The methods are virtual, so if you'd rather write the SQL yourself it is supported.")]),t._v(" "),s("p",[t._v("If you do not write your own sql, the model requires you use the "),s("code",[t._v("ExplicitKey")]),t._v(" attribute for the "),s("code",[t._v("CorrelationId")]),t._v(". And if you have properties that are not available as columns, you can use the "),s("code",[t._v("Computed")]),t._v(" attribute to not include them in the generated SQL. If you are using event correlation using other properties, it's highly recommended that you create indices for performance.")]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("OrderState")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token type-list"}},[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SagaStateMachineInstance")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token attribute"}},[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ExplicitKey")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token return-type class-name"}},[t._v("Guid")]),t._v(" CorrelationId "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token return-type class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")])]),t._v(" CurrentState "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token return-type class-name"}},[t._v("DateTime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("?")])]),t._v(" OrderDate "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"container-integration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#container-integration"}},[t._v("#")]),t._v(" Container Integration")]),t._v(" "),s("p",[t._v("To configure Dapper as the saga repository for a saga, use the code shown below using the "),s("em",[t._v("AddMassTransit")]),t._v(" container extension.")]),t._v(" "),s("div",{staticClass:"language-cs extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-cs"}},[s("code",[t._v("container"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("AddMassTransit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cfg "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    cfg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token generic-method"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("AddSagaStateMachine")]),s("span",{pre:!0,attrs:{class:"token generic class-name"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("OrderStateMachine"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" OrderState"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("DapperRepository")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("connectionString"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("The container extension will register the saga repository in the container. For more details on container configuration, review the "),s("RouterLink",{attrs:{to:"/usage/containers/"}},[t._v("container configuration")]),t._v(" section of the documentation.")],1),t._v(" "),s("h3",{attrs:{id:"limitations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#limitations"}},[t._v("#")]),t._v(" Limitations")]),t._v(" "),s("h4",{attrs:{id:"table-names"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#table-names"}},[t._v("#")]),t._v(" Table Names")]),t._v(" "),s("p",[t._v("The tablename can only be the pluralized form of the class name. So "),s("code",[t._v("OrderState")]),t._v(" would translate to table OrderState"),s("strong",[t._v("s")]),t._v(". This applies even if you write your own SQL for updates and inserts.")]),t._v(" "),s("h4",{attrs:{id:"correlation-expressions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#correlation-expressions"}},[t._v("#")]),t._v(" Correlation Expressions")]),t._v(" "),s("p",[t._v("The expressions you can use for correlation is somewhat limited. These types of expressions are handled:")]),t._v(" "),s("div",{staticClass:"language-cs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cs"}},[s("code",[t._v("    x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CorrelationId "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" someGuid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("IsDone"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CorrelationId "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" someGuid "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("IsDone"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("You can use multiple "),s("code",[t._v("&&")]),t._v(" in the expression. What you can not use is "),s("code",[t._v("||")]),t._v(" and negations. So a bool used like this "),s("code",[t._v("x.IsDone")]),t._v(" can only be handled as true and nothing else.")])])}),[],!1,null,null,null);a.default=n.exports}}]);