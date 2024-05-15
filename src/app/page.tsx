"use client";
import React, { useState, useEffect } from 'react'

const Home: React.FC = () => {
    const [message, setMessage] = useState<string>("Loading...")

    useEffect(() => {
        fetch("http://localhost:8080/api")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(data => setMessage(data.text))
            .catch(error => {
                console.error("Fetch error:", error);
                setMessage("Failed to fetch message");
            });
    }, [])

    return (
        <div>
            <h1>{message}</h1>
            <h2>Hello from Next.js (TypeScript)!</h2>
        </div>
    )
}

export default Home
