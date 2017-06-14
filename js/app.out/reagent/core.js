// Compiled by ClojureScript 1.9.562 {:static-fns true, :optimize-constants true}
goog.provide('reagent.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.impl.template');
goog.require('reagent.impl.component');
goog.require('reagent.impl.util');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
goog.require('reagent.debug');
goog.require('reagent.interop');
goog.require('reagent.dom');
reagent.core.is_client = reagent.impl.util.is_client;
reagent.core.react = reagent.impl.util.react;
/**
 * Create a native React element, by calling React.createElement directly.
 * 
 *   That means the second argument must be a javascript object (or nil), and
 *   that any Reagent hiccup forms must be processed with as-element. For example
 *   like this:
 * 
 *  (r/create-element "div" #js{:className "foo"}
 *     "Hi " (r/as-element [:strong "world!"])
 * 
 *   which is equivalent to
 * 
 *  [:div.foo "Hi" [:strong "world!"]]
 */
reagent.core.create_element = (function reagent$core$create_element(var_args){
var args14032 = [];
var len__8328__auto___14039 = arguments.length;
var i__8329__auto___14040 = (0);
while(true){
if((i__8329__auto___14040 < len__8328__auto___14039)){
args14032.push((arguments[i__8329__auto___14040]));

var G__14041 = (i__8329__auto___14040 + (1));
i__8329__auto___14040 = G__14041;
continue;
} else {
}
break;
}

var G__14038 = args14032.length;
switch (G__14038) {
case 1:
return reagent.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reagent.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.core.create_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__8347__auto__ = (new cljs.core.IndexedSeq(args14032.slice((3)),(0),null));
return reagent.core.create_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8347__auto__);

}
});

reagent.core.create_element.cljs$core$IFn$_invoke$arity$1 = (function (type){
return reagent.core.create_element.cljs$core$IFn$_invoke$arity$2(type,null);
});

reagent.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (type,props){
if(!(cljs.core.map_QMARK_(props))){
} else {
throw (new Error("Assert failed: (not (map? props))"));
}

return (reagent.core.react["createElement"])(type,props);
});

reagent.core.create_element.cljs$core$IFn$_invoke$arity$3 = (function (type,props,child){
if(!(cljs.core.map_QMARK_(props))){
} else {
throw (new Error("Assert failed: (not (map? props))"));
}

return (reagent.core.react["createElement"])(type,props,child);
});

reagent.core.create_element.cljs$core$IFn$_invoke$arity$variadic = (function (type,props,child,children){
if(!(cljs.core.map_QMARK_(props))){
} else {
throw (new Error("Assert failed: (not (map? props))"));
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$5((reagent.core.react["createElement"]),type,props,child,children);
});

reagent.core.create_element.cljs$lang$applyTo = (function (seq14033){
var G__14034 = cljs.core.first(seq14033);
var seq14033__$1 = cljs.core.next(seq14033);
var G__14035 = cljs.core.first(seq14033__$1);
var seq14033__$2 = cljs.core.next(seq14033__$1);
var G__14036 = cljs.core.first(seq14033__$2);
var seq14033__$3 = cljs.core.next(seq14033__$2);
return reagent.core.create_element.cljs$core$IFn$_invoke$arity$variadic(G__14034,G__14035,G__14036,seq14033__$3);
});

reagent.core.create_element.cljs$lang$maxFixedArity = (3);

/**
 * Turns a vector of Hiccup syntax into a React element. Returns form
 *   unchanged if it is not a vector.
 */
reagent.core.as_element = (function reagent$core$as_element(form){
return reagent.impl.template.as_element(form);
});
/**
 * Returns an adapter for a native React class, that may be used
 *   just like a Reagent component function or class in Hiccup forms.
 */
reagent.core.adapt_react_class = (function reagent$core$adapt_react_class(c){
if(cljs.core.truth_(c)){
} else {
throw (new Error("Assert failed: c"));
}

return reagent.impl.template.adapt_react_class(c);
});
/**
 * Returns an adapter for a Reagent component, that may be used from
 *   React, for example in JSX. A single argument, props, is passed to
 *   the component, converted to a map.
 */
reagent.core.reactify_component = (function reagent$core$reactify_component(c){
if(cljs.core.truth_(c)){
} else {
throw (new Error("Assert failed: c"));
}

return reagent.impl.component.reactify_component(c);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.core.render = (function reagent$core$render(var_args){
var args14043 = [];
var len__8328__auto___14046 = arguments.length;
var i__8329__auto___14047 = (0);
while(true){
if((i__8329__auto___14047 < len__8328__auto___14046)){
args14043.push((arguments[i__8329__auto___14047]));

var G__14048 = (i__8329__auto___14047 + (1));
i__8329__auto___14047 = G__14048;
continue;
} else {
}
break;
}

var G__14045 = args14043.length;
switch (G__14045) {
case 2:
return reagent.core.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.core.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14043.length)].join('')));

}
});

