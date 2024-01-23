import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const DepartmentalGoal = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div data-aos="zoom-out"
            data-aos-delay="50"
            data-aos-duration="1000" id="department-goal">
            <div className="container max-w-3xl px-4 mx-auto sm:px-8">
                <div className="py-8">
                    <div className="flex flex-row justify-between w-full mb-1 sm:mb-0">
                        <h2 className="text-2xl leading-tight">
                            Period : January To December, 2023
                        </h2>
                    </div>
                    <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
                        <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
                            <table className="min-w-full leading-normal border-collapse border">
                                <thead>
                                    <tr>
                                        <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border border-gray-200">
                                            Departmental Goal / Objective
                                        </th>
                                        <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border border-gray-200">
                                            Target
                                        </th>
                                        <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border border-gray-200">
                                            Measuring System
                                        </th>
                                        <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border border-gray-200">
                                            How to Achieve the Goal
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="px-5 py-5 text-sm bg-white border border-gray-200">
                                            <div className="flex items-center">
                                                <div className="ml-3">
                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                        Final Inspection Pass
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-5 py-5 text-sm bg-white border border-gray-200">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                99.80%
                                            </p>
                                        </td>
                                        <td className="px-5 py-5 text-sm bg-white border border-gray-200">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                Total no. of inspection Pass x 100/Number of Inspection done (style wise)
                                            </p>
                                        </td>
                                        <td className="px-5 py-5 text-sm bg-white border border-gray-200">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                1. Ensure all Quality procedures are followed at every step of garment manufacturing <br />
                                                2. Conduct Inline and Pre-final inspection before final inspection and insure that any issues found should be rectified immediately
                                            </p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-5 py-5 text-sm bg-white border border-gray-200">
                                            <div className="flex items-center">
                                                <div className="ml-3">
                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                        No claim for quality
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-5 py-5 text-sm bg-white border border-gray-200">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                0.00%
                                            </p>
                                        </td>
                                        <td className="px-5 py-5 text-sm bg-white border border-gray-200">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                Total claim for the month x 100/ Total shipment
                                            </p>
                                        </td>
                                        <td className="px-5 py-5 text-sm bg-white border border-gray-200">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                1. Continuous training for all quality inspector for work procedure and proper method of inspection. <br />
                                                2.  Ensure Proper packing as per buyer requirement <br />
                                                3. Ensure good garments should be packet in carions
                                            </p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-5 py-5 text-sm bg-white border border-gray-200">
                                            <div className="flex items-center">
                                                <div className="ml-3">
                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                        Keep finishing return within
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-5 py-5 text-sm bg-white border border-gray-200">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                0.22%
                                            </p>
                                        </td>
                                        <td className="px-5 py-5 text-sm bg-white border border-gray-200">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                Total qty returned from 2 finishing = 100/ end line production
                                            </p>
                                        </td>
                                        <td className="px-5 py-5 text-sm bg-white border border-gray-200">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                1. Closely Monitoring the activity of end line quality inspector to ensure that no defective pieces will be pass to finishing <br />
                                                2. Educate and Motivate the quality inspector for proper inspection method and defect identification <br />
                                                3. Daily / Weekly / Monthly monitoring of finishing return to check the quality performance
                                            </p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-5 py-5 text-sm bg-white border border-gray-200">
                                            <div className="flex items-center">
                                                <div className="ml-3">
                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                        Maximum allowable OQL
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-5 py-5 text-sm bg-white border border-gray-200">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                2.00%
                                            </p>
                                        </td>
                                        <td className="px-5 py-5 text-sm bg-white border border-gray-200">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                Total no. of defects / Total inspected qty (sample size)
                                            </p>
                                        </td>
                                        <td className="px-5 py-5 text-sm bg-white border border-gray-200">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                1. Continuous training for all quality inspector for work procedure and proper method of inspection and proper defect identification <br />

                                                2. Tighten the AQL level to 1.0 during inline and pre-final inspection in finishing section. <br />

                                                3. Conduct continuous audit for each processes from cutting to finishing to ensure that all standard procedures are strictly followed by both production and quality team for continuous improvement of our system in order to produce good quality product. <br />

                                                4. Daily/weekly/Monthly monitoring of our defect rate for every final inspection done and review with the concerned team the major issues in order to come up with preventive and corrective measures.
                                            </p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DepartmentalGoal;