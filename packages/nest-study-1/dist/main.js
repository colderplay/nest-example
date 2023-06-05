"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const path_1 = require("path");
const session = require("express-session");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(session({
        secret: 'dys',
        cookie: { maxAge: 10000 },
    }));
    app.useStaticAssets((0, path_1.join)(__dirname, '..', 'public'), { prefix: '/static' });
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map