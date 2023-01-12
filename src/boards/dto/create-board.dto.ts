//DTO : 계층간 데이터 교환을 위한 객체 - DB에서 데이터를 얻어 Service나 Controller 등으로 보낼 때
//사용하는 객체를 말한다.

import { IsNotEmpty } from 'class-validator';

//데이터 유효성 체크할때 효율적
export class CreateBoardDto {
  // pipe : data gransformation 과 data validation을 위해서 사용됨
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;
}
