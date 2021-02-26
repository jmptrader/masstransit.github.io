(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{325:function(e,t,s){"use strict";var a=0;function r(e){if(!a){var t=document.createElement("script");t.setAttribute("src",e),document.body.appendChild(t),a=new Promise((function(e){t.onload=function(){e(window.twttr)}}))}return a}var n={id:{type:String,required:!0},sourceType:{type:String},slug:{type:String},options:Object};e.exports={addPlatformScript:r,twitterEmbedComponent:function(e){return{data:function(){return{isLoaded:!1,isAvailable:!1}},props:Object.assign({},n,e.props),mounted:function(){var t,s=this;t="profile"===this.sourceType?{sourceType:this.sourceType,screenName:this.id}:"list"===this.sourceType?{sourceType:this.sourceType,ownerScreenName:this.id,slug:this.slug}:this.id,Promise.resolve(window.twttr?window.twttr:r("//platform.twitter.com/widgets.js")).then((function(a){return e.embedComponent(a,t,s.$el,s.options)})).then((function(e){s.isAvailable=void 0!==e,s.isLoaded=!0}))},render:function(e){if(this.isLoaded&&this.isAvailable)return e("div",{class:this.$props.widgetClass});if(this.isLoaded&&!this.isAvailable&&this.$props.errorMessage){var t=e("div",{class:this.$props.errorMessageClass,domProps:{innerHTML:this.$props.errorMessage}});return e("div",[t])}return e("div",{class:this.$props.widgetClass},this.$slots.default)}}}}},380:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Tweet",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"Moment",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"Timeline",{enumerable:!0,get:function(){return n.default}});var a=o(s(381)),r=o(s(382)),n=o(s(383));function o(e){return e&&e.__esModule?e:{default:e}}},381:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=(0,s(325).twitterEmbedComponent)({embedComponent:function(e){for(var t,s=arguments.length,a=new Array(s>1?s-1:0),r=1;r<s;r++)a[r-1]=arguments[r];return(t=e.widgets).createTweetEmbed.apply(t,a)},props:{errorMessage:{type:String,default:"Whoops! We couldn't access this Tweet."},errorMessageClass:{type:String,required:!1},widgetClass:{type:String,required:!1}}});t.default=a},382:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=(0,s(325).twitterEmbedComponent)({embedComponent:function(e){for(var t,s=arguments.length,a=new Array(s>1?s-1:0),r=1;r<s;r++)a[r-1]=arguments[r];return(t=e.widgets).createMoment.apply(t,a)},props:{errorMessage:{type:String,default:"Whoops! We couldn't access this Moment."},errorMessageClass:{type:String,required:!1},widgetClass:{type:String,required:!1}}});t.default=a},383:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=(0,s(325).twitterEmbedComponent)({embedComponent:function(e){for(var t,s=arguments.length,a=new Array(s>1?s-1:0),r=1;r<s;r++)a[r-1]=arguments[r];return(t=e.widgets).createTimeline.apply(t,a)},props:{errorMessage:{type:String,default:"Whoops! We couldn't access this Timeline."},errorMessageClass:{type:String,required:!1},widgetClass:{type:String,required:!1}}});t.default=a},391:function(e,t,s){"use strict";s.r(t);var a={components:{Tweet:s(380).Tweet}},r=s(26),n=Object(r.a)(a,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"in-memory-outbox-take-out-the-trash"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#in-memory-outbox-take-out-the-trash"}},[e._v("#")]),e._v(" In-Memory Outbox, Take out the Trash")]),e._v(" "),s("p",[e._v("This post details the "),s("em",[e._v("In-Memory Outbox")]),e._v(", including what it does, how to configure it, and how it ensures eventual consistency in the presence of database or message transport failures.")]),e._v(" "),s("p",[e._v("MassTransit implements messaging patterns, many of which are designed to ease the transition from a tightly-coupled, database-centric application to a set of services that are highly available, reliable, and eventually consistent. Some of these patterns are obvious, but some of them require a little more explanation to truly understand how they are best utilized.")]),e._v(" "),s("h3",{attrs:{id:"commands"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#commands"}},[e._v("#")]),e._v(" Commands")]),e._v(" "),s("p",[e._v("Commands are used to do things, like update a database record. Updating a database record usually includes publishing events to notify services that a change in state has occurred.")]),e._v(" "),s("p",[e._v("In a transactional mindset, updating the database and publishing the event is expected to be performed as a single atomic operation. In distributed systems, performing a distributed transaction between the database and the message broker is unrealistic.")]),e._v(" "),s("h3",{attrs:{id:"sagas"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sagas"}},[e._v("#")]),e._v(" Sagas")]),e._v(" "),s("p",[e._v("In MassTransit, sagas are message handlers that maintain state. An initial message creates a saga "),s("em",[e._v("instance")]),e._v(" and subsequent messages may correlate to the same instance. Between messages, the saga instance "),s("em",[e._v("state")]),e._v(" is persisted using a database. While consuming a message, a saga may send commands and/or publish events.")]),e._v(" "),s("p",[e._v("The message flow for a saga includes:")]),e._v(" "),s("ol",[s("li",[e._v("On message receipt, an existing saga instance is loaded from the database. If a matching instance does not exist, a new instance is created.")]),e._v(" "),s("li",[e._v("The message is delivered to the saga instance.")]),e._v(" "),s("li",[e._v("Once the message is handled, the saga instance is saved or updated in the database.")])]),e._v(" "),s("p",[e._v("Step 2 is where "),s("em",[e._v("the magic happens")]),e._v(". The state can be changed, messages can be sent and published, anything.")]),e._v(" "),s("p",[e._v("So, what's the problem? A few things.")]),e._v(" "),s("h4",{attrs:{id:"failures"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#failures"}},[e._v("#")]),e._v(" Failures")]),e._v(" "),s("p",[e._v("An obvious problem is a database failure saving the saga instance. If messages were already sent or published, and the instance was not saved, other services would receive those messages yet the database has not been updated.")]),e._v(" "),s("p",[e._v("A race condition is another concern, since the events may be consumed before the database update is complete. Yes, message brokers are "),s("em",[e._v("fast")]),e._v(", and many times messages are already being consumed long before (in computer time) the database update is started.")]),e._v(" "),s("h5",{attrs:{id:"so-retry"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#so-retry"}},[e._v("#")]),e._v(" So, retry?")]),e._v(" "),s("p",[e._v("Retrying operations is a key trait of a resilient system. Transient failures happen, even more so in distributed systems, so it makes sense to retry failures in the presence of failures. Of course, not all failures are transient. For instance, trying to take out the trash when it has already been taken out isn't possible (well, until tomorrow).")]),e._v(" "),s("blockquote",[s("p",[e._v("In this example, designing idempotent services such that duplicate commands do not result in duplicate operations would be the best solution. But that's another topic worth studying.")])]),e._v(" "),s("p",[e._v("If retrying the database failure isn't enough, it may make sense to retry the entire message processing sequence – starting at step 1. In this case, the saga instance is discarded, and the message is retried from the beginning. The saga instance is loaded (or created), the message is delivered, and the instance is saved. This is repeated until it is successful or until the retry policy expires and the message is moved to the "),s("em",[e._v("_error")]),e._v(" queue.")]),e._v(" "),s("blockquote",[s("p",[e._v("Because it's bad. Study "),s("em",[e._v("poison message handling")]),e._v(".")])]),e._v(" "),s("p",[e._v("A new retry-related issue is duplicate messages. Messages may be sent or published multiple times – once for each attempt. This can create non-deterministic behavior in services that consume those messages. Therefore, a method to delay messages from being sent until the saga instance is saved is needed.")]),e._v(" "),s("h3",{attrs:{id:"the-outbox"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#the-outbox"}},[e._v("#")]),e._v(" The Outbox")]),e._v(" "),s("p",[e._v("The outbox holds messages and delivers them after the "),s("em",[e._v("transactional")]),e._v(" portion of the message processing has completed. With a saga, the messages are delivered after the saga instance is saved successfully. This ensures that the database is updated before any consumers can start processing any of the produced messages.")]),e._v(" "),s("h4",{attrs:{id:"the-in-memory-outbox"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#the-in-memory-outbox"}},[e._v("#")]),e._v(" The In-Memory Outbox")]),e._v(" "),s("p",[e._v("The In-Memory Outbox, a feature included with MassTransit, holds published and sent messages in memory until the message is processed successfully (such as the saga being saved to the database). Once the received message has been processed, the message is delivered to the broker and the received message is acknowledged as successful.")]),e._v(" "),s("blockquote",[s("p",[e._v("MassTransit consumes messages in "),s("em",[e._v("acknowledgement")]),e._v(" mode. The broker locks the message and the message is invisible to other consumers until it is either acknowledged (ack'd) by the consumer or negatively-acknowledged (n'ack'd) explictly by the consumer or implicitly due to a service or network failure.")])]),e._v(" "),s("p",[e._v("The full configuration is in the "),s("RouterLink",{attrs:{to:"/usage/exceptions.html#redelivery"}},[e._v("documentation")]),e._v(", a simple example is shown below.")],1),e._v(" "),s("div",{staticClass:"language-cs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cs"}},[s("code",[e._v("cfg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("ReceiveEndpoint")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"r-trashy-saga"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" e "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=>")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("UseInMemoryOutbox")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n    e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token generic-method"}},[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("StateMachineSaga")]),s("span",{pre:!0,attrs:{class:"token generic class-name"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("TrashStateMachine"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" TrashState"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("machine"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" repository"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),s("blockquote",[s("p",[e._v("In the example above, retry and redelivery was left out on purpose. The broker will redeliver the message if the process crashes or the network splits. For production services, retry filters should be added to handle transient database errors and ignore failures caused by business constraint violations.")])]),e._v(" "),s("h4",{attrs:{id:"but-what-if-the-message-doesn-t-send"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#but-what-if-the-message-doesn-t-send"}},[e._v("#")]),e._v(" But what if the message doesn't send?")]),e._v(" "),s("p",[e._v("This question comes up, and it is a fair question. If the broker goes down, the outbox would be unable to deliver the messages. If the process crashes, the messages in the outbox would be lost. Both of these failures can happen, though it is rare. And if computer science has one rule, it is that the rare will always happen. In production. On a Friday afternoon.")]),e._v(" "),s("h3",{attrs:{id:"time-to-take-out-the-trash"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#time-to-take-out-the-trash"}},[e._v("#")]),e._v(" Time to Take out the Trash")]),e._v(" "),s("p",[e._v("Imagine you're twelve, sitting on the sofa, playing video games with your friends. Suddenly, from the other room, you hear your mom call out, \"Take out the trash!\" Of course, you're in the middle of a battle, and while you've explained many times that you can't pause a multiplayer game, mom just doesn't get it. So you do what any 12-year-old does, you ignore her. The trash remains right where it is, in the kitchen.")]),e._v(" "),s("p",[e._v('After a while, the lack of a door opening and closing, the still present smell of burnt popcorn from the kitchen, and your mom calls out again, "Take out the trash." At this point, you\'re dead, in spectator mode, and decide to comply – you take out the trash. Then you slide back onto the sofa and get ready for round two.')]),e._v(" "),s("p",[e._v('More time passes, the squad is ready and you\'re about to get on the bus. Your mom, however, didn\'t hear from you and shouts once more, "I said take out the trash." "Mom, I already took it out" you reply, realizing after that you forgot to mute your mic. The jests and jokes commence as you thank the bus driver and head out.')]),e._v(" "),s("h4",{attrs:{id:"the-story"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#the-story"}},[e._v("#")]),e._v(" The Story")]),e._v(" "),s("p",[e._v("This real-world example includes both failures scenarios that are brought up when considering the in-memory outbox.")]),e._v(" "),s("p",[e._v("First, it didn't happen. The database may have been unavailable or the service crashed deserializing the message. Either way, it failed. And the message? It's still on the broker. It will be redelivered. "),s("em",[e._v("Mom will keep telling you to take out the trash until you take it out.")])]),e._v(" "),s("p",[e._v("Second, it happened but the messages were not delivered. "),s("em",[e._v("You didn't tell her you took it out.")]),e._v(" In this case, the message will also be retried. But in this case, this rare case, this is where the previously mentioned term "),s("em",[e._v("idempotence")]),e._v(" comes back onto the field.")]),e._v(" "),s("p",[e._v("When the message is attempted a third time (and face it, the third time is dangerously close to getting a chancla to the head), the database was already updated. The invoice is already approved, "),s("em",[e._v("in the database")]),e._v(". The messages weren't sent, however, so other services may not know that the invoice was approved. In this case, for the service to be idempotent, it should assume that:")]),e._v(" "),s("ol",[s("li",[e._v("The message delivery failed because it is being delivered – again.")]),e._v(" "),s("li",[e._v("Since the invoice is approved, and this is the approve invoice command, something must have failed after the database was updated.")]),e._v(" "),s("li",[e._v("The only thing after the database update is the outbox delivering messages.")])]),e._v(" "),s("blockquote",[s("p",[e._v("Study Occam's Razer (okay, yeah, I'm a fan of Razer gaming gear so I'm leaving it spelled that way)")])]),e._v(" "),s("p",[e._v("The correct thing to do at this point is to use the state in the database, along with any information that is contained in the message, to produce the same commands and events that were produced in the previous attempt. Those messages will be delivered by the outbox, and the message will be acknowledged.")]),e._v(" "),s("h4",{attrs:{id:"victory"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#victory"}},[e._v("#")]),e._v(" !! Victory !!")]),e._v(" "),s("p",[e._v("That's it, an easy-to-use, reliable solution to perform atomic operations that update a database and send/publish messages, and it works for any database updates that are sent as commands (delivered by durable message queues).")]),e._v(" "),s("p",[e._v("And a big thank you to Jimmy Bogard, who's tweet prompted me to write this article!")]),e._v(" "),s("Tweet",{attrs:{id:"1225424085498417153",options:{theme:"dark",dnt:"true"}}}),e._v(" "),s("h5",{attrs:{id:"other-reading"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#other-reading"}},[e._v("#")]),e._v(" Other Reading")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://microservices.io/patterns/data/transactional-outbox.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Transactional Outbox"),s("OutboundLink")],1),e._v(" "),s("a",{attrs:{href:"https://docs.particular.net/nservicebus/outbox/",target:"_blank",rel:"noopener noreferrer"}},[e._v("NServiceBus Outbox"),s("OutboundLink")],1)])],1)}),[],!1,null,null,null);t.default=n.exports}}]);