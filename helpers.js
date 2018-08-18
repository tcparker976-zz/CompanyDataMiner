
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
    const VALID_OPTIONS = new Set(['1-10', '11-50', '51-200', '201-500', '501-1,000', '1,001-5,000', '5,001-10,000', '10,001+']) 

    if (VALID_OPTIONS.has(size)) {
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
};

const findCompanyType = (companies, type) => {
    const VALID_TYPES = new Set(
        ['N/A',
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
         'Transportation']);
  
    if (VALID_TYPES.has(type)) {
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
};


module.exports = {
    locateCompanies,
    findBeforeYear,
    findAfterYear,
    findCompaniesBetweenSize,
    findCompanyType
};