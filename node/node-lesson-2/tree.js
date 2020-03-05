const fs = require('fs');

async function printDir(
  path = "./",
  lvl = 1,
  resoult = {files: [], dirs: []},
  firstPath
  ) {

  if(firstPath === undefined) {
    firstPath = path;
  }

  lvl--;
  if (lvl < 0) return

  let dir;
  try {dir = await fs.promises.opendir(path);}
  catch(error) {
    console.error(`
    can not open ${error.path},
    path is not a folder or you have not permissions
    `)
    return
  }

  for await (const item of dir) {
      if(item.isFile()) {
        resoult.files.push(item.name)
      }

      else{
        let name = `${path}${item.name}`
        name = name.replace(firstPath, '')
        resoult.dirs.push(name)
        await printDir(`${path}${item.name}/`, lvl, resoult, firstPath)
      }
  }

  if(resoult.files.length === 0 && resoult.dirs.length === 0) {
    return 'Folder is empty'
  }

  return resoult
}

module.exports = printDir;
