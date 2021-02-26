(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{454:function(e,t,s){"use strict";s.r(t);var a=s(26),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"durable-futures"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#durable-futures"}},[e._v("#")]),e._v(" Durable Futures")]),e._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#introduction"}},[e._v("Introduction")])]),s("li",[s("a",{attrs:{href:"#request-response"}},[e._v("Request, Response")])]),s("li",[s("a",{attrs:{href:"#task"}},[e._v("Task")])])])]),s("p"),e._v(" "),s("h2",{attrs:{id:"introduction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),s("p",[e._v("Durable Futures are a concept I've come up with to address the complexity inherent to a distributed, event-based architecture.")]),e._v(" "),s("p",[e._v("The concepts in this article are covered "),s("a",{attrs:{href:"https://youtube.com/playlist?list=PLx8uyNNs1ri2JeyDGFWfCYyAjOB1GP-t1",target:"_blank",rel:"noopener noreferrer"}},[e._v("in Season 3"),s("OutboundLink")],1),e._v(" of the "),s("a",{attrs:{href:"https://youtube.com/playlist?list=PLx8uyNNs1ri2MBx6BjPum5j9_MMdIfM9C",target:"_blank",rel:"noopener noreferrer"}},[e._v("MassTransit video series on YouTube"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("p",[e._v("The code exploring the concepts is "),s("a",{attrs:{href:"https://github.com/MassTransit/Sample-ForkJoint",target:"_blank",rel:"noopener noreferrer"}},[e._v("available on GitHub"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("h2",{attrs:{id:"request-response"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#request-response"}},[e._v("#")]),e._v(" Request, Response")]),e._v(" "),s("p",[e._v("One of the most understood concepts in software development is request/response. In the simplest form, call/return, this conversation pattern between a client and a service, is the most commonly used idiom in software development.")]),e._v(" "),s("div",{staticClass:"language-cs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")])]),e._v(" response "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" service"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("Method")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),s("p",[e._v("As programming languages have evolved, along with the common use of asynchronous programming models, remote procedure calls (RPC) via HTTP and other protocols, and message-based systems, the most understood pattern continues to be request/response.")]),e._v(" "),s("h4",{attrs:{id:"http-client"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-client"}},[e._v("#")]),e._v(" HTTP Client")]),e._v(" "),s("div",{staticClass:"language-cs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")])]),e._v(" responseMessage "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("await")]),e._v(" httpClient"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("GetAsync")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),s("h4",{attrs:{id:"masstransit-request-client"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#masstransit-request-client"}},[e._v("#")]),e._v(" MassTransit Request Client")]),e._v(" "),s("div",{staticClass:"language-cs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")])]),e._v(" response "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("await")]),e._v(" client"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token generic-method"}},[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("GetResponse")]),s("span",{pre:!0,attrs:{class:"token generic class-name"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("TResponse"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[e._v("Request")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),s("p",[e._v("In each of these examples, "),s("em",[e._v("await")]),e._v(" is a key enabler. Requests are sent asynchronously over a network connection to the remote service that produces a response which is then delivered to the client.")]),e._v(" "),s("p",[e._v("With HTTP, a connection is maintained by the client on which the response is sent. With MassTransit, a "),s("em",[e._v("requestId")]),e._v(" and "),s("em",[e._v("responseAddress")]),e._v(" passed to the service are used to send the response which is then read from the queue by the client bus and correlated back to the request.")]),e._v(" "),s("h2",{attrs:{id:"task"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#task"}},[e._v("#")]),e._v(" Task")]),e._v(" "),s("p",[e._v("The return type, "),s("code",[e._v("Task<T>")]),e._v(", is a C# language feature that represents a "),s("em",[e._v("future")]),e._v(". It's a reference type which means it is only accessible by reference. Since "),s("code",[e._v("Task<T>")]),e._v(" is a future, is promises to deliver at some point:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("T")]),e._v(" "),s("em",[e._v("(completed)")])]),e._v(" "),s("li",[e._v("An exception "),s("em",[e._v("(faulted)")])]),e._v(" "),s("li",[e._v("A task canceled exception "),s("em",[e._v("(canceled)")])])]),e._v(" "),s("p",[s("em",[e._v("I'm intentionally ignoring "),s("code",[e._v("ValueTask<T>")]),e._v(" for now. It behaves similarly but has a few restrictions, one of which being that it should only be evaluated once.")])]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("C#")]),e._v(" "),s("p",[e._v("Prior to the addition of "),s("code",[e._v("async")]),e._v(" and "),s("code",[e._v("await")]),e._v(", writing asynchronous code was significantly more complex. "),s("em",[e._v("Continuation passing")]),e._v(" was commonly used, resulting in deeply nested code that was difficult to understand and even more difficult to debug. Without a doubt, "),s("code",[e._v("async")]),e._v(" and "),s("code",[e._v("await")]),e._v(" are two of the best keywords in C#.")])])])}),[],!1,null,null,null);t.default=n.exports}}]);