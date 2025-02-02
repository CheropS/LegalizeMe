// import React, { useEffect, useState } from 'react';
// import Navbar from './Navbar';
// import Footer from './Footer';

// const Cases = () => {
//     const [cases, setCases] = useState([]);
//     const [searchTerm, setSearchTerm] = useState('');
//     const [searchQuery, setSearchQuery] = useState(''); // New state to hold search query
//     const [currentPage, setCurrentPage] = useState(1);
//     const casesPerPage = 9;

//     useEffect(() => {
//         fetch("https://backend-1-ygzf.onrender.com/api/cases/")
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error(`HTTP error! status: ${response.status}`);
//                 }
//                 return response.json();
//             })
//             .then(data => setCases(data.results))
//             .catch(error => console.error("Error fetching cases:", error));
//     }, []);

//     // Trigger search only on button click
//     const handleSearch = () => {
//         setSearchQuery(searchTerm);
//     };

//     // Filter cases based on search query
//     const filteredCases = cases.filter(caseItem =>
//         caseItem.case_number.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         caseItem.case_classification.toLowerCase().includes(searchQuery.toLowerCase())
//     );

//     // Pagination logic
//     const indexOfLastCase = currentPage * casesPerPage;
//     const indexOfFirstCase = indexOfLastCase - casesPerPage;
//     const currentCases = filteredCases.slice(indexOfFirstCase, indexOfLastCase);
//     const totalPages = Math.ceil(filteredCases.length / casesPerPage);

//     const goToNextPage = () => {
//         setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
//     };

//     const goToPreviousPage = () => {
//         setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
//     };

//     return (
//         <>
//             <Navbar />

// {/* "How Does it Work" Section */}
// <section className="py-10 bg-white sm:py-16 lg:py-24 animate-fadeIn font-montserrat">
//     <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
//         <div className="max-w-2xl mx-auto text-center">
//             <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">How does it work?</h2>
//             <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">
//                 Discover the process of navigating through legal cases with ease.
//             </p>
//         </div>

//         <div className="relative mt-12 lg:mt-20">
//             <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
//                 <img className="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg" alt="" />
//             </div>

//             <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
//                 <div>
//                     <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
//                         <span className="text-xl font-semibold text-gray-700"> 1 </span>
//                     </div>
//                     <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
//                         Navigate through the cases
//                     </h3>
//                     <p className="mt-4 text-base text-gray-600">
//                         Browse through a comprehensive list of legal cases, filter by case number or classification, and find detailed information on each case.
//                     </p>
//                 </div>

//                 <div>
//                     <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
//                         <span className="text-xl font-semibold text-gray-700"> 2 </span>
//                     </div>
//                     <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
//                         Read the full case details
//                     </h3>
//                     <p className="mt-4 text-base text-gray-600">
//                         Get access to the full text of each case, including the date delivered, case number, and classification.
//                     </p>
//                 </div>

//                 <div>
//                     <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
//                         <span className="text-xl font-semibold text-gray-700"> 3 </span>
//                     </div>
//                     <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
//                         Stay informed
//                     </h3>
//                     <p className="mt-4 text-base text-gray-600">
//                         Stay up-to-date with the latest legal cases, summaries, and insights to help you navigate through the legal system.
//                     </p>
//                 </div>
//             </div>
//         </div>
//     </div>
// </section>

//             <section className="py-10 bg-white sm:py-16 lg:py-24 font-montserrat animate-fadeIn">
//                 <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
//                     <div className="max-w-2xl mx-auto text-center">
//                         <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Latest Cases</h2>
//                         <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
//                             Find insights and summaries on recent cases.
//                         </p>
//                     </div>

//                     {/* Search Input */}
//                     <div className="flex justify-center mt-8 space-x-4">
//                         <input
//                             type="text"
//                             placeholder="Search cases by number or classification"
//                             value={searchTerm}
//                             onChange={(e) => setSearchTerm(e.target.value)}
//                             className="px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
//                         />
//                         <button
//                             onClick={handleSearch}
//                             className="px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600"
//                         >
//                             Search
//                         </button>
//                     </div>

//                     {/* Cases */}
//                     <div className="grid max-w-md grid-cols-1 mx-auto mt-12 lg:max-w-full lg:mt-16 lg:grid-cols-3 gap-x-16 gap-y-12">
//                         {currentCases.map((caseItem) => (
//                             <div key={caseItem.id} className="bg-white p-6 rounded-lg shadow-md">
//                                 <span className="inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full text-rose-500 bg-rose-100">
//                                     {caseItem.case_classification}
//                                 </span>
//                                 <h3 className="mt-4 text-xl font-semibold text-black">
//                                     {caseItem.case_number}
//                                 </h3>
//                                 <p className="mt-4 text-gray-600">{caseItem.full_text.substring(0, 100)}...</p>
//                                 <div className="h-0 mt-6 mb-4 border-t-2 border-gray-200 border-dashed"></div>
//                                 <span className="block text-sm font-bold tracking-widest text-gray-500 uppercase">
//                                     {caseItem.date_delivered}
//                                 </span>
//                                 <button className="mt-4 inline-flex items-center text-blue-500 hover:underline">
//                                     Read More
//                                 </button>
//                             </div>
//                         ))}
//                     </div>

