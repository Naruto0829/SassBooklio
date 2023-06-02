import db from '../../../Database/sql/db.js';

/**
 * Create New Employee
 * @param {object} employee 
 * @return {bool} status
 */
export const createEmployee = async (employee) => {
   
    let empQuery = `INSERT INTO employees(firstName, lastName, userName, 
                password, email, phone, stree, city, state, zipCode, country, 
                joinDate, leaveDate, employeeId, booldGroup, Image, employmentStatusId, 
                departmentId, roleId, shiftId, leavePolicyId, weeklyHolidayId, 
                status, createdAt, updatedAt)
                VALUES($1, $2, $3, $4,$5, $6, $7, $8, $9, 
                        $10, $11, $12,$13, $14, $15, $16,
                        $17, $18, $19, $20, $21, $22, $23, $24, $25, $26)`;
    
    await db.query(empQuery, [employee] );
    
    // return;
}

