// Compiled by ClojureScript 1.9.562 {:static-fns true, :optimize-constants true}
goog.provide('paren.app');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('paren.cmds');
goog.require('paren.component');
goog.require('goog.dom');
goog.require('goog.events');
if(typeof paren.app.app_state !== 'undefined'){
} else {
paren.app.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(paren.cmds.init_state);
}
if(typeof paren.app.viewport !== 'undefined'){
} else {
paren.app.viewport = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$h,document.documentElement.clientHeight,cljs.core.cst$kw$w,document.documentElement.clientWidth], null));
}
var G__14318_14323 = window;
var G__14319_14324 = goog.events.EventType.RESIZE;
var G__14320_14325 = ((function (G__14318_14323,G__14319_14324){
return (function (){
var G__14321 = paren.app.viewport;
var G__14322 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$h,document.documentElement.clientHeight,cljs.core.cst$kw$w,document.documentElement.clientWidth], null);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14321,G__14322) : cljs.core.reset_BANG_.call(null,G__14321,G__14322));
});})(G__14318_14323,G__14319_14324))
;
goog.events.listen(G__14318_14323,G__14319_14324,G__14320_14325);
paren.app.content_editable = (function paren$app$content_editable(focus_QMARK_){
var text = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var handle_change = ((function (text){
return (function (p1__14326_SHARP_){
var ch = p1__14326_SHARP_.charCode;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ch,(13))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(paren.app.app_state,((function (ch,text){
return (function (state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,cljs.core.cst$kw$history,cljs.core.conj,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(text) : cljs.core.deref.call(null,text))),cljs.core.cst$kw$bullshit,paren.cmds.random_bullshit());
});})(ch,text))
);

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(text,"") : cljs.core.reset_BANG_.call(null,text,""));
} else {
return null;
}
});})(text))
;
return ((function (text,handle_change){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$content_DASH_editable,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$position,"relative",cljs.core.cst$kw$width,(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(focus_QMARK_) : cljs.core.deref.call(null,focus_QMARK_)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var x__7558__auto__ = (350);
var y__7559__auto__ = (cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(paren.app.viewport) : cljs.core.deref.call(null,paren.app.viewport))) - (55));
return ((x__7558__auto__ < y__7559__auto__) ? x__7558__auto__ : y__7559__auto__);
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px")].join(''):"120px"),cljs.core.cst$kw$transition,"all ease 0.2s"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$font_DASH_size,"18px",cljs.core.cst$kw$line_DASH_height,"45px",cljs.core.cst$kw$font_DASH_family,"'Share Tech Mono', monospace",cljs.core.cst$kw$color,"#ccc",cljs.core.cst$kw$position,"absolute"], null)], null),paren.cmds.fuzzy_match((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(text) : cljs.core.deref.call(null,text)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$border,"none",cljs.core.cst$kw$padding,"0",cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$font_DASH_size,"18px",cljs.core.cst$kw$font_DASH_family,"'Share Tech Mono', monospace",cljs.core.cst$kw$background_DASH_color,"rgba(0,0,0,0)",cljs.core.cst$kw$line_DASH_height,"45px"], null),cljs.core.cst$kw$placeholder,(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(focus_QMARK_) : cljs.core.deref.call(null,focus_QMARK_)))?"Type '?' or 'detail'":"Click here"),cljs.core.cst$kw$on_DASH_focus,((function (text,handle_change){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(focus_QMARK_,true) : cljs.core.reset_BANG_.call(null,focus_QMARK_,true));
});})(text,handle_change))
,cljs.core.cst$kw$on_DASH_blur,((function (text,handle_change){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(focus_QMARK_,false) : cljs.core.reset_BANG_.call(null,focus_QMARK_,false));
});})(text,handle_change))
,cljs.core.cst$kw$on_DASH_key_DASH_press,handle_change,cljs.core.cst$kw$on_DASH_change,((function (text,handle_change){
return (function (p1__14327_SHARP_){
var G__14330 = text;
var G__14331 = p1__14327_SHARP_.target.value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14330,G__14331) : cljs.core.reset_BANG_.call(null,G__14330,G__14331));
});})(text,handle_change))
,cljs.core.cst$kw$value,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(text) : cljs.core.deref.call(null,text))], null)], null)], null);
});
;})(text,handle_change))
});
paren.app.paren_box = (function paren$app$paren_box(focus_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$paren_DASH_box,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_top,"20px"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$container,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$display,"flex",cljs.core.cst$kw$font_DASH_family,"'Share Tech Mono', monospace",cljs.core.cst$kw$font_DASH_size,"40px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding_DASH_right,"5px"], null)], null),"("], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [paren.app.content_editable,focus_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding_DASH_left,"5px"], null)], null),")"], null)], null)], null);
});
});
paren.app.eval_note = (function paren$app$eval_note(data){
var text = reagent.core.cursor(data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bullshit], null));
var terminal_bg = reagent.core.cursor(data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$terminal_DASH_bg], null));
var terminal_color = reagent.core.cursor(data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$terminal_DASH_color], null));
var history = reagent.core.cursor(data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$history], null));
return ((function (text,terminal_bg,terminal_color,history){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$eval_DASH_note,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$max_DASH_width,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var x__7558__auto__ = (cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(paren.app.viewport) : cljs.core.deref.call(null,paren.app.viewport))) - (20));
var y__7559__auto__ = (450);
return ((x__7558__auto__ < y__7559__auto__) ? x__7558__auto__ : y__7559__auto__);
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px")].join(''),cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$height,"200px",cljs.core.cst$kw$background_DASH_color,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(terminal_bg) : cljs.core.deref.call(null,terminal_bg)),cljs.core.cst$kw$overflow,"hidden",cljs.core.cst$kw$font_DASH_size,"12px",cljs.core.cst$kw$color,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(terminal_color) : cljs.core.deref.call(null,terminal_color)),cljs.core.cst$kw$padding,"10px"], null)], null),(function (){var cmd = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.last((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(history) : cljs.core.deref.call(null,history))))].join('');
var cmd_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(paren.cmds.dict,paren.cmds.fuzzy_match(cmd));
if(cljs.core.truth_(cmd_fn)){
return (cmd_fn.cljs$core$IFn$_invoke$arity$2 ? cmd_fn.cljs$core$IFn$_invoke$arity$2(data,cmd) : cmd_fn.call(null,data,cmd));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [paren.cmds.typewriter,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text,text], null)], null);
}
})()], null);
});
;})(text,terminal_bg,terminal_color,history))
});
paren.app.front_card = (function paren$app$front_card(app_state,flipped_QMARK_){
var focus_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return ((function (focus_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$display,"flex",cljs.core.cst$kw$justify_DASH_content,"center",cljs.core.cst$kw$align_DASH_items,"center",cljs.core.cst$kw$flex_DASH_direction,"column",cljs.core.cst$kw$flex,"1 0 auto"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$font_DASH_size,"72px",cljs.core.cst$kw$line_DASH_height,"1.5em",cljs.core.cst$kw$display,(cljs.core.truth_((function (){var and__7203__auto__ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(focus_QMARK_) : cljs.core.deref.call(null,focus_QMARK_));
if(cljs.core.truth_(and__7203__auto__)){
return ((768) > cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(paren.app.viewport) : cljs.core.deref.call(null,paren.app.viewport))));
} else {
return and__7203__auto__;
}
})())?"none":"initial")], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_state) : cljs.core.deref.call(null,app_state)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.cst$kw$events.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_state) : cljs.core.deref.call(null,app_state)))))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin_DASH_bottom,"20px",cljs.core.cst$kw$display,(cljs.core.truth_((function (){var and__7203__auto__ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(focus_QMARK_) : cljs.core.deref.call(null,focus_QMARK_));
if(cljs.core.truth_(and__7203__auto__)){
return ((768) > cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(paren.app.viewport) : cljs.core.deref.call(null,paren.app.viewport))));
} else {
return and__7203__auto__;
}
})())?"none":"initial")], null)], null),cljs.core.cst$kw$subtitle.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_state) : cljs.core.deref.call(null,app_state)))], null),(cljs.core.truth_(cljs.core.first(cljs.core.cst$kw$history.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_state) : cljs.core.deref.call(null,app_state)))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [paren.app.eval_note,app_state], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [paren.app.paren_box,focus_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"- OR -"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$href,"#",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_family,"Helvetica, Arial"], null),cljs.core.cst$kw$on_DASH_click,((function (focus_QMARK_){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(flipped_QMARK_,cljs.core.not);
});})(focus_QMARK_))
], null),"Just show me everyting"], null)], null);
});
;})(focus_QMARK_))
});
paren.app.back_card = (function paren$app$back_card(app_state,flipped_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$display,"flex",cljs.core.cst$kw$justify_DASH_content,"center",cljs.core.cst$kw$align_DASH_items,"center",cljs.core.cst$kw$flex_DASH_direction,"column",cljs.core.cst$kw$flex,"1 0 auto"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$font_DASH_size,"48px",cljs.core.cst$kw$line_DASH_height,"1.2em",cljs.core.cst$kw$display,(cljs.core.truth_(cljs.core.cst$kw$focus.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_state) : cljs.core.deref.call(null,app_state))))?"none":"initial")], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_state) : cljs.core.deref.call(null,app_state)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.cst$kw$events.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_state) : cljs.core.deref.call(null,app_state)))))].join('')], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$max_DASH_width,"450px",cljs.core.cst$kw$display,"flex",cljs.core.cst$kw$flex_DASH_direction,"column",cljs.core.cst$kw$justify_DASH_content,"center",cljs.core.cst$kw$align_DASH_items,"center",cljs.core.cst$kw$font_DASH_family,"Roboto"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h4,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin_DASH_top,"10px",cljs.core.cst$kw$margin_DASH_bottom,"5px"], null)], null),"\u5831\u540D"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$back_DASH_links,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$display,"flex",cljs.core.cst$kw$justify_DASH_content,"space-around",cljs.core.cst$kw$align_DASH_items,"center",cljs.core.cst$kw$width,"120px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$fb,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"https://www.facebook.com/devbarcamp.hk/",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$display,"block"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_facebook_DASH_official$fa_DASH_2x], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$mu,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"https://www.meetup.com/Dev-Barcamp/",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$display,"block"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_meetup$fa_DASH_2x], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h4,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin_DASH_top,"10px",cljs.core.cst$kw$margin_DASH_bottom,"5px"], null)], null),"\u65E5\u671F"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text_DASH_align,"center"], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$date.cljs$core$IFn$_invoke$arity$1(cljs.core.last(cljs.core.cst$kw$events.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_state) : cljs.core.deref.call(null,app_state)))))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(cljs.core.last(cljs.core.cst$kw$events.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_state) : cljs.core.deref.call(null,app_state))))))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h4,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin_DASH_top,"10px",cljs.core.cst$kw$margin_DASH_bottom,"5px"], null)], null),"\u5730\u9EDE"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text_DASH_align,"center"], null)], null),cljs.core.cst$kw$location.cljs$core$IFn$_invoke$arity$1(cljs.core.last(cljs.core.cst$kw$events.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_state) : cljs.core.deref.call(null,app_state)))))], null),(cljs.core.truth_(cljs.core.cst$kw$gmap_DASH_img.cljs$core$IFn$_invoke$arity$1(cljs.core.last(cljs.core.cst$kw$events.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_state) : cljs.core.deref.call(null,app_state))))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,cljs.core.cst$kw$gmap.cljs$core$IFn$_invoke$arity$1(cljs.core.last(cljs.core.cst$kw$events.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_state) : cljs.core.deref.call(null,app_state)))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$src,cljs.core.cst$kw$gmap_DASH_img.cljs$core$IFn$_invoke$arity$1(cljs.core.last(cljs.core.cst$kw$events.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_state) : cljs.core.deref.call(null,app_state))))),cljs.core.cst$kw$width,"400px",cljs.core.cst$kw$height,"300px",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var x__7558__auto__ = (cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(paren.app.viewport) : cljs.core.deref.call(null,paren.app.viewport))) - (10));
var y__7559__auto__ = (400);
return ((x__7558__auto__ < y__7559__auto__) ? x__7558__auto__ : y__7559__auto__);
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px")].join(''),cljs.core.cst$kw$height,"100%"], null),cljs.core.cst$kw$alt,cljs.core.cst$kw$location.cljs$core$IFn$_invoke$arity$1(cljs.core.last(cljs.core.cst$kw$events.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_state) : cljs.core.deref.call(null,app_state)))))], null)], null)], null):null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$href,"#",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$font_DASH_family,"Helvetica, Arial",cljs.core.cst$kw$margin_DASH_top,"10px"], null),cljs.core.cst$kw$on_DASH_click,(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(flipped_QMARK_,cljs.core.not);
})], null),"Give me back! My Terminal!"], null)], null);
});
});
paren.app.main = (function paren$app$main(){
var flipped_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$width,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(paren.app.viewport) : cljs.core.deref.call(null,paren.app.viewport)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px")].join(''),cljs.core.cst$kw$height,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$h.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(paren.app.viewport) : cljs.core.deref.call(null,paren.app.viewport)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px")].join(''),cljs.core.cst$kw$min_DASH_height,"534px",cljs.core.cst$kw$display,"flex",cljs.core.cst$kw$flex_DASH_direction,"column"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$flex,"1 0 auto"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [paren.component.flipbox,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$flipped_QMARK_,flipped_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [paren.app.front_card,paren.app.app_state,flipped_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [paren.app.back_card,paren.app.app_state,flipped_QMARK_], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$footer,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$font_DASH_size,"0.8rem",cljs.core.cst$kw$font_DASH_style,"italic",cljs.core.cst$kw$color,"#444",cljs.core.cst$kw$text_DASH_align,"center"], null)], null),"Powered by Clojure. Release under EPL."], null)], null);
});
paren.app.init = (function paren$app$init(){
var G__14334 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [paren.app.main], null);
var G__14335 = document.getElementById("container");
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__14334,G__14335) : reagent.core.render_component.call(null,G__14334,G__14335));
});
goog.exportSymbol('paren.app.init', paren.app.init);
