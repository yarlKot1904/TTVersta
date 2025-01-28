import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function OrderList() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetchOrders();
    }, []);

    async function fetchOrders() {
        const response = await fetch('/api/Orders');
        if (response.ok) {
            const data = await response.json();
            setOrders(data);
        } else {
            console.error('Error while getting orders list');
        }
    }

    return (
        <div className="container">
            

            <h2>Orders list</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>UID</th>
                        <th>Sender`s City</th>
                        <th>Recipient`s City</th>
                        <th>Weight</th>
                        <th>Pickup date</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                        <tr key={order.id}>
                            <td>
                                <Link to={`/orders/${order.id}`}>{order.id}</Link>
                            </td>
                            <td>{order.orderNumber}</td>
                            <td>{order.senderCity}</td>
                            <td>{order.recipientCity}</td>
                            <td>{order.weight}</td>
                            <td>{new Date(order.pickupDate).toLocaleDateString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default OrderList;
