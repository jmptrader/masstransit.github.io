(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{421:function(e,t,s){"use strict";s.r(t);var a=s(25),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"what-does-masstransit-add-to-the-transport"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-does-masstransit-add-to-the-transport"}},[e._v("#")]),e._v(" What does MassTransit add to the transport?")]),e._v(" "),s("p",[e._v("MassTransit is a lightweight service bus for building distributed .NET applications. The main goal is to provide\na consistent, .NET friendly abstraction over the message transport (whether it is RabbitMQ, Azure Service Bus, etc.).\nTo meet this goal, MassTransit brings a lot of the application-specific logic closer to the developer in an easy to\nconfigure and understand manner.")]),e._v(" "),s("p",[e._v("The benefits of using MassTransit over the message transport, as opposed to using the raw transport APIs and building\neverything from scratch, are shown below. These are just a few, and some are more significant than others. The fact\nthat the hosting of your consumers, handlers, sagas, etc. are all managed consistently with a well documented\nproduction ready framework is the biggest advantage. You can also find numerous blog posts, podcasts, and articles\nwritten about MassTransit online.")]),e._v(" "),s("h3",{attrs:{id:"concurrency"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#concurrency"}},[e._v("#")]),e._v(" Concurrency")]),e._v(" "),s("p",[e._v("Concurrent, asynchronous message consumers for maximum receive throughput and high server utilization.")]),e._v(" "),s("h3",{attrs:{id:"connection-management"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#connection-management"}},[e._v("#")]),e._v(" Connection management")]),e._v(" "),s("p",[e._v("The network is unreliable. If the application is disconnected from the message broker, MassTransit takes care of\nreconnecting and making sure all of the exchanges, queues, and bindings are restored.")]),e._v(" "),s("h3",{attrs:{id:"exception-retries-and-poison-messages"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#exception-retries-and-poison-messages"}},[e._v("#")]),e._v(" Exception, retries, and poison messages")]),e._v(" "),s("p",[e._v("Your message consumers don't need to know about broker acknowledgement protocols. If your message consumer runs to\ncompletion, the message is acknowledged and removed from the queue. If you throw an exception, MassTransit uses a\nretry policy to redeliver the message to the consumer. If the retries are exhausted due to continued failures or\nother reasons, MassTransit moves the message to an error queue. If the message did not reach a consumer due to being\nmisrouted to the queue, the message is moved to a skipped queue.")]),e._v(" "),s("h3",{attrs:{id:"serialization"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#serialization"}},[e._v("#")]),e._v(" Serialization")]),e._v(" "),s("p",[e._v("C# is a statically typed language, and developers work with types. RabbitMQ works with bytes. So how do you format\na message over the wire? How do you handle different date/time formats (local, UTC, unspecified)? How do you deal\nwith numbers, are they integers, longs, or decimals? MassTransit has already thought about this and implemented\nsensible defaults for you. And there are many serializers provided out of the box, including JSON, BSON, and XML as\nwell as the .NET binary formatter as a last resort.")]),e._v(" "),s("p",[e._v("You can even protect your messages using AES-256 encryption, to keep prying eyes away and to ensure the safety of\nprivate information (to meet PCI or HIPAA requirements).")]),e._v(" "),s("h3",{attrs:{id:"message-header-and-correlation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#message-header-and-correlation"}},[e._v("#")]),e._v(" Message header and correlation")]),e._v(" "),s("p",[e._v("Designing a common message envelope can be a nitty-gritty affair until things stabilize. And MassTransit is already\nstable having been used in production since 2008. The format is "),s("RouterLink",{attrs:{to:"/advanced/interoperability.html"}},[e._v("well documented")]),e._v("\nand has been tested with billions of messages. Furthermore, the envelope includes headers for tracking messages,\nincluding conversations, correlations, and requests. The address and host information in the envelope make it easy to\nbuild any messaging pattern.")],1),e._v(" "),s("h3",{attrs:{id:"consumer-lifecycle-management"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#consumer-lifecycle-management"}},[e._v("#")]),e._v(" Consumer lifecycle management")]),e._v(" "),s("p",[e._v("MassTransit handles consumer creation and disposal, and integrates with most major dependency injection containers\nusing their built-in lifetime scope management. This ensures that dependencies are created and destroyed as part of\nthe message consumption pipeline.")]),e._v(" "),s("h3",{attrs:{id:"routing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#routing"}},[e._v("#")]),e._v(" Routing")]),e._v(" "),s("p",[e._v("MassTransit provides a heavily production tested convention for using RabbitMQ exchanges to route published messages\nto the subscribed consumers. The structure is CPU and memory friendly, which keeps RabbitMQ happy.")]),e._v(" "),s("h3",{attrs:{id:"rx-integration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rx-integration"}},[e._v("#")]),e._v(" Rx integration")]),e._v(" "),s("p",[e._v("Interested in or already using Reactive Extensions? MassTransit makes it easy to connect Rx to RabbitMQ.")]),e._v(" "),s("h3",{attrs:{id:"unit-testing-made-easy"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#unit-testing-made-easy"}},[e._v("#")]),e._v(" Unit testing made easy")]),e._v(" "),s("p",[e._v("One of the first rules of unit testing is to avoid hitting infrastructure. And RabbitMQ is just that. MassTransit\nincludes a high-performance in-memory transport for testing every consumer using the same code that would be used\nin production. And the MassTransit.TestFramework NuGet package includes test harnesses\nthat handle the setup and teardown of the bus so you can easily test your message consumers and sagas.")]),e._v(" "),s("h3",{attrs:{id:"sagas"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sagas"}},[e._v("#")]),e._v(" Sagas")]),e._v(" "),s("p",[e._v("Sagas are a powerful abstraction that supports message orchestration with durable state. Whether you use the original\nsomewhat explicit syntax, or the powerful state machine syntax of "),s("strong",[e._v("Automatonymous")]),e._v(", you can build highly available\ndistributed workflow and coordination services easily. MassTransit supports both Entity Framework and NHibernate, using\ncode-based mapping and migrations to simply code deployments and upgrades.")]),e._v(" "),s("h3",{attrs:{id:"scheduling"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#scheduling"}},[e._v("#")]),e._v(" Scheduling")]),e._v(" "),s("p",[e._v("MassTransit has strong integration with Quartz.NET, to make it easy to schedule messages for future delivery. This brings\ndistributed applications into the fourth dimension, making time a first-class citizen. Some incredibly powerful routing\nsystems have been built by the authors using Quartz in combination with other MassTransit features.")]),e._v(" "),s("p",[e._v("There are also other scheduling providers that are supported by MassTransit, such as RabbitMQ deferred messages and\nAzure Service Bus scheduled enqueueing.")]),e._v(" "),s("h3",{attrs:{id:"monitoring-performance-counters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#monitoring-performance-counters"}},[e._v("#")]),e._v(" Monitoring performance counters")]),e._v(" "),s("p",[e._v("Keeping an eye on your services performance is critical, and having the right tools is a huge plus. MassTransit updates\na range of performance counters as messages are processed so operations can keep an eye on message flow and compare\nthe throughput to that of RabbitMQ.")])])}),[],!1,null,null,null);t.default=n.exports}}]);