import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateOrder() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        orderNumber: '',
        senderCity: '',
        senderAddress: '',
        recipientCity: '',
        recipientAddress: '',
        weight: '',
        pickupDate: ''
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await fetch('/api/Orders', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                navigate('/');
            } else {
                console.error('Error while creating order');
            }
        } catch (error) {
            console.error('Network error:', error);
        }
    }

    return (
        <div>
            <h2>Create order</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Senders`s city: </label>
                    <input
                        type="text"
                        name="senderCity"
                        value={formData.senderCity}
                        onChange={handleChange}
                        required
                        maxLength="50"
                    />
                </div>
                <div>
                    <label>Sender`s address: </label>
                    <input
                        type="text"
                        name="senderAddress"
                        value={formData.senderAddress}
                        onChange={handleChange}
                        required
                        maxLength="50"
                    />
                </div>
                <div>
                    <label>Recipient`s city: </label>
                    <input
                        type="text"
                        name="recipientCity"
                        value={formData.recipientCity}
                        onChange={handleChange}
                        required
                        maxLength="50"
                    />
                </div>
                <div>
                    <label>Recipient`s address: </label>
                    <input
                        type="text"
                        name="recipientAddress"
                        value={formData.recipientAddress}
                        onChange={handleChange}
                        required
                        maxLength="50"
                    />
                </div>
                <div>
                    <label>Weight: </label>
                    <input
                        type="number"
                        name="weight"
                        value={formData.weight}
                        onChange={handleChange}
                        required
                        min="0"
                        step="0.1"
                    />
                </div>
                <div>
                    <label>Pickup date: </label>
                    <input
                        type="date"
                        name="pickupDate"
                        value={formData.pickupDate}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Confirm</button>
            </form>
        </div>
    );
}

export default CreateOrder;
