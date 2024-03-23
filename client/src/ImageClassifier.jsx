// ImageClassifier.jsx
import React, { useEffect, useRef, useState } from 'react';
import * as tmImage from '@teachablemachine/image';

const MODEL_URL = "https://teachablemachine.withgoogle.com/models/EWKVBWle6/";

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
        <div>
            <input type="file" accept="image/*" onChange={handleImageUpload} />
            <img ref={imageRef} src={imageURL} alt="" style={{ display: 'none' }} />
            <button onClick={predict} disabled={!model}>Detect</button>
            <div>
            {predictions.map((prediction, i) => {
                const message = `${prediction.className}: ${prediction.probability.toFixed(2)}`;
                return <div key={i}>{message}</div>
            })}
            </div>
        </div>
    );
}

export default ImageClassifier;