async function historyFallback(ctx, next) {
    if (ctx.method !== 'GET') return next(); // Not GET, nothing to serve
    if (!ctx.header || typeof ctx.header.accept !== 'string') return next(); // Response not accepted
    if (ctx.header.accept.indexOf('application/json') === 0) return next(); // Requested JSON
    if (ctx.header.accept.indexOf('text/html') === -1 && ctx.header.accept.indexOf('*/*') === -1) return next(); // Doesn't accept HTML
    if (ctx.path.indexOf('.') !== -1) return next(); // Probably a file

    ctx.url = '/index.html';
    return next();
}

module.exports = historyFallback;
