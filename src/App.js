import React, { useState } from 'react';
import './App.css';

const App = () => {
    const images = [
        'https://avatars.mds.yandex.net/get-yapic/26057/40tV1mzbw5fmXwSsWGByUgaIcR4-1/orig',
        'https://avatars.mds.yandex.net/i?id=1329e6640723a988f03d44965f6a8bf7_l-5231675-images-thumbs&n=13',
        'https://avatars.mds.yandex.net/i?id=0a63d5240a6a5f1e25d1e6fc50963c0b_l-8377431-images-thumbs&n=13',
        'https://avatars.mds.yandex.net/i?id=15d890db5f8948a3d7828872fb4fd132_l-8257511-images-thumbs&n=13',
    ];

    const backgroundImageUrl =
        'https://wallpapers.com/images/hd/museum-background-1dlkmof8lh8rje8i.jpg';

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div
            className='main'
            style={{
                backgroundImage: `url(${backgroundImageUrl})`,
            }}
        >
            <h1>Галерея изображений</h1>

            <div className='image'>
                <img
                    className='imageContent'
                    src={images[currentIndex]}
                    alt={`Image ${currentIndex + 1}`}
                />
            </div>

            <div className='centered-container'>
                <button className='button buttonGreen' onClick={handlePrev}>Предыдущая</button>
                <button className='button buttonBlue' onClick={handleNext}>Следующая</button>
            </div>
        </div>
    );
};

export default App;