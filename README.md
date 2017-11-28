<h1 align="center">@doctormole/koa-history-api-fallback</h1>
<p align="center">Zero configuration Koa 2 history api fallback for SPA</p>

```javascript
const Koa = require('koa');
const serve = require('koa-static');
const history = require('@doctormole/koa-history-api-fallback');

const app = new Koa();
app.use(history);
app.use(serve('static'));

app.listen(3000);
```
