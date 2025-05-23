export async function getRules(modules) {
  if (modules.includes('js') && !modules.includes('jsdoc')) modules.push('jsdoc')

  modules.push('json')

  return (await Promise.all(modules.flatMap(async e => {
    const r = await import(`./${e}.js`)
    return Object.values(r)
  }))).flat(Infinity)
}