reagent.core.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(comp,container);
});

reagent.core.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,callback);
});

reagent.core.render.cljs$lang$maxFixedArity = 3;

/**
 * Remove a component from the given DOM node.
 */
reagent.core.unmount_component_at_node = (function reagent$core$unmount_component_at_node(container){
return reagent.dom.unmount_component_at_node(container);
});
reagent.core.as_component = reagent.core.as_element;
reagent.core.render_component = reagent.core.render;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.core.force_update_all = (function reagent$core$force_update_all(){
reagent.ratom.flush_BANG_();

reagent.dom.force_update_all();

return reagent.impl.batching.flush_after_render();
});
goog.exportSymbol('reagent.core.force_update_all', reagent.core.force_update_all);
/**
 * Create a component, React style. Should be called with a map,
 *   looking like this:
 * 
 *  {:get-initial-state (fn [this])
 *   :component-will-receive-props (fn [this new-argv])
 *   :should-component-update (fn [this old-argv new-argv])
 *   :component-will-mount (fn [this])
 *   :component-did-mount (fn [this])
 *   :component-will-update (fn [this new-argv])
 *   :component-did-update (fn [this old-argv])
 *   :component-will-unmount (fn [this])
 *   :reagent-render (fn [args....])}   ;; or :render (fn [this])
 * 
 *   Everything is optional, except either :reagent-render or :render.
 */
reagent.core.create_class = (function reagent$core$create_class(spec){
return reagent.impl.component.create_class(spec);
});
/**
 * Returns the current React component (a.k.a this) in a component
 *   function.
 */
reagent.core.current_component = (function reagent$core$current_component(){
return reagent.impl.component._STAR_current_component_STAR_;
});
/**
 * Returns an atom containing a components state.
 */
reagent.core.state_atom = (function reagent$core$state_atom(this$){
if(reagent.impl.component.reagent_component_QMARK_(this$)){
} else {
throw (new Error("Assert failed: (comp/reagent-component? this)"));
}

return reagent.impl.component.state_atom(this$);
});
/**
 * Returns the state of a component, as set with replace-state or set-state.
 *   Equivalent to (deref (r/state-atom this))
 */
reagent.core.state = (function reagent$core$state(this$){
if(reagent.impl.component.reagent_component_QMARK_(this$)){
} else {
throw (new Error("Assert failed: (comp/reagent-component? this)"));
}

var G__14051 = reagent.core.state_atom(this$);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14051) : cljs.core.deref.call(null,G__14051));
});
/**
 * Set state of a component.
 *   Equivalent to (reset! (state-atom this) new-state)
 */
reagent.core.replace_state = (function reagent$core$replace_state(this$,new_state){
if(reagent.impl.component.reagent_component_QMARK_(this$)){
} else {
throw (new Error("Assert failed: (comp/reagent-component? this)"));
}

if(((new_state == null)) || (cljs.core.map_QMARK_(new_state))){
} else {
throw (new Error("Assert failed: (or (nil? new-state) (map? new-state))"));
}

var G__14054 = reagent.core.state_atom(this$);
var G__14055 = new_state;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14054,G__14055) : cljs.core.reset_BANG_.call(null,G__14054,G__14055));
});
/**
 * Merge component state with new-state.
 *   Equivalent to (swap! (state-atom this) merge new-state)
 */
