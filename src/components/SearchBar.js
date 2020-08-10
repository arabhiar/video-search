import React, { useState } from "react";

export default function SearchBar(props) {
    const [term, setTerm] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        props.onFormSubmit(term);
    };

    const onInputChange = (event) => {
        setTerm(event.target.value);
    };
    return (
        <div className="search-bar ui segment">
            <form onSubmit={onFormSubmit} className="ui form">
                <div className="field">
                    <label>Search for a Video</label>
                    <input value={term} onChange={onInputChange} type="text" />
                </div>
            </form>
        </div>
    );
}
