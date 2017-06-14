// Compiled by ClojureScript 1.9.562 {:static-fns true, :optimize-constants true}
goog.provide('paren.cmds');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('clojure.string');
goog.require('cljs.reader');
cljs.core.enable_console_print_BANG_();
paren.cmds.help_text = (function paren$cmds$help_text(_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pre,clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__14277){
var vec__14278 = p__14277;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14278,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14278,(1),null);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(v),cljs.core.cst$kw$desc))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(k),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\t"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(v),cljs.core.cst$kw$desc))].join('');
} else {
return null;
}
}),paren.cmds.dict)))], null);
});
paren.cmds.timer = (function paren$cmds$timer(delay,stop_QMARK_,cb){
if(cljs.core.not((stop_QMARK_.cljs$core$IFn$_invoke$arity$0 ? stop_QMARK_.cljs$core$IFn$_invoke$arity$0() : stop_QMARK_.call(null)))){
(cb.cljs$core$IFn$_invoke$arity$0 ? cb.cljs$core$IFn$_invoke$arity$0() : cb.call(null));
} else {
}

var G__14283 = (function (){
return (paren.cmds.timer.cljs$core$IFn$_invoke$arity$3 ? paren.cmds.timer.cljs$core$IFn$_invoke$arity$3(delay,stop_QMARK_,cb) : paren.cmds.timer.call(null,delay,stop_QMARK_,cb));
});
var G__14284 = delay;
return setTimeout(G__14283,G__14284);
});
paren.cmds.typewriter = (function paren$cmds$typewriter(p__14285){
var map__14293 = p__14285;
var map__14293__$1 = ((((!((map__14293 == null)))?((((map__14293.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14293.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14293):map__14293);
var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__14293__$1,cljs.core.cst$kw$delay,(50));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14293__$1,cljs.core.cst$kw$text);
var position = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var cur_text = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(text) : cljs.core.deref.call(null,text)));
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$component_DASH_did_DASH_mount,((function (position,cur_text,map__14293,map__14293__$1,delay,text){
return (function (){
var G__14295 = ((function (position,cur_text,map__14293,map__14293__$1,delay,text){
return (function (){
return paren.cmds.timer(delay,((function (position,cur_text,map__14293,map__14293__$1,delay,text){
return (function (){
return (cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cur_text) : cljs.core.deref.call(null,cur_text))) <= (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(position) : cljs.core.deref.call(null,position)));
});})(position,cur_text,map__14293,map__14293__$1,delay,text))
,((function (position,cur_text,map__14293,map__14293__$1,delay,text){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(position,cljs.core.inc);
});})(position,cur_text,map__14293,map__14293__$1,delay,text))
);
});})(position,cur_text,map__14293,map__14293__$1,delay,text))
;
return setTimeout(G__14295);
});})(position,cur_text,map__14293,map__14293__$1,delay,text))
,cljs.core.cst$kw$component_DASH_will_DASH_unmount,((function (position,cur_text,map__14293,map__14293__$1,delay,text){
return (function (){
var G__14296 = position;
var G__14297 = cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cur_text) : cljs.core.deref.call(null,cur_text)));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14296,G__14297) : cljs.core.reset_BANG_.call(null,G__14296,G__14297));
});})(position,cur_text,map__14293,map__14293__$1,delay,text))
,cljs.core.cst$kw$reagent_DASH_render,((function (position,cur_text,map__14293,map__14293__$1,delay,text){
return (function (){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cur_text) : cljs.core.deref.call(null,cur_text)),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(text) : cljs.core.deref.call(null,text)))){
var G__14298_14300 = cur_text;
var G__14299_14301 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(text) : cljs.core.deref.call(null,text));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14298_14300,G__14299_14301) : cljs.core.reset_BANG_.call(null,G__14298_14300,G__14299_14301));

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(position,(0)) : cljs.core.reset_BANG_.call(null,position,(0)));
} else {
}

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pre,cljs.core.subs.cljs$core$IFn$_invoke$arity$3((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cur_text) : cljs.core.deref.call(null,cur_text)),(0),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(position) : cljs.core.deref.call(null,position))),(((cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cur_text) : cljs.core.deref.call(null,cur_text))) < (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(position) : cljs.core.deref.call(null,position))))?"\u2588":"")], null);
});})(position,cur_text,map__14293,map__14293__$1,delay,text))
], null));
});
paren.cmds.random_bullshit = (function paren$cmds$random_bullshit(){
var bullshits = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/(# - ___-)/ Please don't break this website","Don't you think javascript is cool, Huh?","'hello world' is funnier than random typing.","Here is the deal. Join us or die!","\u7ADF\u7136\u4FFE\u4F60\u8FEB\u5230\u6211\u8981\u8B1B\u4E2D\u6587\u3002\u3002\u3002"], null);
return cljs.core.rand_nth(bullshits);
});
paren.cmds.init_state = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$terminal_DASH_color,cljs.core.cst$kw$social,cljs.core.cst$kw$events,cljs.core.cst$kw$history,cljs.core.cst$kw$terminal_DASH_bg,cljs.core.cst$kw$title,cljs.core.cst$kw$bullshit,cljs.core.cst$kw$subtitle,cljs.core.cst$kw$banner,cljs.core.cst$kw$long_DASH_desc],["#32cd32",new cljs.core.PersistentArrayMap(null, 2, ["Facebook","https://www.facebook.com/devbarcamp.hk/","Meetup","https://www.meetup.com/Dev-Barcamp/"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$date,"2016-10-08",cljs.core.cst$kw$time,"1:00-3:00",cljs.core.cst$kw$location,"Block A, 2/F, Hong Kong Industrial Building, 444-452 Des Voeux Road West, Hong Kong  "], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$date,"2017-07-08",cljs.core.cst$kw$time,"1:00-3:00",cljs.core.cst$kw$location,"Unit 05-07, 7/F, Block B, Chung Mei Centre, 15 Hing Yip Street, Kwun Tong, Kowloon, Hong Kong",cljs.core.cst$kw$gmap,"https://maps.google.com/maps?f=q&hl=en&q=15+Hing+Yip+Street%2C+Kwun+Tong%2C%2C+Kowloon%2C+hk",cljs.core.cst$kw$gmap_DASH_img,"https://maps.googleapis.com/maps/api/staticmap?key=AIzaSyDw_EVAIB36VOVoO-oJEX4RoQhG-JHQ8xY&center=Chung+Mei+Centre,+15+Hing+Yip+Street,+Kwun+Tong,+Kowloon,+Hong+Kong&zoom=16&scale=1&size=400x300&maptype=roadmap&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7Clabel:1%7CChung+Mei+Centre,+15+Hing+Yip+Street,+Kwun+Tong,+Kowloon,+Hong+Kong"], null)], null),cljs.core.PersistentVector.EMPTY,"black","Dev Barcamp #",paren.cmds.random_bullshit(),"\u9999\u6E2F\u4EBA\u9999\u6E2F\u8A71\u65E2 Barcamp","___  ____ _  _                           \n|  \\ |___ |  |                           \n|__/ |___  \\/                            \n                                         \n      ___  ____ ____ ____ ____ _  _ ___  \n      |__] |__| |__/ |    |__| |\\/| |__] \n      |__] |  | |  \\ |___ |  | |  | |    \n                                         \n","Dev Barcamp\u662F\u500B\u5206\u4EAB\u77E5\u8B58\u7684\u805A\u6703\uFF0C\u4EFB\u4F55\u4EBA\u6709\u9EDE\u5B50\u60F3\u737B\u7D66\u5927\u5BB6\n\uFF0C\u6216\u60F3\u627E\u6771\u897F\u5B78\u7FD2\uFF0C\u90A3\u5C31\u8D70\u5C0D\u5730\u65B9\u4E86\uFF01\n\u9019\u88CF\u6703\u5C6C\u65BC\u5927\u5BB6\u7684\u7A7A\u9593\uFF0C\u5F7C\u6B64\u5206\u4EAB\u548C\u5B78\u7FD2\u3002\n\u5206\u4EAB\u5167\u5BB9\u7531\u53C3\u8207\u8005\u5E36\u52D5\uFF0C\u9032\u884C\u5404\u5F0F\u5404\u6A23\u7684\u8A0E\u8AD6\u3001\u793A\u7BC4\uFF0C\u8B93\u5927\u5BB6\u6253\u6210\u4E00\u7247\u3002\n\n\u5206\u4EAB\u4EE5\u5EE3\u6771\u8A71\u70BA\u4E3B\uFF1B\n\n\u6BCF\u500B\u984C\u76EE\u70BA\u664220\u5206\u9418\uFF1B"]);
paren.cmds.jokes = new cljs.core.PersistentArrayMap(null, 6, ["rm -rf /",(function (_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [paren.cmds.typewriter,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text,reagent.core.atom.cljs$core$IFn$_invoke$arity$1("Start removing your data....................... ....................................kidding")], null)], null);
}),"+ 1 1",(function (_){
return "Doing some math is good for your health";
}),"hello world!",(function (_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [paren.cmds.typewriter,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text,reagent.core.atom.cljs$core$IFn$_invoke$arity$1("Congratulations! you are now a certified Programmer")], null)], null);
}),"show me the money",(function (_){
return "I know you really a Starcraft lover.";
}),"exit",cljs.core.with_meta((function (_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pre,"Are you thinking too much?"], null);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$desc,"quit this repl"], null)),"reboot",cljs.core.with_meta((function (_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_linux$fa_DASH_5x], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [paren.cmds.typewriter,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$delay,(10),cljs.core.cst$kw$text,reagent.core.atom.cljs$core$IFn$_invoke$arity$1("Configurating ISA PNP\nSetting system time from the hardware clock (localtime)\nUsing /etc/random-seed to initialize /dev/urandom\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\nInitializing basic system settings ...\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\nUpdating shared libraries\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\nSystem ready ...\nType '?' to continue")], null)], null)], null);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$desc,"Don't do that!"], null))], null);
paren.cmds.dict = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentHashMap.fromArrays(["banner","list","like","detail","set!","?","attend","previous","barcamp","reset!","history","date","report"],[cljs.core.with_meta((function (d){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pre,cljs.core.cst$kw$banner.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(d) : cljs.core.deref.call(null,d)))], null);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$desc,"show banner"], null)),cljs.core.with_meta((function (d){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pre,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("available keys:\n\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.keys((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(d) : cljs.core.deref.call(null,d))))))].join('')], null);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$desc,"list all avalible configuration key"], null)),cljs.core.with_meta((function (_){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$display,"flex",cljs.core.cst$kw$flex_DASH_direction,"column",cljs.core.cst$kw$justify_DASH_content,"center",cljs.core.cst$kw$align_DASH_items,"center"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Click and like Dev Barcamp!"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$display,"flex",cljs.core.cst$kw$justify_DASH_content,"space-around",cljs.core.cst$kw$align_DASH_items,"center",cljs.core.cst$kw$width,"200px"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"https://www.facebook.com/devbarcamp.hk/",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$display,"block"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_facebook_DASH_official$fa_DASH_5x], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"Facebook"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"https://www.meetup.com/Dev-Barcamp/",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$display,"block"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_meetup$fa_DASH_5x], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_left,"10px"], null)], null),"Meetup"], null)], null)], null)], null);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$desc,"like Dev Barcamp and want to keep an eye on it!"], null)),cljs.core.with_meta((function (data){
var map__14303 = cljs.core.last(cljs.core.cst$kw$events.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(data) : cljs.core.deref.call(null,data))));
var map__14303__$1 = ((((!((map__14303 == null)))?((((map__14303.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14303.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14303):map__14303);
var date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14303__$1,cljs.core.cst$kw$date);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14303__$1,cljs.core.cst$kw$time);
var location = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14303__$1,cljs.core.cst$kw$location);
var gmap = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14303__$1,cljs.core.cst$kw$gmap);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"Date: ",date], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"Time: ",time], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"Location: ",location," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,gmap,cljs.core.cst$kw$text_DASH_decoration,"underline"], null),"(map)"], null)], null)], null);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$desc,"display next Dev Barcamp's details"], null)),cljs.core.with_meta((function (d,cmd){
var vec__14305 = cljs.reader.read_string([cljs.core.str.cljs$core$IFn$_invoke$arity$1("["),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cmd),cljs.core.str.cljs$core$IFn$_invoke$arity$1("]")].join(''));
var nam = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14305,(0),null);
var kw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14305,(1),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14305,(2),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(d,cljs.core.assoc,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kw),value);

