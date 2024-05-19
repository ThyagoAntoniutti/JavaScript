import React from "react";

export default function Relogio() {
    return (
        <p className="relogio">
            {new Date().toLocaleTimeString()}
        </p>
    )
}