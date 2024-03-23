import React from 'react';
// import { Link } from 'react-router-dom';

function Home({ user, handleFileUpload }) {
    return (
        <div>
            {/* Your home page content goes here */}
            {user && (
                <div className="container mt-3">
                    <h3>Upload Files</h3>
                    <input type="file" onChange={handleFileUpload} />
                </div>
            )}
        </div>
    );
}

export default Home;