reagent.core.set_state = (function reagent$core$set_state(this$,new_state){
if(reagent.impl.component.reagent_component_QMARK_(this$)){
} else {
throw (new Error("Assert failed: (comp/reagent-component? this)"));
}

if(((new_state == null)) || (cljs.core.map_QMARK_(new_state))){
} else {
throw (new Error("Assert failed: (or (nil? new-state) (map? new-state))"));
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.core.state_atom(this$),cljs.core.merge,new_state);
});
/**
 * Force a component to re-render immediately.
 * 
 *   If the second argument is true, child components will also be
 *   re-rendered, even is their arguments have not changed.
 */
reagent.core.force_update = (function reagent$core$force_update(var_args){
var args14056 = [];
var len__8328__auto___14059 = arguments.length;
var i__8329__auto___14060 = (0);
while(true){
if((i__8329__auto___14060 < len__8328__auto___14059)){
args14056.push((arguments[i__8329__auto___14060]));

var G__14061 = (i__8329__auto___14060 + (1));
i__8329__auto___14060 = G__14061;
continue;
} else {
}
break;
}

var G__14058 = args14056.length;
switch (G__14058) {
case 1:
return reagent.core.force_update.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reagent.core.force_update.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14056.length)].join('')));

}
});

reagent.core.force_update.cljs$core$IFn$_invoke$arity$1 = (function (this$){
return reagent.core.force_update.cljs$core$IFn$_invoke$arity$2(this$,false);
});

reagent.core.force_update.cljs$core$IFn$_invoke$arity$2 = (function (this$,deep){
reagent.ratom.flush_BANG_();

reagent.impl.util.force_update(this$,deep);

return reagent.impl.batching.flush_after_render();
});

reagent.core.force_update.cljs$lang$maxFixedArity = 2;

/**
 * Returns the props passed to a component.
 */
reagent.core.props = (function reagent$core$props(this$){
if(reagent.impl.component.reagent_component_QMARK_(this$)){
} else {
throw (new Error("Assert failed: (comp/reagent-component? this)"));
}

return reagent.impl.component.get_props(this$);
});
/**
 * Returns the children passed to a component.
 */
reagent.core.children = (function reagent$core$children(this$){
if(reagent.impl.component.reagent_component_QMARK_(this$)){
} else {
throw (new Error("Assert failed: (comp/reagent-component? this)"));
}

return reagent.impl.component.get_children(this$);
});
/**
 * Returns the entire Hiccup form passed to the component.
 */
