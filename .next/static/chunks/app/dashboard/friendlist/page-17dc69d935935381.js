(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[313],{6767:function(e,t,r){Promise.resolve().then(r.bind(r,4036))},4036:function(e,t,r){"use strict";r.r(t);var n=r(7437),a=r(2961);r(2265),t.default=()=>(0,n.jsxs)("div",{className:"px-5 py-4",children:[(0,n.jsx)("div",{className:"py-2 font-bold",children:"Friends"}),(0,n.jsx)(a.Z,{})]})},2961:function(e,t,r){"use strict";var n=r(7437),a=r(2265),s=r(2173),l=r(4033),i=r(8910);t.Z=()=>{var e,t,r;let[o,c]=(0,a.useState)([]);(0,a.useEffect)(()=>{let e=parseInt(localStorage.getItem("user_key")),fetchFriends=async()=>{let t=await s.Z.get("http://localhost:8000/friends",{params:{user_key:e}}),r=t.data.friend_key,n=await Promise.all(r.map(async e=>{let t=await s.Z.get("http://localhost:8000/friend-name",{params:{friend_key:e}});return{key:e,name:t.data.friend_name}}));c(n)};fetchFriends()},[]);let d=(0,l.useRouter)(),HandleFriendClick=async e=>{let t=parseInt(localStorage.getItem("user_key"));try{let r=await s.Z.post("http://localhost:8000/create-or-get-personal-chat-room",{user_key:t,friend_key:e}),{room_id:n,room_key:a,room_name:l}=r.data;d.push("/dashboard/chat/".concat(a))}catch(e){console.error("Error creating/getting chat room",e.response.data)}},u=null===(e=o[0])||void 0===e?void 0:e.name,m=null===(t=o[0])||void 0===t?void 0:t.key;return(0,n.jsx)("div",{children:(0,n.jsxs)("div",{children:[(0,n.jsx)("ul",{children:(0,n.jsxs)("li",{className:"flex py-1 hover:bg-surface-dark/20",onClick:()=>HandleFriendClick(m),children:[(0,n.jsx)(i.Vyx,{size:40,className:"mx-2 text-2xl rounded-md bg-primary-skyblue text-background"}),u]})}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("br",{}),(0,n.jsx)("div",{className:"text-sm font-light ",children:"Friends"}),null===(r=o.slice(1))||void 0===r?void 0:r.map((e,t)=>(0,n.jsxs)("li",{className:"flex py-1 hover:bg-surface-dark/20",onClick:()=>HandleFriendClick(e.key),children:[(0,n.jsx)(i.Vyx,{size:40,className:"mx-2 text-2xl rounded-md bg-primary-skyblue text-background"}),e.name]},t))]})]})})}},1172:function(e,t,r){"use strict";r.d(t,{w_:function(){return GenIcon}});var n=r(2265),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},s=n.createContext&&n.createContext(a),__assign=function(){return(__assign=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},__rest=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)0>t.indexOf(n[a])&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};function GenIcon(e){return function(t){return n.createElement(IconBase,__assign({attr:__assign({},e.attr)},t),function Tree2Element(e){return e&&e.map(function(e,t){return n.createElement(e.tag,__assign({key:t},e.attr),Tree2Element(e.child))})}(e.child))}}function IconBase(e){var elem=function(t){var r,a=e.attr,s=e.size,l=e.title,i=__rest(e,["attr","size","title"]),o=s||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",__assign({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,i,{className:r,style:__assign(__assign({color:e.color||t.color},t.style),e.style),height:o,width:o,xmlns:"http://www.w3.org/2000/svg"}),l&&n.createElement("title",null,l),e.children)};return void 0!==s?n.createElement(s.Consumer,null,function(e){return elem(e)}):elem(a)}}},function(e){e.O(0,[582,630,971,472,744],function(){return e(e.s=6767)}),_N_E=e.O()}]);