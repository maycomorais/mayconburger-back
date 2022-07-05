import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  Matches,
  MinLength,
} from 'class-validator';

export class CreaterUserDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'Maycon',
    description: 'Nome do Usuário a Ser Criado',
  })
  name: string;
  @IsEmail()
  @ApiProperty({
    example: 'maycon@email.com',
    description: 'Email do Usuário a Ser Criado',
  })
  email: string;
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    example: 'ddd',
    description: 'DDD do Usuário a Ser Criado',
  })
  ddd: number;
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    example: '999999999',
    description: 'Telefone do Usuário a Ser Criado',
  })
  tellphone: number;
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    example: '28000000',
    description: 'CEP do Usuário a Ser Criado',
  })
  postalCode: number;
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: 'Rua Arminda Souza',
    description: 'Endereço do Usuário a Ser Criado',
  })
  street: string;
  @IsString()
  @ApiProperty({
    example: 'Casa 1',
    description: 'Complemento do Usuário a Ser Criado',
  })
  complement: string;
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    example: '73',
    description: 'Número do Usuário a Ser Criado',
  })
  number: number;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'Residencial Veneza',
    description: 'Bairro do Usuário a Ser Criado',
  })
  district: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'Campos dos Goytacazes',
    description: 'Cidade do Usuário a Ser Criado',
  })
  city: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'RJ',
    description: 'Estado do Usuário a Ser Criado',
  })
  state: string;
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Senha muito fraca',
  })
  @ApiProperty({
    example: 'Abc123*',
    description:
      'Senha do Usuário a Ser Criado (Ao menos uma letra minúscula, uma maiúscula, um número e um caracter especial',
  })
  password: string;
}
