// ImageClassifier.jsx
import React, { useEffect, useRef, useState } from 'react';
import * as tmImage from '@teachablemachine/image';
import './styles.css';

const MODEL_URL1 = "https://teachablemachine.withgoogle.com/models/9xZkj9EEY/";
const MODEL_URL2 = "https://teachablemachine.withgoogle.com/models/8UZn3Yn59/";

function ImageClassifier() {
    const [model1, setModel1] = useState(null);
    const [model2, setModel2] = useState(null);
    const [predictions1, setPredictions1] = useState([]);
    const [predictions2, setPredictions2] = useState([]);
    const [imageURL, setImageURL] = useState(null);
    const imageRef = useRef();

    const init = async () => {
        const model1 = await tmImage.load(MODEL_URL1 + "model.json", MODEL_URL1 + "metadata.json");
        const model2 = await tmImage.load(MODEL_URL2 + "model.json", MODEL_URL2 + "metadata.json");
        setModel1(model1);
        setModel2(model2);
    };

    const predict = async () => {
        const prediction1 = await model1.predict(imageRef.current);
        const prediction2 = await model2.predict(imageRef.current);
        setPredictions1(prediction1);
        setPredictions2(prediction2);
    };

    const handleImageUpload = (event) => {
        const { files } = event.target;
        if (files.length > 0) {
            const url = URL.createObjectURL(files[0]);
            setImageURL(url);
        }
    };

    useEffect(() => {
        init();
    }, []);

    return (
        <div className="background-animation">
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            color: '#ffffff' // Text color
        }}>
            <input 
                type="file" 
                accept="image/*" 
                onChange={handleImageUpload} 
                style={{
                    padding: '10px',
                    backgroundColor: '#6A0575', // Button color
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    marginTop: '20px',
                    transition: 'transform 0.3s ease-in-out' // Add transition for hover effect
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-10px)'} // Float upwards more on hover
                onMouseOut={(e) => e.currentTarget.style.transform = ''} // Reset on mouse out
            />
            <img ref={imageRef} src={imageURL} alt="" style={{ display: 'none' }} />
            <button 
                onClick={predict} 
                disabled={!model1 || !model2} 
                style={{
                    padding: '10px',
                    backgroundColor: '#6A0575', // Button color
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    marginTop: '20px',
                    transition: 'transform 0.3s ease-in-out' // Add transition for hover effect
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-10px)'} // Float upwards more on hover
                onMouseOut={(e) => e.currentTarget.style.transform = ''} // Reset on mouse out
            >
                Detect
            </button>
            <div style={{ 
                marginTop: '20px', 
                display: 'flex',
                justifyContent: 'space-around',
                width: '100%',
                maxWidth: '800px'
            }}>
                {predictions1.map((prediction, i) => {
                    const message = `${prediction.className}: ${(prediction.probability*100).toFixed(2)}%`;
                    return (
                        <div key={i} style={{
                            backgroundColor: '#6A0575',
                            padding: '20px',
                            borderRadius: '10px',
                            width: '100%',
                            margin: '10px',
                            color: 'yellow'
                        }}>
                            {message}
                        </div>
                    );
                })}
                {predictions2.map((prediction, i) => {
                    const message = `${prediction.className}: ${(prediction.probability*100).toFixed(2)}%`;
                    return (
                        <div key={i} style={{
                            backgroundColor: '#6A0575',
                            padding: '20px',
                            borderRadius: '10px',
                            width: '100%',
                            margin: '10px',
                            color: 'yellow'
                        }}>
                            {message}
                        </div>
                    );
                })}
            </div>
        </div>
    </div>
      
    );
}

export default ImageClassifier;