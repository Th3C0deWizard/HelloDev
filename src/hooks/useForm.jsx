import { useEffect, useState } from "react";

const useForm = (formsFields, actions) => {
	const fieldStates = {};
	const actionStates = {};
	const fieldValues = {};
	const dependencies = [];

	for (const fieldName in formsFields) {
		const statePair = useState(formsFields[fieldName]);
		fieldValues[fieldName] = statePair[0];
		fieldStates[fieldName] = statePair;
	}

	for (const actionName in actions) {
		const statePair = useState(false);
		dependencies.push(statePair[0]);
		actionStates[actionName] = statePair;
	}

	useEffect(() => {
		for (const actionName in actions) {
			if (actionStates[actionName][0] === true) {
				actions[actionName](fieldValues, actionStates[actionName][1]);
				break;
			}
		}
	}, dependencies);

	return [fieldStates, actionStates];
};

export default useForm;