reagent.core.argv = (function reagent$core$argv(this$){
if(reagent.impl.component.reagent_component_QMARK_(this$)){
} else {
throw (new Error("Assert failed: (comp/reagent-component? this)"));
}

return reagent.impl.component.get_argv(this$);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.core.dom_node = (function reagent$core$dom_node(this$){
return reagent.dom.dom_node(this$);
});
/**
 * Utility function that merges two maps, handling :class and :style
 *   specially, like React's transferPropsTo.
 */
reagent.core.merge_props = (function reagent$core$merge_props(defaults,props){
return reagent.impl.util.merge_props(defaults,props);
});
/**
 * Render dirty components immediately to the DOM.
 * 
 *   Note that this may not work in event handlers, since React.js does
 *   batching of updates there.
 */
reagent.core.flush = (function reagent$core$flush(){
return reagent.impl.batching.flush();
});
/**
 * Like clojure.core/atom, except that it keeps track of derefs.
 *   Reagent components that derefs one of these are automatically
 *   re-rendered.
 */
reagent.core.atom = (function reagent$core$atom(var_args){
var args14063 = [];
var len__8328__auto___14068 = arguments.length;
var i__8329__auto___14069 = (0);
while(true){
if((i__8329__auto___14069 < len__8328__auto___14068)){
args14063.push((arguments[i__8329__auto___14069]));

var G__14070 = (i__8329__auto___14069 + (1));
i__8329__auto___14069 = G__14070;
continue;
} else {
}
break;
}

var G__14067 = args14063.length;
switch (G__14067) {
case 1:
return reagent.core.atom.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var argseq__8347__auto__ = (new cljs.core.IndexedSeq(args14063.slice((1)),(0),null));
return reagent.core.atom.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8347__auto__);

}
});

reagent.core.atom.cljs$core$IFn$_invoke$arity$1 = (function (x){
return reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1(x);
});

reagent.core.atom.cljs$core$IFn$_invoke$arity$variadic = (function (x,rest){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(reagent.ratom.atom,x,rest);
});

reagent.core.atom.cljs$lang$applyTo = (function (seq14064){
var G__14065 = cljs.core.first(seq14064);
var seq14064__$1 = cljs.core.next(seq14064);
return reagent.core.atom.cljs$core$IFn$_invoke$arity$variadic(G__14065,seq14064__$1);
});

reagent.core.atom.cljs$lang$maxFixedArity = (1);

/**
 * Takes a function and optional arguments, and returns a derefable
 *   containing the output of that function. If the function derefs
 *   Reagent atoms (or track, etc), the value will be updated whenever
 *   the atom changes.
 * 
 *   In other words, @(track foo bar) will produce the same result
 *   as (foo bar), but foo will only be called again when the atoms it
 *   depends on changes, and will only trigger updates of components when
 *   its result changes.
 * 
 *   track is lazy, i.e the function is only evaluated on deref.
 */
reagent.core.track = (function reagent$core$track(var_args){
var args__8335__auto__ = [];
var len__8328__auto___14074 = arguments.length;
var i__8329__auto___14075 = (0);
while(true){
if((i__8329__auto___14075 < len__8328__auto___14074)){
args__8335__auto__.push((arguments[i__8329__auto___14075]));

var G__14076 = (i__8329__auto___14075 + (1));
i__8329__auto___14075 = G__14076;
continue;
} else {
}
break;
}

var argseq__8336__auto__ = ((((1) < args__8335__auto__.length))?(new cljs.core.IndexedSeq(args__8335__auto__.slice((1)),(0),null)):null);
return reagent.core.track.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8336__auto__);
});

reagent.core.track.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return reagent.ratom.make_track(f,args);
});

reagent.core.track.cljs$lang$maxFixedArity = (1);

reagent.core.track.cljs$lang$applyTo = (function (seq14072){
var G__14073 = cljs.core.first(seq14072);
var seq14072__$1 = cljs.core.next(seq14072);
return reagent.core.track.cljs$core$IFn$_invoke$arity$variadic(G__14073,seq14072__$1);
});

/**
 * An eager version of track. The function passed is called
 *   immediately, and continues to be called when needed, until stopped
 *   with dispose!.
 */
reagent.core.track_BANG_ = (function reagent$core$track_BANG_(var_args){
var args__8335__auto__ = [];
var len__8328__auto___14079 = arguments.length;
var i__8329__auto___14080 = (0);
while(true){
if((i__8329__auto___14080 < len__8328__auto___14079)){
args__8335__auto__.push((arguments[i__8329__auto___14080]));

var G__14081 = (i__8329__auto___14080 + (1));
i__8329__auto___14080 = G__14081;
continue;
} else {
}
break;
}

var argseq__8336__auto__ = ((((1) < args__8335__auto__.length))?(new cljs.core.IndexedSeq(args__8335__auto__.slice((1)),(0),null)):null);
return reagent.core.track_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8336__auto__);
});

reagent.core.track_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return reagent.ratom.make_track_BANG_(f,args);
});

reagent.core.track_BANG_.cljs$lang$maxFixedArity = (1);

reagent.core.track_BANG_.cljs$lang$applyTo = (function (seq14077){
var G__14078 = cljs.core.first(seq14077);
var seq14077__$1 = cljs.core.next(seq14077);
return reagent.core.track_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14078,seq14077__$1);
});

/**
 * Stop the result of track! from updating.
 */