//                     {/* Pagination */}
//                     <div className="bg-white py-10 text-center dark:bg-dark mt-12">
//                         <div>
//                             <ul className="mx-auto flex w-full max-w-[415px] items-center justify-between">
//                                 <li>
//                                     <button
//                                         onClick={goToPreviousPage}
//                                         disabled={currentPage === 1}
//                                         className="inline-flex h-10 items-center justify-center gap-2 rounded-lg px-4 py-2 text-base font-medium text-dark hover:bg-gray-2 dark:text-white dark:hover:bg-white/5"
//                                     >
//                                         <span>
//                                             <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                                 <path d="M11.325 14.825C11.175 14.825 11.025 14.775 10.925 14.65L5.27495 8.90002C5.04995 8.67502 5.04995 8.32503 5.27495 8.10002L10.925 2.35002C11.15 2.12502 11.5 2.12502 11.725 2.35002C11.95 2.57502 11.95 2.92502 11.725 3.15002L6.47495 8.50003L11.75 13.85C11.975 14.075 11.975 14.425 11.75 14.65C11.6 14.75 11.475 14.825 11.325 14.825Z" fill="currentColor" />
//                                             </svg>
//                                         </span>
//                                         <span className="max-sm:hidden"> Previous </span>
//                                     </button>
//                                 </li>
//                                 <p className="text-base font-medium text-dark dark:text-white">
//                                     Page {currentPage} of {totalPages}
//                                 </p>
//                                 <li>
//                                     <button
//                                         onClick={goToNextPage}
//                                         disabled={currentPage === totalPages}
//                                         className="inline-flex h-10 items-center justify-center gap-2 rounded-lg px-4 py-2 text-base font-medium text-dark hover:bg-gray-2 dark:text-white dark:hover:bg-white/5"
//                                     >
//                                         <span className="max-sm:hidden"> Next </span>
//                                         <span>
//                                             <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                                 <path d="M5.67495 14.825C5.52495 14.825 5.39995 14.775 5.27495 14.675C5.04995 14.45 5.04995 14.1 5.27495 13.875L10.525 8.50003L5.27495 3.15002C5.04995 2.92502 5.04995 2.57502 5.27495 2.35002C5.49995 2.12502 5.84995 2.12502 6.07495 2.35002L11.725 8.10002C11.95 8.32503 11.95 8.67502 11.725 8.90002L6.07495 14.65C5.97495 14.75 5.82495 14.825 5.67495 14.825Z" fill="currentCOlor" />
//                                             </svg>
//                                         </span>
//                                     </button>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//             <Footer />
//         </>
//     );
// };

// export default Cases;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Cases = () => {
    const [cases, setCases] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    // const [nextPage, setNextPage] = useState(null);
    // const [previousPage, setPreviousPage] = useState(null);
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

                // allCases = [...allCases, ...response.data.results];
                // url = response.data.next;
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
        // setTimeout(() => {
        //     setLoading(false);
        // }, 2000); // Simulated delay
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
            <section className="py-10 bg-white sm:py-16 lg:py-24 animate-fadeIn font-montserrat">
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
                    <div className="flex flex-col items-center mt-8 space-y-4 lg:space-y-0 lg:space-x-4 lg:flex-row">
                        <input
                            type="text"
                            placeholder="Search by case number"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
                        />
                        <select
                            value={selectedClassification}
                            onChange={(e) => { setSelectedClassification(e.target.value); handleFilterChange(); }}
                            className="px-8 py-2 border rounded-lg"
                        >
                            <option value="">All Classifications</option>
                            {classifications.map((classification, index) => (
                                <option key={index} value={classification}>{classification}</option>
                            ))}
                        </select>
                        <select
                            value={selectedCounty}
                            onChange={(e) => { setSelectedCounty(e.target.value); handleFilterChange(); }}
                            className="px-8 py-2 border rounded-lg"
                        >
                            <option value="">All Counties</option>
                            {counties.map((county, index) => (
                                <option key={index} value={county}>{county}</option>
                            ))}
                        </select>
                        <select
                            value={selectedCourt}
                            onChange={(e) => { setSelectedCourt(e.target.value); handleFilterChange(); }}
                            className="px-8 py-2 border rounded-lg"
                        >
                            <option value="">All Courts</option>
                            {courts.map((court, index) => (
                                <option key={index} value={court}>{court}</option>
                            ))}
                        </select>
                        {/* <button
                            onClick={handleSearch}
                            className="px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600"
                        >
                            Search
                        </button> */}
                        <button onClick={handleSearch} className="bg-blue-500 text-white px-4 py-2 rounded-lg">Search</button>
                        <button onClick={handleClearFilters} className="bg-gray-300 text-black px-4 py-2 rounded-lg">Clear Filters</button>
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
