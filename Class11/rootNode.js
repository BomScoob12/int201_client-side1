const  rootNode = window.document
console.log(rootNode)
console.log(rootNode.nodeName)
console.log(rootNode.nodeType)
console.log(rootNode.nodeValue)

//HTML node
console.log(document.documentElement)
console.log(document.documentElement.nodeName)
console.log(document.documentElement.nodeType)
console.log(document.documentElement.nodeValue)
console.log('------------------------')

console.log(document.head) //head node
console.log(document.head.nodeName)
console.log(document.head.nodeType)
console.log(document.head.nodeValue)
console.log(document.head.childElementCount) 
console.log('--------------------------')

console.log(document.body) // body node
console.log(document.body.nodeName)
console.log(document.body.nodeType)
console.log(document.body.nodeValue)
console.log(document.body.childNodes) //query all childnodes (text, div, text, p)


//Child relationship
//1. childNodes (NodeList data type) = query children with all node types
const headElement = document.head
console.log('lenght ',headElement.childNodes.length)
headElement.childNodes.forEach((value) => {
    console.log(value.nodeName)
    console.log(value.nodeType)
    console.log(value.nodeValue)
})


//2. children (HTMLCollection data type) = query children wiht ELEMENT type only
//convert array-like to array before using foreach function
console.log('length:', headElement.children.length)
Array.from(headElement.children).forEach((hc) => {
  console.log(hc.nodeName)
  console.log(hc.nodeType)
  console.log(hc.nodeValue)
})

//3. parent relationship
///get parent including all node type
const headParentNode = headElement.parentNode
// get parent only element node type
const headParentElement = headElement.parentElement   

console.log('Head parent node :', headParentNode)
console.log('Head parent Element :', headParentElement)

//sibling relationship
//get previous sibling including all node types
const headPreviousSibling = headElement.previousSibling
console.log( 'Head previous sibling<node> :', headPreviousSibling)
//get previous sibling only element node type
const headPreviousSiblingElement = headElement.previousElementSibling
console.log('Head previous sibling <element>:',headPreviousSiblingElement)
//get next sibling including all node types
const headNextSibling = headElement.nextSibling
console.log('Head next sibling<node> :',headNextSibling)
//get next sibling only element node type
const headNextSiblingElement = headElement.nextElementSibling
console.log('Head next sibling<element> :',headNextSiblingElement)