reagent.core.dispose_BANG_ = (function reagent$core$dispose_BANG_(x){
return reagent.ratom.dispose_BANG_(x);
});
/**
 * Provide a combination of value and callback, that looks like an atom.
 * 
 *   The first argument can be any value, that will be returned when the
 *   result is deref'ed.
 * 
 *   The second argument should be a function, that is called with the
 *   optional extra arguments provided to wrap, and the new value of the
 *   resulting 'atom'.
 * 
 *   Use for example like this:
 * 
 *   (wrap (:foo @state)
 *      swap! state assoc :foo)
 * 
 *   Probably useful only for passing to child components.
 */
reagent.core.wrap = (function reagent$core$wrap(var_args){
var args__8335__auto__ = [];
var len__8328__auto___14085 = arguments.length;
var i__8329__auto___14086 = (0);
while(true){
if((i__8329__auto___14086 < len__8328__auto___14085)){
args__8335__auto__.push((arguments[i__8329__auto___14086]));

var G__14087 = (i__8329__auto___14086 + (1));
i__8329__auto___14086 = G__14087;
continue;
} else {
}
break;
}

var argseq__8336__auto__ = ((((2) < args__8335__auto__.length))?(new cljs.core.IndexedSeq(args__8335__auto__.slice((2)),(0),null)):null);
return reagent.core.wrap.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8336__auto__);
});

reagent.core.wrap.cljs$core$IFn$_invoke$arity$variadic = (function (value,reset_fn,args){
if(cljs.core.ifn_QMARK_(reset_fn)){
} else {
throw (new Error("Assert failed: (ifn? reset-fn)"));
}

return reagent.ratom.make_wrapper(value,reset_fn,args);
});

reagent.core.wrap.cljs$lang$maxFixedArity = (2);

reagent.core.wrap.cljs$lang$applyTo = (function (seq14082){
var G__14083 = cljs.core.first(seq14082);
var seq14082__$1 = cljs.core.next(seq14082);
var G__14084 = cljs.core.first(seq14082__$1);
var seq14082__$2 = cljs.core.next(seq14082__$1);
return reagent.core.wrap.cljs$core$IFn$_invoke$arity$variadic(G__14083,G__14084,seq14082__$2);
});

/**
 * Provide a cursor into a Reagent atom.
 * 
 *   Behaves like a Reagent atom but focuses updates and derefs to
 *   the specified path within the wrapped Reagent atom. e.g.,
 *  (let [c (cursor ra [:nested :content])]
 *    ... @c ;; equivalent to (get-in @ra [:nested :content])
 *    ... (reset! c 42) ;; equivalent to (swap! ra assoc-in [:nested :content] 42)
 *    ... (swap! c inc) ;; equivalence to (swap! ra update-in [:nested :content] inc)
 *    )
 * 
 *   The first parameter can also be a function, that should look
 *   something like this:
 * 
 *  (defn set-get
 *    ([k] (get-in @state k))
 *    ([k v] (swap! state assoc-in k v)))
 * 
 *   The function will be called with one argument – the path passed to
 *   cursor – when the cursor is deref'ed, and two arguments (path and
 *   new value) when the cursor is modified.
 * 
 *   Given that set-get function, (and that state is a Reagent atom, or
 *   another cursor) these cursors are equivalent:
 *   (cursor state [:foo]) and (cursor set-get [:foo]).
 * 
 *   Note that a cursor is lazy: its value will not change until it is
 *   used. This may be noticed with add-watch.
 */
reagent.core.cursor = (function reagent$core$cursor(src,path){
return reagent.ratom.cursor(src,path);
});
/**
 * Swaps the value of a to be (apply f current-value-of-atom args).
 * 
 *   rswap! works like swap!, except that recursive calls to rswap! on
 *   the same atom are allowed – and it always returns nil.
 */
reagent.core.rswap_BANG_ = (function reagent$core$rswap_BANG_(var_args){
var args__8335__auto__ = [];
var len__8328__auto___14094 = arguments.length;
var i__8329__auto___14095 = (0);
while(true){
if((i__8329__auto___14095 < len__8328__auto___14094)){
args__8335__auto__.push((arguments[i__8329__auto___14095]));

var G__14096 = (i__8329__auto___14095 + (1));
i__8329__auto___14095 = G__14096;
continue;
} else {
}
break;
}

var argseq__8336__auto__ = ((((2) < args__8335__auto__.length))?(new cljs.core.IndexedSeq(args__8335__auto__.slice((2)),(0),null)):null);
return reagent.core.rswap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8336__auto__);
});

