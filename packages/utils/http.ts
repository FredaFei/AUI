interface Options {
  [key: string]: string

  success?: (response:Response) => void
  error?: (xhr:XMLHttpRequest) => void
}

function core(method: string, url: string, options: Options) {
  let xhr:XMLHttpRequest = new XMLHttpRequest()
  xhr.open(method, url)
  xhr.onload = () => {
    options.success && options.success(xhr.response)
  }
  xhr.onerror = () => {
    options.error && options.error(xhr)
  }
  xhr.send(options.data)
}

export default {
  get(url:string, options:Options) {
    core('get', url, options)
  },
  post(url:string, options:Options) {
    core('post', url, options)
  },
  put(url:string, options:Options) {
    core('put', url, options)
  },
  delete(url:string, options:Options) {
    core('delete', url, options)
  }
}
