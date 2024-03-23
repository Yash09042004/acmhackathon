// ImageClassifier.jsx
import React, { useEffect, useRef, useState } from 'react';
import * as tmImage from '@teachablemachine/image';
import './styles.css';
const MODEL_URL = "https://teachablemachine.withgoogle.com/models/BbKE2sRnJ/";

function ImageClassifier() {
    const [model, setModel] = useState(null);
    const [predictions, setPredictions] = useState([]);
    const [imageURL, setImageURL] = useState(null);
    const imageRef = useRef();

    const init = async () => {
        const modelURL = MODEL_URL + "model.json";
        const metadataURL = MODEL_URL + "metadata.json";

        const model = await tmImage.load(modelURL, metadataURL);
        setModel(model);
    };

    const predict = async () => {
        const prediction = await model.predict(imageRef.current);
        setPredictions(prediction);
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
                disabled={!model} 
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
                color: 'yellow', 
                opacity: predictions.length > 0 ? 1 : 0, 
                transition: 'opacity 0.5s ease-in-out' // Fade-in animation
            }}> {/* Result text color */}
            {predictions.map((prediction, i) => {
                const message = `${prediction.className}: ${prediction.probability.toFixed(2)}`;
                return <div key={i}>{message}</div>
            })}
            </div>
        </div>
        </div>
    );
}

export default ImageClassifier;