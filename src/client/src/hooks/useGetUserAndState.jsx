const useGetUserAndState = async (url, state) => {
	const stateTextForBody = state ? 'Online' : 'Offline';
	const stateBody = {
		state: { online: state, stateText: stateTextForBody },
	};

	try {
		const res = await fetch(url, {
			method: 'PATCH',
			body: JSON.stringify(stateBody),
			headers: { 'Content-Type': 'application/json' },
		});
		const data = await res.json();

		return data.response;
	} catch (error) {
		console.log(error);
	}
};

export default useGetUserAndState;
