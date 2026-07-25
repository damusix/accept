import * as Header from './header.js';
import * as Media from './media.js';


const options = {
    charset: {
        type: 'accept-charset'
    },
    encoding: {
        type: 'accept-encoding',
        default: 'identity',
        equivalents: new Map([
            ['x-compress', 'compress'],
            ['x-gzip', 'gzip']
        ])
    },
    language: {
        type: 'accept-language',
        prefixMatch: true
    }
};


const charset = (header, preferences) => Header.selection(header, preferences, options.charset);

const charsets = (header, preferences) => Header.selections(header, preferences, options.charset);

const encoding = (header, preferences) => Header.selection(header, preferences, options.encoding);

const encodings = (header, preferences) => Header.selections(header, preferences, options.encoding);

const language = (header, preferences) => Header.selection(header, preferences, options.language);

const languages = (header, preferences) => Header.selections(header, preferences, options.language);

const mediaType = (header, preferences) => Media.selection(header, preferences);

const mediaTypes = (header, preferences) => Media.selections(header, preferences);


const parseAll = function (requestHeaders) {

    return {
        charsets: charsets(requestHeaders['accept-charset']),
        encodings: encodings(requestHeaders['accept-encoding']),
        languages: languages(requestHeaders['accept-language']),
        mediaTypes: mediaTypes(requestHeaders.accept)
    };
};


export { charset, charsets, encoding, encodings, language, languages, mediaType, mediaTypes, parseAll };