reagent.core.rswap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (a,f,args){
if(((!((a == null)))?((((a.cljs$lang$protocol_mask$partition1$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === a.cljs$core$IAtom$)))?true:(((!a.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,a):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,a))){
} else {
throw (new Error("Assert failed: (satisfies? IAtom a)"));
}

if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

if(cljs.core.truth_(a.rswapping)){
(function (){var or__7215__auto__ = a.rswapfs;
if(cljs.core.truth_(or__7215__auto__)){
return or__7215__auto__;
} else {
return a.rswapfs = [];
}
})().push((function (p1__14088_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,p1__14088_SHARP_,args);
}));
} else {
a.rswapping = true;

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(a,(function (state){
var s = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,state,args);
while(true){
var temp__4659__auto__ = (function (){var G__14093 = a.rswapfs;
if((G__14093 == null)){
return null;
} else {
return G__14093.shift();
}
})();
if((temp__4659__auto__ == null)){
return s;
} else {
var sf = temp__4659__auto__;
var G__14097 = (sf.cljs$core$IFn$_invoke$arity$1 ? sf.cljs$core$IFn$_invoke$arity$1(s) : sf.call(null,s));
s = G__14097;
continue;
}
break;
}
}));
}finally {a.rswapping = false;
}}

return null;
});

reagent.core.rswap_BANG_.cljs$lang$maxFixedArity = (2);

reagent.core.rswap_BANG_.cljs$lang$applyTo = (function (seq14089){
var G__14090 = cljs.core.first(seq14089);
var seq14089__$1 = cljs.core.next(seq14089);
var G__14091 = cljs.core.first(seq14089__$1);
var seq14089__$2 = cljs.core.next(seq14089__$1);
return reagent.core.rswap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14090,G__14091,seq14089__$2);
});

/**
 * Run f using requestAnimationFrame or equivalent.
 * 
 *   f will be called just before components are rendered.
 */
reagent.core.next_tick = (function reagent$core$next_tick(f){
return reagent.impl.batching.do_before_flush(f);
});
/**
 * Run f using requestAnimationFrame or equivalent.
 * 
 *   f will be called just after any queued renders in the next animation
 *   frame (and even if no renders actually occur).
 */
reagent.core.after_render = (function reagent$core$after_render(f){
return reagent.impl.batching.do_after_render(f);
});
/**
 * Works just like clojure.core/partial, except that it is an IFn, and
 *   the result can be compared with =
 */
reagent.core.partial = (function reagent$core$partial(var_args){
var args__8335__auto__ = [];
var len__8328__auto___14100 = arguments.length;
var i__8329__auto___14101 = (0);
while(true){
if((i__8329__auto___14101 < len__8328__auto___14100)){
args__8335__auto__.push((arguments[i__8329__auto___14101]));

var G__14102 = (i__8329__auto___14101 + (1));
i__8329__auto___14101 = G__14102;
continue;
} else {
}
break;
}

var argseq__8336__auto__ = ((((1) < args__8335__auto__.length))?(new cljs.core.IndexedSeq(args__8335__auto__.slice((1)),(0),null)):null);
return reagent.core.partial.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8336__auto__);
});

reagent.core.partial.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return (new reagent.impl.util.partial_ifn(f,args,null));
});

reagent.core.partial.cljs$lang$maxFixedArity = (1);

reagent.core.partial.cljs$lang$applyTo = (function (seq14098){
var G__14099 = cljs.core.first(seq14098);
var seq14098__$1 = cljs.core.next(seq14098);
return reagent.core.partial.cljs$core$IFn$_invoke$arity$variadic(G__14099,seq14098__$1);
});

reagent.core.component_path = (function reagent$core$component_path(c){
return reagent.impl.component.component_path(c);
});
