import "../scss/main.scss";
import $ from 'jquery'
// import "@babel/polyfill";
import "bootstrap/js/src/modal";
import "bootstrap/js/src/tab";
// import "bootstrap/js/src/dropdown";
// import "bootstrap/js/src/modal"


import "../pug/index.pug";
import "../pug/repeat-customer.pug";
// import "../pug/about.pug";
import "../pug/contact.pug";
import "../pug/productlisting.pug";
import "../pug/product-listing.pug";


import HeaderInteractions from "./components/header";
const headerfns = new HeaderInteractions();
// import "./components/header";
import ProductDetais from './product-listing'
const productDetais = new ProductDetais();

console.log("Hi, this page is common page!"); // eslint-disable-line no-console

