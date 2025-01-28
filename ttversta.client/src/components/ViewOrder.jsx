import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function ViewOrder() {
    const { id } = useParams();
    const [order, setOrder] = useState(null);

    useEffect(() => {
        async function loadOrder() {
            const response = await fetch(`/api/Orders/${id}`);
            if (response.ok) {
                const data = await response.json();
                setOrder(data);
            } else {
                console.error('Cant get order');
            }
        }
        loadOrder();
    }, [id]);

    if (!order) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Order #{order.id}</h2>
            <p><strong>UID:</strong> {order.orderNumber}</p>
            <p><strong>Sender`s city:</strong> {order.senderCity}</p>
            <p><strong>Sender`s address:</strong> {order.senderAddress}</p>
            <p><strong>Recepient`s city:</strong> {order.recipientCity}</p>
            <p><strong>Recepient`s address:</strong> {order.recipientAddress}</p>
            <p><strong>Weight:</strong> {order.weight}</p>
            <p><strong>Pickup date:</strong> {new Date(order.pickupDate).toLocaleDateString()}</p>

            <Link to="/">Back to orders list</Link>
        </div>
    );
}

export default ViewOrder;
