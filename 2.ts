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

class OrderSystem {
  private mailServer: MailServer;
  private orderPresenter: OrderPresenter;

  constructor() {
    this.mailServer = new MailServer();
    this.orderPresenter = new OrderPresenter();
  }

  public createOrder(): OrderView {
    const order = {} as Order;
    const orderView = this.orderPresenter.present(order);
    this.mailServer.send(orderView);
    return orderView as OrderView;
  }
}
