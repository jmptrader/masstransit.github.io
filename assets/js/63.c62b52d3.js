(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{448:function(e,t,o){"use strict";o.r(t);var s=o(26),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"history"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#history"}},[e._v("#")]),e._v(" History")]),e._v(" "),o("p",[e._v("A commonly asked question is why was MassTransit created. Well, here is the story.")]),e._v(" "),o("p",[e._v("In 2007, Chris Patterson (@phatboyg) and Dru Sellers (@drusellers) met at the first ALT.NET conference in Austin, TX. It was at this conference that Chris and Dru not only realized that they had a lot of the same problems to solve, but also how much the standard tooling provided by Microsoft just didn't fit their needs. Surrounded by the best and brightest in .NET, the energy was there to build better tooling that supported testable processes. Combined with an awareness of the latest advances in tooling, libraries, and coding practices; they decided that a better option must exist. After searching the .NET ecosystem for a tool that would help them achieve their goals, the only real option was the venerable NServiceBus. After reviewing NServiceBus, it was determined that the only real dependency injection container supported was Spring.NET. It also became obvious that NServiceBus wasn't quite ready for external contributors to come on board. For these reasons, they decided to embark on the quixotic trek of building their own service bus (seriously, how hard could it be?? LOL).")]),e._v(" "),o("p",[e._v("Initially the goals were as much about learning distributed message based systems, as well as building something both of their companies could use. The first commit was pushed to GoogleCode on 12/26/2007, and shortly there after both Dru and Chris went to production with MassTransit and both of their companies have had success in getting value out of their efforts.")]),e._v(" "),o("p",[e._v("After four years of continued success, Chris and Dru continued to push forward on their Journey, and were joined by Travis Smith (@TravisTheTechie). The near future should bring much for the MassTransit community as RabbitMQ became the broker of choice, lessening the focus on MSMQ.")]),e._v(" "),o("p",[e._v("In early 2014, after a few years of research and design, work was started on an entirely new MassTransit. In order to embrace the world of asynchronous programming, as well as leveraging the power of advanced messaging platforms like RabbitMQ, a foundational rewrite was required. Much of the code in MassTransit was written prior to the introduction of the Task Parallel Library (or TPL), and even the .NET 4.0 support was before async and await were added to the language.")]),e._v(" "),o("p",[e._v("To eliminate a ton of extremely complex code, support for MSMQ was completely ripped out, including all of the routing support that had to be built because of MSMQ’s lack of message routing. The remaining code was rewritten from bottom to top, resulting in an entirely new, completely asynchronous, and highly optimized framework for message processing.")]),e._v(" "),o("h2",{attrs:{id:"the-philosophy"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#the-philosophy"}},[e._v("#")]),e._v(" The philosophy")]),e._v(" "),o("p",[e._v("First and foremost, we are not an Enterprise Service Bus (ESB). While MassTransit is used in several enterprises it isn’t a swiss army knife, we are not driven by sales to be a million features wide, and an inch deep. We focus on a few key concepts and try to make them as robust as possible.")]),e._v(" "),o("p",[e._v("We don’t do doodleware, you won’t find a designer, we are all about the keyboard samurai, the true in-the-trenches coder. That’s who we are, and those are our friends. If you want to draw, use a white board.")]),e._v(" "),o("p",[e._v("We don’t do FTP->WS-deathstar->BS (not that you can’t, it just isn't in the box). We focus on the experience of using one transport in a given environment, and we try to make it as smooth as possible.")]),e._v(" "),o("p",[e._v("MassTransit is built to be used inside the firewall, it isn't built to be used as a means to communicate with external vendors (it can be, again it just isn't in the box), it's meant to be used for getting your corporate services talking to each other and making building internal software easier.")])])}),[],!1,null,null,null);t.default=a.exports}}]);