interface State{
    order:Order;
    cancelOrder();
    verifyPayment();
    shipOrder();
}

class Order {
    public cancelledOrderState: State;
    public paymentPendingState: State;
    public orderShippedState: State;
    public orderBeingPreparedState: State;
    public currentState: State;
    constructor() {
        this.cancelledOrderState = new CancelledOrderState(this);
        this.paymentPendingState = new PaymentPendingState(this);
        this.orderShippedState = new OrderShippedState(this);
        this.orderBeingPreparedState = new OrderBeingPreparedState(this);
        this.setState(this.paymentPendingState);
    }
    public setState(state:State){
        this.currentState = state;
    }

    public getState(): State{
       return this.currentState; 
    }
}

class PaymentPendingState implements State {
    public order: Order;

    constructor(order: Order){
        this.order = order;
    }
    public cancelOrder() {
        console.log('cancelling your unpaid order');
        this.order.setState(this.order.cancelledOrderState);
    }
    public verifyPayment() {
        console.log('payment verified! Shipping soon :)');
        this.order.setState(this.order.orderBeingPreparedState);
    }
    public shipOrder() {
        console.log('Cannot ship the order when payment is pending');
    }
    
}

class CancelledOrderState implements State {
    public order: Order;
    
    constructor(order: Order){
        this.order = order;
    }
    public cancelOrder() {
        throw new Error("Method not implemented.");
    }
    public verifyPayment() {
        throw new Error("Method not implemented.");
    }
    public shipOrder() {
        throw new Error("Method not implemented.");
    }
}

class OrderBeingPreparedState implements State {
    public order: Order;
    
    constructor(order: Order){
        this.order = order;
    }
    public cancelOrder() {
        throw new Error("Method not implemented.");
    }
    public verifyPayment() {
        throw new Error("Method not implemented.");
    }
    public shipOrder() {
        throw new Error("Method not implemented.");
    }
    
}

class OrderShippedState implements State {
    public order: Order;
    
    constructor(order: Order){
        this.order = order;
    }
    public cancelOrder() {
        throw new Error("Method not implemented.");
    }
    public verifyPayment() {
        throw new Error("Method not implemented.");
    }
    public shipOrder() {
        throw new Error("Method not implemented.");
    }
    
}