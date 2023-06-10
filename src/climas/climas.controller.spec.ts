import { Test, TestingModule } from '@nestjs/testing';
import { ClimasController } from './climas.controller';

describe('ClimasController', () => {
  let controller: ClimasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClimasController],
    }).compile();

    controller = module.get<ClimasController>(ClimasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
