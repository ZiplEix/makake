const { randomBytes } = await import('node:crypto');

export const serializeNonPOJOs = (obj: object) => {
	return structuredClone(obj);
};

export const generateUsername = (name: string) => {
	const id = randomBytes(2).toString('hex');
	return `${name.slice(0, 5)}${id}`;
};

export const getImageURL = (collectionId: string, recordId: string, fileName: string, size = '0x0') => {
	return `https://api.makake.baptiste.zip/api/files/${collectionId}/${recordId}/${fileName}?thumb=${size}`;
};
