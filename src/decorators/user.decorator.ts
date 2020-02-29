import { createParamDecorator } from '@nestjs/common';

export const CurrentUser = createParamDecorator(
  (data: any, [root, args, ctx, info]) => {
    console.log('[CurrentUser] root:', root);
    console.log('[CurrentUser] data:', data);
    console.log('[CurrentUser] args:', args);
    console.log('[CurrentUser] ctx:', ctx);
    console.log('[CurrentUser] info:', info);

    return ctx.req.user;
  },
);
