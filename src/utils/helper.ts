/**
 * @name await 包装函数
 * @description 始终返回2个参数，第一个参数表示错误，第二个参数表示结果；
 * @param promise
 * @returns promise
 * @see https://www.cnblogs.com/Wayou/p/elegant_async_await.html
 * @see https://cnodejs.org/topic/5a6857b89288dc8153288136
 */
export const awaitWrapper = <T, K = Error>(promise: Promise<T>): Promise<any> => {
  return promise
    .then<[undefined, T]>((response: T) => [undefined, response])
    .catch<[K, undefined]>((error: K) => [error, undefined]);
}

export function getYMDHMS(timestamp: number): string {
  const time = new Date(timestamp || 0)
  const year = time.getFullYear()
  const month = (time.getMonth() + 1).toString().padStart(2, '0')
  const date = time.getDate().toString().padStart(2, '0')
  const hours = time.getHours().toString().padStart(2, '0')
  const minute = time.getMinutes().toString().padStart(2, '0')
  const second = time.getSeconds().toString().padStart(2, '0')

  return year + '-' + month + '-' + date + ' ' + hours + ':' + minute + ':' + second
}

export function toTree<T>(data: T[]): T[] {
  const result: Array<T> = []
  if (!Array.isArray(data)) {
    return result
  }
  data.forEach((item) => {
    delete item['children']
  })
  const map = {}
  data.forEach((item) => {
    item['name'] = item['field']
    map[item['field']] = item
  })
  data.forEach((item) => {
    const arr = item['name'] ? item['name'].split('.') : []
    let pField = '',
      field = ''
    if (arr.length > 1) {
      field = arr.pop()
      pField = arr.join('.')
    }
    const parent = map[pField]
    if (parent) {
      item['name'] = item['field']
      item['field'] = field ? field : item['field']
        ; (parent.children || (parent.children = [])).push(item)
    } else {
      result.push(item)
    }
  })
  return result
}

// 深拷贝
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function deepCopy(obj: any): any {
  // 深度复制数组
  if (Object.prototype.toString.call(obj) === '[object Array]') {
    const object: Array<any> = []
    for (let i = 0; i < obj.length; i++) {
      object.push(deepCopy(obj[i]))
    }
    return object
  }
  // 深度复制对象
  if (Object.prototype.toString.call(obj) === '[object Object]') {
    const object = {}
    for (const p in obj) {
      object[p] = obj[p]
    }
    return object
  }
}

export function tree2Array(treeArr: any[]): any[] {
  const temp = [...treeArr] // 设置临时数组，用来存放队列
  const out: any[] = [] // 设置输出数组，用来存放要输出的一维数组
  treeArr.forEach((item) => {
    const o: any = deepCopy(item)
    delete o['children']
    out.push(o)
  })
  // 对树对象进行广度优先的遍历
  while (temp.length > 0) {
    const first = temp.shift()
    const children = first.children
    if (children && children.length > 0) {
      const len = first.children.length
      for (let i = 0; i < len; i++) {
        temp.push(children[i])
        children[i].PN = `${first.PN ? first.PN : first.field}.${children[i].field}`
        const obj = { ...deepCopy(children[i]), field: children[i].PN }
        out.push(obj)
      }
    }
  }
  return out
}