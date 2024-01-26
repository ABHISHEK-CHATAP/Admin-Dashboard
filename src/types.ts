

// Transaction management Type

//for ORDER ITEMS
export type orderItemType ={
    name:string;
    photo:string;
    price:number;
    quantity:number;
    _id:string;
}

// for ORDER INFO
export type orderType ={
    name:string;
    address:string;
    city:string;
    country:string;
    state:string;
    pinCode:number;
    status : "Processing" | "Shipped" | "Delivered";
    subtotal:number;
    discount:number;
    shippingCharges:number;
    tax:number;
    total:number;
    orderItems: orderItemType[];
    _id:string;
}