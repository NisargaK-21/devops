const { createOrder, getOrderStatus } = require("./order");

describe("Order feature of the application", () => {

    test("Creating an order with valid items should succeed", () => {
        const items = [
            { name: "Medicine", price: 100, quantity: 2 }
        ];

        const result = createOrder(items);

        expect(result.success).toBeTruthy();
        expect(result.order).toBeDefined();
    });

    test("Empty cart should return success false and order null", () => {
        const result = createOrder([]);

        expect(result.success).toBeFalsy();
        expect(result.order).toBeNull();
    });

    test("Order total should be calculated correctly", () => {
        const items = [
            { name: "Medicine 1", price: 100, quantity: 2 },
            { name: "Medicine 2", price: 200, quantity: 3 }
        ];

        const result = createOrder(items);

        // 100 × 2 + 200 × 3 = 800
        expect(result.order.total).toEqual(800);
    });

    test("SAVE10 coupon should apply a 10% discount", () => {
        const items = [
            { name: "Medicine", price: 100, quantity: 2 }
        ];

        const result = createOrder(items, "SAVE10");

        // 100 × 2 = 200
        // 10% discount = 180
        expect(result.order.total).toEqual(180);
    });

    test("When no coupon is provided, coupon should be undefined", () => {
        const items = [
            { name: "Medicine", price: 100, quantity: 2 }
        ];

        const result = createOrder(items);

        expect(result.order.coupon).toBeUndefined();
    });

    test('An order above 1000 should have status "PREMIUM"', () => {
        const order = {
            total: 1500
        };

        const result = getOrderStatus(order);

        expect(result).toEqual("PREMIUM");
    });

});