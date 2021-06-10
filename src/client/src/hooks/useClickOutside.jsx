import { useEffect, useRef } from 'react';

/* ****************************************** */
// Credits:
// - https://github.com/ryanto/click-outside-to-close-video/blob/master/src/App.js
// - https://www.youtube.com/watch?v=_xR8Js2b6IU
// - Me
const useClickOutside = (handler) => {
	const btnRef = useRef(null);
	const ref = useRef(null);

	useEffect(() => {
		const eventHandler = (e) => {
			if (
				ref.current &&
				!ref.current.contains(e.target) &&
				btnRef.current &&
				!btnRef.current.contains(e.target)
			) {
				if (
					ref.current.classList.contains('open') &&
					btnRef.current.classList.contains('clicked')
				) {
					handler();
				}
			}
		};

		document.addEventListener('click', eventHandler);

		return () => {
			document.removeEventListener('click', eventHandler);
		};
	});

	return { btnRef, ref };
};
/* ****************************************** */

export default useClickOutside;
