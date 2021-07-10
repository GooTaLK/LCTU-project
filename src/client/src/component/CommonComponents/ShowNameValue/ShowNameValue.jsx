import './ShowNameValue.scss';

const ShowNameValue = ({
	className,
	value,
	name,
	valueAction = () => null,
}) => {
	return (
		<div className={className}>
			<p className="param-value" onClick={valueAction}>
				{value}
			</p>
			<p className="param-name">{name}</p>
		</div>
	);
};

export default ShowNameValue;