return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("set "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(kw),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join('');
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$desc,"amend config. might cause reboot!"], null)),paren.cmds.help_text,cljs.core.with_meta((function (_){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$display,"flex",cljs.core.cst$kw$flex_DASH_direction,"column",cljs.core.cst$kw$justify_DASH_content,"center",cljs.core.cst$kw$align_DASH_items,"center"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [paren.cmds.typewriter,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text,reagent.core.atom.cljs$core$IFn$_invoke$arity$1("Click and attend Dev Barcamp!")], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$display,"flex",cljs.core.cst$kw$justify_DASH_content,"space-around",cljs.core.cst$kw$align_DASH_items,"center",cljs.core.cst$kw$width,"200px"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"https://www.facebook.com/events/1946131938957255/",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display,"block",cljs.core.cst$kw$width,"60px"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_facebook_DASH_official$fa_DASH_5x], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"Facebook"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"https://www.meetup.com/Dev-Barcamp/events/235015864/",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display,"block",cljs.core.cst$kw$width,"60px"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_meetup$fa_DASH_5x], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_left,"11px"], null)], null),"Meetup"], null)], null)], null)], null);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$desc,"claim you want to join the next Dev Barcamp!"], null)),(function (_){
return "N/A";
}),cljs.core.with_meta((function (data){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [paren.cmds.typewriter,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$delay,(20),cljs.core.cst$kw$text,reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$long_DASH_desc.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(data) : cljs.core.deref.call(null,data))))], null)], null);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$desc,"describe what's Dev Barcamp"], null)),cljs.core.with_meta((function (d){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(d,paren.cmds.init_state) : cljs.core.reset_BANG_.call(null,d,paren.cmds.init_state));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pre,"Reset!"], null);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$desc,"reset all configuration"], null)),cljs.core.with_meta((function (p1__14302_SHARP_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(p1__14302_SHARP_,cljs.core.assoc,cljs.core.cst$kw$history,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["history"], null));

return "Not implemented yet.";
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$desc,"show past events"], null)),cljs.core.with_meta((function (data){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [paren.cmds.typewriter,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text,reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$date.cljs$core$IFn$_invoke$arity$1(cljs.core.last(cljs.core.cst$kw$events.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(data) : cljs.core.deref.call(null,data))))))], null)], null);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$desc,"display next Dev Barcamp's date"], null)),cljs.core.with_meta((function (_){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$display,"flex",cljs.core.cst$kw$flex_DASH_direction,"column",cljs.core.cst$kw$justify_DASH_content,"center",cljs.core.cst$kw$align_DASH_items,"center"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Click and start contribute!"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"https://www.github.com/DevBarcamp"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_github_DASH_alt$fa_DASH_5x], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding_DASH_left,"9px"], null)], null),"Github"], null)], null)], null)], null);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$desc,"report a bug, or help us to improve"], null))]),paren.cmds.jokes], 0));
paren.cmds.fuzzy_match = (function paren$cmds$fuzzy_match(in$){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(in$,"")){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__14308_SHARP_){
return (clojure.string.starts_with_QMARK_(clojure.string.upper_case(p1__14308_SHARP_),clojure.string.upper_case(in$))) || (clojure.string.starts_with_QMARK_(clojure.string.upper_case(in$),clojure.string.upper_case(p1__14308_SHARP_)));
}),cljs.core.keys(paren.cmds.dict)));
} else {
return null;
}
});
