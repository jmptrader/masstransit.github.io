(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{425:function(e,t,s){"use strict";s.r(t);var a=s(25),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"common-mistakes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#common-mistakes"}},[e._v("#")]),e._v(" Common Mistakes")]),e._v(" "),s("p",[e._v("Over the years, there are certain concepts that can be confusing and lead to questions for developers new to MassTransit (or message-based asynchronous programming). A few of the common mistakes, issues, and gotchas are described below.")]),e._v(" "),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[e._v("Have you started the bus?")]),e._v(" "),s("p",[e._v("Seriously, this is so common it's worth repeating at the top of every page. If you are seeing messages not being consumed, or responses timing out on request, or anything that feels weird, make sure you are calling "),s("code",[e._v("Start")]),e._v(" or "),s("code",[e._v("StartAsync")]),e._v(" on the "),s("code",[e._v("IBusControl")]),e._v(".")])]),e._v(" "),s("h3",{attrs:{id:"sharing-a-queue"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sharing-a-queue"}},[e._v("#")]),e._v(" Sharing a queue")]),e._v(" "),s("blockquote",[s("p",[e._v("While a common mistake in MassTransit 2.x, the new receive endpoint syntax of MassTransit 3 should make it easier to recognize that queue names should not be shared.")])]),e._v(" "),s("p",[e._v("Each receive endpoint needs to have a unique queue name! If multiple receive endpoints are created,\neach should have a different queue name so that messages are not skipped.")]),e._v(" "),s("p",[e._v("If two receive endpoints share the same queue name, yet have different consumers subscribed, messages\nwhich are received by one endpoint but meant for the other will be moved to the "),s("em",[e._v("skipped")]),e._v(" queue. It\nwould be like sharing a mailbox with your neighbor, sometimes you get all the mail, sometimes they\nget all the mail.")]),e._v(" "),s("h3",{attrs:{id:"send-publish-only"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#send-publish-only"}},[e._v("#")]),e._v(" Send/Publish Only")]),e._v(" "),s("p",[e._v("When creating a bus instance only to send or publish messages, it must be started. Failure to start the bus can lead to some strange side effects. Every bus, even ones without receive endpoints, must be started (and eventually stopped).")]),e._v(" "),s("h3",{attrs:{id:"how-do-i-load-balance-consumers-across-machines"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-do-i-load-balance-consumers-across-machines"}},[e._v("#")]),e._v(" How do I load balance consumers across machines?")]),e._v(" "),s("p",[e._v("To load balance consumers, the process with the receive endpoint can be hosted on multiple servers.\nAs long as each receive endpoint has the same consumers registered, the messages will be received\nby the first available consumer across all of the machines.")]),e._v(" "),s("h4",{attrs:{id:"what-links-two-bus-instances-together"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-links-two-bus-instances-together"}},[e._v("#")]),e._v(" What links two bus instances together?")]),e._v(" "),s("p",[e._v("This is a common question. The binding element, really is the\nmessage contract. If you want message A, then you subscribe to\nmessage A. The internals of MT wires it all together.")]),e._v(" "),s("h3",{attrs:{id:"why-aren-t-queue-message-priorities-supported"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#why-aren-t-queue-message-priorities-supported"}},[e._v("#")]),e._v(" Why aren't queue / message priorities supported?")]),e._v(" "),s("p",[e._v("Message Priorities are used to allow a message to jump to the front\nof the line. When people ask for this feature they usually have multiple\ntypes of messages all being delivered to the same queue. The problem\nis that each message has a different SLA (usually the one with the\nshorter time window is the one getting the priority flag). The problem\nis that w/o priorities the important message gets stuck behind the\nless important/urgent ones.")]),e._v(" "),s("p",[e._v("The solution is to stop sharing a single queue, and instead establish\na second queue. In MassTransit you would establish a second instance\nof IServiceBus and have it subscribe to the important/urgent\nmessage. Now you have two queues, one for the important things and one\nfor the less urgent things. This helps with monitoring queue depths,\nerror rates, etc. By placing each IServiceBus in its own Topshelf host\n/ process you further enhance each bus's ability to process messages, and\nisolate issues / downtime.")]),e._v(" "),s("h4",{attrs:{id:"request-client-throws-a-timeout-exception"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#request-client-throws-a-timeout-exception"}},[e._v("#")]),e._v(" Request client throws a timeout exception")]),e._v(" "),s("p",[e._v("MassTransit uses a temporary non-durable queue and has a consumer to handle responses. This temporary queue only get configured and created when you "),s("em",[e._v("start the bus")]),e._v(". If you forget to start the bus in your application code, the request client will fail with a timeout, waiting for a response.")]),e._v(" "),s("h4",{attrs:{id:"reading"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reading"}},[e._v("#")]),e._v(" Reading")]),e._v(" "),s("p",[e._v("http://lostechies.com/jimmybogard/2010/11/18/queues-are-still-queues/")]),e._v(" "),s("h3",{attrs:{id:"i-want-to-know-if-another-bus-is-subscribed-to-my-message"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#i-want-to-know-if-another-bus-is-subscribed-to-my-message"}},[e._v("#")]),e._v(" I want to know if another bus is subscribed to my message.")]),e._v(" "),s("blockquote",[s("p",[e._v("So, if you try to program this way, you're going to have a bad time. 😉")])]),e._v(" "),s("p",[e._v("Knowing that you have a subscriber is not the concern of your application.\nIt is something the system architect should know, but not the application.\nMost likely, we just need to introduce all of the states in our protocol\nmore explicitly, by using a Saga.")])])}),[],!1,null,null,null);t.default=o.exports}}]);