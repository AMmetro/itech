//В данном коде происходит нарушение Open-closed принципа
//Исправьте следующий код так, чтобы данный принцип соблюдался, сохранив исходную функциональность кода.


type OrderView = {};
type Order = {};

class MailServer {
  public send(order: Order): OrderView {
    return {} as OrderView;
  }
}

class OrderPresenter {
  public present(order: Order): OrderView {
    return {} as OrderView;
  }
}

interface IEmailPresenter{presenter(order:Order):OrderView}
interface IMobilePresenter{presenter(order:Order):OrderView}


class OrderSystem {
  private mailServer: MailServer;                        
  private orderPresenter: OrderPresenter;              

  constructor( emailPresenter:IEmailPresenter,
    mobilePresenter:IMobilePresenter)
     {
      this.emailPresenter =  orderPresenter
      this.mobilePresenter = mobilePresenter
      this.mailServer= new MailServer()
  }

  public createOrder(): OrderView {
   
    const order = {} as Order;
    
    const emailView = this.emailPresenter.present(order);
    this.mailServer.send(emailView);

    const mobileView = this.mobilePresenter.present(order);
    
    return mobileView as OrderView;
  }
}
