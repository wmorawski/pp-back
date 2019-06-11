import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import { HttpException } from '@nestjs/common';
import { getErrorSocialCallbackUrl } from 'src/auth/auth.controller';

@Catch(HttpException)
export class SocialAuthAccessDeniedFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    console.log(exception);
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    response.redirect(getErrorSocialCallbackUrl());
  }
}
