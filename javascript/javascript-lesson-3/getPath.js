'use script'

function getPath(item) {

  if(!item) {
    throw new Error('Элемент не найден')
  }

  let path = ''

  function writePath(elem) {
    let itemName = elem.nodeName.toLowerCase(),
        itemParent = elem.parentNode,
        itemNth = ''

    // Проверяем есть ли у элемента родитель
    if(itemParent && itemParent.children.length > 1) {
      itemNth = Array.prototype.indexOf.call(itemParent.children, elem)
      itemNth = `:nth-child(${itemNth+1})`
    }

    let selector =  `${itemName}${itemNth}>`
    path = `${selector}${path}`

    if(itemParent) {
      writePath(itemParent)
    }

  }

  writePath(item)
  
  path = path.substring(0, path.length - 1)
  
  return path
  
}
