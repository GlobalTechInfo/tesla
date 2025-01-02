import base64 from 'base-64';
import base32 from 'base32';

const Base = (type, text) => new Promise((resolve, reject) => {
    if (typeof text !== 'string' || text.trim() === '') {
        reject(new Error('Input must be a non-empty string.'));
        return;
    }

    switch (type) {
        case 'b64enc':
            try {
                const encoded = base64.encode(text);
                resolve({
                    type: 'base64',
                    original: text,
                    encoded
                });
            } catch (error) {
                reject(new Error('Failed to encode in base64.'));
            }
            break;

        case 'b64dec':
            try {
                const decoded = base64.decode(text);
                resolve({
                    type: 'base64',
                    encoded: text,
                    decoded
                });
            } catch (error) {
                reject(new Error('Failed to decode from base64.'));
            }
            break;

        case 'b32enc':
            try {
                const encoded = base32.encode(text);
                resolve({
                    type: 'base32',
                    original: text,
                    encoded
                });
            } catch (error) {
                reject(new Error('Failed to encode in base32.'));
            }
            break;

        case 'b32dec':
            try {
                const decoded = base32.decode(text);
                resolve({
                    type: 'base32',
                    encoded: text,
                    decoded
                });
            } catch (error) {
                reject(new Error('Failed to decode from base32.'));
            }
            break;

        default:
            reject(new Error('Invalid encoding type. Available types: b64enc, b64dec, b32enc, b32dec.'));
    }
});

export default Base;
