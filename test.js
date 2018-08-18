const expect = require('chai').expect;

const handleCompanyData = require('./data-handler.js');
const { locateCompanies, findBeforeYear, findAfterYear, findCompaniesBetweenSize, findCompanyType } = require("./helpers.js");
const sampleData = require('./sample-data.js');

describe('handleCompanyData', function() {
    it('should tell the user if the JSON data is not an array of companies', function() {
        expect(handleCompanyData({}, 'locate', 'MD')).to.be.equal('The JSON data is not an array of companies');
    });

    it('should tell the user if the command is invalid', function() {
        expect(handleCompanyData(sampleData, 'fake', 'MD')).to.be.equal('"fake" is not a valid command');
    });

    it('should filter out empty field values from the result', function() {
        sampleData[0].state = '';
        expect(handleCompanyData(sampleData, 'locate', 'DC')).to.be.equal(`Company Names:\n\n\nNumber of Companies: 0`);
    });
});

describe('locateCompanies', function() {
    it('should return an object with the number of companies and the names of the companies that match the location', function() {
        expect(locateCompanies(sampleData, 'MA')).to.deep.equal({ names: [ 'Abt Associates' ], count: 1 });
    });
});

describe('findBeforeYear', function() {
    it('should return an object with the number of companies and the names of the companies founded on or before the year', function() {
        expect(findBeforeYear(sampleData, '1999')).to.deep.equal({ names: [ 'Abt Associates', 'Accela', 'Accenture' ], count: 3 });
    });
});

describe('findAfterYear ', function() {
    it('should return an object with the number of companies and the names of the companies founded on or after the year', function() {
        expect(findAfterYear(sampleData, '2010')).to.deep.equal({ names: [ '3 Round Stones, Inc.', '48 Factoring Inc.' ], count: 2 });
    });
});

describe('findCompaniesBetweenSize', function() {
    it('should return an object with the number of companies and the names of the companies that match the size range', function() {
        expect(findCompaniesBetweenSize(sampleData, '51-200')).to.deep.equal({ names: [ '48 Factoring Inc.' ], count: 1 });
    });

    it('should return false if the size range is invalid', function() {
        expect(findCompaniesBetweenSize(sampleData, '34232')).to.be.false;
    });
});

describe('findCompanyType', function() {
    it('should return an object with the number of companies and the names of the companies that match the company type', function() {
        expect(findCompanyType(sampleData, 'Data/Technology')).to.deep.equal({ names: [ '3 Round Stones, Inc.', '5PSolutions' ], count: 2 });
    });

    it('should return false if the company type is invalid', function() {
        expect(findCompanyType(sampleData, 'faker')).to.be.false;
    });
});