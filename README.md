# Hybrid JS-SDK 

## Web call Native

Native inject global function in browser:
- iOS: window.webkit.messageHandlers.nativeApp.postMessage
- Android: window.nativeApp.sendToNative

## Native call Web

Web define two methods in window:
- window.webApp.callback 
- window.webApp.dispatch

## Examples
### Web -> Native

- Web dispatch `module/action`
```js
bridge
  .dispatch('base/openURL', { url: 'url' })
  .then(({ status }) => console.log(`openURL`, status))
  .catch(err => console.log(openURL, err))
```
- Native callBack `module/action`
```js
setTimeout(() => {
  webApp.callBack('1', { status: 'success' })
  webApp.callBack('2', { status: 'fail' })
})
```

### Native -> Web

- Web subscribe `module/action`
```js
const unsubscribe = bridge.listen('base/themeChange', ({ theme }) =>
  console.log(`theme is ${theme}`)
)
```
- Native publish `module/action`
```js
webApp
  .dispatch('base/themeChange', { theme: 'light' })
  .then(success => console.log(success))
  .catch(err => console.log(err))
```
- unsubscribe `module/action`
```
unsubscribe()
```
> 删除了 [Native -> Web](https://github.com/77xi/Hybrid-JS-SDK#todo) 旧版实现，见 TODO

## Preview

- vscode debug [file](https://github.com/77xi/Hybrid/blob/master/src/index.js)

## TODO

* [ ] bundle for npm
* [ ] optimize Native -> Web
* [x] optimize Web -> Native
```js
// before
bridge
  .dispatch('base/openURL', { url: 'url' }, function(params) {
    console.log(`openURL ${params}`)
  })

// after
bridge
  .dispatch('base/openURL', { url: 'url' })
  .then(success => console.log(`openURL ${success}`))
  .catch(err => console.log(`openURL ${err}`))
```

## Others

- PR thanks