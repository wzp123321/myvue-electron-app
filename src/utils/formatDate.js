export function formatDate(date) {
  const dateTime = new Date(date)
  const YY = dateTime.getFullYear()
  const MM =
    dateTime.getMonth() + 1 < 10 ? '0' + (dateTime.getMonth() + 1) : dateTime.getMonth() + 1
  const D =
    dateTime.getDate() < 10 ? '0' + dateTime.getDate() : dateTime.getDate()
  const hh =
    dateTime.getHours() < 10 ? '0' + dateTime.getHours() : dateTime.getHours()
  const mm =
    dateTime.getMinutes() < 10 ? '0' + dateTime.getMinutes() : dateTime.getMinutes()
  const ss = dateTime.getSeconds() < 10 ? '0' + dateTime.getSeconds() : dateTime.getSeconds()
  return `${YY}-${MM}-${D} ${hh}:${mm}:${ss}`
}

export function formatDuring(time) {
  var hours = Math.floor(time / 1000 / 60 / 60)
  var minutes = Math.floor(time / 1000 / 60)
  var seconds = time / 1000 - minutes * 60

  return (
    (hours > 0 ? hours + ':' : '') +
    (minutes > 0 ? minutes + ':' : '00') +
    (seconds > 0 ? ( Math.floor(seconds) < 10 ? '0' +  Math.floor(seconds) : Math.floor(seconds)) : '00')
  )
}

export function updateTime(time) {
  if (time) {
    var date = new Date(time);
    var difftime = Math.abs(new Date() - date)
    // 获取当前时间的年月
    var nowyear = date.getFullYear();
    var nowmonth = date.getMonth + 1;
    var yearAllday = 0;
    var monthAllday = 0;
    // 判断是否为闰年
    if ((nowyear % 4 === 0 && nowyear % 100 !== 0) || nowyear % 400 === 0) {
      yearAllday = 366
    } else {
      yearAllday = 365
    }
    // 每个月的天数
    if (yearAllday === 366 && nowmonth === 2) {
      monthAllday = 29
    } else if (yearAllday === 365 && nowmonth === 2) {
      monthAllday = 28
    }
    if (nowmonth === 4 || nowmonth === 6 || nowmonth === 9 || nowmonth === 11) {
      monthAllday = 30
    } else {
      monthAllday = 31
    }
    if (difftime > yearAllday * 24 * 3600 * 1000) {
      var yearNum = Math.floor(difftime / (yearAllday * 24 * 3600 * 1000))
      return yearNum + "年前"
    } else if (difftime > monthAllday * 24 * 3600 * 1000 && difftime < yearAllday * 24 * 3600 * 1000) {
      var monthNum = Math.floor(difftime / (monthAllday * 24 * 60 * 60 * 1000))
      // 拼接
      return monthNum + "月前";
    } else if (difftime > 7 * 24 * 60 * 60 * 1000 && difftime && difftime < monthAllday * 24 * 60 * 60 * 1000) {
      var weekNum = Math.floor(difftime / (7 * 24 * 3600 * 1000))
      return weekNum + "周前";
    } else if (difftime < 7 * 24 * 3600 * 1000 && difftime > 24 * 3600 * 1000) {
      // //注释("一周之内");
      // var time = newData - diffTime;
      var dayNum = Math.floor(difftime / (24 * 60 * 60 * 1000));
      return dayNum + "天前";
    } else if (difftime < 24 * 3600 * 1000 && difftime > 3600 * 1000) {
      // //注释("一天之内");
      // var time = newData - diffTime;
      var dayNum = Math.floor(difftime / (60 * 60 * 1000));
      return dayNum + "小时前";

    } else if (difftime < 3600 * 1000 && difftime > 0) {
      // //注释("一小时之内");
      // var time = newData - diffTime;
      var dayNum = Math.floor(difftime / (60 * 1000));
      return dayNum + "分钟前";
    }
  }
}
