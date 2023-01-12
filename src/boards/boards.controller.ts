import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BoardStatus } from './board-status.enum';
import { Board } from './board.entity';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/Create-board.dto';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';

//nest g controller boards --no-spec
// --no-spec : 테스트 코드 없이 생성

@Controller('boards')
export class BoardsController {
  // boardsService : BoardsService;
  // constructor(boardsService : BoardsService){
  //     this.boardsService = boardsService;
  // }

  // 위 코드를 줄여서 밑에 처럼 써줄 수 있다.
  // 파라미터 앞에 접근제한자를 붙이면 ts 에서 자동적으로 필드를 생성해준다.
  // 생성자를 이용해 종속성주입을 해준다.
  constructor(private boardsService: BoardsService) {}

  // @Get()
  // getAllBoard(): Board[] {
  //   return this.boardsService.getAllBoards();
  // }

  // //@Body() body -> 전체가져오기
  // @Post()
  // @UsePipes(ValidationPipe) //handler 레벨의 pipe
  // createBoard(
  //   // 이렇게 하면 하나하나 가져올 수 있다.
  //   @Body() createBoardDto: CreateBoardDto,
  // ): Board {
  //   return this.boardsService.createBoard(createBoardDto);
  // }

  // //localhost:5000?id=asdf -> @Query
  // //@Param을 통해 파라미터 가져올 수 있다.
  // @Get('/:id')
  // getBoardById(@Param('id') id: string): Board {
  //   return this.boardsService.getBoardById(id);
  // }

  // @Delete('/:id')
  // deleteBoard(@Param('id') id: string): void {
  //   this.boardsService.deleteBoard(id);
  // }

  // @Patch('/:id/status')
  // updateBoardStatus(
  //   @Param('id') id: string,
  //   @Body('status', BoardStatusValidationPipe) status: BoardStatus,
  // ) {
  //   return this.boardsService.updateBoardStatus(id, status);
  // }

  @Get('/:id')
  getBoardById(@Param('id') id: number): Promise<Board> {
    return this.boardsService.getBoardById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createBoard(@Body() createBoardDto: CreateBoardDto): Promise<Board> {
    return this.boardsService.createBoard(createBoardDto);
  }

  @Delete('/:id')
  deleteBoard(@Param('id', ParseIntPipe) id): Promise<void> {
    return this.boardsService.deleteBoard(id);
  }

  @Patch('/:id/status')
  updateBoardStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body('status', BoardStatusValidationPipe) status: BoardStatus,
  ) {
    return this.boardsService.updateBoardStatus(id, status);
  }

  @Get()
  getAllBoard(): Promise<Board[]> {
    return this.boardsService.getAllBoards();
  }
}
