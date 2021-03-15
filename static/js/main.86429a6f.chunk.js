(this["webpackJsonpgoit-react-hw-05-phonebook"]=this["webpackJsonpgoit-react-hw-05-phonebook"]||[]).push([[0],{19:function(t,e,n){t.exports={enter:"ContactList_enter__1qy30",enterActive:"ContactList_enterActive__234TB",exit:"ContactList_exit___BX1Y",exitActive:"ContactList_exitActive__22NFj"}},2:function(t,e,n){t.exports={form:"ContactForm_form__3fCZv",label:"ContactForm_label__1pX7v",input:"ContactForm_input__dX2nN",btn:"ContactForm_btn__1GPAj"}},22:function(t,e,n){t.exports={filter:"Filter_filter__22_um",label:"Filter_label__1-SAa"}},24:function(t,e,n){t.exports={appear:"Notification_appear__2lTv7",appearActive:"Notification_appearActive__NASrr",enter:"Notification_enter__r8_gu",enterActive:"Notification_enterActive__ou5Aj",exit:"Notification_exit__3bCpw",exitActive:"Notification_exitActive__leh7J"}},37:function(t,e,n){},38:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n(5),i=n.n(c),o=n(25),r=n(9),s=n(10),l=n(14),u=n(13),m=n(41),_=n(40),b=n(11),p=n(2),j=n.n(p),d=n(0),h=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,c=n.number;t.props.onAddContact(a,c),t.setState({name:"",number:""})},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(b.a)({},a,c))},t}return Object(s.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("form",{onSubmit:this.handleSubmit,className:j.a.form,children:[Object(d.jsxs)("label",{className:j.a.label,children:["Name",Object(d.jsx)("input",{className:j.a.input,type:"text",name:"name",value:this.state.name,onChange:this.handleChange})]}),Object(d.jsxs)("label",{className:j.a.label,children:["Number",Object(d.jsx)("input",{className:j.a.input,type:"number",name:"number",value:this.state.number,onChange:this.handleChange})]}),Object(d.jsx)("button",{type:"submit",className:j.a.btn,children:"Add contact"})]})}}]),n}(a.Component),f=n(18),v=n(26),x=n(42),O=n(7),C=n.n(O),A=function(t){var e=t.name,n=t.id,a=t.number,c=t.onRemove;return Object(d.jsx)(_.a,{in:!0,appear:!0,timeout:250,classNames:C.a,unmountOnExit:!0,children:Object(d.jsxs)("li",{className:C.a.item,children:[Object(d.jsxs)("p",{className:C.a.list,children:[e,": ",a]}),Object(d.jsx)("section",{className:C.a.section__btn,children:Object(d.jsx)("button",{type:"button",className:C.a.btn,onClick:c,children:"Delete"})})]},n)})},N=n(19),g=n.n(N),S=function(t){var e=t.contacts,n=t.onRemoveContact;return Object(d.jsx)(x.a,{component:"ul",className:g.a.list,children:e.map((function(t){var e=t.id,a=Object(v.a)(t,["id"]);return Object(d.jsx)(_.a,{timeout:250,classNames:g.a,children:Object(d.jsx)(A,Object(f.a)(Object(f.a)({},a),{},{onRemove:function(){return n(e)}}),e)},e)}))})},y=n(22),L=n.n(y),F=function(t){var e=t.value,n=t.onChangeFilter;return Object(d.jsx)("div",{children:Object(d.jsxs)("label",{children:["Find contacts by name:",Object(d.jsx)("input",{className:L.a.filter,placeholder:"Enter name...",type:"text",value:e,onChange:function(t){return n(t.target.value)}})]})})},w=n(20),I=n(23),k=(n(35),n(36),n(24)),E=n.n(k);function B(t){_.a,E.a,Object(w.error)({text:"".concat(t," is already in contacts!"),animation:"fade",animateSpeed:"5000ms"})}w.defaultModules.set(I,{});var D=n(8),J=n.n(D),R=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],name:"",filter:""},t.addContact=function(e,n){var a={id:Object(m.a)(),name:e,number:n};t.state.contacts.map((function(t){return t.name.toLowerCase()})).includes(a.name.toLowerCase().trim())?B(a.name):t.setState((function(t){return{contacts:[].concat(Object(o.a)(t.contacts),[a])}}))},t.removeContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){t.setState({filter:e})},t.getVisibleContacts=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts");t&&this.setState({contacts:JSON.parse(t)})}},{key:"componentDidUpdate",value:function(t,e){e.contacts!==this.state.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state,e=t.filter,n=t.contacts,a=this.getVisibleContacts();return Object(d.jsxs)("div",{className:J.a.box,children:[Object(d.jsx)(_.a,{in:!0,appear:!0,timeout:500,classNames:J.a,unmountOnExit:!0,children:Object(d.jsx)("h1",{className:J.a.title,children:"Phonebook"})}),Object(d.jsx)(h,{onAddContact:this.addContact}),n.length>0&&Object(d.jsx)(_.a,{in:!0,timeout:250,classNames:J.a.filter,unmountOnExit:!0,children:Object(d.jsx)(F,{value:e,onChangeFilter:this.changeFilter})}),Object(d.jsx)(S,{contacts:a,onRemoveContact:this.removeContact})]})}}]),n}(a.Component);n(37);i.a.render(Object(d.jsx)(R,{}),document.getElementById("root"))},7:function(t,e,n){t.exports={enter:"ContactListItem_enter__3xW9l",enterActive:"ContactListItem_enterActive__1HeYh",exit:"ContactListItem_exit__3no4o",exitActive:"ContactListItem_exitActive__2W0Xr",item:"ContactListItem_item__1xB6j",section__btn:"ContactListItem_section__btn__2Z3nx",btn:"ContactListItem_btn__3b1Pf",list:"ContactListItem_list__17KAA"}},8:function(t,e,n){t.exports={box:"App_box__-to9T",title:"App_title__MKLLP",appear:"App_appear__25Tts",appearActive:"App_appearActive__recu4",enter:"App_enter__WSinr",enterActive:"App_enterActive__1DdOv",exit:"App_exit__6xYSH",exitActive:"App_exitActive__BVtqf"}}},[[38,1,2]]]);
//# sourceMappingURL=main.86429a6f.chunk.js.map