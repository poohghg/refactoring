interface IOrders {
  amount: number;
}

interface IInvoice {
  orders: { amount: number }[];
  customer: string;
  dueDate?: Date;
}

const calcOutstanding = (orders: IOrders[]) => {
  return orders.reduce((sum, cur) => sum + cur.amount, 0);
};

const getDueDate = () => {
  const today = new Date();
  return new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
};

const printBanner = () => {
  console.log('***********************');
  console.log('**** Customer Owes ****');
  console.log('***********************');
};

const printDetails = (invoice: IInvoice, outstanding: number) => {
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
  console.log(`due: ${invoice?.dueDate?.toLocaleDateString()}`);
};

export function printOwing(invoice: IInvoice) {
  printBanner();
  invoice.dueDate = getDueDate();

  // 지역 변수는 사용하는곳가 가까이에 선언하는 것이 좋다.
  const outstanding = calcOutstanding(invoice.orders);
  printDetails(invoice, outstanding);
}

const invoice = {
  orders: [{ amount: 2 }, { amount: 5 }],
  customer: '엘리',
};

printOwing(invoice);
