const { locateCompanies, findBeforeYear, findAfterYear, findCompaniesBetweenSize, findCompanyType } = require("./helpers.js");

const handleCompanyData = (companies, command, query) => {
    let result;
    switch (command) {
        case 'locate':
            result = locateCompanies(companies, query);
            console.log(`\nCompany Names:\n${result.names.join(', ')}\n\nNumber of Companies: ${result.count}`);
            break;
        case 'find_before':
            result = findBeforeYear(companies, query);
            console.log(`\nCompany Names:\n${result.names.join(', ')}\n\nNumber of Companies: ${result.count}`);
            break;
        case 'find_after':
            result = findAfterYear(companies, query);
            console.log(`\nCompany Names:\n${result.names.join(', ')}\n\nNumber of Companies: ${result.count}`);
            break;
        case 'find_companies_between_size':
            result = findCompaniesBetweenSize(companies, query);
            if (!result) {
                console.log(`\nYou entered an invalid range! The following ranges are valid:\n'1-10', '11-50', '51-200', '201-500', '501-1,000', '1,001-5,000', '5,001-10,000', '10,001+'`);
            } else {
                console.log(`\nCompany Names:\n${result.names.join(', ')}\n\nNumber of Companies: ${result.count}`);
            }
            break;
        case 'find_type':
            result = findCompanyType(companies, query);
            if (!result) {
                console.log(`\nYou entered an invalid type! The following types are valid:\n
                'N/A',
                'Aerospace and Defense',
                'Business & Legal Services',
                'Data/Technology',
                'Education',
                'Energy',
                'Environment & Weather',
                'Finance & Investment',
                'Food & Agriculture',
                'Geospatial/Mapping',
                'Governance',
                'Healthcare',
                'Housing/Real Estate',
                'Insurance',
                'Lifestyle & Consumer',
                'Media',
                'Research & Consulting',
                'Scientific Research',
                'Transportation'`);
            } else {
                console.log(`\nCompany Names:\n${result.names.join(', ')}\n\nNumber of Companies: ${result.count}`);
            }
            break;
        default:
            console.log(`"${command}" is not a valid command`);
    }

}


module.exports = handleCompanyData;