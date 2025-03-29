import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Search, Filter, X } from 'lucide-react';

const Cases = () => {
    const [cases, setCases] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [classifications, setClassifications] = useState([]);
    const [counties, setCounties] = useState([]);
    const [courts, setCourts] = useState([]);
    const [selectedClassification, setSelectedClassification] = useState('');
    const [selectedCounty, setSelectedCounty] = useState('');
    const [selectedCourt, setSelectedCourt] = useState('');
    const casesPerPage = 9;

    const BASE_URL = "https://legalizeme.azurewebsites.net/api/cases";

    const fetchAllCases = async () => {
        try {
            let url = BASE_URL;
            let allCases = [];
            while (url) {
                const response = await axios.get(url, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (Array.isArray(response.data)) {
                    allCases.push(...response.data);
                    break;
                } else if (response.data.results && Array.isArray(response.data.results)) {
                    allCases.push(...response.data.results);
                    url = response.data.next;
                } else {
                    throw new Error('Invalid response data');
                }

            }
            setCases(allCases);
            extractDropdownData(allCases);
        } catch (err) {
            setError('Error fetching cases. Please try again later');
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    const extractDropdownData = (allCases) => {
        const uniqueClassifications = [...new Set(allCases.map((item) => item.case_classification))];
        const uniqueCounties = [...new Set(allCases.map((item) => item.county))];
        const uniqueCourts = [...new Set(allCases.map((item) => item.court))];
        setClassifications(uniqueClassifications);
        setCounties(uniqueCounties);
        setCourts(uniqueCourts);
    };

    useEffect(() => {
        setLoading(true);
    }, []);

    const filteredCases = cases.filter((caseItem) =>
        (!searchQuery || (caseItem.case_number && caseItem.case_number.toLowerCase().includes(searchQuery.toLowerCase()))) &&
        (!selectedClassification || caseItem.case_classification === selectedClassification) &&
        (!selectedCounty || caseItem.county === selectedCounty) &&
        (!selectedCourt || caseItem.court === selectedCourt)
    );

    const indexOfLastCase = currentPage * casesPerPage;
    const indexOfFirstCase = indexOfLastCase - casesPerPage;
    const currentCases = filteredCases.slice(indexOfFirstCase, indexOfLastCase);
    const totalPages = Math.ceil(filteredCases.length / casesPerPage);

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage((prev) => prev + 1);
        }
    };

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage((prev) => prev - 1);
        }
    };

    // Watch for changes in searchTerm to reset searchQuery if empty
    useEffect(() => {
        if (searchTerm === '') {
            setSearchQuery('');
            setCurrentPage(1);
        }
    }, [searchTerm]);

    const handleSearch = () => {
        setSearchQuery(searchTerm);
    };

    const handleFilterChange = () => {
        setCurrentPage(1);
    };

    useEffect(() => {
        fetchAllCases();
    }, []);

    const handleClearFilters = () => {
        setSelectedClassification('');
        setSelectedCounty('');
        setSelectedCourt('');
        setSearchTerm('');
        setSearchQuery('');
    };

    return (
        <>
            <section className="py-10 bg-white sm:py-16 lg:py-24 animate-fadeIn font-montserrat overflow-hidden">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">How does it work?</h2>
                        <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">
                            Discover the process of navigating through legal cases with ease.
                        </p>
                    </div>

                    <div className="relative mt-12 lg:mt-20">
                        <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
                            <img className="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg" alt="" />
                        </div>

                        <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
                            <div>
                                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                                    <span className="text-xl font-semibold text-gray-700"> 1 </span>
                                </div>
                                <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                                    Navigate through the cases
                                </h3>
                                <p className="mt-4 text-base text-gray-600">
                                    Browse through a comprehensive list of legal cases, filter by case number or classification, and find detailed information on each case.
                                </p>
                            </div>

                            <div>
                                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                                    <span className="text-xl font-semibold text-gray-700"> 2 </span>
                                </div>
                                <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                                    Read the full case details
                                </h3>
                                <p className="mt-4 text-base text-gray-600">
                                    Get access to the full text of each case, including the date delivered, case number, and classification.
                                </p>
                            </div>

                            <div>
                                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                                    <span className="text-xl font-semibold text-gray-700"> 3 </span>
                                </div>
                                <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                                    Stay informed
                                </h3>
                                <p className="mt-4 text-base text-gray-600">
                                    Stay up-to-date with the latest legal cases, summaries, and insights to help you navigate through the legal system.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-10 bg-white sm:py-16 lg:py-24 font-montserrat">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Latest Cases</h2>
                        <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
                            Find insights and summaries on recent cases.
                        </p>
                    </div>

                    {/* Search and Filter Inputs */}
                    <div className="w-full max-w-4xl mx-auto mt-8 space-y-4 lg:space-y-0">
                        {/* Search Input */}
                        <div className="relative mb-4 flex items-center">
                            <Search className="absolute left-3 w-5 h-5 text-gray-400" /> {/* Search icon */}
                            <input
                                type="text"
                                placeholder="Search by case number"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-500"
                            />
                        </div>

                        {/* Filters and Buttons */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {/* Classification Filter */}
                            <div className="relative flex items-center">
                                <Filter className="absolute left-3 w-5 h-5 text-gray-400" /> {/* Filter icon */}
                                <select
                                    value={selectedClassification}
                                    onChange={(e) => { setSelectedClassification(e.target.value); handleFilterChange(); }}
                                    className="w-full pl-10 pr-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-500"
                                >
                                    <option value="">All Classifications</option>
                                    {classifications.map((classification, index) => (
                                        <option key={index} value={classification}>{classification}</option>
                                    ))}
                                </select>
                            </div>

                            {/* County Filter */}
                            <div className="relative flex items-center">
                                <Filter className="absolute left-3 w-5 h-5 text-gray-400" /> {/* Filter icon */}
                                <select
                                    value={selectedCounty}
                                    onChange={(e) => { setSelectedCounty(e.target.value); handleFilterChange(); }}
                                    className="w-full pl-10 pr-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-500"
                                >
                                    <option value="">All Counties</option>
                                    {counties.map((county, index) => (
                                        <option key={index} value={county}>{county}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Court Filter */}
                            <div className="relative flex items-center">
                                <Filter className="absolute left-3 w-5 h-5 text-gray-400" /> {/* Filter icon */}
                                <select
                                    value={selectedCourt}
                                    onChange={(e) => { setSelectedCourt(e.target.value); handleFilterChange(); }}
                                    className="w-full pl-10 pr-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-500"
                                >
                                    <option value="">All Courts</option>
                                    {courts.map((court, index) => (
                                        <option key={index} value={court}>{court}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Buttons */}
                            <div className="flex space-x-4 sm:col-span-2 lg:col-span-1">
                                <button
                                    onClick={handleSearch}
                                    className="flex items-center justify-center w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                                >
                                    <Search className="w-5 h-5 mr-2" /> {/* Search icon */}
                                    Search
                                </button>
                                <button
                                    onClick={handleClearFilters}
                                    className="flex items-center justify-center w-full bg-gray-300 text-black px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors"
                                >
                                    <X className="w-5 h-5 mr-2" /> {/* Clear icon */}
                                    Clear
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="grid max-w-md grid-cols-1 mx-auto mt-12 lg:max-w-full lg:mt-16 lg:grid-cols-3 gap-x-16 gap-y-12">
                        {loading && (
                            <div className="flex flex-col items-center justify-center col-span-full">
                                <div className="loader"></div>
                                <p className="mt-4 text-gray-700 text-lg">Loading...</p>
                            </div>
                        )}
                        {error && <p className="text-red-500 text-center">{error}</p>}
                        {!loading && !error && currentCases.map((caseItem) => (
                            <div key={caseItem.id} className="bg-white p-6 rounded-lg shadow-md">
                                <span className="inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full text-rose-500 bg-rose-100">
                                    {caseItem.case_classification}
                                </span>
                                <h3 className="mt-4 text-xl font-semibold text-black">
                                    <Link to={`/cases/${caseItem.id}`} className="hover:underline">
                                        {caseItem.case_number}
                                    </Link>
                                </h3>
                                <p className="mt-4 text-gray-600">
                                    {caseItem.citation.substring(0, 100)}...
                                    <Link to={`/cases/${caseItem.id}`} className="text-blue-500 hover:underline">
                                        Continue Reading
                                    </Link>
                                </p>
                                <span className="block mt-2 text-sm font-medium text-gray-700">
                                    Court: {caseItem.court}
                                </span>
                                <span className="block text-sm font-medium text-gray-700">
                                    County: {caseItem.county}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="flex justify-center mt-6">
                        <button
                            onClick={handlePrevious}
                            disabled={currentPage === 1}
                            className="px-4 py-2 bg-blue-500 text-white rounded-lg mx-2 disabled:opacity-50"
                        >
                            Previous
                        </button>
                        <span className="px-4 py-2 text-gray-700">Page {currentPage} of {totalPages}</span>
                        <button
                            onClick={handleNext}
                            disabled={currentPage === totalPages}
                            className="px-4 py-2 bg-blue-500 text-white rounded-lg mx-2 disabled:opacity-50"
                        >
                            Next
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Cases;
