import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Board } from './board.entity';
import { BoardRepository } from './board.repository';
import { BoardsController } from './boards.controller';
import { BoardsService } from './boards.service';

//nest g module board

// provider 를 사용하기 위해서는 등록해줘야지 사용할 수 있다.
// provider 항목안에 해당 모듈에서 사용하고자 하는 provider를 넣어준다.
@Module({
  imports: [TypeOrmModule.forFeature([BoardRepository])],
  controllers: [BoardsController],
  providers: [BoardsService],
})
export class BoardsModule {}
