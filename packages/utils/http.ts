interface OtherOptions {
  data: any
  headers?: {}
  error?: (e: any, body?: any) => void
  success?: (e: any, xhr: any) => void
}

interface BaseOptions {
  action: string
  method?: string
}

function getError(option: BaseOptions, xhr: XMLHttpRequest) {
  const msg = `cannot ${option.method} ${option.action} ${xhr.status}'`;
  const err = new Error(msg);
  // @ts-ignore
  err.status = xhr.status;
  // @ts-ignore
  err.method = option.method;
  // @ts-ignore
  err.url = option.action;
  return err;
}

function getBody(xhr: XMLHttpRequest) {
  const text = xhr.responseText || xhr.response;
  if (!text) {
    return text;
  }
  try {
    return JSON.parse(text);
  } catch (e) {
    return text;
  }
}

const core = (action: string, method: string, options: OtherOptions) => {
  const xhr = new XMLHttpRequest();
  xhr.onerror = (e) => {
    options.error && options.error(e);
  };

  xhr.onload = function onload() {
    // allow success when 2xx status
    // see https://github.com/react-component/upload/issues/34
    if (xhr.status < 200 || xhr.status >= 300) {
      // @ts-ignore
      return options.error && options.error(getError(options, xhr), getBody(xhr));
    }
    // @ts-ignore
    options.success && options.success(getBody(xhr), xhr);
  };

  xhr.open(method, action, true);

  const headers = options.headers || {};

  // when set headers['X-Requested-With'] = null , can close default XHR header
  // see https://github.com/react-component/upload/issues/33
  if (headers['X-Requested-With'] !== null) {
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
  }

  for (const h in headers) {
    if (headers.hasOwnProperty(h) && headers[h] !== null) {
      xhr.setRequestHeader(h, headers[h]);
    }
  }
  xhr.send(options.data);
}

// function core(method: string, url: string, options: Options) {
//   let xhr: XMLHttpRequest = new XMLHttpRequest()
//   xhr.open(method, url)
//   xhr.onload = () => {
//     console.log(xhr)
//     if (xhr.status < 200 || xhr.status >= 300) {
//       return options.error && options.error(xhr)
//     }
//     options.success && options.success(xhr.response)
//   }
//   xhr.onerror = () => {
//     options.error && options.error(xhr)
//   }
//   xhr.send(options.data)
// }
//
export default {
  get(url: string, options: OtherOptions) {
    core('get', url, options)
  },
  post(url: string, options: OtherOptions) {
    core('post', url, options)
  },
  put(url: string, options: OtherOptions) {
    core('put', url, options)
  },
  delete(url: string, options: OtherOptions) {
    core('delete', url, options)
  }
}
