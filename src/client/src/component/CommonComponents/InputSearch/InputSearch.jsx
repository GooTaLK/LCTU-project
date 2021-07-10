import './InputSearch.scss';

const InputSearch = ({ searchValue, handleChangeSearch }) => {
	return (
		<div className="search">
			<i className="fas fa-search"></i>
			<input
				className="search__input"
				type="text"
				placeholder="Search..."
				value={searchValue}
				onChange={handleChangeSearch}
			/>
		</div>
	);
};

export default InputSearch;
