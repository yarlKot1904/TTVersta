import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import OrderList from './components/OrderList.jsx';
import CreateOrder from './components/CreateOrder.jsx';
import ViewOrder from './components/ViewOrder.jsx';

function App() {
    return (
        <BrowserRouter>
            <nav>
                <div className="nav-bar">
                    <Link to="/">Orders</Link>
                    <Link to="/create">Create Order</Link>
                </div>
            </nav>

            <Routes>
                <Route path="/" element={<OrderList />} />
                <Route path="/create" element={<CreateOrder />} />
                <Route path="/orders/:id" element={<ViewOrder />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
