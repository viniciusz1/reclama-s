import { ReutilizaveisModule } from './reutilizaveis.module';

describe('ReutilizaveisModule', () => {
  let reutilizaveisModule: ReutilizaveisModule;

  beforeEach(() => {
    reutilizaveisModule = new ReutilizaveisModule();
  });

  it('should create an instance', () => {
    expect(reutilizaveisModule).toBeTruthy();
  });
});
