async function NextRootDirChange (ctx) {
    console.log(`CTX REQ URL => ${ctx.req.url}`)
    await global.handle(ctx.req, ctx.res)
	ctx.respond = false
}

module.exports = NextRootDirChange