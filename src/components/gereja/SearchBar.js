import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const SearchBar = ({ value, onChange, onSearch }) => {
	const [query, setQuery] = useState("");

	const handleSearch = (event) => {
		event.preventDefault();
		onSearch(query);
	};

	return (
		<form className="form-inline" onSubmit={handleSearch}>
			<div className="input-group">
				<input
					style={{ marginRight: 10, marginTop: 10 }}
					type="text"
					className="form-control"
					placeholder="Search..."
					value={value}
					onChange={(e) => {
						setQuery(e.target.value);
						onChange(e);
					}}
				/>
				{/* <div className="input-group-append">
					<button className="btn btn-primary" type="submit">
						Search
					</button>
				</div> */}
			</div>
		</form>
	);
};

export default SearchBar;
