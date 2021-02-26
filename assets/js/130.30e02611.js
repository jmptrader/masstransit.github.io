(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{514:function(t,a,s){"use strict";s.r(a);var n=s(26),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"azure-table"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#azure-table"}},[t._v("#")]),t._v(" Azure Table")]),t._v(" "),s("p",[t._v("Azure Tables are exposed in two ways in Azure - via Storage accounts & via the premium offering within Cosmos DB APIs. This persistence supports both implementations and behind the curtains uses the Microsoft.Azure.Cosmos.Table library for communication.")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),s("p",[t._v('Azure Tables currently only supports Optimistic Concurrency. Mass Transit manages the ETag property in Payload Context and uses this property for state machine updates. Concurrency errors can be spotted in logs via standard "Precondition Failed" errors from Table Storage.')])]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("Be sure to set DateTime properties as nullable when updated later in the saga. Failure to do this can result in 400 bad requests from Table Storage.")])]),t._v(" "),s("div",{staticClass:"language-cs extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-cs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("OrderState")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token type-list"}},[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SagaStateMachineInstance")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token return-type class-name"}},[t._v("Guid")]),t._v(" CorrelationId "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token return-type class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")])]),t._v(" CurrentState "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token return-type class-name"}},[t._v("DateTime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("?")])]),t._v(" OrderDate "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"container-integration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#container-integration"}},[t._v("#")]),t._v(" Container Integration")]),t._v(" "),s("p",[t._v("To configure a Table as the saga repository for a saga, use the code shown below using the "),s("em",[t._v("AddMassTransit")]),t._v(" container extension.")]),t._v(" "),s("div",{staticClass:"language-cs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CloudTable")]),t._v(" cloudTable"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ncontainer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("AddMassTransit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cfg "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    cfg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token generic-method"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("AddSagaStateMachine")]),s("span",{pre:!0,attrs:{class:"token generic class-name"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("OrderStateMachine"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" OrderState"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("AzureTableRepository")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("endpointUri"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" r "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n           cfg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ConnectionFactory")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" cloudTable"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("The container extension will register the saga repository in the container. For more details on container configuration, review the "),s("RouterLink",{attrs:{to:"/usage/containers/"}},[t._v("container configuration")]),t._v(" section of the documentation.")],1),t._v(" "),s("p",[t._v("To configure the saga repository with a specific key formatter, use the code shown below with "),s("em",[t._v("KeyFormatter")]),t._v(" configuration extension.")]),t._v(" "),s("div",{staticClass:"language-cs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CloudTable")]),t._v(" cloudTable"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ncontainer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("AddMassTransit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cfg "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    cfg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token generic-method"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("AddSagaStateMachine")]),s("span",{pre:!0,attrs:{class:"token generic class-name"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("OrderStateMachine"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" OrderState"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("AzureTableRepository")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("endpointUri"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" r "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n           cfg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ConnectionFactory")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" cloudTable"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n           cfg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("KeyFormatter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("ConstRowSagaKeyFormatter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("OrderState"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token type-expression class-name"}},[t._v("OrderState")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("Unlike the default "),s("code",[t._v("ConstPartitionSagaKeyFormatter")]),t._v(", "),s("code",[t._v("ConstRowSagaKeyFormatter")]),t._v(" in this example uses "),s("code",[t._v("PartitionKey")]),t._v(" to store the correlationId which may benefit from "),s("a",{attrs:{href:"https://docs.microsoft.com/en-us/rest/api/storageservices/designing-a-scalable-partitioning-strategy-for-azure-table-storage#scalability",target:"_blank",rel:"noopener noreferrer"}},[t._v("scale-out capability of Tables"),s("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);a.default=e.exports}}]);