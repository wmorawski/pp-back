import { ApiModelProperty } from '@nestjs/swagger';

enum SocialMediaType {
  FACEBOOK,
  TWITTER,
  GOOGLE,
}

export class CreateUserDto {
  @ApiModelProperty()
  readonly firstName: string;

  @ApiModelProperty()
  readonly lastName: string;

  @ApiModelProperty()
  readonly email: string;

  @ApiModelProperty()
  readonly password: string;

  readonly socialmedia: SocialMediaType | null;
}
