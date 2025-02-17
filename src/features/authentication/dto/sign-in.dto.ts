import { IsString } from 'class-validator';
import { Expose } from 'class-transformer';
import { ApiResponseDto } from 'src/common/dto/api-response.dto';
import { ApiProperty } from '@nestjs/swagger';

export class SignInRequestDto {
	@ApiProperty()
	@IsString()
	@Expose()
	username: string;

	@ApiProperty()
	@IsString()
	@Expose()
	password: string;

	constructor(username: string, password: string) {
		this.username = username;
		this.password = password;
	}
}

export class SignInResponseDto extends ApiResponseDto {
	@ApiProperty()
	@IsString()
	@Expose()
	token: string;

	constructor(token: string) {
		super();
		this.token = token;
	}
}
