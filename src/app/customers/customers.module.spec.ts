import { CustomersModule } from './customers.module';

describe('CustomersModule', () => {
  let customersModule: CustomersModule;

  beforeEach(() => {
    customersModule = new CustomersModule();
  });

  xit('should create an instance', () => {
    expect(customersModule).toBeTruthy();
  });
});
