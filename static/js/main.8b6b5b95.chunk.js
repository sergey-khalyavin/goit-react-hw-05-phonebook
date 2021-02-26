(this["webpackJsonpgoit-react-hw-05-phonebook"]=this["webpackJsonpgoit-react-hw-05-phonebook"]||[]).push([[0],{2:function(t,e,n){t.exports={form:"ContactForm_form__3fCZv",label:"ContactForm_label__1pX7v",input:"ContactForm_input__dX2nN",btn:"ContactForm_btn__1GPAj"}},20:function(t,e,n){t.exports={filter:"Filter_filter__22_um",label:"Filter_label__1-SAa"}},35:function(t,e,n){},36:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(5),i=n.n(c),o=n(22),r=n(9),s=n(10),l=n(14),u=n(13),m=n(39),b=n(38),_=n(11),p=n(2),d=n.n(p),j=n(1),h=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,c=n.number;t.props.onAddContact(a,c),t.setState({name:"",number:""})},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(_.a)({},a,c))},t}return Object(s.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("form",{onSubmit:this.handleSubmit,className:d.a.form,children:[Object(j.jsxs)("label",{className:d.a.label,children:["Name",Object(j.jsx)("input",{className:d.a.input,type:"text",name:"name",value:this.state.name,onChange:this.handleChange})]}),Object(j.jsxs)("label",{className:d.a.label,children:["Number",Object(j.jsx)("input",{className:d.a.input,type:"number",name:"number",value:this.state.number,onChange:this.handleChange})]}),Object(j.jsx)("button",{type:"submit",children:"Add contact"})]})}}]),n}(a.Component),f=n(17),v=n(23),x=n(40),O=n(7),C=n.n(O),g=function(t){var e=t.name,n=t.id,a=t.number,c=t.onRemove;return Object(j.jsxs)("li",{className:C.a.item,children:[Object(j.jsxs)("p",{className:C.a.list,children:[e,": ",a]}),Object(j.jsx)("section",{className:C.a.section__btn,children:Object(j.jsx)("button",{type:"button",className:C.a.btn,onClick:c,children:"Delete"})})]},n)},N=function(t){var e=t.contacts,n=t.onRemoveContact;return Object(j.jsx)(x.a,{component:"ul",className:d.a.list,children:e.map((function(t){var e=t.id,a=Object(v.a)(t,["id"]);return Object(j.jsx)(b.a,{timeout:250,className:d.a,children:Object(j.jsx)(g,Object(f.a)(Object(f.a)({},a),{},{onRemove:function(){return n(e)}}),e)},e)}))})},A=n(20),y=n.n(A),L=function(t){var e=t.value,n=t.onChangeFilter;return Object(j.jsx)("div",{children:Object(j.jsxs)("label",{children:["Find contacts by name:",Object(j.jsx)("input",{className:y.a.filter,placeholder:"Enter name...",type:"text",value:e,onChange:function(t){return n(t.target.value)}})]})})},S=n(18),w=n(21);n(33),n(34);function I(t){Object(S.error)({text:"".concat(t," is already in contacts!")})}S.defaultModules.set(w,{});var F=n(8),k=n.n(F),E=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],name:"",filter:""},t.addContact=function(e,n){var a={id:Object(m.a)(),name:e,number:n};t.state.contacts.map((function(t){return t.name.toLowerCase()})).includes(a.name.toLowerCase().trim())?I(a.name):t.setState((function(t){return{contacts:[].concat(Object(o.a)(t.contacts),[a])}}))},t.removeContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){t.setState({filter:e})},t.getVisibleContacts=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts");t&&this.setState({contacts:JSON.parse(t)})}},{key:"componentDidUpdate",value:function(t,e){e.contacts!==this.state.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state,e=t.filter,n=t.contacts,a=this.getVisibleContacts();return Object(j.jsxs)("div",{className:k.a.box,children:[Object(j.jsx)(b.a,{in:!0,appear:!0,timeout:500,classNames:k.a,unmountOnExit:!0,children:Object(j.jsx)("h1",{className:k.a.title,children:"Phonebook"})}),Object(j.jsx)(h,{onAddContact:this.addContact}),n.length>0&&Object(j.jsx)(b.a,{in:!0,timeout:250,classNames:k.a.filter,unmountOnExit:!0,children:Object(j.jsx)(L,{value:e,onChangeFilter:this.changeFilter})}),Object(j.jsx)(N,{contacts:a,onRemoveContact:this.removeContact})]})}}]),n}(a.Component);n(35);i.a.render(Object(j.jsx)(E,{}),document.getElementById("root"))},7:function(t,e,n){t.exports={item:"ContactListItem_item__3pW2v",section__btn:"ContactListItem_section__btn__2oEhZ",btn:"ContactListItem_btn__15EU0",list:"ContactListItem_list__QTP9s",enter:"ContactListItem_enter__2VdaD","enter-active":"ContactListItem_enter-active__clWwf",exit:"ContactListItem_exit__NNLKi","exit-active":"ContactListItem_exit-active__3jWIw"}},8:function(t,e,n){t.exports={box:"App_box__-to9T",title:"App_title__MKLLP",appear:"App_appear__25Tts",appearActive:"App_appearActive__recu4","filter-enter":"App_filter-enter__2VxnK","filter-enterActive":"App_filter-enterActive__2lEhy","filter-exit":"App_filter-exit__phCoE","filter-exitActive":"App_filter-exitActive__2-nBq"}}},[[36,1,2]]]);
//# sourceMappingURL=main.8b6b5b95.chunk.js.map