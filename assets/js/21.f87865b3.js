(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{462:function(t,s,e){"use strict";e.r(s);var n=e(25),a=Object(n.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"subscriptions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#subscriptions"}},[t._v("#")]),t._v(" Subscriptions")]),t._v(" "),e("p",[t._v("By default, routing slip events are published -- which means that any subscribed consumers will receive the events. While this is useful getting started, it can quickly get out of control as applications grow and multiple unrelated routing slips are used. To handle this, subscriptions were added (yes, added, because they weren't though of until we experienced this ourselves).")]),t._v(" "),e("p",[t._v("Subscriptions are added to the routing slip at the time it is built using the "),e("code",[t._v("RoutingSlipBuilder")]),t._v(".")]),t._v(" "),e("div",{staticClass:"language-csharp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-csharp"}},[e("code",[t._v("builder"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("AddSubscription")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("Uri")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rabbitmq://localhost/log-events"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    RoutingSlipEvents"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("All"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("This subscription would send all routing slip events to the specified endpoint. If the application only wanted specified events, the events can be selected by specifying the enumeration values for those events. For example, to only get the "),e("code",[t._v("RoutingSlipCompleted")]),t._v(" and "),e("code",[t._v("RoutingSlipFaulted")]),t._v(" events, the following code would be used.")]),t._v(" "),e("div",{staticClass:"language-csharp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-csharp"}},[e("code",[t._v("builder"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("AddSubscription")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("Uri")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rabbitmq://localhost/log-events"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    RoutingSlipEvents"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Completed "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" RoutingSlipEvents"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Faulted"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("It is also possible to tweak the content of the events to cut down on message size. For instance, by default, the "),e("code",[t._v("RoutingSlipCompleted")]),t._v(" event includes the variables from the routing slip. If the variables contained a large document, that document would be copied to the event. Eliminating the variables from the event would reduce the message size, thereby reducing the traffic on the message broker. To specify the contents of a routing slip event subscription, an additional argument is specified.")]),t._v(" "),e("div",{staticClass:"language-csharp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-csharp"}},[e("code",[t._v("builder"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("AddSubscription")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("Uri")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rabbitmq://localhost/log-events"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    RoutingSlipEvents"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Completed"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" RoutingSlipEventContents"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("None"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("This would send the "),e("code",[t._v("RoutingSlipCompleted")]),t._v(" event to the endpoint, without any of the variables be included (only the main properties of the event would be present).")]),t._v(" "),e("blockquote",[e("p",[t._v("Once a subscription is added to a routing slip, events are no longer published -- they are only sent to the addresses specified in the subscriptions. However, multiple subscriptions can be specified -- the endpoints just need to be known at the time the routing slip is built.")])]),t._v(" "),e("h2",{attrs:{id:"custom-events"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#custom-events"}},[t._v("#")]),t._v(" Custom events")]),t._v(" "),e("p",[t._v("It is also possible to specify a subscription with a custom event, a message that is created by the application developer. This makes it possible to create your own event types and publish them in response to routing slip events occurring. And this includes having the full context of a regular endpoint "),e("code",[t._v("Send")]),t._v(" so that any headers or context settings can be applied.")]),t._v(" "),e("p",[t._v("To create a custom event subscription, use the overload shown below.")]),t._v(" "),e("div",{staticClass:"language-csharp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-csharp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// first, define the event type in your assembly")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("OrderProcessingCompleted")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token return-type class-name"}},[t._v("Guid")]),t._v(" TrackingNumber "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token return-type class-name"}},[t._v("DateTime")]),t._v(" Timestamp "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token return-type class-name"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")])]),t._v(" OrderId "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token return-type class-name"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")])]),t._v(" OrderApproval "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// then, add the subscription with the custom properties")]),t._v("\nbuilder"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("AddSubscription")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("Uri")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rabbitmq://localhost/order-events"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    RoutingSlipEvents"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Completed"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    x "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" x"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token generic-method"}},[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Send")]),e("span",{pre:!0,attrs:{class:"token generic class-name"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("OrderProcessingCompleted"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        OrderId "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"BFG-9000"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        OrderApproval "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ComeGetSome"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("In the message contract above, there are four properties, but only two of them are specified. By default, the base "),e("code",[t._v("RoutingSlipCompleted")]),t._v(" event is created, and then the content of that event is "),e("em",[t._v("merged")]),t._v(" into the message created in the subscription. This ensures that the dynamic values, such as the "),e("code",[t._v("TrackingNumber")]),t._v(" and the "),e("code",[t._v("Timestamp")]),t._v(", which are present in the default event, are available in the custom event.")]),t._v(" "),e("p",[t._v("Custom events can also select with contents are merged with the custom event, using an additional method overload.")])])}),[],!1,null,null,null);s.default=a.exports}}]);