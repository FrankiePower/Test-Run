// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract StudentDataStorage {

    // Struct to store student data
    struct Student {
        string name;
        uint256 age;
        string ipfsHash; // IPFS hash of student data or additional data
        bool exists; // Flag to check if student data exists
    }

    // Mapping from student ID to student data
    mapping(uint256 => Student) private students;

    // Event to emit when student data is created or modified
    event StudentDataUpdated(uint256 indexed studentId, string name, uint256 age, string ipfsHash);

    // Event to emit when student data is deleted
    event StudentDataDeleted(uint256 indexed studentId);

    // Create or update student data
    function setStudentData(uint256 studentId, string memory name, uint256 age, string memory ipfsHash) external {
        students[studentId] = Student({
            name: name,
            age: age,
            ipfsHash: ipfsHash,
            exists: true
        });
        emit StudentDataUpdated(studentId, name, age, ipfsHash);
    }

    // Retrieve student data
    function getStudentData(uint256 studentId) external view returns (string memory name, uint256 age, string memory ipfsHash) {
        require(students[studentId].exists, "Student data does not exist.");
        Student memory student = students[studentId];
        return (student.name, student.age, student.ipfsHash);
    }

    // Delete student data
    function deleteStudentData(uint256 studentId) external {
        require(students[studentId].exists, "Student data does not exist.");
        delete students[studentId];
        emit StudentDataDeleted(studentId);
    }
}
