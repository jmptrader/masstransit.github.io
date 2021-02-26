(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{450:function(t,s,a){"use strict";a.r(s);var n=a(26),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"nservicebus"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nservicebus"}},[t._v("#")]),t._v(" NServiceBus")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://particular.net/nservicebus",target:"_blank",rel:"noopener noreferrer"}},[t._v("NServiceBus"),a("OutboundLink")],1),t._v(" is a commercial .NET messaging and workflow solution.")]),t._v(" "),a("h3",{attrs:{id:"interoperability"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#interoperability"}},[t._v("#")]),t._v(" Interoperability")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://nuget.org/packages/MassTransit.Interop.NServiceBus/",target:"_blank",rel:"noopener noreferrer"}},[t._v("MassTransit.Interop.NServiceBus"),a("OutboundLink")],1)])]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("This package was built using a black box, clean room approach based on observed message formats within the message broker. As such, there may be edge cases and situations which are not handled by this package. Extensive testing is recommended to ensure all message properties are being properly interpreted.")])]),t._v(" "),a("p",[t._v("MassTransit has limited message exchange support with NServiceBus, tested with the formats and configurations listed below.")]),t._v(" "),a("h3",{attrs:{id:"supported-serialization-formats"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#supported-serialization-formats"}},[t._v("#")]),t._v(" Supported Serialization Formats")]),t._v(" "),a("ul",[a("li",[t._v("JSON (Newtonsoft)")]),t._v(" "),a("li",[t._v("XML")])]),t._v(" "),a("h3",{attrs:{id:"header-support"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#header-support"}},[t._v("#")]),t._v(" Header Support")]),t._v(" "),a("p",[t._v("MassTransit delivers messages to consumers using "),a("code",[t._v("ConsumeContext<TMessage>")]),t._v(", which includes various header properties. From looking at the transport message format, headers are serialized outside of the message body. To support access to these headers in MassTransit, the transport headers are mapped as shown.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Property")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Header Used")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Out")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Notes")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("ContentType")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("NServiceBus.ContentType")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("ConversationId")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("NServiceBus.ConversationId")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("CorrelationId")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("NServiceBus.CorrelationId")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("MessageId")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("NServiceBus.MessageId")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("SourceAddress")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("NServiceBus.OriginatingEndpoint")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("formatted as "),a("code",[t._v("queue:name")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("ResponseAddress")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("NServiceBus.ReplyToAddress")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("formatted as "),a("code",[t._v("queue:name")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("SentTime")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("NServiceBus.TimeSent")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Host.MachineName")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("NServiceBus.OriginatingMachine")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Host.MassTransitVersion")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("NServiceBus.Version")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("N")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("translated to NServiceBus x.x.x")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Supported Message Types")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("NServiceBus.EnclosedMessageTypes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("converted from AssemblyQualifiedName, types must be resolvable via Type.GetType()")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("NServiceBus.MessageIntent")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("N")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Ignored")])])])]),t._v(" "),a("h3",{attrs:{id:"rabbitmq"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rabbitmq"}},[t._v("#")]),t._v(" RabbitMQ")]),t._v(" "),a("p",[t._v("NServiceBus follows the same broker topology conventions established by MassTransit. This means exchange names should be the same, which means that publish/subsribe with receive endpoints should work as expected.")]),t._v(" "),a("p",[t._v("RabbitMQ was tested using the following NServiceBus configuration:")]),t._v(" "),a("div",{staticClass:"language-cs extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cs"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" endpointConfiguration "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("EndpointConfiguration")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Gateway.Producer"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nendpointConfiguration"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token generic-method"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("UseSerialization")]),a("span",{pre:!0,attrs:{class:"token generic class-name"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("NewtonsoftSerializer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nendpointConfiguration"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("EnableInstallers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" transport "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" endpointConfiguration"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token generic-method"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("UseTransport")]),a("span",{pre:!0,attrs:{class:"token generic class-name"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("RabbitMQTransport"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ntransport"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("UseConventionalRoutingTopology")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ntransport"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ConnectionString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"host=localhost"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Two message contracts were created:")]),t._v(" "),a("div",{staticClass:"language-cs extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cs"}},[a("code",[t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ClockUpdated")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token type-list"}},[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IEvent")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token return-type class-name"}},[t._v("DateTime")]),t._v(" CurrentTime "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ClockSynchronized")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token type-list"}},[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IEvent")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token return-type class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")])]),t._v(" Host "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("From the NServiceBus endpoint, the "),a("code",[t._v("ClockUpdated")]),t._v(" message was published:")]),t._v(" "),a("div",{staticClass:"language-cs extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cs"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" session "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" _provider"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token generic-method"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetRequiredService")]),a("span",{pre:!0,attrs:{class:"token generic class-name"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("IMessageSession"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" session"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Publish")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("ClockUpdated")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("CurrentTime "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" DateTime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("UtcNow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("PublishOptions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("And the handler in NServiceBus for the "),a("code",[t._v("ClockSynchronized")]),t._v(" message:")]),t._v(" "),a("div",{staticClass:"language-cs extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cs"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ClockSynchronizedHandler")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token type-list"}},[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IHandleMessages"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ClockSynchronized"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("readonly")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ILogger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ClockSynchronizedHandler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" _logger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ClockSynchronizedHandler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ILogger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ClockSynchronizedHandler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" logger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        _logger "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" logger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token return-type class-name"}},[t._v("Task")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Handle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ClockSynchronized")]),t._v(" message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IMessageHandlerContext")]),t._v(" context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        _logger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("LogInformation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Clock synchronized: {Host}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Host"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Task"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CompletedTask"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("On the MassTransit side, the bus was configured to use the consumer with the same message contract assembly.")]),t._v(" "),a("div",{staticClass:"language-cs extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cs"}},[a("code",[t._v("services"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("AddMassTransit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token generic-method"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("AddConsumer")]),a("span",{pre:!0,attrs:{class:"token generic class-name"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("TimeConsumer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("UsingRabbitMq")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cfg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        cfg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("UseNServiceBusJsonSerializer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        cfg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ConfigureEndpoints")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("With the consumer:")]),t._v(" "),a("div",{staticClass:"language-cs extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cs"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TimeConsumer")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token type-list"}},[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IConsumer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ClockUpdated"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("readonly")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ILogger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("TimeConsumer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" _logger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("TimeConsumer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ILogger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("TimeConsumer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" logger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        _logger "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" logger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token return-type class-name"}},[t._v("Task")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Consume")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ConsumeContext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ClockUpdated"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        _logger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("LogInformation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Clock was updated: {CurrentTime}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CurrentTime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Publish")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("ClockSynchronized")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            Host "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" HostMetadataCache"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Host"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MachineName\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);