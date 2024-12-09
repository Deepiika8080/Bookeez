import React, { useState } from 'react';

const Sidebar = () => {
    // Define the states for each filter category
    const [selectedStreams, setSelectedStreams] = useState<string[]>([]);
    const [selectedSemesters, setSelectedSemesters] = useState<string[]>([]);
    const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
    const [selectedSubjectss, setSelectedSubjectss] = useState<string[]>([]);

    // Dummy data for options (can be dynamic based on your use case)
    const streams = ['Science', 'Commerce', 'Arts'];
    const semesters = ['Semester 1', 'Semester 2', 'Semester 3'];
    const subjects = ['Mathematics', 'Physics', 'Chemistry', 'Economics'];
    const subjectss = ['Mathematics', 'Physics', 'Chemistry', 'Economics'];

    // Toggle selection for each checkbox
    const handleCheckboxChange = (category: string, value: string) => {
        let selectedState;
        let setSelectedState;

        switch (category) {
            case 'stream':
                selectedState = selectedStreams;
                setSelectedState = setSelectedStreams;
                break;
            case 'semester':
                selectedState = selectedSemesters;
                setSelectedState = setSelectedSemesters;
                break;
            case 'subject':
                selectedState = selectedSubjects;
                setSelectedState = setSelectedSubjects;
                break;
            case 'subjectss':
                selectedState = selectedSubjectss;
                setSelectedState = setSelectedSubjectss;
                break;
            default:
                return;
        }

        if (selectedState.includes(value)) {
            // Unselect the checkbox
            setSelectedState(selectedState.filter(item => item !== value));
        } else {
            // Select the checkbox
            setSelectedState([...selectedState, value]);
        }
    };

    return (
        <div className="sidebar w-64 bg-gray-100 p-4">
            <h2 className=" font-semibold font-mono text-2xl">Top Categories</h2>

            {/* Stream Filter */}
            <div className="mt-4">
                <h3 className="font-medium mb-4 font-mono text-xl">Stream or Course</h3>
                {streams.map((stream) => (
                    <div key={stream} className="flex items-center">
                        <input
                            type="checkbox"
                            id={stream}
                            checked={selectedStreams.includes(stream)}
                            onChange={() => handleCheckboxChange('stream', stream)}
                            className="mr-2 w-5 mb-1 h-5"
                        />
                        <label htmlFor={stream} className='font-mono text-xl'>{stream}</label>
                    </div>
                ))}
            </div>

            {/* Semester Filter */}
            <div className="mt-4">
                <h3 className="font-medium">Semester</h3>
                {semesters.map((semester) => (
                    <div key={semester} className="flex items-center">
                        <input
                            type="checkbox"
                            id={semester}
                            checked={selectedSemesters.includes(semester)}
                            onChange={() => handleCheckboxChange('semester', semester)}
                            className="mr-2"
                        />
                        <label htmlFor={semester}>{semester}</label>
                    </div>
                ))}
            </div>

            {/* Subject Filter */}
            <div className="mt-4">
                <h3 className="font-medium">Subject</h3>
                {subjects.map((subject) => (
                    <div key={subject} className="flex items-center">
                        <input
                            type="checkbox"
                            id={subject}
                            checked={selectedSubjects.includes(subject)}
                            onChange={() => handleCheckboxChange('subject', subject)}
                            className="mr-2"
                        />
                        <label htmlFor={subject}>{subject}</label>
                    </div>
                ))}
            </div>
            <div className="mt-4">
                <h3 className="font-medium">Subject</h3>
                {subjectss.map((subject) => (
                    <div key={subject} className="flex items-center">
                        <input
                            type="checkbox"
                            id={subject}
                            checked={selectedSubjects.includes(subject)}
                            onChange={() => handleCheckboxChange('subject', subject)}
                            className="mr-2"
                        />
                        <label htmlFor={subject}>{subject}</label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
