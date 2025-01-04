import React from 'react'; 
import Store from './Components/Store'; 
import TestComponent from './Components/TestComponent'; // Новый компонент

const App = () => {
    return (
        <div>
            <h1>Магазин</h1>
            <TestComponent /> {/* Проверка отображения нового компонента */}
            <p>Это простой текст, чтобы проверить работоспособность.</p>
            <Store /> {/* Рендерим компонент Store */}
        </div>
    );
};

export default App; 

