const useUpdateUser = (log, setLog) => {
	if (!log.logged && log.user === null) return;

	fetch(`/api/user/${log.user.preCode}/${log.user.phoneNumber}`)
		.then((res) => res.json())
		.then((data) => {
			if (!data.success) throw 'bad';

			setLog({ logged: true, user: data.response });
		})
		.catch((error) => console.log('error fetching'));
};

export default useUpdateUser;
