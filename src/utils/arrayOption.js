/**
 *
 * arr: 去重对应数组对象，
 * argu: 通过那个字段进行去重
 * 数据类型： [{id:1,name:张三},{id：1,name:李四}]
 */
const nodupArrayByArgu = (arr, argu) => {
  let obj = {}

  const Aee = arr.reduce((arg, cur) => {
    obj[cur[argu]] ? '' : (obj[cur[argu]] = true && arg.push(next))
    return cur
  }, [])

  return Aee
}

/**
 *
 * 一维数组 数字去重
 * arr: 去重对应数组对象
 * 数据类型：[1,5,6,12,1,42]
 */
const nodupArrayByNum = (arr) => {
  return [...new Set(arr)]
}

/**
 *
 * 一维数组 去重
 * arr: 去重对应数组对象
 * 数据类型：[2,'2',2,'张三','李四']
 */
const nodupArray = (arr) => {
  const Aee = []
  arr.forEach((v, i, arr) => {
    if (arr.indexOf(v) === i) {
      Aee.push(v)
    }
  })
}

/**
 *
 * arr: 排序对应数组对象
 * prop：根据某个值进行排序
 * to: 排序的顺序从大到小 true 从小到大 false
 * 默认从小到大
 * 数据类型：[{num：13,name:'张三'},{num：12,name:‘李四’}]
 */
const compareArr = (arr, argu, to = false) => {
  function small(argu) {
    return function(a, b) {
      const value1 = a[argu]
      const value2 = b[argu]
      return value1 - value2
    }
  }

  function large(argu) {
    return function(a, b) {
      const value1 = a[argu]
      const value2 = b[argu]
      return value2 - value1
    }
  }

  if (to) {
    return arr.sort(large(argu))
  }

  return arr.sort(small(argu))
}

export default { nodupArrayByArgu, nodupArrayByNum, nodupArray, compareArr }
