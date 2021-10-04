//В данном коде происходит нарушение Dependency Inversion принципа
//Исправьте следующий код так, чтобы данный принцип соблюдался, сохранив исходную функциональность кода.

type User = {
    id: number;
    name: string;
  };
  
  class LoggerService {
    public log(user: User): void {
      console.log(user.name);
    }
  }
  
  class SubscriptionService {
    public subscribe(user: User): void {
      console.log(`${user.name} is subscribed`);
    }
  }
  
  
  interface ISubscriptionService{
    subscribe(user: User): void;
  }
  
  interface ILoggerService{
    log(user: User): void;
  }
  
  
 
  class AppService {
    private subscription: SubscriptionService;
    private logging: LoggerService;
  
    constructor(
        subscription:ISubscriptionService,
        logging: ILoggerService
    ) {
    
      this.subscription = subscription;
      this.logging = logging;
    }
  
    public create(userInfo: User): void {
      this.logging.log(userInfo);
      this.subscription.subscribe(userInfo);
      }
  }
  
  