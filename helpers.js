
const locateCompanies = (companies, query) => companies.reduce((acc,company) => {
    if (company.state === query) {
        acc.names.push(company.company_name);
        acc.count++;
    }
    return acc;
}, { names: [], count: 0 });

const findBeforeYear = (companies, year) => companies.reduce((acc, company) => {
    if (company.year_founded <= year) {
        acc.names.push(company.company_name);
        acc.count++;
    }
    return acc;
}, { names: [], count: 0 });

const findAfterYear = (companies, year) => companies.reduce((acc, company) => {
    if (company.year_founded >= year) {
        acc.names.push(company.company_name);
        acc.count++;
    }
    return acc;
}, { names: [], count: 0 });

const findCompaniesBetweenSize = (companies, size) => {
    const VALID_OPTIONS = {
        '1-10': true, 
        '11-50': true, 
        '51-200': true, 
        '201-500': true, 
        '501-1,000': true, 
        '1,001-5,000': true, 
        '5,001-10,000': true, 
        '10,001+': true
    };

    if (VALID_OPTIONS[size]) {
        return companies.reduce((acc, company) => {
            if (company.full_time_employees === size) {
                acc.names.push(company.company_name);
                acc.count++;
            }
            return acc;
        }, { names: [], count: 0 });
    } else {
        return false;
    }
}

const findCompanyType = (companies, type) => {
    const VALID_TYPES = {
        'N/A': true,
        'Aerospace and Defense': true,
        'Business & Legal Services': true,
        'Data/Technology': true,
        'Education': true,
        'Energy': true,
        'Environment & Weather': true,
        'Finance & Investment': true,
        'Food & Agriculture': true,
        'Geospatial/Mapping': true,
        'Governance': true,
        'Healthcare': true,
        'Housing/Real Estate': true,
        'Insurance': true,
        'Lifestyle & Consumer': true,
        'Media': true,
        'Research & Consulting': true,
        'Scientific Research': true,
        'Transportation': true
    };

    if (VALID_TYPES[type]) {
        return companies.reduce((acc, company) => {
            if (company.company_category === type) {
                acc.names.push(company.company_name);
                acc.count++;
            }
            return acc;
        }, { names: [], count: 0 });
    } else {
        return false;
    }
}




module.exports = {
    locateCompanies,
    findBeforeYear,
    findAfterYear,
    findCompaniesBetweenSize,
    findCompanyType
}