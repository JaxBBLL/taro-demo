import dictionary from './dictionary';
export function searchDictionary(value, name) {
  if (arguments.length === 1) return dictionary[value].options || []; //  如果参数只有一个，获取对应的arr
  const arr = dictionary[name].options || [];
  let result = '';
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].value == value) {
      result = arr[i].label;
      break;
    }
  }
  return result;
}
export function getLabel(value, name) {
  if (arguments.length === 1) return dictionary[value].options || []; //  如果参数只有一个，获取对应的arr
  const arr = dictionary[name].options || [];
  let result = '';
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].value == value) {
      result = arr[i].label;
      break;
    }
  }
  return result;
}
export function seeLabel(value, arr) {
  if (!arr) return '';
  let result = '';
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].value == value) {
      result = arr[i].label;
      break;
    }
  }
  return result;
}

export const dateFormat = function(date, fmt = 'YYYY-MM-DD HH:mm:ss') {
  if (!date) {
    return '';
  }
  if (typeof date === 'string') {
    date = new Date(date.replace(/-/g, '/'));
  }
  if (typeof date === 'number') {
    date = new Date(date);
  }
  var o = {
    'M+': date.getMonth() + 1,
    'D+': date.getDate(),
    'h+': date.getHours() % 12 === 0 ? 12 : date.getHours() % 12,
    'H+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
    'q+': Math.floor((date.getMonth() + 3) / 3),
    S: date.getMilliseconds()
  };
  var week = {
    '0': '\u65e5',
    '1': '\u4e00',
    '2': '\u4e8c',
    '3': '\u4e09',
    '4': '\u56db',
    '5': '\u4e94',
    '6': '\u516d'
  };
  if (/(Y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + '').substr(4 - RegExp.$1.length)
    );
  }
  if (/(E+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (RegExp.$1.length > 1
        ? RegExp.$1.length > 2
          ? '\u661f\u671f'
          : '\u5468'
        : '') + week[date.getDay() + '']
    );
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length)
      );
    }
  }
  return fmt;
};

export function currencyFmt(value, n, unit) {
  if (typeof value !== 'string' && typeof value !== 'number') return '';
  if (isNaN(Number(value))) return '';
  n = n > 0 && n <= 20 ? n : 2;
  value = parseFloat((value + '').replace(/[^\d\.-]/g, '')).toFixed(n) + '';
  const l = value.split('.')[0];
  const r = value.split('.')[1];
  return unit + l + '.' + r;
}

export function toJSON(val) {
  return val == null
    ? ''
    : typeof val === 'object'
    ? JSON.stringify(val, null, 2)
    : String(val);
}

export function typeOf(obj) {
  return Object.prototype.toString.call(obj).slice(8, -1);
}

// deepCopy
export function deepCopy(data) {
  const t = typeOf(data);
  let o;
  if (t === 'Array') {
    o = [];
  } else if (t === 'Object') {
    o = {};
  } else {
    return data;
  }
  if (t === 'Array') {
    for (let i = 0; i < data.length; i++) {
      o.push(deepCopy(data[i]));
    }
  } else if (t === 'Object') {
    for (let i in data) {
      o[i] = deepCopy(data[i]);
    }
  }
  return o;
}

export function objReduce(data, type) {
  var o = deepCopy(data);
  for (var k in o) {
    if (typeOf(o[k]) === 'String') {
      o[k] = o[k].trim();
      if (o[k] === '' && !type) {
        delete o[k];
      }
    } else if (typeOf(o[k]) === 'Object') {
      objReduce(o[k]);
    }
  }
  return o;
}

export const Base64 = {
  _keyStr: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
  encode(str) {
    // 加密
    var output = '';
    var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
    var i = 0;
    str = this._utf16to8(str);
    while (i < str.length) {
      chr1 = str.charCodeAt(i++);
      chr2 = str.charCodeAt(i++);
      chr3 = str.charCodeAt(i++);
      enc1 = chr1 >> 2;
      enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
      enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
      enc4 = chr3 & 63;
      if (isNaN(chr2)) {
        enc3 = enc4 = 64;
      } else if (isNaN(chr3)) {
        enc4 = 64;
      }
      output =
        output +
        this._keyStr.charAt(enc1) +
        this._keyStr.charAt(enc2) +
        this._keyStr.charAt(enc3) +
        this._keyStr.charAt(enc4);
    }
    return output;
  },
  decode(input) {
    // 解密
    var output = '';
    var chr1, chr2, chr3;
    var enc1, enc2, enc3, enc4;
    var i = 0;
    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, '');
    while (i < input.length) {
      enc1 = this._keyStr.indexOf(input.charAt(i++));
      enc2 = this._keyStr.indexOf(input.charAt(i++));
      enc3 = this._keyStr.indexOf(input.charAt(i++));
      enc4 = this._keyStr.indexOf(input.charAt(i++));
      chr1 = (enc1 << 2) | (enc2 >> 4);
      chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
      chr3 = ((enc3 & 3) << 6) | enc4;
      output = output + String.fromCharCode(chr1);
      if (enc3 != 64) {
        output = output + String.fromCharCode(chr2);
      }
      if (enc4 != 64) {
        output = output + String.fromCharCode(chr3);
      }
    }
    return this._utf8to16(output);
  },
  _utf16to8: function(str) {
    var out, i, len, c;
    out = '';
    len = str.length;
    for (i = 0; i < len; i++) {
      c = str.charCodeAt(i);
      if (c >= 0x0001 && c <= 0x007f) {
        out += str.charAt(i);
      } else if (c > 0x07ff) {
        out += String.fromCharCode(0xe0 | ((c >> 12) & 0x0f));
        out += String.fromCharCode(0x80 | ((c >> 6) & 0x3f));
        out += String.fromCharCode(0x80 | ((c >> 0) & 0x3f));
      } else {
        out += String.fromCharCode(0xc0 | ((c >> 6) & 0x1f));
        out += String.fromCharCode(0x80 | ((c >> 0) & 0x3f));
      }
    }
    return out;
  },
  _utf8to16(str) {
    var out, i, len, c;
    var char2, char3;
    out = '';
    len = str.length;
    i = 0;
    while (i < len) {
      c = str.charCodeAt(i++);
      switch (c >> 4) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
          case7: out += str.charAt(i - 1);
          break;
        case 12:
        case 13:
          char2 = str.charCodeAt(i++);
          out += String.fromCharCode(((c & 0x1f) << 6) | (char2 & 0x3f));
          break;
        case 14:
          char2 = str.charCodeAt(i++);
          char3 = str.charCodeAt(i++);
          out += String.fromCharCode(
            ((c & 0x0f) << 12) | ((char2 & 0x3f) << 6) | ((char3 & 0x3f) << 0)
          );
          break;
      }
    }
    return out;
  }
};
