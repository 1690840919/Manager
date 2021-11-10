export default {
  formateDate(date, rule) {
    let result = rule || 'YYYY-MM-DD hh:mm:ss'
    if (/([y|Y]+)/.test(result)) {
      result = result.replace(RegExp.$1, date.getFullYear())
    }
    const obj = {
      'M+': date.getMonth()+1,
      'D+': date.getDate(),
      'h+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds(),
    }
    for (let key in obj) {
      if (new RegExp(`(${key})`).test(result)) {
        const val = (obj[key] + '').padStart(2, '0')
        result = result.replace(RegExp.$1, val)
      }
    }
    return result
  }
}
