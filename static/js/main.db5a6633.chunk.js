(this["webpackJsonpreact-shop"]=this["webpackJsonpreact-shop"]||[]).push([[0],{12:function(e,t,a){e.exports=a(22)},17:function(e,t,a){},18:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(3),c=a.n(o),r=(a(17),a(9)),s=a(5),i=a(6),d=a(8),m=a(7),u=(a(18),{1:{name:"Eggs",id:1,price:1,description:"my fancy product description",category:"category1",stock:3},2:{name:"Milk",id:2,price:2,description:"my fancy product description",category:"category1",stock:3},3:{name:"Flour",id:3,price:3,description:"my fancy product description",category:"category1",stock:3},4:{name:"Orange Juice",id:4,price:4,description:"my fancy product description",category:"category2",stock:3},5:{name:"Bacon",id:5,price:5,description:"my fancy product description",category:"category2",stock:3},6:{name:"Cookies",id:6,price:6,description:"my fancy product description",category:"category3",stock:3}});var h=function(e){var t=e.selected;return t?l.a.createElement("div",{className:"product-detail"},l.a.createElement("div",{className:"component-header"},l.a.createElement("h6",null,"Product detail"),l.a.createElement("div",{className:"item-options"},l.a.createElement("button",{type:"button",className:"edit-button small-button",onClick:function(){return e.showModal("edit",e.selected.id)}},"Edit"),l.a.createElement("button",{type:"button",className:"delete-button small-button",onClick:function(){return e.deleteProduct(e.selected.id)}},"Delete"))),l.a.createElement("div",{className:"detail-content"},l.a.createElement("div",{className:"content-col-1 single-componen"},l.a.createElement("img",null)),l.a.createElement("div",{className:"content-col-2"},l.a.createElement("div",{className:"product-content"},l.a.createElement("h4",null,t.name),l.a.createElement("h6",null,"Price: ",t.price),l.a.createElement("h6",null,"Id: ",t.id),l.a.createElement("h6",{className:"product-price"},"On stock: ",t.stock)))),l.a.createElement("div",{className:"detail-footer"},l.a.createElement("button",{type:"button",className:"add-button",onClick:function(){return e.addKartProduct(e.selected.id)},disabled:!(e.selected.stock>0)},"Add to shopping list"))):l.a.createElement("div",{className:"product-detail"},l.a.createElement("div",{className:"component-header"},l.a.createElement("h6",null,"Product detail")),l.a.createElement("div",{className:"detail-content"},l.a.createElement("div",{className:"content-col-1 single-componen"},l.a.createElement("img",null)),l.a.createElement("div",{className:"content-col-2"},l.a.createElement("div",{className:"product-content"},l.a.createElement("h4",null,"No item selected from storage")))),l.a.createElement("div",{className:"detail-footer"}))},p=function(){return l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Product"),l.a.createElement("th",null,"Price"),l.a.createElement("th",null,"Quantity"),l.a.createElement("th",null)))},f=function(e){var t=[];for(var a in console.log("itemsData",e),e.items)t.push(e.items[a]);var n=t.map((function(t,a){return l.a.createElement("tr",{className:"single-component",key:t.id},l.a.createElement("td",null,t.name),l.a.createElement("td",null,t.price),l.a.createElement("td",null,t.stock),l.a.createElement("td",null,l.a.createElement("button",{type:"button",className:"delete-button",onClick:function(){return e.removeItem(t.id)}},"Remove")))}));return l.a.createElement("tbody",null,n)},g=function(e){return l.a.createElement("div",{className:"shopping-list"},l.a.createElement("div",{className:"component-header"},l.a.createElement("h6",null,"Shopping list")),l.a.createElement("div",{className:"shopping-body"},l.a.createElement("table",null,l.a.createElement(p,null),l.a.createElement(f,{items:e.items,totalItems:e.totalItems,totalPrice:e.totalPrice,removeItem:e.removeProduct}))),l.a.createElement("div",{className:"shopping-footer"},l.a.createElement("h6",null,"Total"),l.a.createElement("h6",null,e.totalPrice)))},E=a(10),v=a(4),y=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleChange=function(e){e.preventDefault();var t=e.target,a=t.name,l=t.value;n.setState(Object(r.a)({},a,l))},n.handleAdd=function(){console.log(n.state),n.props.addNewProduct(n.state)},n.handleUpdate=function(){n.props.updateProduct(n.state)},n.handleCategory=function(e){e.preventDefault();var t=e.target,a=t.name,l=t.value;n.setState(Object(r.a)({},a,l))},n.hideModal=function(e){console.log("idemodal",n.state),n.props.hideModal(n.state)},n.state=e.defaultItem,n.handleChange=n.handleChange.bind(Object(v.a)(n)),n.handleAdd=n.handleAdd.bind(Object(v.a)(n)),n.handleUpdate=n.handleUpdate.bind(Object(v.a)(n)),n.handleCategory=n.handleCategory.bind(Object(v.a)(n)),n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.setState(this.props.defaultItem)}},{key:"render",value:function(){for(var e,t=[],a=0;a<this.props.categories.length;a++)"all"!==this.props.categories[a]&&t.push(l.a.createElement("option",{key:a},this.props.categories[a]));return e="edit"===this.props.action?l.a.createElement("button",{type:"button",className:"edit-button",onClick:this.handleUpdate},"Update"):l.a.createElement("button",{type:"button",className:"add-button",onClick:this.handleAdd},"Save"),l.a.createElement("form",{className:"modal-form"},l.a.createElement("div",null,l.a.createElement("label",null,"Name"),l.a.createElement("input",{type:"text",placeholder:"Product name",name:"name",id:"name",value:this.state.name,onChange:this.handleChange})),l.a.createElement("div",null,l.a.createElement("label",null,"Id"),l.a.createElement("input",{type:"number",placeholder:"Product Id",name:"id",id:"id",value:this.state.id,onChange:this.handleChange})),l.a.createElement("div",null,l.a.createElement("label",null,"Categorie"),l.a.createElement("select",{name:"category",id:"category",onChange:this.handleCategory},t),l.a.createElement("label",null,"Stock"),l.a.createElement("input",{type:"number",placeholder:"0",name:"stock",id:"stock",value:this.state.stock,onChange:this.handleChange})),l.a.createElement("div",null,l.a.createElement("label",null,"Description"),l.a.createElement("input",{type:"text",placeholder:"Product description",name:"description",id:"description",value:this.state.description,onChange:this.handleChange})),l.a.createElement("div",null,l.a.createElement("button",{type:"button",className:"delete-button",onClick:this.hideModal},"Close"),e))}}]),a}(n.Component),N=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleShowModal=function(){n.props.showModal("add")},n.state=e.modalData.defaultItem,n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.setState(this.props.modalData.defaultItem)}},{key:"render",value:function(){return l.a.createElement("div",{className:"flex"},l.a.createElement(E.a,{show:this.props.modalData.show,onHide:this.props.hideModal},l.a.createElement(E.a.Header,{closeButton:!0},l.a.createElement(E.a.Title,null,"edit"===this.props.modalData.action?"Edit product":"Add new product")),l.a.createElement(E.a.Body,null,l.a.createElement(y,{categories:this.props.categories,action:this.props.modalData.action,defaultItem:this.props.modalData.defaultItem,addNewProduct:this.props.addNewProduct,updateProduct:this.props.updateProduct,hideModal:this.props.hideModal}))))}}]),a}(n.Component);var b=function(e){for(var t=[],a=0;a<e.categories.length;a++)t.push(l.a.createElement("option",{key:a},e.categories[a]));return l.a.createElement("form",{className:"filter"},l.a.createElement("label",{htmlFor:"myFilter"},"Categories"),l.a.createElement("select",{id:"myFilter",name:"myFilter",defaultValue:"all",onChange:function(t){t.preventDefault();var a=t.target,n=(a.name,a.value);e.setFilter(n)},disabled:!(e.productsNumber>0)},t))},k=function(e){var t,a=[];for(var n in e.items)e.filter!==e.items[n].category&&"all"!==e.filter||a.push(e.items[n]);return t=a.length<1?l.a.createElement("h2",null,"No products on this category"):a.map((function(t,a){return l.a.createElement("div",{className:"product-preview",key:t.id,onClick:function(){return e.selectItem(t.id)}},l.a.createElement("h1",null,t.name))})),l.a.createElement("div",{className:"product-list"},t)};var S=function(e){return Object.keys(e.items).length>0?l.a.createElement(k,{items:e.items,selectItem:e.selectItem,filter:e.filter}):l.a.createElement("div",{className:"product-list"},l.a.createElement("h2",null,"No products on storage"))};var I=function(e){return l.a.createElement("div",{className:"storage"},l.a.createElement("div",{className:"component-header storage-header"},l.a.createElement("h2",null,"Storage"),l.a.createElement(b,{categories:e.categories,setFilter:e.setFilter,productsNumber:e.productsNumber})),l.a.createElement(S,{items:e.items,filter:e.filter,selectItem:e.selectItem}),l.a.createElement("button",{className:"add-button",onClick:function(){e.showModal("add")}},"Add new product"))},P=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).defaultItem={name:"",price:"",description:"",id:"",stock:0},e.state={items:{},categories:[],filter:"all",selected:"",kart:{},totalPrice:0,totalItems:0,modal:{show:!1,action:"",defaultItem:e.defaultItem}},e.handleSelection=function(t){var a=e.searchItem(t);e.setState({selected:a})},e.addKartProduct=function(t){var a=JSON.parse(JSON.stringify(e.state.items));a[t].stock=+a[t].stock-1;var n=JSON.parse(JSON.stringify(e.state.kart));"undefined"!==typeof n[t]?n[t].stock=+n[t].stock+1:(n[t]=JSON.parse(JSON.stringify(a[t])),n[t].stock=1),e.setState({items:JSON.parse(JSON.stringify(a))}),e.setState({kart:JSON.parse(JSON.stringify(n))}),e.setState({totalPrice:e.state.totalPrice+ +a[t].price}),e.setState({totalItems:e.state.totalItems+1}),e.setState({selected:a[t]})},e.delKartProduct=function(t){console.log("id",t);var a=JSON.parse(JSON.stringify(e.state.items));console.log("items state copy",a),a[t].stock=+a[t].stock+1;var n=JSON.parse(JSON.stringify(e.state.kart));console.log("kart items",n),+n[t].stock>1?(console.log("Hay mas de uno"),n[t].stock=+n[t].stock-1):(console.log("Solo hay uno"),delete n[t]),console.log("kart items",n),console.log(a),e.setState({items:JSON.parse(JSON.stringify(a))}),e.setState({kart:JSON.parse(JSON.stringify(n))}),e.setState({totalPrice:e.state.totalPrice-+a[t].price}),e.setState({totalItems:e.state.totalItems-1}),e.setState({selected:a[t]})},e.showModal=function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if("add"===t&&e.setState({modal:{show:!0,action:t,defaultItem:e.defaultItem}}),"edit"===t){var n=e.searchItem(a);e.setState({modal:{show:!0,action:t,defaultItem:n}})}},e.hideModal=function(){e.setState({modal:{show:!1,action:"",defaultItem:e.defaultItem}})},e.onChange=function(t,a){e.setState({modal:{defaultItem:Object(r.a)({},t,a)}})},e.setFilter=function(t){e.setState({filter:t})},e.addNewProduct=function(t){var a=e.state.items;a[t.id]=t,e.setState({items:a}),e.setState({modal:{show:!1,action:"",defaultItem:e.defaultItem}})},e.updateProduct=function(t){var a=e.state.items;a[t.id]=t,e.setState({items:a}),e.setState({modal:{show:!1,action:"",defaultItem:e.defaultItem}}),e.setState({selected:t})},e.deleteProduct=function(t){var a=e.state.items,n={};for(var l in a)+l!==+t&&(n[l]=a[l]);e.setState({items:n}),e.setState({selected:""})},e}return Object(i.a)(a,[{key:"searchItem",value:function(e){return this.state.items[e]}},{key:"componentDidMount",value:function(){this.setState({items:u}),this.setState({categories:["all","category1","category2","category3"]})}},{key:"render",value:function(){return l.a.createElement("div",{className:"content-container"},l.a.createElement("div",{className:"column-1"},l.a.createElement(I,{categories:this.state.categories,setFilter:this.setFilter,productsNumber:Object.keys(this.state.items).length,items:this.state.items,filter:this.state.filter,selectItem:this.handleSelection,showModal:this.showModal})),l.a.createElement("div",{className:"column-2"},l.a.createElement(h,{selected:this.state.selected,addKartProduct:this.addKartProduct,deleteProduct:this.deleteProduct,showModal:this.showModal}),l.a.createElement(g,{items:this.state.kart,totalItems:this.state.totalItems,removeProduct:this.delKartProduct,totalPrice:this.state.totalPrice})),l.a.createElement(N,{categories:this.state.categories,addNewProduct:this.addNewProduct,updateProduct:this.updateProduct,hideModal:this.hideModal,modalData:this.state.modal,onChange:this.onChange}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[12,1,2]]]);
//# sourceMappingURL=main.db5a6633.chunk.js.map